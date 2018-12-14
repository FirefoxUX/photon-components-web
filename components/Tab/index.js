import React from "react";
import classNames from "classnames";

import "./index.css";

export const TabSet = ({ children, ...props }) => {
  return <ul className="tabset">{children}</ul>;
};

export const Tab = ({
  children,
  className: origClassName = "",
  selected = false,
  ...props
}) => {
  const className = classNames(
    "tabset__tab",
    { "tabset__tab--selected": selected },
    origClassName || ""
  );
  const handleClassName = classNames("tabset__tab__handle", {
    "tabset__tab--selected__handle": selected,
  });
  return (
    <li {...{ className, ...props }}>
      <a className={handleClassName} href="#">
        {children}
      </a>
    </li>
  );
};

export default Tab;
