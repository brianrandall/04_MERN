class Ninja {
    constructor(name) {
        this.name = name
        this.health = 10
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log('hello i am a ninja and my name is ' + this.name)
            return this
    }

    showStats() {
        console.log('name: ' +this.name)
        console.log('health: ' +this.health)
        console.log('speed: ' +this.speed)
        console.log('strength: ' +this.strength)
            return this
    }

    drinkSake() {
        console.log(this.name + ' drank sake')
        this.health += 10
        console.log('health is now ' +this.health, "let's party")
        return this
    }
}




const ninja1 = new Ninja('stuffulufulous')
ninja1.sayName().showStats().drinkSake()