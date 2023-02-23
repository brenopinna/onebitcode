import Component from "./Component.js"

class Label extends Component {
  constructor(innerText, htmlFor, options, parent) {
    super("label", parent, Object.assign({}, options, { innerText, htmlFor }))
  }
}

export default Label
