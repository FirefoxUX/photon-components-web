#!/bin/bash
set -e

# Skip builds without credentials
if [[ -z "$GH_TOKEN" ]]; then
  echo "Skipping deploy - missing credentials";
  exit 0;
fi

if [[ -z "$CIRCLE_PROJECT_USERNAME" || -z "$CIRCLE_PROJECT_REPONAME" ]]; then
  echo "Skipping deploy - missing CIRCLE_PROJECT_USERNAME or CIRCLE_PROJECT_REPONAME";
  exit 0;
fi

BASE_URL="https://$CIRCLE_PROJECT_USERNAME.github.io/$CIRCLE_PROJECT_REPONAME";
BRANCH=$(git rev-parse --abbrev-ref HEAD);
HASH=$(git --no-pager log --format="%H" -1);

rm -rf deploy storybook dist
npm run build

if [[ "$BRANCH" == "master" ]]; then
  DEPLOY_PATH="deploy/";
  DEPLOY_URL="$BASE_URL/";
else
  DEPLOY_PATH="deploy/commits/$HASH/";
  DEPLOY_URL="$BASE_URL/commits/$HASH/";
fi

mkdir -p $DEPLOY_PATH
cp -r storybook/* $DEPLOY_PATH
zip -r $DEPLOY_PATH/dist.zip dist

BRANCH_PATH=branches/$BRANCH;
BRANCH_URL=$BASE_URL/$BRANCH_PATH;
mkdir -p deploy/$BRANCH_PATH;
cat << EOF > deploy/$BRANCH_PATH/index.html;
<!DOCTYPE html>
<html>
  <head>
    <title>Storybook for ${STORYBOOK_PR_PATH}</title>
    <meta http-equiv="refresh" content="0;URL='${DEPLOY_URL}'" />
  </head>
  <body>
    <p><a href="${DEPLOY_URL}">${DEPLOY_URL}</a></p>
  </body>
</html>
EOF
echo "Deployed branch redirect to ${BRANCH_URL}"

# Deploy a client-side redirect page for a per-PR URL
if [[ ! -z $CIRCLE_PULL_REQUEST ]]; then
  STORYBOOK_PR_PATH=$(echo $CIRCLE_PULL_REQUEST | cut -d/ -f6-7);
  STORYBOOK_PR_NUMBER=$(echo $CIRCLE_PULL_REQUEST | cut -d/ -f7);
  STORYBOOK_PR_URL=$BASE_URL/$STORYBOOK_PR_PATH
  
  mkdir -p deploy/$STORYBOOK_PR_PATH;
  cat << EOF > deploy/$STORYBOOK_PR_PATH/index.html;
<!DOCTYPE html>
<html>
  <head>
    <title>Storybook for ${STORYBOOK_PR_PATH}</title>
    <meta http-equiv="refresh" content="0;URL='${DEPLOY_URL}'" />
  </head>
  <body>
    <p><a href="${DEPLOY_URL}">${DEPLOY_URL}</a></p>
  </body>
</html>
EOF

  echo "Deployed PR redirect to ${STORYBOOK_PR_URL}"

  curl \
    -H'Content-Type: application/json' \
    -H"Authorization: token $GH_TOKEN" \
    --data "{\"body\":\"# GitHub Pages Deployment\\nStorybook:\\n$DEPLOY_URL\\nBuild:\\n${DEPLOY_URL}dist.zip\"}" \
    https://api.github.com/repos/${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}/issues/${STORYBOOK_PR_NUMBER}/comments
fi

./node_modules/.bin/gh-pages-clean
./node_modules/.bin/gh-pages \
  --dist deploy \
  --add \
  --message 'Storybook deployment [skip ci]' \
  --user 'GH Deploy <lorchard@mozilla.com>' \
  --repo https://$GH_TOKEN@github.com/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git

echo "Deployed Storybook to $DEPLOY_URL"
