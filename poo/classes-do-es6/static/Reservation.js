class Reservation {
  constructor(guests, room, days) {
    this.guests = guests
    this.room = room
    this.days = days
    // como para TODAS as reservas a taxa será a mesma,
    // esse atributo deve ser ESTÁTICO.
    this.total = days * Reservation.baseFee
    // repare que o atributo é acessado diretamente pelo nome da classe.
  }

  static #baseFee = 150

  static get baseFee() {
    return Reservation.#baseFee
  }

  static set baseFee(newBaseFee) {
    if (typeof newBaseFee !== "number") {
      console.error("\nbaseFee must be a number\n")
      return
    }
    Reservation.#baseFee = newBaseFee
  }
}

const christmas = new Reservation(1, "101", 2)
// suponhamos que a taxa aumentou do natal para o ano novo
Reservation.baseFee = 200
Reservation.baseFee = "500"
// as instâncias que vieram antes não tem esse valor atualizado
const newYearsEve = new Reservation(1, "203", 2)

console.table({
  christmas,
  newYearsEve,
})
