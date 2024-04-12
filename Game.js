class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name}!`);
        target.health -= this.strength;
        console.log(`${target.name}'s health is now ${target.health}`);
    }
}

class Warrior extends Character {
    constructor(name, health, strength, weapon, power) {
        super(name, health, strength);
        this.weapon = weapon;
        this.power = power;
    }

    attack(target) {
        super.attack(target);
        if (this.power > 0) {
            console.log(`${this.name} uses special ability!`);
            target.health -= this.power;
            console.log(`${target.name}'s health after special ability is now ${target.health}`);
            this.power -= 1;
        }
    }
}

class Wizard extends Character {
    constructor(name, health, strength, spell, mana) {
        super(name, health, strength);
        this.spell = spell;
        this.mana = mana;
    }

    attack(target) {
        super.attack(target);
        if (this.mana >= 10) {
            console.log(`${this.name} casts ${this.spell} spell!`);
            target.health -= 2 * this.strength;
            console.log(`${target.name}'s health after spell is now ${target.health}`);
            this.mana -= 10;
        }
    }
}

class Archer extends Character {
    constructor(name, health, strength, bow, accuracy) {
        super(name, health, strength);
        this.bow = bow;
        this.accuracy = accuracy;
    }

    attack(target) {
        super.attack(target);
        if (Math.random() < this.accuracy) {
            console.log(`${this.name} hits the target with accuracy!`);
            target.health -= this.strength;
            console.log(`${target.name}'s health after hit is now ${target.health}`);
        } else {
            console.log(`${this.name} misses the target!`);
        }
    }
}


const warrior = new Warrior("Conan", 100, 20, "Sword", 15);
const wizard = new Wizard("Gandalf", 80, 15, "Fireball", 50);
const archer = new Archer("Legolas", 90, 18, "Longbow", 0.8);

const target = new Character("Monster", 200, 25);

warrior.attack(target);
wizard.attack(target);
archer.attack(target);
