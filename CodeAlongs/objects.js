let robert = {
    "health": 100,
    "attack": 15,
    "shield":  10,
    "laserAttack": 50
};

let bobert = {...robert};

bobert.health = 75;
bobert.attack = 25;
bobert.shield = 0;

delete bobert.laserAttack;
bobert.empAttack = 75;

function attack(attacker, defender) {
    defender.health -= attacker.attack - defender.shield;
}

attack(bobert, robert);

console.log(robert);
console.log(bobert);

while (robert.health > 0 && bobert.health > 0) {
    attack(bobert, robert);
    attack(robert, bobert);
}

console.log('robert', robert);
console.log('bobert', bobert);
