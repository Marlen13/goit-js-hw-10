import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const select = document.querySelector('.breed-select');
// console.log(select)
// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY = 'live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw';

// fill field select from backend
fetchBreeds()
.then(data => {
  console.log(data)
  const markup = data.map(({ id, name }) => {
    return `<option value=${id}>${name}</option>`
  })
  // console.log(markup)
  select.innerHTML = markup
})
//choose breed 
select.addEventListener('submit', onSearch);
function onSearch(e) {
  
  e.preventDefault();
  // const breedId = this.value;
  const breedId = e.target.value;
 
  console.log(breedId);
  fetchCatByBreed(breedId)
    .then(cats => console.log(cats))
    .catch(error => console.log(error));
      }
// function renderCatsList() {
//   const markup = users.map(({ url, cfa_url, name, }) => {
//     return `<img src="" alt="">`
//   }).join()
