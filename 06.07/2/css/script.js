'use strict';
document.querySelector("input[type=submit]")
.addEventListener("click", x);

function fn(vardas, skc) {
    for (let i = 0; i < skc; i++){
        var hBlokas = document.createElement("h1");
        document.body.append(hBlokas);
        hBlokas.innerHTML = vardas;
    }
    return vardas;
}

function x() {
    var vardas = document.getElementById("vardas").value;
    var skc = document.getElementById("skc").value;
    var y = fn(vardas, skc);
    return y;
}

