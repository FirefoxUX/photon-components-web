import React from "react";

import "./index.css";

export const Button = ({ type, size, children, ...props }) => {
  let optionClasses = "button ";
  if (type) optionClasses = optionClasses += `button--${type} `;
  if (size) optionClasses = optionClasses += `button--${size} `;

  return (
    <button className={optionClasses} {...props}>{children}</button>
  );
};

export default Button;
