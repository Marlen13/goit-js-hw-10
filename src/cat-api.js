export function fetchBreeds() {
 return  fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
     .catch(error => {
         console.log(error)
     })
    
}
