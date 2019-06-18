"use strict";
let table = document.querySelector("table");
let submit = document.querySelector("input[type=submit]");
submit.addEventListener("click", fn);
let clear = () => {
  table.innerHTML = "";
};
var del = document.getElementById("del");
del.addEventListener("click", remove);

var globalArray = [];
function fn() {
  var miniArray = [];
  let task = document.querySelector("input[type=text]").value;
  miniArray.push(task);
  globalArray.push(miniArray);
  createTable();
}

function createTable() {
  clear();
  
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.append(document.createTextNode("check passed"));
  let th2 = document.createElement("th");
  th2.append(document.createTextNode("Today tasks"));
  tr.append(th1, th2);
  table.append(tr);

  globalArray.forEach(function(value) {
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      
    let tras = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.append(checkbox);
    let td2 = document.createElement("td");
    td2.append(document.createTextNode(value));
    tras.append(td1, td2);
    table.append(tras);
    console.log(globalArray);
  });
}

function remove() {
  globalArray.forEach(function(value, index){
          var check = document.querySelectorAll(
            "input[type=checkbox]");

      if (check.checked){
       globalArray.splice(index, 1);
      } 
  })
  createTable();
}
