let nameAndNumber = document.getElementById("title");
let pokemon = document.getElementById("pokeImg");
let evolution = document.getElementById("evolution");
let type = document.getElementById("pokeType");
let stat = document.getElementById("pokeStat");
let name = title.value;

title.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
    }
});

let api = `https://pokeapi.co/api/v2/pokemon/${name}`;