function e(e){const t=new URLSearchParams({api_key:"live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw",breed_ids:e});return fetch(`https://api.thecatapi.com/v1/images/search?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log(e)}))}const t=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds?api_key=live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log(e)})).then((e=>{console.log(e);const n=e.map((({id:e,name:t})=>`<option value=${e}>${t}</option>`));t.innerHTML=n})),t.addEventListener("submit",(function(t){t.preventDefault();const n=t.target.elements.value;console.log(n),e(n).then((e=>{console.log(e)})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.40465f42.js.map
