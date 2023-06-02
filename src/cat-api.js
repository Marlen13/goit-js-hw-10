const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw';


export function fetchBreeds() {
 return  fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })   
}
export function fetchCatByBreed(breedID) {
    // const param = new URLSearchParams({
    //     api_key: API_KEY,
    //     breed_ids: breedID,
    //  })
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
 }