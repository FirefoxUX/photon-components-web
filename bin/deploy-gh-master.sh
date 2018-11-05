#!/bin/bash
set -ex

# Skip builds without credentials
if [[ -z "$GH_TOKEN" ]]; then
  echo "Skipping deploy for missing credentials";
  exit 0;
fi

rm -rf deploy dist
mkdir deploy
npm run build
cp -r storybook/* deploy/
zip -r deploy/dist.zip dist

./node_modules/.bin/gh-pages \
  --silent \
  --dist deploy \
  --message 'Storybook deploy [skip ci]' \
  --user 'GH Deploy <lorchard@mozilla.com>' \
  --repo https://$GH_TOKEN@github.com/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git
