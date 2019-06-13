'use strict';
function Auto(modelis, variklis) {
    this.modelis = modelis;
    this.variklis = variklis;
}

var volvo = new Auto("v70", 2.5);

console.log(volvo.variklis);