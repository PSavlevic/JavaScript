var pirmas = document.createElement("h1");
document.body.append(pirmas);
pirmas.innerHTML = "Pavel";
var antras = document.createElement("h2");
document.body.append(antras);
antras.innerHTML = "Savlevic";
var trecias = document.createElement("p");
document.body.append(trecias);
trecias.innerHTML = "Galeciau programuoti 24/7 ;)";
var newDiv = document.createElement("div");
document.body.append(newDiv);
newDiv.innerHTML = "Naujas divas";
var pTagasVienas = document.createElement("p");
newDiv.prepend(pTagasVienas);
pTagasVienas.innerHTML = "p tagas jau sukurtame dive";
var kitasPtagas = document.createElement("p");
newDiv.append(kitasPtagas);
kitasPtagas.innerHTML = "p tagas gale";
var section = document.createElement("section");
document.body.append(section);

section.append(pirmas, antras, trecias, newDiv);




