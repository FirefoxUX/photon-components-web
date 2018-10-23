import React from "react";
import { action } from "@storybook/addon-actions";
import { ExtractSource } from "../.storybook/code-sample";

export const actionDefault = msg => ev => {
  ev.preventDefault();
  action(msg)(ev);
};

export const Sample = ({ children, ...props }) => (
  <ExtractSource {...props}>
    <div className="sample" onClick={actionDefault("clicked")}>
      {children}
    </div>
  </ExtractSource>
);