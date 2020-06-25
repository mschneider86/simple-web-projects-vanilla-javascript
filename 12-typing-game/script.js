const word = document.getElementById('word');
const text = document.getElementById('text');
const score = document.getElementById('score');
const time = document.getElementById('time');
const endgame = document.getElementById('end-game');
const settings = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Generate random word from array
function getRandomWord() {
  return word[Math.floor(Math.random() * words.length)];
}
