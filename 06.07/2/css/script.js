'use strict';
document.querySelector("input[type=submit]")
.addEventListener("click", x);

function fn(x, y) {
    for (let i = 0; i < y; i++){
        var hBlokas = document.createElement("h1");
        document.body.append(hBlokas);
        hBlokas.innerHTML = x;
    }
    return x;
}

function x() {
    var vardas = document.getElementById("vardas").value;
    var skc = document.getElementById("skc").value;
    var y = fn(vardas, skc);
    return y;
}

