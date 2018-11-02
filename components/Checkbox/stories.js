import React from "react";
import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { actionDefault } from "../../lib/stories-common";
import { ExtractSource } from "../../.storybook/code-sample";

import Checkbox from "./index";

// Not using common Sample component, because we want onClick default for
// labels to work.
const Form = ({ notes, children, ...props }) => (
  <ExtractSource {...props}>
    <form onSubmit={actionDefault("submit")}>{children}</form>
  </ExtractSource>
);

storiesOf("Checkbox", module)
  .add("README", () => <ReactMarkdown source={require("./README.md")} />)
  .add("Everything", () => (
    <Form>
      <ul style={{ listStyleType: "none", margin: 0, width: "50%" }}>
        <li><Checkbox /></li>
        <li><Checkbox label="Example label" /></li>
        <li><Checkbox onClick={action("Clicked me!")} label="Click me!" /></li>
        <li><Checkbox disabled={true} label="Disabled checkbox" /></li>
      </ul>
    </Form>
  ))
  ;
