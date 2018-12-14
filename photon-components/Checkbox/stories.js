import React from "react";
import ReactMarkdown from "react-markdown";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Form } from "../../lib/stories-common";

import "./stories.css";

import Checkbox from "./index";

storiesOf("Checkbox", module)
  .add("README", () => <ReactMarkdown source={require("./README.md")} />)
  .add("Everything", () => (
    <Form>
      <ul className="checkbox-example">
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox label="Example label" />
        </li>
        <li>
          <Checkbox onClick={action("Clicked me!")} label="Click me!" />
        </li>
        <li>
          <Checkbox disabled={true} label="Disabled checkbox" />
        </li>
        <li>
          <Checkbox checked={true} disabled={true} label="Disabled checked checkbox" />
        </li>
      </ul>
    </Form>
  ));
