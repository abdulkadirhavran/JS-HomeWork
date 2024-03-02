let value = 0;

function increase() {
  document.getElementById("increaseNumber").innerHTML = ++value;
  if (value == 10) {
    alert("Fazla telefona baktın odağını kaybetmemelisin");
  } else if (value == 20) {
    alert("Biraz müzik iyi gelir");
    /* 20'ye gelince otomatik music çalması için şart bloğu yaptım */
    if(value == 20){
      classicMusic.play();
    }
  }
}

const classicMusic = document.getElementById("musicAudio");

function playAudio() {
  classicMusic.play();
}

function pauseAudio() {
  classicMusic.pause();
}








