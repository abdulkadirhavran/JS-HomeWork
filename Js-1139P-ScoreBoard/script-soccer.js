function plusScore(team) { /* team class'ını kastediyoruz */
    const scoreId = `score ${team}`;
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.textContent);
    scoreElement.textContent = ++score;
  }
  
  function negativeScore(team) {
    const scoreElement = document.getElementById("score" + team);
    let currentScore = parseInt(scoreElement.innerText);
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
    const score = prompt("İstenilen Gol :");
    if (score !== null && !isNaN(score)) {
      const scoreNum = parseInt(score);
      if (Number.isInteger(scoreNum)) {
        document.getElementById(`score${team}`).textContent = scoreNum;
      } else {
        alert("Lütfen Rakam Giriniz");
      }
    } else {
      alert("Geçersiz Değer");
    }
  }