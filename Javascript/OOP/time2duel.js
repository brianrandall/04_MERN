class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor (name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res
    }

    unitAttack (target) {
        if (target instanceof Unit) {
            target.res -= this.power
                if (target.res <= 0) {
                    console.log(this.name, 'attacks ' + target.name, 'with ' + this.power, 'power')
                    console.log(target.name, 'now has no more resilience. no more will to live. ')
                    console.log('...')
                    console.log('game over')
                }
                else {    
                    console.log(target.name, 'resilience is now ' + target.res)
                }
            return this
        }
        else {
            console.log('something went wrong')
        }
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude ) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    attack(target) {
        if (target instanceof Unit) {
            if (this.stat == 'resilience') {
                target.res += this.magnitude
                console.log (this.name, 'attacked ' + target.name, '- ' +this.text, 'resilience is now: ' + target.res)
            }
            else if (this.stat == 'power') {
                target.power += this.magnitude
                console.log (this.name, 'attacked ' + target.name, '- ' +this.text, 'power is now: ' + target.power)
            }

        }
        else {
            return console.log('somethings wrong');
        }
        
    }

}

const unitCard1 = new Unit('Red Belt Ninja', 3, 3, 4)
const unitCard2 = new Unit('Black Belt Ninja', 4, 5, 4)
const efCard1 = new Effect('Hard Algorithm', 2, 'increase targets resilience by 3.', 'resilience', 3)
const efCard2 = new Effect('unhandled promise rejection', 1, 'reduce target resilience by 2.', 'resilience', -2)
const efCard3 = new Effect('pair programmn', 3, 'increase targets power by 2.', 'power', 2)



console.log('round 1')
console.log('red belt ninja has been created with the following stats...')
console.log('cost: '+ unitCard1.cost, 'power: ' + unitCard1.power, 'resilience: ' + unitCard1.res)
console.log('')
console.log('red belt ninja came across a hard algorithm... uh oh... ')
efCard1.attack(unitCard1)
console.log('')
console.log('round 2')
console.log('black belt ninja has been created with the following stats...')
console.log('cost: '+ unitCard2.cost, 'power: ' + unitCard2.power, 'resilience: ' + unitCard2.res)
console.log('')
console.log('black belt ninja happened upon an unhandled promise rejection. what a shame...');
efCard2.attack(unitCard2)
console.log('')
console.log('round 3');
console.log('our red belt ninja participates in some very wholesome pair programming. very productive.');
efCard3.attack(unitCard1)
console.log('...')
console.log('red belt ninja feelin tough now. red belt ninja attacks black belt ninja!!')
unitCard1.unitAttack(unitCard2)