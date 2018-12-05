import "photon-colors/photon-colors.css";

import "./index.css";

import "./attributes";

// Import all photon-components/*/index.js
require.context("./photon-components", true, /\/index.js$/);
