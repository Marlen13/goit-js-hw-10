import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const select = document.querySelector('.breed-select');
// console.log(select)
// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY = 'live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw';
// const catInfo = document.querySelector('.cat-info')
// const loader = document.querySelector('.loader')


// fill field select from backend
fetchBreeds()
// loader.classList.add("unvisible")
.then(data => {
  console.log(data)
  const markup = data.map(({ id, name }) => {
    return `<option value=${id}>${name}</option>`
  })
  // console.log(markup)
  // select.classList.add('unvisible')
  // loader.classList.remove('unvisible')

  select.innerHTML = markup

  // loader.classList.add('unvisible')
})
//choose breed 
select.addEventListener('submit', onSearch);
function onSearch(e) {
  
  e.preventDefault()
  // const breedId = this.value;
  const breedId = e.target.elements.value;
 
  console.log(breedId);
  fetchCatByBreed(breedId)
    // loader.classList.add('unvisible')
    .then(cats => {
      console.log(cats)
      // function renderCatsList(breedId)
    })
    .catch(error => console.log(error));
      }
// function renderCatsList() {
//   const markup = users.map(({ url, cfa_url, name, }) => {
//     return `<img src="${cfa_url}" alt="${name}">`
//   }).join()

// select.classList.add('unvisible')
  // loader.classList.remove('unvisible')

// catInfo.insertAdjacentHTML("beforeend", markup)
// }