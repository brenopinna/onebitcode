const Character = require("./classes/Character")
const Thief = require("./classes/Thief")
const Mage = require("./classes/Mage")
const Warrior = require("./classes/Warrior")

const defaultBattleStats = [100, 25, 10]

const mage = new Mage("Mago", 90, 4, 2, 14)
const thief = new Thief("Ladrão", 140, 22, 8)
const warrior = new Warrior("Guerreiro", 200, 14, 12, 4, "attack")

// funciona no terminal node!
console.table({ mage, thief, warrior })

warrior.changePosition()
mage.attack(warrior)
thief.attack(mage)

console.table({ mage, thief, warrior })

warrior.changePosition()
warrior.attack(mage)
mage.heal(mage)
thief.attack(warrior)

console.table({ mage, thief, warrior })
