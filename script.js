$(document).ready(function(){
    $("#pokemon_btn").click(function(e){
        e.preventDefault();

        //challenge 1 solution
        let endpoint = "https://pokeapi.co/api/v2/pokemon/";
        let userPokemon = $("input:text").val();

        let apiRequest = $.get(`${endpoint}${userPokemon}`)

        apiRequest.done(function(data){
        let pokemon = {
            name: "",
            spriteImg: "",
            type: "",
            flavor_text: ""
            
        }    
        console.log(data);

        pokemon.name = data.species.name;
        pokemon.spriteImg = data.sprites.front_shiny;
        pokemon.type = data.types[0].type.name;
        

        $(".container").prepend(`<h3>Type : ${pokemon.type}</h3>`);
        $(".container").prepend(`<h3>Name : ${pokemon.name}</h3>`);
        $(".container").prepend(`<img src="${pokemon.spriteImg}"</img>`);
        
        });

    })    



});