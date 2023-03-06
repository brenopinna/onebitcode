import { Component } from "./Component.js"

export class SpanComponent extends Component {
  constructor({ classes, children, textContent }) {
    super({ tag: "span", classes, children, textContent })
  }
}
