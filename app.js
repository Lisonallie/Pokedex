let title = document.getElementById("title");
let pokemon = document.getElementById("pokeImg");
let evolution = document.getElementById("evolution");
let type = document.getElementById("pokeType");
let moves = document.getElementById("pokeStat");
let pokeName = document.getElementById("name");

let evoImg1 =document.getElementById("earlier-evolution");
let evoImg2 = document.getElementById("second-earlier-evolution");
let evoName1 = document.getElementById("write-number");
let evoName2 = document.getElementById("write-number-2");



title.addEventListener("input", function () {
    title.value = title.value.toLowerCase();

});

title.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        getPokemon();
        let name = title.value
        let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
        urlExists(api);
        type.textContent = "";
        moves.textContent = "";
        checkEvolution();
    }
});

async function getPokemon() {
    let name = title.value
    let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await axios.get(api);
    let number = response.data.id;
    let call = response.data.name;
    let img = response.data.sprites.front_default;

    if (name > 802) {
        alert("The Pokémon fled 🚫.")
    }

    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
    pokeName.innerHTML = `#${number} ⠀⠀<strong>${call}</strong>`;

    pokemon.src = img;

    for (i = 0; i < response.data.types.length; i++) {
        type.innerHTML += `${response.data.types[i].type.name} ⠀`;

    }

    for (i = 0; i < response.data.moves.length; i++) {
        moves.innerHTML += `${response.data.moves[i].move.name}<br>`
        if (i > 3) {
            return;
        }
    }

}

function urlExists(api) {
    let http = new XMLHttpRequest();
    http.open('GET', api, false);
    http.send();
    if (http.status === 404) {
        alert("The Pokémon fled 🚫.")
    }
    
}


async function checkEvolution() {
    let name = title.value
    let apiTwo = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    let responseTwo = await axios.get(apiTwo);
    console.log(responseTwo.data);
    console.log(responseTwo.data.evolves_from_species);

    if (responseTwo.data.evolves_from_species === null) {
        return;
    }
    else {

    }
}