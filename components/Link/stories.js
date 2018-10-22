import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ExtractSource } from "../../.storybook/code-sample";

import Link from "./index";

const actionDefault = msg => ev => {
  ev.preventDefault();
  action(msg)(ev);
};

const Sample = ({ children, ...props }) => (
  <ExtractSource {...props}>
    <div className="sample" onClick={actionDefault("clicked")}>
      {children}
    </div>
  </ExtractSource>
);

storiesOf("Link", module)
  .add("Everything", () => (
    <Sample notes={"This is a very simple Link."}>
      <p><Link href="/">Learn more</Link></p>
      <p><Link href="https://mozilla.org/">Mozilla.org</Link></p>
    </Sample>
  ));
