export class Component {
  constructor({ tag, classes, children, textContent = "", id = undefined }) {
    const element = document.createElement(tag)
    if (classes?.length) element.classList.add(...classes)
    element.innerText = textContent
    element.id = id
    if (children?.length) element.append(...children)
    return element
  }
}
