import React from "react";
import { storiesOf } from "@storybook/react";
import { Sample } from "../../lib/stories-common";

import Card from "./index";

import "./index.css";

storiesOf("Card", module)
  .add("Default", () => (
    <Sample notes={"This is a very simple Card container."}>
      <Card>
        <p>Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur.

    Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.
        </p>
      </Card>
    </Sample>
  ))
  .add("Large", () => (
    <Sample>
      <Card isLarge={true}>
        <p>Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur.

    Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.
        </p>
      </Card>
    </Sample>
  ))
  .add("With Shadow", () => (
    <Sample>
      <Card shadow={true}>
        <p>Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur.

    Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.
        </p>
      </Card>
    </Sample>
  ))

  .add("Everything", () => (
    <Sample>
      <Card>
        <p>Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur.

    Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.
        </p>
      </Card>

      <Card isLarge={true}>
        <p>Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur.

    Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.
        </p>
      </Card>

      <Card shadow={true}>
        <p>Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur.

    Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.
        </p>
      </Card>
    </Sample>
  ))
  ;
