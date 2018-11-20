import React from "react";

import "./index.css";

export const Overlay = ({ children}) => (
  <div className="overlay">
    { children }
  </div>
);

export default Overlay;
