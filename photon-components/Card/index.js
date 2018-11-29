import React from "react";
import cn from "classnames";

import "./index.css";

export const Card = ({ children, isLarge, shadow, ...props }) => {
  const classOptions = cn("card", {
    "card--shadow": shadow,
    "card--size-large": isLarge,
  });

  return (
    <div className={classOptions} {...props}>
      {children}
    </div>
  );
};

export default Card;
