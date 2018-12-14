import React from "react";
import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import { Tree, TreeItem, TreeCell, TreeItemCell, TreeChildren } from "./index";

storiesOf("Tree", module)
  .add("README", () => <ReactMarkdown source={require("./README.md")} />)
  .add("Simple", () => (
    <Sample notes={"This is a simple Tree."}>
      <Tree>
        <TreeItemCell>One</TreeItemCell>
        <TreeItem>
          <TreeCell>Two</TreeCell>
          <TreeChildren>
            <TreeItemCell>Alpha</TreeItemCell>
            <TreeItemCell>Beta</TreeItemCell>
            <TreeItemCell>Gamma</TreeItemCell>
          </TreeChildren>
        </TreeItem>
        <TreeItemCell>Three</TreeItemCell>
      </Tree>
    </Sample>
  ))
  .add("Collapsed", () => (
    <Sample notes={"This is a collapsed Tree."}>
      <Tree>
        <TreeItemCell>One</TreeItemCell>
        <TreeItem collapsed={true}>
          <TreeCell>Two</TreeCell>
          <TreeChildren>
            <TreeItemCell>Alpha</TreeItemCell>
            <TreeItemCell>Beta</TreeItemCell>
            <TreeItemCell>Gamma</TreeItemCell>
          </TreeChildren>
        </TreeItem>
        <TreeItemCell>Three</TreeItemCell>
      </Tree>
    </Sample>
  ))
  .add("Interactive", () => (
    <Sample notes={"This is a dynamic & interactive Tree."}>
      <Tree>
        {renderTree([
          "One",
          [false, "Two", ["Alpha", [true, "Beta", ["Baz", "Quux"]], "Gamma"]],
          "Three",
          [true, "Four", ["Foo", "Bar"]],
          "Five",
        ])}
      </Tree>
    </Sample>
  ));

// Quick & dirty recursive tree rendering from data.
// Input is an array of items - each item can be a string or array.
// String items become simple cells.
// Array item should consist of [ collapsed, cell, children ]
const renderTree = data =>
  data.map(
    item =>
      Array.isArray(item) ? (
        <InteractiveTreeItem collapsed={item[0]}>
          <TreeCell>{item[1]}</TreeCell>
          <TreeChildren>{renderTree(item[2])}</TreeChildren>
        </InteractiveTreeItem>
      ) : (
        <TreeItemCell>{item}</TreeItemCell>
      )
  );

// Simple clickable tree item here to toggle collapse.
// Not including this in the exported component because consumers should
// implement something more interesting via Redux or other state management
class InteractiveTreeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: props.collapsed };
  }
  onHandleClick = () => {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  };
  render() {
    return (
      <TreeItem
        collapsed={this.state.collapsed}
        onHandleClick={this.onHandleClick}
      >
        {this.props.children}
      </TreeItem>
    );
  }
}
