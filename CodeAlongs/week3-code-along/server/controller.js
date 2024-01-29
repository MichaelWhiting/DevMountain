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
            "id": globalId, // globalId
            "name": drinkName,
            "picture": drinkPic,
            "votes": 0
        };

        globalId++;
        drinks.push(newDrink);

        res.send({
            message: "Drink added sucessfully",
            allDrinks: drinks
        })
    },

    deleteDrink: (req, res) => {
        const drinkId = req.params.id;

        for (let i = 0; i < drinks.length; i++) {
            if (drinks[i].id === +drinkId) {
                drinks.splice(i, 1);
                break;
            }
        }

        res.send({
            message: "Deleted drink",
            allDrinks: drinks
        });
    },

    updateDrink: (req, res) => {
        const drinkId = req.params.id;
        const voteType = req.body.voteType;

        const drinkIdx = drinks.findIndex((drink) => {
            return drink.id === +drinkId;
        })

        if (voteType === "upvote") {
            drinks[drinkIdx].votes += 1
        } else if (voteType === "downvote") {
            drinks[drinkIdx].votes -= 1
        }

        res.send({ 
            message: "Updated drink votes",
            allDrinks: drinks
        })
    }
};

export default handlerFunctions;