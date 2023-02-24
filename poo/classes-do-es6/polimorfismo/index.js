class Vehicle {
  move() {
    console.log("o veículo está se movendo.")
  }
}

class Car extends Vehicle {
  move() {
    console.log("o carro está se movendo.")
  }
}

class Ship extends Vehicle {
  move() {
    console.log("o navio está navegando.")
  }
}

class Plane extends Vehicle {
  move(speed) {
    console.log(`o avião está voando a ${speed} km/h.\n`)
  }
}

const delorean = new Car()
const titanic = new Ship()
const boing = new Plane()

// delorean.move()
// titanic.move()
// boing.move(65)

function start(vehicle, ...params) {
  console.log("\nLigando veículo...")
  vehicle.move(...params)
}

start(delorean)
start(titanic)
start(boing, 275)
