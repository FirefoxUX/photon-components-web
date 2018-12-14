import React from "react";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import Link from "./index";

storiesOf("Link", module).add("Everything", () => (
  <Sample notes={"This is a very simple Link."}>
    <p>
      <Link href="/">Learn more</Link>
    </p>
    <p>
      <Link href="https://mozilla.org/">Mozilla.org</Link>
    </p>
  </Sample>
));
