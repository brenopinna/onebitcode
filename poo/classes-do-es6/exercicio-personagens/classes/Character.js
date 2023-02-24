class Character {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attack(enemy) {
    let damage = this.returnDamage(enemy.defensePoints)
    if (damage <= 0) damage = 0
    enemy.lifePoints -= damage
    return this
  }

  returnDamage(enemyDefense) {
    return this.attackPoints - enemyDefense
  }
}

module.exports = Character
