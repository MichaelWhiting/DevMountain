
const play = () => {
    console.log("Square was clicked");
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("click", play);
});