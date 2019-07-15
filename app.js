let title = document.getElementById("title");
let pokemon = document.getElementById("pokeImg");
let evolution = document.getElementById("evolution");
let type = document.getElementById("pokeType");
let stat = document.getElementById("pokeStat");

title.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        getPokemon();
    }
});

async function getPokemon() {
    let name = title.value;
    let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await axios.get(api);
    console.log(response);
    console.log(name);
    console.log(api);
    
    
}