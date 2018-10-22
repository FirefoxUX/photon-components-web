import React from "react";
import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import { ExtractSource } from "../../.storybook/code-sample";

import Card from "./index";

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
