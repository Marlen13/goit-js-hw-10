import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const select = document.querySelector('.breed-select');


// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY = 'live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw';

  fetchBreeds()
  .then(data => {
  console.log(data)
  const markup = data.map(({ id, name }) => {
    return `<option value=${id}>${name}</option>`
  })
      select.innerHTML = markup
    })


    select.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchCatByBreed(breedId)
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
    });
function renderUserList(users) {
  const markup = users.map(({ id, url, name }) => {
    return ``
  })
}
  // const form = e.currentTarget;
  // console.log(form); 
//   const searchID = form.elements.value;
  
//   fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchID}&api_key=${API_KEY}`)
//     .then(response => {
//       return response.json()
//     })
//     .catch(error => {
//       console.log(error)
//     })
  

