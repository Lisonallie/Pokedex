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
    }
});

async function getPokemon() {
    let name = title.value;
    let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await axios.get(api);
    let number = response.data.id;
    let img = response.data.sprites.front_default;
    let typeOfPokemon = response.data.types[0].type.name;
    let secondType = response.data.types[1].type.name;
    
    img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
    pokeName.innerHTML = `#${number} ⠀⠀<strong>${name}</strong>`; 
    pokemon.src = img;
    
    
    for(i=0; i<response.data.types.length; i++) {
        // type.textContent += `${response.data.types[i].type.name} ⠀⠀ ⠀ `;

        if (i = 0) {
            type.innerHTML = `${typeOfPokemon}`;
        }
        else {
            type.innerHTML = `${typeOfPokemon}, ${secondType}`;
        }
    
        console.log(i);
        
    }


    // type.innerHTML = `${typeOfPokemon}, ${secondType}`;


    console.log(response.data);
    console.log(response.data.types[0].type.name);
    
    
    
    
    
}