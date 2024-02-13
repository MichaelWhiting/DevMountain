const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50, greeting = "Hi") {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
        this.greeting = greeting;
    }

    greet() {
        console.log(`${this.greeting}, ${this.name} the ${this.species}`);
    }

    feed() {
        this.hunger -= 20;
        console.log("Yum, I love food");
    }
}

class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger, 'Meow');
        this.food = 'fish';
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger, 'Woof');
        this.food = 'kibble';
    }
}

class AnimalShelter {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    adopt(animal) {
        const animalIdx = this.animals.findIndex(animal);
        this.animals.splice(animalIdx, 1);
    }

    getAnimalsBySpecies(species) {
        return this.animals.filter((animal) => animal.species === species);
    }
}

// Instances

let shelter = new AnimalShelter();

animalData.forEach((data) => {
    const { name, species, color, hunger } = data;
    let animal;

    if (species === 'cat') {
        animal = new Cat(name, species, color, hunger);
    } else if (species === 'dog') {
        animal = new Dog(name, species, color, hunger);
    } else {
        animal = new Animal(name, species, color, hunger);
    }

    shelter.addAnimal(animal);
})

console.log(shelter.animals);

const cat = new Cat("Jack", 'orange', 50);
const dog = new Dog("Ryan", 'gray', 50);

console.log(cat);
console.log(dog);

const cats = shelter.getAnimalsBySpecies('cat');
const dogs = shelter.getAnimalsBySpecies('dog');

for (const animal of shelter.animals) {
    animal.greet();
}
