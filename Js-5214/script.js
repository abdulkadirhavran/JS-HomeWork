function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.className === "topnav") {
    x.classList.add("responsive");
  } else {
    x.className = "topnav";
  }
}
