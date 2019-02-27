const express = require('express');
const app = express();
const morgan = require('morgan');

let topMovies = [{
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama'
},
{
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action'
},
{
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi'
},
{
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi'
},
{
    title: 'Snatch',
    year: 2000,
    genre: 'Comedy'
},
{
    title: 'The Usual Suspects',
    year: 1995,
    genre: 'Thriller'
},
{
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi'
},
{
    title: 'Terminator 2: Judgement Day',
    year: 1991,
    genre: 'Sci-Fi'
},
{
    title: 'Gladiator',
    year: 2000,
    genre: 'Drama'
},
{
    title: 'Shutter Island',
    year: 2010,
    genre: 'Thriller'
}
];

app.use(express.static('public'));
app.use(morgan('common'));
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something went wrong...');
});

// GET requests
app.get('/', (req, res) => {
    res.send('Welcome to my first RESTful API')
});
app.get('/movies', (req, res) => {
    res.json(topMovies)
});

// Listen for requests
app.listen(8080, () => console.log('Your app is listening on port 8080.'));
