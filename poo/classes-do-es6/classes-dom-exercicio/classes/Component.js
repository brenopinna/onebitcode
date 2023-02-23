class Component {
  #domElement
  constructor(elementName, options) {
    this.#domElement = this.build(elementName, options)
  }

  build(elementName, options) {
    const element = document.createElement(elementName)
    for (let option in options) {
      element[option] = options[option]
    }
    return element
  }

  render() {
    document.body.appendChild(this.#domElement)
  }

  getDomElement() {
    return this.#domElement
  }

  setDomElement(element) {
    this.#domElement = element
  }
}

export default Component
