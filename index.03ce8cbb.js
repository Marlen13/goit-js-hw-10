fetch("https://api.thecatapi.com/v1/breeds?api_key=live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e);const t=document.querySelector(".breed-select"),n=e.map({id:id,name:name});t.innerHTML=n})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.03ce8cbb.js.map
