import { configure } from "@storybook/react";

import "photon-colors/photon-colors.css";
import "../base.css";

// TODO: Get code samples and highlighting working in a storybook addon
// import "../demo/demo";

// Require all stories.js files from components tree
const reqInSrcTree = require.context("../components", true, /\/stories.jsx?$/);

function loadStories() {
  reqInSrcTree.keys().forEach(filename => reqInSrcTree(filename));
}

configure(loadStories, module);
