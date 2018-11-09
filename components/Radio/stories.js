import React from "react";
import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { Form } from "../../lib/stories-common";

import Radio from "./index";

storiesOf("Radio", module)
  .add("README", () => <ReactMarkdown source={require("./README.md")} />)
  .add("Everything", () => (
    <Form>
      <ul style={{ listStyleType: "none", margin: 0 }}>
        <li>
          <Radio name="foo" value="1" label="Value 1" />
        </li>
        <li>
          <Radio name="foo" value="2" label="Value 2" />
        </li>
        <li>
          <Radio name="foo" value="3" label="Value 3" />
        </li>
        <li>
          <Radio name="foo" value="4" label="Value 4" disabled={true} />
        </li>
      </ul>
    </Form>
  ));
