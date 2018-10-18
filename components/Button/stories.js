import React from "react";
import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import { ExtractSource } from "../../.storybook/code-sample";

// TODO: Actually build & use a React component for the markup
// import Button from "./index";

import "./index.css";
import imageSync from "../../vendor/sync-16.svg";

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

storiesOf("Button", module)
  .add("Default", () => (
    <Sample notes={"This is a very simple Button and you can click on it."}>
      <a href="#" className="button">
        Anchor
      </a>
      <button>Button</button>
    </Sample>
  ))
  .add("Primary", () => (
    <Sample>
      <a href="#" className="button button--primary">
        Anchor
      </a>
      <button className="button--primary">Button</button>
    </Sample>
  ))
  .add("Ghost", () => (
    <Sample>
      <a
        href="#"
        className="button button--ghost"
        aria-label="refresh"
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      <button
        className="button button--ghost"
        aria-label="refresh"
        style={{ backgroundImage: `url(${imageSync})` }}
      />
    </Sample>
  ))
  .add("Micro", () => (
    <Sample>
      <a href="#" className="button button--micro">
        Anchor
      </a>
      <button className="button--micro">Button</button>

      <a href="#" className="button button--primary button--micro">
        Anchor
      </a>
      <button className="button--primary button--micro">Button</button>
    </Sample>
  ))
  .add("Puffy", () => (
    <Sample>
      <a href="#" className="button button--puffy">
        Anchor
      </a>
      <button className="button--puffy">Button</button>

      <a href="#" className="button button--primary button--puffy">
        Anchor
      </a>
      <button className="button--primary button--puffy">Button</button>
    </Sample>
  ))
  .add("Disabled", () => (
    <Sample>
      <a href="#" className="button" aria-disabled>
        Anchor
      </a>
      <button disabled>Button</button>

      <a href="#" className="button button--primary" aria-disabled>
        Anchor
      </a>
      <button className="button--primary" disabled>
        Button
      </button>

      <a
        href="#"
        className="button button--ghost"
        aria-label="refresh"
        aria-disabled
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      <button
        className="button button--ghost"
        aria-label="refresh"
        disabled
        style={{ backgroundImage: `url(${imageSync})` }}
      />
    </Sample>
  ))
  .add("Everything", () => (
    <Sample>
      
      <a href="#" className="button">
        Anchor
      </a>
      <button>Button</button>
      
      <a href="#" className="button button--primary">
        Anchor
      </a>
      <button className="button--primary">Button</button>

      <a
        href="#"
        className="button button--ghost"
        aria-label="refresh"
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      <button
        className="button button--ghost"
        aria-label="refresh"
        style={{ backgroundImage: `url(${imageSync})` }}
      />

      <a href="#" className="button button--micro">
        Anchor
      </a>
      <button className="button--micro">Button</button>

      <a href="#" className="button button--primary button--micro">
        Anchor
      </a>
      <button className="button--primary button--micro">Button</button>

      <a href="#" className="button button--puffy">
        Anchor
      </a>
      <button className="button--puffy">Button</button>

      <a href="#" className="button button--primary button--puffy">
        Anchor
      </a>
      <button className="button--primary button--puffy">Button</button>

      <a href="#" className="button" aria-disabled>
        Anchor
      </a>
      <button disabled>Button</button>

      <a href="#" className="button button--primary" aria-disabled>
        Anchor
      </a>
      <button className="button--primary" disabled>
        Button
      </button>

      <a
        href="#"
        className="button button--ghost"
        aria-label="refresh"
        aria-disabled
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      <button
        className="button button--ghost"
        aria-label="refresh"
        disabled
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      
    </Sample>
  ))
  
  ;
