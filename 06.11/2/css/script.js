'use strict';
function fn(){
    var nuo = Number(document.getElementById("nuo").value);
    var iki = Number(document.getElementById("iki").value);
    myFunction(nuo, iki)
}

function myFunction(nuo, iki) {

    for (let i = nuo; i <= iki; i++) {
    var tras = document.createElement("tr");
    document.querySelector("table").append(tras);
        var tdas1 = document.createElement("td");
        tras.append(tdas1);
        var tdas2 = document.createElement("td");
        tras.append(tdas2);
        tdas1.innerHTML = i;
        tdas2.innerHTML = i * 1.8 +32;
    }
}

