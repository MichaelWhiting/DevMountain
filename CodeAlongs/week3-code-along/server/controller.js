import drinks from './db.json' assert {type: 'json'}

let globalId = 4;

const handlerFunctions = {
    sayHello: (req, res) => {
        res.send({"message": "hello there"});
    },

    getAllDrinks: (req, res) => {
        res.send({
            message: "Here are the drinks",
            allDrinks: drinks
        });
    },

    addDrink: (req, res) => {
        // get drink name from picture frm the post request object.
        const drinkName = req.body.drinkName;
        const drinkPic = req.body.drinkPic;
        // create a new drink object, passing in the values form the request object, save to DB
        const newDrink = {
            "id": drinks.length, // globalId
            "name": drinkName,
            "picture": drinkPic,
            "votes": 0
        };

        // globalId++;
        drinks.push(newDrink);
        console.log(newDrink.id + 1);

        res.send({
            message: "Drink added sucessfully",
            allDrinks: drinks
        })
    }
};

export default handlerFunctions;