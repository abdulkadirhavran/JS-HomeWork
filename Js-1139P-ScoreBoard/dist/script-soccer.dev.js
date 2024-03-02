"use strict";

function plusScore(team) {
  /* team class'ını kastediyoruz */
  var scoreId = "score ".concat(team);
  var scoreElement = document.getElementById(scoreId);
  var score = parseInt(scoreElement.textContent);
  scoreElement.textContent = ++score;
}

function negativeScore(team) {
  var scoreElement = document.getElementById("score" + team);
  var currentScore = parseInt(scoreElement.innerText);

  if (currentScore > 0) {
    currentScore--;
    scoreElement.innerText = currentScore;
  } else {
    alert("Skor 0'dan küçük olamaz");
  }
}

document.getElementById("resetL").addEventListener("click", function () {
  document.getElementById("scoreL").innerText = "0";
});
document.getElementById("resetR").addEventListener("click", function () {
  document.getElementById("scoreR").innerText = "0";
});

function setScore(team) {
  var score = prompt("İstenilen Gol :");

  if (score !== null && !isNaN(score)) {
    var scoreNum = parseInt(score);

    if (Number.isInteger(scoreNum)) {
      document.getElementById("score".concat(team)).textContent = scoreNum;
    } else {
      alert("Lütfen Rakam Giriniz");
    }
  } else {
    alert("Geçersiz Değer");
  }
}