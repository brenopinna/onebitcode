import Component from "./Component.js"

class Label extends Component {
  constructor(textContext, htmlFor, options, parent) {
    super("label", parent, Object.assign({}, options, { textContext, htmlFor }))
  }
}

export default Label
