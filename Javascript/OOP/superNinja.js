class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
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
        console.log('health is now ' +this.health)
        return this
    }
}

class Sensei extends Ninja {
    constructor (name, wisdom = 10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }

    speakWisdom() {
        this.drinkSake()
        console.log('sensei say "look both ways b4 u cross the street"')
    }
}



// const ninja1 = new Ninja('stuffulufulous')
// ninja1.sayName().showStats().drinkSake()

const superSensei = new Sensei('wise_ass_fool')
superSensei.showStats().speakWisdom()