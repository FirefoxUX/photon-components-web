import React from "react";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import Typography from "./index";

storiesOf("Typography", module)
  .add("Everything", () => (
    <Sample notes={"Typography selection."}>
      <Typography kind={"display"} size={"md"}>
        Display 20
      </Typography>
      <Typography kind={"title"} size={"xl"}>
        Title 40
      </Typography>
      <Typography kind={"title"} size={"lg"}>
        Title 30
      </Typography>
      <Typography kind={"title"} size={"md"}>
        Title 20
      </Typography>
      <Typography kind={"title"} size={"sm"}>
        Title 10
      </Typography>
      <Typography kind={"body"} size={"lg"}>
        Body 30
      </Typography>
      <Typography kind={"body"} size={"md"}>
        Body 20
      </Typography>
      <Typography kind={"body"} size={"sm"}>
        Body 10
      </Typography>
      <Typography kind={"caption"} size={"lg"}>
        Caption 30
      </Typography>
      <Typography kind={"caption"} size={"md"}>
        Caption 20
      </Typography>
      <Typography kind={"caption"} size={"sm"}>
        Caption 10
      </Typography>
    </Sample>
  ));
