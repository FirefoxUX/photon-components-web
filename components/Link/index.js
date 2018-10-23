import React from "react";

import "./index.css";

export const Link = ({ href, children }) => (
  <a href={href}>{children}</a>
);

export default Link;
