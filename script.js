// FUNCIONES REUTILIZABLES //
const renderLocationPokemon = function (areaEncountersURL) {
  pokemonRegion.innerHTML = "";
  pokemonRegion.innerHTML = `<span class="titulozonas">Algunas zonas donde se ubica</span>`;
  const arrayRegions = [];

  for (let i = 0; i < 3; i++) {
    let regionsIndex = Math.floor(Math.random() * areaEncountersURL.length);
    while (arrayRegions.indexOf(regionsIndex) != -1) {
      regionsIndex = Math.floor(Math.random() * areaEncountersURL.length);
    }
    arrayRegions.push[regionsIndex];
    pokemonRegion.innerHTML += `
                  <p class="regionstext">${areaEncountersURL[regionsIndex].location_area.name}</p>`;
  }
};

const renderMovesPokemon = function (data) {
  pokemonRandom4Moves.innerHTML = "";
  pokemonRandom4Moves.innerHTML = `<span class="titulomoves">Algunos movimientos de este Pokémon</span>`;
  const arrayMoves = [];
  for (let i = 0; i < 4; i++) {
    let movesIndex = Math.floor(Math.random() * data.moves.length);
    while (arrayMoves.indexOf(movesIndex) != -1) {
      movesIndex = Math.floor(Math.random() * data.moves.length);
    }
    arrayMoves.push[movesIndex];
    pokemonRandom4Moves.innerHTML += `
                  <p class="movestext">${data.moves[movesIndex].move.name}</p>
                `;
  }
};

const renderPokemonData = function (data) {
  //    const name = data.name;
  //    const number = data.id ;
  //    const sprite1 = data.sprites.front_default;
  //    const sprite1shiny = data.sprites.front_shiny;
  //    const types = data.types;
  //    const stats = data.stats;
  //    const weight = data.weight;
  //    const helditems = data.held_items;
  const { name, id, sprites, types, stats, weight, held_items } = data;
  console.log(data);
  //    PRINT POKEMON NAME IN HTML
  pokemonNameText.textContent = name.toUpperCase();
  // pokemonName.innerHTML = `<span class="textnamemain>${name.toUpperCase()}</span>`;
  //    PRINT POKEMON SPRITES IN HTML
  for (const item in sprites.versions) {
    if (item == "generation-v") {
      const gen5ImgDefault = sprites.versions[item]["black-white"].front_default;
      gen5ImgDefault ? (pokemonGen5Img.src = sprites.versions[item]["black-white"].front_default) : (pokemonGen5Img.src = "pikachuSombra.png");
      const gen5ImgDefaultShiny = sprites.versions[item]["black-white"].front_shiny;
      gen5ImgDefaultShiny ? (pokemonGen5ImgShiny.src = sprites.versions[item]["black-white"].front_shiny) : (pokemonGen5ImgShiny.src = "pikachuSombra.png");
        // pokemonGen5Img.src = sprites.versions[item]["black-white"].front_default;
        // pokemonGen5ImgShiny.src =
        //   sprites.versions[item]["black-white"].front_shiny;
    }

    if (item == "generation-iv") {
      const gen4ImgDefault =
        sprites.versions[item]["diamond-pearl"].front_default;
      gen4ImgDefault
        ? (pokemonGen4Img.src = gen4ImgDefault)
        : (pokemonGen4Img.src = "pikachuSombra.png");
      // pokemonGen4Img.src =
      //   sprites.versions[item]["diamond-pearl"].front_default;
      const gen4ImgDefaultShiny =
        sprites.versions[item]["diamond-pearl"].front_shiny;
      gen4ImgDefault
        ? (pokemonGen4ImgShiny.src = gen4ImgDefaultShiny)
        : (pokemonGen4ImgShiny.src = "pikachuSombra.png");
      // pokemonGen4ImgShiny.src =
      //   sprites.versions[item]["diamond-pearl"].front_shiny;
    }

    if (item == "generation-iii") {
      const gen3ImgDefault = sprites.versions[item]["emerald"].front_default;
      gen3ImgDefault
        ? (pokemonGen3Img.src = gen3ImgDefault)
        : (pokemonGen3Img.src = "pikachuSombra.png");
      // pokemonGen3Img.src = sprites.versions[item]["emerald"].front_default;
      const gen3ImgShinyDefault = sprites.versions[item]["emerald"].front_shiny;
      gen3ImgShinyDefault
        ? (pokemonGen3ImgShiny.src = gen3ImgShinyDefault)
        : (pokemonGen3ImgShiny.src = "pikachuSombra.png");
    }
  }

  // PRINT POKEMON TYPES IN HTML
  pokemonType1.innerHTML = `<div class = "titletypestext">Tipos del Pokémon</div>`;
  pokemonType1.innerHTML += `<span class = "titletypes1">Tipo 1: ${types[0].type.name}</span>`;
  pokemonType2.innerHTML =
    types.length > 1
      ? `<span class = "titletypes1">Tipo 2: ${types[1].type.name}<span class = "titletypes1">`
      : "";

  // PRINT POKEMON REGION IN HTML
  const areaEncountersURL = data.location_area_encounters;

  // console.log(areaEncountersURL)

  const searchLocation = function (event) {
    fetch(areaEncountersURL)
      .then(function (data) {
        return data.json();
      })
      .then(function (response) {
        renderLocationPokemon(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //    pokemonGen4.textContent = ` Pokédex Number: ${id}`;
  //    pokemonGen4.textContent =

  //    pokemonName1.textContent = name.toUpperCase();
  //    pokemonNumber1.textContent = ` Pokédex Number: ${id}`;
  //    pokemonImage1.src = sprites.front_default;
  //    pokemonImage1Shiny.src = sprites.front_shiny;
  // pokemonType1.textContent = type;
  // pokemonStats1.textContent = stats;
  // pokemonHeldItems1.textContent = helditems;
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////

  //    renderPokemonTypes1(types);
  renderPokemonStats(stats);
  searchLocation(data);
  renderMovesPokemon(data);
};

// PRINT POKEMON STATS IN HTML
const renderPokemonStats = function (stats) {
  pokemonStats.innerHTML = "";
  pokemonStats.innerHTML = `<span class="titulostats">Estadísticas del Pokémon</span>`;
  stats.forEach((stat, index) => {
    const statElement = document.createElement("div");
    statElement.classList.add("statelement");
    const statElementName = document.createElement("span");
    const statElementAmount = document.createElement("span");
    statElementName.textContent = stat.stat.name;
    statElementAmount.textContent = stat.base_stat;
    const statElementSpace = document.createElement("span");
    statElementSpace.textContent = `\u00A0 ---> \u00A0 `;
    statElementName.textContent;
    statElement.appendChild(statElementName);
    statElement.appendChild(statElementSpace);
    statElement.appendChild(statElementAmount);
    pokemonStats.appendChild(statElement);
  });
};

// PARTE 1 //

const pokemonNameText = document.querySelector(".divpokemonnametext");
const pokemonName = document.querySelector(".divpokemonimgs_name");
const pokemonGen5 = document.querySelector(".divpokemonimgs_gen5");
const pokemonGen4 = document.querySelector(".divpokemonimgs_gen4");
const pokemonGen3 = document.querySelector(".divpokemonimgs_gen3");
const pokemonGen5Img = document.querySelector(".gen5img");
const pokemonGen5ImgShiny = document.querySelector(".gen5imgshiny");
const pokemonGen4Img = document.querySelector(".gen4img");
const pokemonGen4ImgShiny = document.querySelector(".gen4imgshiny");
const pokemonGen3Img = document.querySelector(".gen3img");
const pokemonGen3ImgShiny = document.querySelector(".gen3imgshiny");

// PARTE 2 //

const pokemonType1 = document.querySelector(".divpokemondata_type1");
const pokemonType2 = document.querySelector(".divpokemondata_type2");
const pokemonStats = document.querySelector(".divpokemondata_stats");
const pokemonRegion = document.querySelector(".divpokemondata_region");
const pokemonRandom4Moves = document.querySelector(
  ".divpokemondata_random4moves"
);

// PARTE 3 //

const inputTextPokemon = document.querySelector(".inputtextpokemon");
const data = "";
const panelControlBuscar = document.querySelector(".divcontrolpanel_buscar");
const errorDiv = document.querySelector(".error");
const btnAleatorio = document.querySelector(".btnpokemonaleatorio");

// BUSCAR POKEMON

const searchPokemon = function (event) {
  event.preventDefault();
  if (event.key == "Enter") {
    const { value } = event.target;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(function (data) {
        return data.json();
      })
      .then(function (response) {
        response = renderPokemonData(response);
      })
      .catch(function (error) {
        errorDiv.textContent = "¡Ese Pokemon no existe! 😞";
        setTimeout(() => {
          errorDiv.textContent = "";
        }, 2000);
      });
  }
};

// POKEMON POR DEFECTO

inputTextPokemon.addEventListener("keyup", searchPokemon);

// GENERAR POKEMON ALEATORIO

const randomPokemon = function (event) {
  event.preventDefault();
  const value = Math.floor(Math.random() * 898) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      response = renderPokemonData(response);
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

window.addEventListener("load", randomPokemon);
btnAleatorio.addEventListener("click", randomPokemon);

// GENERAR POKEMON ALEATORIOS SEGUN TIPO
let typeID = "";

// GENERAR POKEMON ALEATORIO DE TIPO NORMAL
const buttonNormal = document.querySelector(".btnnormal");
const normalTypeID = function () {
  typeID = 1;
};
// GENERAR POKEMON ALEATORIO DE TIPO LUCHA
const buttonLucha = document.querySelector(".btnlucha");
const luchaTypeID = function () {
  typeID = 2;
};
// GENERAR POKEMON ALEATORIO DE TIPO VUELO
const buttonVuelo = document.querySelector(".btnvuelo");
const vueloTypeID = function () {
  typeID = 3;
};
// GENERAR POKEMON ALEATORIO DE TIPO VENENO
const buttonVeneno = document.querySelector(".btnveneno");
const venenoTypeID = function () {
  typeID = 4;
};
// GENERAR POKEMON ALEATORIO DE TIPO TIERRA
const buttonTierra = document.querySelector(".btntierra");
const tierraTypeID = function () {
  typeID = 5;
};
// GENERAR POKEMON ALEATORIO DE TIPO ROCA
const buttonRoca = document.querySelector(".btnroca");
const rocaTypeID = function () {
  typeID = 6;
};
// GENERAR POKEMON ALEATORIO DE TIPO BICHO
const buttonBicho = document.querySelector(".btnbicho");
const bichoTypeID = function () {
  typeID = 7;
};
// GENERAR POKEMON ALEATORIO DE TIPO FANTASMA
const buttonFantasma = document.querySelector(".btnfantasma");
const fantasmaTypeID = function () {
  typeID = 8;
};
// GENERAR POKEMON ALEATORIO DE TIPO ACERO
const buttonAcero = document.querySelector(".btnacero");
const aceroTypeID = function () {
  typeID = 9;
};
// GENERAR POKEMON ALEATORIO DE TIPO FUEGO
const buttonFuego = document.querySelector(".btnfuego");
const fuegoTypeID = function () {
  typeID = 10;
};

// GENERAR POKEMON ALEATORIO DE TIPO AGUA
const buttonAgua = document.querySelector(".btnagua");
const aguaTypeID = function () {
  typeID = 11;
};

// GENERAR POKEMON ALEATORIO DE TIPO PLANTA
const buttonPlanta = document.querySelector(".btnplanta");
const plantaTypeID = function () {
  typeID = 12;
};

// GENERAR POKEMON ALEATORIO DE TIPO ELECTRICO
const buttonElectrico = document.querySelector(".btnelectrico");
const electricoTypeID = function () {
  typeID = 13;
};

// GENERAR POKEMON ALEATORIO DE TIPO PSIQUICO
const buttonPsiquico = document.querySelector(".btnpsiquico");
const psiquicoTypeID = function () {
  typeID = 14;
};

// GENERAR POKEMON ALEATORIO DE TIPO HIELO
const buttonHielo = document.querySelector(".btnhielo");
const hieloTypeID = function () {
  typeID = 15;
};

// GENERAR POKEMON ALEATORIO DE TIPO DRAGON
const buttonDragon = document.querySelector(".btndragon");
const dragonTypeID = function () {
  typeID = 16;
};

// GENERAR POKEMON ALEATORIO DE TIPO OSCURO
const buttonOscuro = document.querySelector(".btnoscuro");
const oscuroTypeID = function () {
  typeID = 17;
};

// GENERAR POKEMON ALEATORIO DE TIPO HADA
const buttonHada = document.querySelector(".btnhada");
const hadaTypeID = function () {
  typeID = 18;
};

///////////////////
const randomPokemon1 = function (event) {
  event.preventDefault();

  const url = `https://pokeapi.co/api/v2/type/${typeID}`;

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      const pokemonElectric = response.pokemon;
      const randomNumber1 = Math.floor(Math.random() * 89) + 1;

      const randomPokemonElectric = pokemonElectric[randomNumber1];
      console.log(randomPokemonElectric);
      const urlRandomPokemon = randomPokemonElectric.pokemon.url;
      fetch(urlRandomPokemon)
        .then(function (data) {
          return data.json();
        })
        .then(function (response) {
          renderPokemonData(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      // response = renderPokemonData1(response)
    })
    .catch(function (error) {
      console.log(error);
    });
};

// BUTTONS EVENT LISTENERS
buttonNormal.addEventListener("click", normalTypeID);
buttonNormal.addEventListener("click", randomPokemon1);
//
buttonLucha.addEventListener("click", luchaTypeID);
buttonLucha.addEventListener("click", randomPokemon1);
//
buttonVuelo.addEventListener("click", vueloTypeID);
buttonVuelo.addEventListener("click", randomPokemon1);
//
buttonVeneno.addEventListener("click", venenoTypeID);
buttonVeneno.addEventListener("click", randomPokemon1);
//
buttonTierra.addEventListener("click", tierraTypeID);
buttonTierra.addEventListener("click", randomPokemon1);
//
buttonRoca.addEventListener("click", rocaTypeID);
buttonRoca.addEventListener("click", randomPokemon1);
//
buttonBicho.addEventListener("click", bichoTypeID);
buttonBicho.addEventListener("click", randomPokemon1);
//
buttonFantasma.addEventListener("click", fantasmaTypeID);
buttonFantasma.addEventListener("click", randomPokemon1);
//
buttonAcero.addEventListener("click", aceroTypeID);
buttonAcero.addEventListener("click", randomPokemon1);
//
buttonFuego.addEventListener("click", fuegoTypeID);
buttonFuego.addEventListener("click", randomPokemon1);
//
buttonAgua.addEventListener("click", aguaTypeID);
buttonAgua.addEventListener("click", randomPokemon1);
//
buttonPlanta.addEventListener("click", plantaTypeID);
buttonPlanta.addEventListener("click", randomPokemon1);
//
buttonElectrico.addEventListener("click", electricoTypeID);
buttonElectrico.addEventListener("click", randomPokemon1);
//
buttonPsiquico.addEventListener("click", psiquicoTypeID);
buttonPsiquico.addEventListener("click", randomPokemon1);
//
buttonPsiquico.addEventListener("click", psiquicoTypeID);
buttonPsiquico.addEventListener("click", randomPokemon1);
//
buttonHielo.addEventListener("click", hieloTypeID);
buttonHielo.addEventListener("click", randomPokemon1);
//
buttonDragon.addEventListener("click", dragonTypeID);
buttonDragon.addEventListener("click", randomPokemon1);
//
buttonOscuro.addEventListener("click", oscuroTypeID);
buttonOscuro.addEventListener("click", randomPokemon1);
//
buttonOscuro.addEventListener("click", oscuroTypeID);
buttonOscuro.addEventListener("click", randomPokemon1);
//
buttonHada.addEventListener("click", hadaTypeID);
buttonHada.addEventListener("click", randomPokemon1);
//
