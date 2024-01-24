import express from 'express';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import session from 'express-session';

const app = express();

// Configure the Express app
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}))

app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: "random string",
    })
);

nunjucks.configure("views", {
    autoescape: true,
    express: app,
});

// Express routes
app.get("/", (req, res) => {
    res.render('index.html', {email: req.session.email});
});

app.get("/login", (req, res) => {
    res.render('login.html');
});

app.get("/dashboard", (req, res) => {
    if (!req.session.email) {
        res.redirect('/');
    } else {
        res.render("dashboard.html", {email: req.session.email});
    }
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.post("/login", (req, res) => {
    req.session.email = req.body.email;
    res.redirect("/dashboard");
});


app.listen("1234", () => console.log("Listening on at http://localhost:1234"));