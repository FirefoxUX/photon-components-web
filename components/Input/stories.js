import React from "react";
import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { actionDefault } from "../../lib/stories-common";
import { ExtractSource } from "../../.storybook/code-sample";

import Input from "./index";

import searchIcon from "photon-icons/icons/desktop/search-16.svg";
import newIcon from "photon-icons/icons/desktop/new-16.svg";
import openIcon from "photon-icons/icons/desktop/open-16.svg";
import closeIcon from "photon-icons/icons/desktop/close-16.svg";
import deleteIcon from "photon-icons/icons/desktop/delete-16.svg";

// Not using common Sample component, because we want onClick default for
// labels to work.
const Form = ({ notes, children, ...props }) => (
  <ExtractSource {...props}>
    <form onSubmit={actionDefault("submit")}>{children}</form>
  </ExtractSource>
);

storiesOf("Input", module)
  .add("README", () => <ReactMarkdown source={require("./README.md")} />)
  .add("Default", () => (
    <Form notes={"This is a very simple Input."}>
      <p>
        <Input placeholder="This is a placeholder" />
      </p>
    </Form>
  ))
  .add("Label", () => (
    <Form notes={"This field has a label."}>
      <p>
        <Input label="Labelled field" placeholder="This is a placeholder" />
      </p>
    </Form>
  ))
  .add("Behaviors", () => (
    <Form notes={"This is a very simple Input."}>
      <p>
        <Input placeholder="Default" />
      </p>
      <p>
        <Input type="password" placeholder="Password" value="hunter23" />
      </p>
      <p>
        <Input warning={true} placeholder="Warning" />
      </p>
      <p>
        <Input error={true} placeholder="Error" />
      </p>
    </Form>
  ))
  .add("Icons", () => (
    <Form notes={"This is a very simple Input."}>
      <p>
        <Input icon={searchIcon} placeholder="This is a placeholder" />
      </p>
      <p>
        <Input icon={newIcon} placeholder="This is a placeholder" />
      </p>
      <p>
        <Input icon={openIcon} placeholder="This is a placeholder" />
      </p>
      <p>
        <Input icon={closeIcon} placeholder="This is a placeholder" />
      </p>
      <p>
        <Input icon={deleteIcon} placeholder="This is a placeholder" />
      </p>
    </Form>
  ))
  .add("Everything", () => (
    <Form notes={"This is a very simple Input."}>
      <p>
        <Input placeholder="Default" />
      </p>
      <p>
        <Input label="This is a label" placeholder="Placeholder" />
      </p>
      <p>
        <Input
          type="password"
          defaultValue="This is a long password"
        />
      </p>
      <p>
        <Input
          label="Extra long value"
          placeholder="Default"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </p>
      <p>
        <Input warning={true} label="Warning field" placeholder="Warning placeholder" />
      </p>
      <p>
        <Input error={true} label="Error field" placeholder="Error placeholder" />
      </p>
      <p>
        <Input
          label="Search"
          icon={searchIcon}
          placeholder="This is a placeholder"
        />
      </p>
      <p>
        <Input icon={newIcon} placeholder="This is a placeholder" />
      </p>
      <p>
        <Input icon={openIcon} placeholder="This is a placeholder" />
      </p>
    </Form>
  ));
