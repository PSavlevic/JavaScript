'use strict';
document.querySelector("input[type=submit]")
    .addEventListener("click", fn);

function fn() {
var inpt = document.getElementById("inptekstas").value;
var tekstas = document.createTextNode(inpt);
document.getElementById("app").prepend(tekstas);
}


