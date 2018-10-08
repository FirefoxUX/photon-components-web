import React from "react";

import "./index.css";

export const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
