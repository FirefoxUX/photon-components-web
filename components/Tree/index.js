import React from "react";
import classNames from "classnames";

import "./index.css";

export const Tree = ({ children, className }) => (
  <ol className={classNames("tree", className)}>{children}</ol>
);

const hasTreeChildren = children =>
  React.Children.map(children, child => child.type).some(
    type => type === TreeChildren
  );

export const TreeItem = ({
  children,
  className: origClassName,
  collapsed = false,
  onHandleClick = () => {},
}) => {
  const withChildren = hasTreeChildren(children);
  const className = classNames(origClassName, "tree__item", {
    "tree__item--withChildren": withChildren,
    "tree__item--collapsed": collapsed,
  });
  return (
    <li className={className}>
      <TreeItemHandle {...{ onHandleClick, collapsed, withChildren }} />
      {children}
    </li>
  );
};

const TreeItemHandle = ({ onHandleClick, collapsed, withChildren }) => (
  <span
    onClick={onHandleClick}
    className={classNames("tree__item__handle", {
      "tree__item--withChildren__handle": withChildren,
      "tree__item--collapsed__handle": collapsed,
    })}
  >
    &nbsp;
  </span>
);

export const TreeCell = ({ children, className }) => (
  <div className={classNames(className, "tree__item__cell")}>{children}</div>
);

export const TreeChildren = ({ children, className }) => (
  <ol className={classNames(className, "tree__item__children")}>{children}</ol>
);

export const TreeItemCell = ({ children }) => (
  <TreeItem>
    <TreeCell>{children}</TreeCell>
  </TreeItem>
);

export default Tree;
