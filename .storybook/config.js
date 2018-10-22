import { configure } from "@storybook/react";

import "../index.js";

const reqInSrcTree = require.context("../components", true, /\/stories.jsx?$/);

function loadStories() {
  reqInSrcTree.keys().forEach(filename => reqInSrcTree(filename));
}

configure(loadStories, module);
