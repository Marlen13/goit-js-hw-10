!function(){var n="https://api.thecatapi.com/v1",t="live_nRyBlc19ILgE4nLWfQo9Nn1yYwfBI4JaTQSD12pVrfB9zC5p2razV1tS3IpPtcIw";var o=document.querySelector(".breed-select");fetch("".concat(n,"/breeds?api_key=").concat(t)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).catch((function(n){console.log(n)})).then((function(n){console.log(n);var t=n.map((function(n){var t=n.id,o=n.name;return"<option value=".concat(t,">").concat(o,"</option>")}));o.innerHTML=t})),o.addEventListener("submit",(function(o){o.preventDefault();var e=o.target.value;console.log(e),(c=e,fetch("".concat(n,"/images/search?breed_ids=").concat(c,"&api_key=").concat(t)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).catch((function(n){console.log(n)}))).then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}));var c}))}();
//# sourceMappingURL=index.49da6c9d.js.map
