# photon-components-web

[![CircleCI](https://circleci.com/gh/FirefoxUX/photon-components-web.svg?style=svg)](https://circleci.com/gh/FirefoxUX/photon-components-web)

Photon versions of the some common web UI components

## Conventions

Components are styled using the [BEM](http://getbem.com/) (Block-Element-Modifier) convention:

* Top-level components are "blocks"
  * e.g. `button`
* Parts of components are "elements", and are namespaced by their block:
  * e.g. `card__media` as a sub-element of `card`
* `modifiers` are optional or stateful properties applied to the markup:
  * Top-level modifiers are namespaced to their block, e.g. `button--primary`
  * Element-level modifiers namespace to their element, e.g. `card__media--loading`
