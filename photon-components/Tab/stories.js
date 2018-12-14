import React from "react";
import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import { TabSet, Tab } from "./index";

storiesOf("Tab", module)
  .add("README", () => <ReactMarkdown source={require("./README.md")} />)
  .add("Everything", () => (
    <Sample>
      <TabSetSample tabs={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]} />
    </Sample>
  ));

// TODO: Should this state tracking component live with the Tab components?
// Leaving this here for now as an example usage.
class TabSetSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIdx: 0,
    };
  }

  handleTabClick = (ev, idx) => {
    this.setState({ selectedIdx: idx });
  };

  render() {
    const { tabs } = this.props;
    return (
      <TabSet>
        {tabs.map((tab, idx) => (
          <Tab
            key={idx}
            onClick={ev => this.handleTabClick(ev, idx)}
            selected={idx === this.state.selectedIdx}
          >
            {tab}
          </Tab>
        ))}
      </TabSet>
    );
  }
}
