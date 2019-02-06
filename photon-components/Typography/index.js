import React from "react";
import classNames from "classnames";

import "./index.css";

export const Typography = ({ bold, kind, size, children, container = "div" }) => {
  let sizes = {"sm": "10", "md": "20", "lg": "30", "xl": "40"};
  let classes = classNames(
    "typography",
    `typography--type-${kind}`,
    {
      "typography--bold": bold,
      [`typography--size-${sizes[size]}`]: size,
    });

  return (
    <container className={classes}>
      {children}
    </container>
  );
};

export default Typography;
