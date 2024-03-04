let value = 0;

function increase() {
  document.getElementById("increaseNumber").innerHTML = ++value;
  if (value === 11) {
    alert("Fazla telefona baktın odağını kaybetmemelisin");
  } else if (value === 21) {
    alert("Biraz müzik iyi gelir");
    /* 20'ye gelince otomatik music çalması için şart bloğu yaptım */
    if(value == 21){
      classicMusic.play();
    }
  }else if (value == 31){
    prompt("Dikkatinizi neden toplayamıyorsunuz? Açıklarmısınız :");
  }
}

const classicMusic = document.getElementById("musicAudio");

function playAudio() {
  classicMusic.play();
}

function pauseAudio() {
  classicMusic.pause();
}








