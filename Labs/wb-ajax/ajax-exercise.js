import axios from 'axios';

// PART 1: Show Dog Photo

function showDogPhoto(evt) {
  // TODO: get a random photo from the Dog API and show it in the #dog-image div
  const url = "https://dog.ceo/api/breeds/image/random";
  const dogImg = document.querySelector("#dog-image")

  axios.get(url).then(res => {
    const imageURL = res.data.message;
    dogImg.innerHTML = `<img src="${imageURL}" alt="dog-image" style="height: 200px, width: 200px">`
  });
}

document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);

// PART 2: Show Weather

function showWeather(evt) {
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.txt?zipcode=${zipcode}`
  // TODO: request weather with that URL and show the forecast in #weather-info
  axios.get(url).then(res => {
    document.querySelector("#weather-info").innerText = res.data;
  });
}

document.querySelector('#weather-button').addEventListener('click', showWeather);

// PART 3: Order Cookies

function orderCookies(evt) {
  // TODO: Need to preventDefault here, because we're listening for a submit event!
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  evt.preventDefault();

  const orderMessage = document.querySelector("#order-status");
  const qty = document.querySelector("#qty-field").value;
  const cookieType = document.querySelector("#cookie-type-field").value;
  
  const url = `/order-cookies.json`;
  
  axios.post(url, {qty: qty, cookieType: cookieType}).then(res => {
    const message = res.data.message;
    const resultCode = res.data.resultCode;
    orderMessage.innerText = message;

    orderMessage.className = resultCode === "OK" ? "order-success" : "order-error";
  });
}

document.querySelector('#order-form').addEventListener('submit', orderCookies);

// PART 4: iTunes Search

function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;
  const formData = { "term": searchTerm };
  const queryString = new URLSearchParams(formData).toString();
  const url = `https://itunes.apple.com/search?${queryString}`;


  axios.get(url).then(res => {
    const artistList = document.querySelector("#itunes-results");
    artistList.innerHTML = "";
    const artists = res.data.results;
    for (const artist of artists) {
      const artistName = artist.artistName;
      const trackName = artist.trackName;
      artistList.innerHTML += `<li>Artist: ${artistName}, Song: ${trackName}</li>`
    }
  });

  
  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
  
}
document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
