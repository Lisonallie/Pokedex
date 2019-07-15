let title = document.getElementById("title");
let pokemon = document.getElementById("pokeImg");
let evolution = document.getElementById("evolution");
let type = document.getElementById("pokeType");
let stat = document.getElementById("pokeStat");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");


title.addEventListener("input", function (){
    title.value = title.value.toLowerCase();
    
});

title.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        getPokemon();
        type.textContent = "";
        stat.textContent = "";
    }
});

async function getPokemon() {
    let name = title.value;
    let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await axios.get(api);
    let number = response.data.id;
    let img = response.data.sprites.front_default;
    console.log(response.data);
    

    img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
    pokeName.innerHTML = `#${number} ⠀⠀<strong>${name}</strong>`; 
    pokemon.src = img;

    for (i = 0; i < response.data.types.length; i++) {
        type.innerHTML += `${response.data.types[i].type.name} ⠀`;
    
    }
    
    for (i = 0; i < response.data.moves.length; i++) {
        stat.innerHTML += `${response.data.moves[i].move.name}<br>`
        if (i > 3) {
            return;
        }
    }
    
    
    
}