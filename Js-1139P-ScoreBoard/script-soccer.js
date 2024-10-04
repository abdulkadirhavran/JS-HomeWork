let scoreL = 0;


function increaseScoreL() {
  document.getElementById("scoreTeam1").innerHTML = ++scoreL;
}



function promptL() {
  let value = prompt("Lütfen bir skor girin:");
  if (value !== null && !isNaN(value)) {
    const scoreNum = parseInt(value);
    if (Number.isInteger(scoreNum)) {
      document.getElementById("scoreTeam1").textContent = scoreNum;
    } else {
      alert("Lütfen Rakam Giriniz");
    }
  } else {
    alert("Skor sayı türünde olmalı");
    document.getElementById("scoreTeam1").innerHTML = NaN;
  }
}

function resetL() {
  if (scoreL != 0) {
    document.getElementById("scoreTeam1").innerHTML = 0;
    
  }
}
function decreaseScoreL() {
  document.getElementById("scoreTeam1").innerText = --scoreL;
  if (scoreL <= 0) {
    document.getElementById("scoreTeam1").innerHTML = 0;
    scoreL = 0;
  }
}

/* ------------Team2 Codes------------- */

let scoreR = 0;


function increaseScoreR() {
  document.getElementById("scoreTeam2").innerHTML = ++scoreR;
}

function decreaseScoreR() {
  document.getElementById("scoreTeam2").innerText = --scoreR;
  if (scoreR <= 0) {
    document.getElementById("scoreTeam2").innerHTML = 0;
    scoreR = 0;
  }
}

function promptR() {
  let value = prompt("Lütfen bir skor girin:");
  if (value !== null && !isNaN(value)) {
    const scoreNum = parseInt(value);
    if (Number.isInteger(scoreNum)) {
      document.getElementById("scoreTeam2").textContent = scoreNum;
    } else {
      alert("Lütfen Rakam Giriniz");
    }
  } else {
    alert("Skor sayı türünde olmalı");
    document.getElementById("scoreTeam2").innerHTML = NaN;
  }
}

function resetR() {
  if (scoreR != 0) {
    let scoreZero=document.getElementById("scoreTeam2");
    scoreZero.innerHTML = 0;
  }
}
