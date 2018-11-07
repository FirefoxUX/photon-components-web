import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";

import "../index.js";

const reqInSrcTree = require.context("../components", true, /\/stories.jsx?$/);

function loadStories() {
  require("../stories.js");
  reqInSrcTree.keys().forEach(filename => reqInSrcTree(filename));
}

addDecorator(
  withOptions({
    name: "Photon Components"
  })
);

configure(loadStories, module);
