'use strict';

let button = document.querySelectorAll("input")[3];
button.addEventListener("click", fn);

let ivestasArray = [];
let lentele = document.querySelector("tbody");

function constructor(name, surname) {
    this.name = name;
    this.surname = surname;
}

var naujas = new constructor("Vardenis", "Pavardenis");

function fn() {

    let radio = document.querySelector("input[type=radio]").checked;
    let fullName = document.querySelectorAll("input")[0].value;
    let edited = document.
    let name = fullName.split(fullName.name)[0];
    let surname = fullName.split(fullName.surname)[1];
    if(radio === true){
        ivestasArray.unshift([name, surname]);
    }
    else {
        ivestasArray.push([name, surname]);
    }
    spausdink(ivestasArray);
}

function spausdink(kazkoksArray) {
    lentele.innerHTML = "";
    kazkoksArray.forEach(function(value, index) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        tr.append(td1, td2, td3);
        lentele.append(tr);
        td1.innerHTML = index;
        td2.innerHTML = value[0];
        td3.innerHTML = value[1];
    });
}

let sortByName = document.querySelectorAll("input")[4];
sortByName.addEventListener("click", sortinamByName);

function sortinamByName(){
    ivestasArray.sort();
    spausdink(ivestasArray)
}

let sortBySurname = document.querySelectorAll("input")[5];
sortBySurname.addEventListener("click", sortinamBySurname);

function sortinamBySurname(){
    ivestasArray.sort(function(a, b){
        return (a[1] > b[1]) ? 1 : -1;
    });
    spausdink(ivestasArray)
}

