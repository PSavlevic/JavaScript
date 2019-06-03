var spaudziam = document.querySelector("input[type=submit]");
spaudziam.addEventListener("click", fn);
function fn(){
    spaudziam.value = document.querySelector("input[type=text]").value;
}

