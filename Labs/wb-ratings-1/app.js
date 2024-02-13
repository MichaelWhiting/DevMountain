import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
// import handlerFunctions from './controller.js';
import { Movie } from './src/model.js';
import handlerFunctions from './controller.js';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));


function loginRequired(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
}

// Routes
app.get("/api/movies", handlerFunctions.getAllMovies);
app.get("/api/movies/:movieId", handlerFunctions.getMovie);
app.get("/api/ratings", loginRequired, handlerFunctions.getRatings);

app.post("/api/auth", handlerFunctions.authUser);
app.post("/api/logout", loginRequired, handlerFunctions.logOutUser);
app.post("/api/ratings", loginRequired, handlerFunctions.addRating)

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));