import Input from "./classes/Input.js"
import Label from "./classes/Label.js"
import Form from "./classes/Form.js"

const input = new Input({
  id: "input",
  placeholder: "Teste 1",
})
const label = new Label("Input 1", "input")
const form = new Form()

form.render()
form.addChildren(label, input)

console.log(input)
console.log(label)
console.log(form)
