const Character = require("./Character")

class Mage extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints)
    this.magicPoints = magicPoints
  }

  returnDamage(enemyDefense) {
    return this.attackPoints + this.magicPoints - enemyDefense
  }

  heal(ally) {
    ally.lifePoints += 2 * this.magicPoints
    return this
  }
}

module.exports = Mage
