// axios.get('/hello').then((res) => {
//     console.log(res.data.message);
//     document.querySelector("#drinkDisplay").innerHTML = res.data.message;
// });

// import axios from "axios";

const drinkDisplay = document.querySelector("#drinkDisplay");
const drinkForm = document.querySelector("form");

// Want to create "cards" for each drink from our database.
const createDrinkCard = (drinkObj) => {
    // Create a new section element
    const newDrinkCard = document.createElement("section");
    newDrinkCard.className = "drinkCard";
    newDrinkCard.innerHTML = `
        <img src="${drinkObj.picture}"/>
        <p>${drinkObj.name}</p>
        <section>
            <button>-</button>
            Popularity: ${drinkObj.votes}
            <button>+</button>
        </section>

        <br/>

        <button>Delete Me</button>
    `;

    drinkDisplay.appendChild(newDrinkCard);
};

const displayAllDrinks = (drinkArr) => {
    drinkArr.forEach((drink) => {
        createDrinkCard(drink);
    });
}

const getAllDrinks = () => {
    axios.get('/drinks').then((res => {
        displayAllDrinks(res.data.allDrinks);
    }));
}

const handleSubmit = (evt) =>  {
    evt.preventDefault();

    let name = document.getElementById("drinkName");
    let drinkImg = document.getElementById("drinkImg");

    let bodyObj = {
        drinkName: name.value,
        drinkPic: drinkImg.value
    };

    drinkDisplay.innerHTML = "";

    axios.post('/addDrink', bodyObj).then((res) => {
        // After the server adds the drink to the JSON file, this runs to reload the page and show the new JSON page
        displayAllDrinks(res.data.allDrinks);
    });
}

drinkForm.addEventListener('submit', handleSubmit);
getAllDrinks();