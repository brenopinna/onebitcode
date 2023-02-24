const Character = require("./Character")

class Warrior extends Character {
  #initialDefense
  constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints, position) {
    super(name, lifePoints, attackPoints, defensePoints)
    this.position = position
    this.#initialDefense = defensePoints
    this.shieldPoints = shieldPoints
    this.#setDefense()
  }

  returnDamage(enemyDefense) {
    if (this.position === "attack") {
      return super.returnDamage(enemyDefense)
    } else if (this.position === "defense") {
      return 0
    }
  }

  changePosition() {
    this.position = this.position === "attack" ? "defense" : "attack"
    this.#setDefense()
    return this
  }

  #setDefense() {
    this.defensePoints =
      this.#initialDefense + (this.position === "attack" ? 0 : this.shieldPoints)
  }
}

module.exports = Warrior
