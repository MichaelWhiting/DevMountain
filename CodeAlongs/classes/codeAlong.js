class Robot {
    constructor(name = "bot", health = 50, color = "gray", attack = 100) {
        this.name = name;
        this.health = health;
        this.color = color;
        this.attack = attack;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }

    hit(enemy) {
        enemy.health -= this.attack;
        console.log(`${this.name} attacked ${enemy.name} their health is now ${enemy.health}`);
    }
}

class Autobot extends Robot {
    constructor(name, health, color, attack, speed) {
        super(name, health, color, attack);
        this.speed = speed;
    }
    // hit(enemy) {
    //     if (enemy.armor) {
    //         enemy.
    //     }
    // }
}

class Decepticon extends Robot {
    constructor(name, health, color, attack, armor) {
        super(name, health, color, attack)
        this.armor = armor;
    }


}

let megatron = new Decepticon("Megatron", 1000, "machine metal gray", 200, 100);
let bumbleBee = new Autobot("Bumble Bee", 300, "yellow", 150, 300);

bumbleBee.hit(megatron);