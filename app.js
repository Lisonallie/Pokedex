let title = document.getElementById("title");
let pokemon = document.getElementById("pokeImg");
let type = document.getElementById("pokeType");
let moves = document.getElementById("pokeStat");
let pokeName = document.getElementById("name");

let evoImg = document.getElementById("earlier-evolution");
let evoName = document.getElementById("write-number");



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
        evoImg.classList.remove('size');
        pokemon.classList.remove('margin');
        checkEvolution();
        evoName.textContent = "";
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
    let number = responseTwo.data.id;
    let evoName2 = responseTwo.data.evolves_from_species.name;

    if (responseTwo.data.evolves_from_species === null) {
        return;
    }
    else {
        let name = title.value - 1;
        let api3 = `https://pokeapi.co/api/v2/pokemon/${name}`;
        let response3 = await axios.get(api3);
        let newNumber = response3.data.id;
        let newImg = response3.data.sprites.front_default;
        newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newNumber}.png`
        evoName.innerHTML = `#${number - 1}<br>${evoName2}`;
        evoImg.src = newImg;
        evoImg.classList.add('size');
        pokemon.classList.add('margin');
    }
}