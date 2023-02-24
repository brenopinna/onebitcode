const Character = require("./Character")

class Thief extends Character {
  returnDamage(enemyDefense) {
    return 2 * (this.attackPoints - enemyDefense)
  }
}

module.exports = Thief
