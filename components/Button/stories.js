import React from "react";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import "./index.css";
import imageSync from "./sync-16.svg";

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
