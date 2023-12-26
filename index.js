class hero {
    constructor(name, age, type, attack ) {
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    
    }
  
    write() {
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}

let warriorClass = new hero("", "", "guerreiro", "usou espada")
let mageClass = new hero (" ", " ", "mago", "usou magia")
let monkClass = new hero (" ", " ", "monge", "usou artes marciais ")
let ninjaClass = new hero (" ", " ", "ninja", "usou shuriken")

warriorClass.write()
mageClass.write()
monkClass.write()
ninjaClass.write()