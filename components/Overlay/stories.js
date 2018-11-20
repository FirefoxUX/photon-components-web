import React from "react";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import Overlay from "./index";
import "./stories.css";

storiesOf("Overlay", module)
  .add("With Popup", () => (
    <Sample notes={"This is a simple Overlay, with a popup to illustrate the use of an overlay."}>
      <Overlay>
        <div className="popup"></div>
      </Overlay>
    </Sample>
  ))
  .add("Simple", () => (
    <Sample notes={"This is a simple Overlay."}>
      <Overlay/>
    </Sample>
  ));
