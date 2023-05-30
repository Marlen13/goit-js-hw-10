import { fetchBreeds } from "./cat-api";

const select = document.querySelector('.breed-select');


// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY = 'live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw';


// fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
// .then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data)
//   const markup = data.map(({ id, name }) => {
//     return `<option value=${id}>${name}</option>`
//   })
//       select.innerHTML = markup
//     })
//     .catch(error => { console.log(error) })
// ;
function getEvents() {
  fetchBreeds()
  .then(data => {
  console.log(data)
  const markup = data.map(({ id, name }) => {
    return `<option value=${id}>${name}</option>`
  })
      select.innerHTML = markup
    })
}
