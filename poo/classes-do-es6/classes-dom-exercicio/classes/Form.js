import Component from "./Component.js"

class Form extends Component {
  constructor(options, parent) {
    super("form", parent, options)
  }

  addChildren(...children) {
    children.forEach(child => {
      child.setParent(this.getElement())
      child.render()
    })
  }
}

export default Form
