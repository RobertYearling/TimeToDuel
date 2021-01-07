class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        console.log(`${this.name} has gone attack mode on ${target.name}`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        console.log(`${this.name} has been played and applied on ${target.name}`);
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3,4);
const hardAlgorithymEffect = new Effect("Hard Algo", 2, "increase target's resilience by 3", "resilience", +3);
hardAlgorithymEffect.play(redBeltNinja);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 4,6);
const unHandledPromiseRejection = new Effect("Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unHandledPromiseRejection.play(redBeltNinja);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);


