import React from "react";
import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import { ExtractSource } from "../../.storybook/code-sample";

import MessageBar from "./index";

import "./index.css";

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

storiesOf("MessageBar", module)
  .add("Generic", () => (
    <Sample notes={"The most basic message bar, dismissible, no call to action."}>
      <MessageBar type={"generic"} onDismiss={() => {}}
              message="This is my message" />
    </Sample>
  ))
  .add("Generic with call to action, not dismissible", () => (
    <Sample notes={"The most basic message bar, not dismissible, with call to action."}>
      <MessageBar type={"generic"}
        message="This is my message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Generic with call to action, dismissible", () => (
    <Sample notes={"The most basic message bar, dismissible, with call to action."}>
      <MessageBar type={"generic"} onDismiss={() => {}}
        message="This is my message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Success", () => (
    <Sample>
      <MessageBar type={"success"} onDismiss={() => {}}
        message="This is my successful message" />
    </Sample>
  ))
  .add("Success with call to action, not dismissible", () => (
    <Sample notes={"The success message bar, not dismissible, with call to action."}>
      <MessageBar type={"success"}
        message="This is my successful message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Success with call to action, dismissible", () => (
    <Sample notes={"The success message bar, dismissible, with call to action."}>
      <MessageBar type={"success"} onDismiss={() => {}}
        message="This is my successful message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Warning", () => (
    <Sample>
      <MessageBar type={"warning"} onDismiss={() => {}}
        message="This is my warning message" />
    </Sample>
  ))
  .add("Warning with call to action, not dismissible", () => (
    <Sample notes={"The warning message bar, not dismissible, with call to action."}>
      <MessageBar type={"warning"}
        message="This is my warning message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Warning with call to action, dismissible", () => (
    <Sample notes={"The warning message bar, dismissible, with call to action."}>
      <MessageBar type={"warning"} onDismiss={() => {}}
        message="This is my warning message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Error", () => (
    <Sample>
      <MessageBar type={"error"} onDismiss={() => {}}
        message="This is my error message" />
    </Sample>
  ))
  .add("Error with call to action, not dismissible", () => (
    <Sample notes={"The error message bar, not dismissible, with call to action."}>
      <MessageBar type={"error"}
        message="This is my error message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Error with call to action, dismissible", () => (
    <Sample notes={"The error message bar, dismissible, with call to action."}>
      <MessageBar type={"error"} onDismiss={() => {}}
        message="This is my error message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ))
  .add("Everything", () => (
    <Sample notes={"All of the message bars, and options"}>
      <MessageBar type={"generic"} onDismiss={() => {}}
              message="This is my message" />
      <MessageBar type={"generic"}
        message="This is my message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
      <MessageBar type={"generic"} onDismiss={() => {}}
        message="This is my message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
      <MessageBar type={"success"} onDismiss={() => {}}
        message="This is my successful message" />
      <MessageBar type={"success"}
        message="This is my successful message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
      <MessageBar type={"success"} onDismiss={() => {}}
        message="This is my successful message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
      <MessageBar type={"warning"} onDismiss={() => {}}
        message="This is my warning message" />
      <MessageBar type={"warning"} 
        message="This is my warning message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
      <MessageBar type={"warning"} onDismiss={() => {}}
        message="This is my warning message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
      <MessageBar type={"error"} onDismiss={() => {}}
        message="This is my error message" />
      <MessageBar type={"error"}
        message="This is my error message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
      <MessageBar type={"error"} onDismiss={() => {}}
        message="This is my error message" callToAction={(<a href="#" className="button button--micro">call to action</a>)}/>
    </Sample>
  ));
