import React from "react";
import ReactDOMServer from "react-dom/server";
import addons from "@storybook/addons";

export class ExtractSource extends React.Component {
  render() {
    const { children, notes } = this.props;
    const channel = addons.getChannel();

    const childrenHTML = ReactDOMServer.renderToStaticMarkup(children);

    // send the notes to the channel.
    channel.emit("lmorchard/codesample/add_code", childrenHTML);

    // return children elements.
    return children;
  }
}
