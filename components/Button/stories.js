import React from "react";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import Button from "./index";

import "./index.css";
import imageSync from "./sync-16.svg";

storiesOf("Button", module)
  .add("Default", () => (
    <Sample notes={"This is a very simple Button and you can click on it."}>
      <a href="#" className="button">
        Anchor
      </a>
      <Button>Button</Button>
    </Sample>
  ))
  .add("Primary", () => (
    <Sample>
      <a href="#" className="button button--primary">
        Anchor
      </a>
      <Button type="primary">Button</Button>
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
      <Button type="ghost"
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
      <Button size="micro">Button</Button>

      <a href="#" className="button button--primary button--micro">
        Anchor
      </a>
      <Button type="primary" size="micro">Button</Button>
    </Sample>
  ))
  .add("Puffy", () => (
    <Sample>
      <a href="#" className="button button--puffy">
        Anchor
      </a>
      <Button size="puffy">Button</Button>
      <button className="button--puffy">Button</button>

      <a href="#" className="button button--primary button--puffy">
        Anchor
      </a>
      <Button type="primary" size="puffy">Button</Button>
      <button className="button--primary button--puffy">Button</button>
    </Sample>
  ))
  .add("Disabled", () => (
    <Sample>
      <a href="#" className="button" aria-disabled>
        Anchor
      </a>
      <Button disabled={true}>Button</Button>
      <a href="#" className="button button--primary" aria-disabled>
        Anchor
      </a>
      <Button type="primary" disabled={true}>Button</Button>
      <a
        href="#"
        className="button button--ghost"
        aria-label="refresh"
        aria-disabled
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      <Button
        type="ghost"
        aria-label="refresh"
        disabled={true}
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
      <Button type="primary">Button</Button>

      <a
        href="#"
        className="button button--ghost"
        aria-label="refresh"
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      <Button
        type="ghost"
        aria-label="refresh"
        style={{ backgroundImage: `url(${imageSync})` }}
      />

      <a href="#" className="button button--micro">
        Anchor
      </a>
      <Button size="micro">Button</Button>

      <a href="#" className="button button--primary button--micro">
        Anchor
      </a>
      <Button type="primary" size="micro">Button</Button>

      <a href="#" className="button button--puffy">
        Anchor
      </a>
      <Button size="puffy">Button</Button>

      <a href="#" className="button button--primary button--puffy">
        Anchor
      </a>
      <Button type="primary" size="puffy">Button</Button>

      <a href="#" className="button" aria-disabled>
        Anchor
      </a>
      <Button disabled={true}>Button</Button>

      <a href="#" className="button button--primary" aria-disabled>
        Anchor
      </a>
      <Button type="primary" disabled={true}>
        Button
      </Button>

      <a
        href="#"
        className="button button--ghost"
        aria-label="refresh"
        aria-disabled
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      <Button
        type="ghost"
        aria-label="refresh"
        disabled={true}
        style={{ backgroundImage: `url(${imageSync})` }}
      />
      
    </Sample>
  ))
  
  ;
