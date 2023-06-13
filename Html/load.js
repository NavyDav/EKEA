var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader-fullscreen").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}