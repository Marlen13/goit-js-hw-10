import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import 'slim-select/dist/slimselect.css';
function create() {
  new SlimSelect({
    select: '#selectElement',
    events: { afterChange: (newVal) => onSearch(newVal)}
  })
}


const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info')
const loader = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');


// fill field select from backend
fetchBreeds()
.then(data => {
  const markup = data.map(({ id, name }) => {
    return `<option value=${id}>${name}</option>`
  }).join('');
  select.innerHTML = markup;
  select.classList.remove('unvisible');
  create();
}).catch(error => {
  errorMessage.classList.remove('unvisible');
  Notiflix.Notify.failure(error.message)
}).finally(() => {
  loader.classList.add('unvisible');
})
//choose breed 

function onSearch(data) {

  catInfo.innerHTML = '';
  loader.classList.remove('unvisible')
  const breedId = data[0].value;
  errorMessage.classList.add('unvisible')

  fetchCatByBreed(breedId)
    .then((data) => {
      // console.log(data)
     renderCatsList(data)
    }).catch(error => {
      errorMessage.classList.remove('unvisible');
     Notiflix.Notify.failure(error.message)
    }).finally(() => {
      loader.classList.add('unvisible')
    })
}
function renderCatsList(cats) {
  const url = cats[0].url;
  const { name, temperament, description } = cats[0].breeds[0];
  const markup = `<img src="${url}" alt="${name}" width="400"><div class="description">
        <h1>${name}</h1>
        <p>${description}</p>
          <p class="cat-character"><b> Temperament: </b>${temperament}</p>
         </div>`
  
  // console.log(url);
  catInfo.innerHTML = markup;
}
