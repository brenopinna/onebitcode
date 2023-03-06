import { Component } from "./Component.js"
import { SpanComponent } from "./SpanComponent.js"
import { ImageComponent } from "./ImageComponent.js"
import { deleteTransaction, editTransaction } from "../public/api.js"

export class Transaction {
  #id
  #name
  #value
  #parent
  #changeTotal
  constructor({ id, name, value }, changeTotal) {
    this.#id = id
    this.#name = name
    this.#value = value
    this.#parent = document.getElementById("transactions")
    this.#changeTotal = changeTotal
  }

  render() {
    const id = new SpanComponent({
      classes: ["id"],
      textContent: this.#id,
    })

    const name = new SpanComponent({
      classes: ["name"],
      textContent: this.#name,
    })

    const leftContainer = new SpanComponent({
      children: [id, " - ", name],
    })

    const value = new SpanComponent({
      classes: ["value"],
      textContent: this.#value,
    })

    const priceContainer = new SpanComponent({
      classes: ["money"],
      textContent: "R$ ",
      children: [value],
    })

    const editIcon = new ImageComponent({
      classes: ["edit"],
      src: "../assets/edit.png",
      alt: "Ícone de Editar",
    })

    editIcon.addEventListener("click", () => {
      this.#changeTotal(-this.#value)
      const name = prompt("Digite o novo nome:", this.#name)
      if (name === null) return
      const value = prompt("Digite o novo valor:", this.#value)
      if (value === null) return
      if (isNaN(value)) {
        alert("Somente números são aceitos!")
        return
      }
      this.#name = name
      this.#value = Number(value)

      document
        .getElementById(`transaction-${this.#id}`)
        .querySelector(".name").innerText = this.#name
      document
        .getElementById(`transaction-${this.#id}`)
        .querySelector(".value").innerText = this.#value

      editTransaction(this.#id, this.#name, this.#value)
      this.#changeTotal(this.#value)
    })

    const trashIcon = new ImageComponent({
      classes: ["delete"],
      src: "../assets/trash.png",
      alt: "Ícone de Lixeira",
    })

    trashIcon.addEventListener("click", () => {
      if (!confirm(`Deseja excluir permanentemente a tarefa ${this.#name}?`)) return
      container.remove()
      deleteTransaction(this.#id)
      this.#changeTotal(-this.#value)
    })

    const iconsContainer = new SpanComponent({
      children: [editIcon, trashIcon],
      classes: ["icons"],
    })

    const container = new Component({
      tag: "div",
      classes: ["transaction", "box"],
      children: [leftContainer, priceContainer, iconsContainer],
      id: `transaction-${this.#id}`,
    })

    this.#parent.appendChild(container)
  }
}
