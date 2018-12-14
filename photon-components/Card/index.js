import React from "react";
import cn from "classnames";

import "./index.css";

export const Card = ({ children, isLarge, shadow, ...props }) => {
  const classOptions = cn("card", {
    "shadow-10": shadow,
    "card--size-large": isLarge,
  });

  return (
    <div className={classOptions} {...props}>{children}</div>
  );
};

export default Card;
