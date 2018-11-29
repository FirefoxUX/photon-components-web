import React from "react";
import { action } from "@storybook/addon-actions";
import { ExtractSource } from "../.storybook/code-sample";

export const actionDefault = msg => ev => {
  ev.preventDefault();
  action(msg)(ev);
};

export const Sample = ({ children, ...props }) => (
  <ExtractSource {...props}>
    <React.Fragment onClick={actionDefault("clicked")}>
      {children}
    </React.Fragment>
  </ExtractSource>
);

export const Form = ({ notes, children, ...props }) => (
  <ExtractSource {...props}>
    <form onSubmit={actionDefault("submit")}>{children}</form>
  </ExtractSource>
);
