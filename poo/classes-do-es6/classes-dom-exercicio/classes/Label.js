import Component from "./Component.js"

class Label extends Component {
  constructor(innerText, options) {
    super("label", { innerText, ...options })
  }
}

export default Label
