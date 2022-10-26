// create a class aclled "athlete"

class Athlete {
    // constructor
    constructor(name, speed) {
        this.name = name;
        this.energy = 100;
        this.speed = speed;
        this.strength = 50;
    }

    sayName() {
        console.log("my name is " + this.name);
    }

    playGame(sportName, energySpent) {
        if (energySpent > this.energy) {
            console.log(`too pooped to party ${this.name}`)
            return
        }
        this.energy -= energySpent
        console.log(this.name + ' is playing ' + sportName, 'energy left ' + this.energy)
        
    }
}

let athlete1 = new Athlete('kobe', 100)
console.log(athlete1.name)

//change constructor attributes

athlete1.name = "bing bong"
console.log(athlete1.name)

//using other methonds
athlete1.playGame('basketball', 25)
// ( subtracts 25 from energy... )

class Basketball extends Athlete {
    constructor(name, speed, postition) {
        super(name, speed)
        this.postition = postition
    }
    slam_dunk(energySpent) {
        this.energy -= energySpent
        console.log('slam mf dunk ' + this.energy, 'energy remaining')
    }
}

let basketballInstance = new Basketball ("michael mf jordan", 100, "forward" )
console.log(basketballInstance);

basketballInstance.slam_dunk(55)