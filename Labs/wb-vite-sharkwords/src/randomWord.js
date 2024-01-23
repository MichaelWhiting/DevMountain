import sample from 'lodash.sample';

const words = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const easy = [
  'kiwi',
  'peach',
  'pecan',
  'apple'
];

const medium = [
  'peanut',
  'banana',
  'orange',
  'durian'
];

const hard = [
  'chocolate',
  'eggplant',
  'pineapple',
  'strawberry'
];


function getRandomWord(difficulty) {
  switch (difficulty) {
    case "easy":
      return sample(easy);
    case "medium":
      return sample(medium);
    case "hard":
      return sample(hard);
  }
}

export default getRandomWord;
