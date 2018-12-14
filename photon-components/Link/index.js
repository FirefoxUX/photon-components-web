import React from "react";

import "./index.css";

export const Link = ({ href, children }) => (
  <a className="link" href={href}>
    {children}
  </a>
);

export default Link;
