import express from 'express';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import sample from 'lodash.sample';

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// Run the server.
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${server.address().port}...`);
});

const COMPLIMENTS = [
  'awesome',
  'terrific',
  'fantastic',
  'neato',
  'fantabulous',
  'wowza',
  'oh-so-not-meh',
  'brilliant',
  'ducky',
  'coolio',
  'incredible',
  'wonderful',
  'smashing',
  'lovely',
];

// Display the homepage
app.get('/', (req, res) => {
  res.render('hello.html');
});

// Display a form that asks for the user's name.
// app.get('/hello', (req, res) => {
//   res.render('hello.html');
// });

// Handle the form from /hello and greet the user.
app.get('/greet', (req, res) => {
  const name = req.query.name || 'stranger';
  const complement = sample(COMPLIMENTS);
  res.render('greet.html', { name: name, complement: complement });
});

app.get('/game', (req, res) => {
  const response = req.query.play;
  const name = req.query.username;

  if (response === "no") {
    res.render('goodbye.html', { name: name });
  } else {
    res.render('game.html');
  }
});

app.get('/madlib', (req, res) => {
  let { name, color, noun, adjective, place } = req.query;
  res.render('madlib.html', {name: name, color: color, noun: noun, adjective: adjective, place: place});
});
