import Input from "./classes/Input.js"
import Label from "./classes/Label.js"
import Form from "./classes/Form.js"

const input = new Input({
  placeholder: "Placeholder!!",
  defaultValue: "Valor padrão uiui",
  id: "input",
})
const label = new Label("texto da label", { htmlFor: "input" })
const form = new Form()

form.addChildren(label.getDomElement(), input.getDomElement())
form.render()
console.log(form.getDomElement())

//////////////////////////////////////

const anotherInput = new Input({
  placeholder: "Placeholder!!",
  defaultValue: "Valor padrão uiui",
  id: "anotherInput",
})
const anotherLabel = new Label("texto da label", { htmlFor: "anotherInput" })
const anotherForm = new Form()

anotherForm.addChildren(anotherLabel.getDomElement(), anotherInput.getDomElement())
anotherForm.render()
console.log(anotherForm.getDomElement())
