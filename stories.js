import React from "react";
import { storiesOf } from "@storybook/react";
import ReactMarkdown from "react-markdown";

const readmeText = require("./README.md");

storiesOf("Introduction", module)
  .add("README", () => (
    <article>
      <section>
        <ReactMarkdown source={readmeText} />
      </section>
    </article>
  ));
