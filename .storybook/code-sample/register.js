import React from "react";
import addons from "@storybook/addons";
import hijs from "highlightjs";
import { html as beautify_html } from "js-beautify";

const styles = {
  codesamplePanel: {
    margin: 10,
    fontFamily: "Arial",
    fontSize: 14,
    color: "#444",
    width: "100%",
    overflow: "auto",
  },
  sourceContent: {
    margin: "1em",
    padding: "1em",
    backgroundColor: "#fff",
  },
};

class CodeSample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { text: "" };
    this.onAddCode = this.onAddCode.bind(this);
  }

  onAddCode(text) {
    this.setState({ text });
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on("lmorchard/codesample/add_code", this.onAddCode);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddCode("");
    });
  }

  render() {
    const { text } = this.state;

    // TODO: get this formatting & highlighting working properly
    let textFormatted = text;
    textFormatted = textFormatted.replace(/>/g, ">\n");
    textFormatted = beautify_html(textFormatted);
    textFormatted = hijs.highlight("html", textFormatted).value;

    return (
      <div style={styles.notesPanel}>
        <pre style={styles.sourceContent}>
          <code dangerouslySetInnerHTML={{ __html: textFormatted }} />
        </pre>
      </div>
    );
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener("lmorchard/codesample/add_code", this.onAddCode);
  }
}

// Register the addon with a unique name.
addons.register("lmorchard/codesample", api => {
  // Also need to set a unique name to the panel.
  addons.addPanel("lmorchard/codesample/panel", {
    title: "Code Sample",
    render: () => <CodeSample channel={addons.getChannel()} api={api} />,
  });
});
