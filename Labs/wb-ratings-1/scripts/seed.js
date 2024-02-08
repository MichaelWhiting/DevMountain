import { Movie, User, Rating, db } from "../src/model.js";
import movieData from "./data/movies.json" assert { type: 'json' };
import lodash from 'lodash';

console.log('Syncing database from seed.js');
await db.sync({ force: true });

console.log('Seeding database...');

// console.log(movieData[0]);
const moviesInDB = await Promise.all(
    movieData.map((movie) => {
        const { title, overview, posterPath, releaseDate } = movie;
    
        const newMovie = Movie.create({ 
            title,
            overview,
            posterPath,
            releaseDate: new Date(Date.parse(releaseDate))
        });
    
        return newMovie;
    })
)

// console.log(moviesInDB);

const usersToCreate = [...Array(10).keys()].map((i) => {
    return User.create({ email: `user${i + 1}@test.com`, password: 'test'});
}) 

const usersInDB = await Promise.all(usersToCreate); // this makes it so it will not continue until all of the Users are created.

// console.log(usersInDB);


const movieRatings = usersInDB.flatMap((user) => {
    const randomMovies = lodash.sampleSize(moviesInDB, 10);

    const ratings = randomMovies.map((movie) => {
        return Rating.create({ score: lodash.random(1,5), userId: user.userId, movieId: movie.movieId});
    })
    return ratings;
});

const ratingsInDB = await Promise.all(movieRatings);

console.log(ratingsInDB);

// await db.close();
console.log('Finished seeding database');