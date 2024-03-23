const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 17,
    name: "Wedge Antilles",
    pic: "https://static.wikia.nocookie.net/starwars/images/7/7e/WedgesEntireHead-ROTJ.png/revision/latest?cb=20200511024543",
    homeworld: "corellia",
  },
  {
    id: 18,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 19,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 20,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const showBtton = document.getElementById("btton"); /* Button'a ulaştık */

showBtton.style.backgroundColor = "#18903C";

let renderStatus = true;

function renderCharacters() {
  const characterRow =
    document.getElementById(
      "characterRow"
    ); /* Bilgileri html de basacağımız div id'si */

  if (renderStatus === true) {
    characterRow.innerHTML += characters.map(function (character) {
      return `
      <div class="card col-lg-4 col-md-6 mb-2 text-center">
       <img src="${character.pic}" class="card-img-top" alt="characters">
       <div class="card-body">
         <h2 class="card-title">${character.name}</h2>
         <p class="card-text text-black">Planet : ${
           character.homeworld || null
         }</p>
       </div>
      </div> `;
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

/* ++++---  PART 2 ----+++++ */

let homeworldRaw = characters.map((character) => character.homeworld ?? "other");
//console.log(homeworldRaw);

let homeworldUnique = [...new Set(homeworldRaw)];
//console.log(homeworldUnique);

let homeworldLowCase = homeworldUnique.map((item) => item.toLowerCase());
//console.log(homeworldLowCase);

let homeworld = homeworldLowCase;

let radioInput = document.querySelector(".homeworldList");

for (i = 0; i < homeworld.length; i++) {
  radioInput.innerHTML += ` 
  <div class="form-check form-check-inline">
   <input class="form-check-input" type="radio" name="flexRadioDefault" id="inlineRadio${i}" value = "${homeworld[i]}">
   <label class="form-check-label" for="inlineRadio${i}">
   ${homeworld[i]}
   </label>
  </div>
   `;
}

radioInput.addEventListener("change", function (event) {
  const selectedHomeworld = event.target.value;

  row.innerHTML = "";
  characters.filter(function (character) {
    characters.homeworld = homeworld;
    if (character.homeworld === selectedHomeworld) {
      row.innerHTML += `
            <div class="card col-lg-3 col-md-4 mb-3 card-build text-center" >
              <img src="${character.pic}" class="card-img-top card-img " >
              <div class="card-body">
                <h5 class="card-title text-center text-white">${character.name}</h5>
              </div>
              <ul class="list-group list-group-flush">
               <li class="list-group-item">id : ${character.id}</li>
               <li class="list-group-item">Planet: ${character.homeworld}</li>
              </ul>
            </div>
          `;
    }
  });
});


