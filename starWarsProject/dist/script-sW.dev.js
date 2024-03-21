"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var characters = [{
  id: 1,
  name: "Luke Skywalker",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
  homeworld: "tatooine"
}, {
  id: 2,
  name: "C-3PO",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
  homeworld: "tatooine"
}, {
  id: 3,
  name: "R2-D2",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
  homeworld: "naboo"
}, {
  id: 4,
  name: "Darth Vader",
  pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
  homeworld: "tatooine"
}, {
  id: 5,
  name: "Leia Organa",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
  homeworld: "alderaan"
}, {
  id: 6,
  name: "Owen Lars",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
  homeworld: "tatooine"
}, {
  id: 7,
  name: "Beru Whitesun lars",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
  homeworld: "tatooine"
}, {
  id: 8,
  name: "R5-D4",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
  homeworld: "tatooine"
}, {
  id: 9,
  name: "Biggs Darklighter",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
  homeworld: "tatooine"
}, {
  id: 10,
  name: "Obi-Wan Kenobi",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
  homeworld: "stewjon"
}, {
  id: 11,
  name: "Anakin Skywalker",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
  homeworld: "tatooine"
}, {
  id: 12,
  name: "Wilhuff Tarkin",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
  homeworld: "eriadu"
}, {
  id: 13,
  name: "Chewbacca",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
  homeworld: "kashyyyk"
}, {
  id: 14,
  name: "Han Solo",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
  homeworld: "corellia"
}, {
  id: 15,
  name: "Greedo",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
  homeworld: "Rodia"
}, {
  id: 16,
  name: "Jabba Desilijic Tiure",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
  homeworld: "tatooine"
}, {
  id: 17,
  name: "Wedge Antilles",
  pic: "https://static.wikia.nocookie.net/starwars/images/7/7e/WedgesEntireHead-ROTJ.png/revision/latest?cb=20200511024543",
  homeworld: "corellia"
}, {
  id: 18,
  name: "Jek Tono Porkins",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
  homeworld: "bestine"
}, {
  id: 19,
  name: "Yoda",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
}, {
  id: 20,
  name: "Palpatine",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
  homeworld: "naboo"
}];
var showBtton = document.getElementById("btton");
/* Button'a ulaştık */

showBtton.style.backgroundColor = "#18903C";
var renderStatus = true;

function renderCharacters() {
  var characterRow = document.getElementById("characterRow");
  /* Bilgileri html de basacağımız div id'si */

  if (renderStatus === true) {
    characterRow.innerHTML += characters.map(function (character) {
      return "\n      <div class=\"card col-lg-4 col-md-6 mb-2 text-center\">\n       <img src=\"".concat(character.pic, "\" class=\"card-img-top\" alt=\"characters\">\n       <div class=\"card-body\">\n         <h2 class=\"card-title\">").concat(character.name, "</h2>\n         <p class=\"card-text text-black\">Planet : ").concat(character.homeworld || null, "</p>\n       </div>\n      </div>");
    });
    showBtton.textContent = "Hide Characters";
    showBtton.style.backgroundColor = "red";
  } else {
    characterRow.innerHTML = "";
    showBtton.textContent = "Show Characters Again";
    showBtton.style.backgroundColor = "#18903C";
  }

  renderStatus = !renderStatus;
}

var homeworldRaw = characters.map(function (character) {
  return character.homeworld;
}); //console.log(homeworldRaw);

var homeworldUnique = _toConsumableArray(new Set(homeworldRaw)); //console.log(homeworldUnique);


var homeworldLowCase = homeworldUnique.map(function (item) {
  return item.toLowerCase();
}); //console.log(homeworldLowCase);

var homeworld = homeworldLowCase;
var radioInput = document.querySelector(".homeworldList");

for (i = 0; i < homeworld.length; i++) {
  radioInput.innerHTML += " \n  <div class=\"form-check form-check-inline\">\n   <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"inlineRadio".concat(i, "\" value = \"").concat(homeworld[i], "\">\n   <label class=\"form-check-label\" for=\"inlineRadio").concat(i, "\">\n   ").concat(homeworld[i], "\n   </label>\n  </div>\n   ");
}

radioInput.addEventListener("change", function (event) {
  var selectedHomeworld = event.target.value;
  row.innerHTML = "";
  characters.filter(function (character) {
    characters.homeworld = homeworld;

    if (character.homeworld === selectedHomeworld) {
      row.innerHTML += "\n            <div class=\"card col-lg-3 col-md-4 mb-3 card-build text-center\" >\n            <img src=\"".concat(character.pic, "\" class=\"card-img-top card-img \" >\n            <div class=\"card-body\">\n            <h5 class=\"card-title text-center text-white\">").concat(character.name, "</h5>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">id : ").concat(character.id, "</li>\n            <li class=\"list-group-item\">").concat(character.homeworld, "</li>\n            </ul>\n        </div>\n          ");
    }
  });
});