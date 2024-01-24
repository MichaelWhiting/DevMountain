const xo = (str) => {
    const letters = str.toLowerCase().split("");
    const xArr = letters.filter((letter) => letter === "x");
    const yArr = letters.filter((letter) => letter === "o");

    return xArr.length === yArr.length;
}


xo("ooxx") //=> true
xo("xooxx") //=> false
xo("ooxXm") //=> true
xo("zpzpzpp")// => true // when no 'x' and 'o' is present should return true
xo("zzoo") //=> false