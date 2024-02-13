import { Movie, Rating, User } from './src/model.js';
import ViteExpress from 'vite-express';
import session from 'express-session';

const handlerFunctions = {
    getAllMovies: async (req, res) => {
        const allMovies = await Movie.findAll();
        res.json(allMovies);
    },
    getMovie: async (req, res) => {
        const id = req.params.movieId;
        const movie = await Movie.findByPk(id);
        res.json(movie);
    },
    authUser: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })

        if (user) {
            req.session.userId = user.userId;
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    },
    logOutUser: async (req, res) => {
        req.session.destroy();
        res.json({ success: true });
    },
    getRatings: async (req, res) => {
        const id = req.session.userId;
        const user = await User.findByPk(id);
        const ratings = await user.getRatings({ includes: {
            model: Movie,
            attributes: ['title']
        }});
        res.json({ratings});
    },
    addRating: async (req, res) => {
        const { userId } = req.session;
        const { movieId, score } = req.body;
        const user = await User.findByPk(userId);
        const rating = await user.createRating({ movieId: movieId, score: score });
        res.json(rating);     
    }
}

export default handlerFunctions;