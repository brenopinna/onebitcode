class Component {
  #element
  constructor(tag, parent = document.body, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  build(tag = this.tag, options = this.options) {
    this.#element = document.createElement(tag)
    if (options) Object.assign(this.#element, options)
    return this
  }

  render(parent = this.parent) {
    if (typeof parent === "string") {
      document.querySelector(parent).appendChild(this.#element)
    } else {
      parent.appendChild(this.#element)
    }
  }

  getElement() {
    return this.#element
  }

  setParent(newParent) {
    this.parent = newParent
  }
}

export default Component
