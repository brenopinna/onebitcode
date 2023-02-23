import Component from "./Component.js"

class Form extends Component {
  constructor(options) {
    super("form", options)
  }

  addChildren(...elements) {
    const form = this.getDomElement()
    elements.forEach(element => form.appendChild(element))
    this.setDomElement(form)
  }
}

export default Form
