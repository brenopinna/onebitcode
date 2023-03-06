import { Component } from "./Component.js"

export class ImageComponent extends Component {
  constructor({ classes, src, alt }) {
    const image = super({ tag: "img", classes })
    image.src = src
    image.alt = alt
    return image
  }
}
