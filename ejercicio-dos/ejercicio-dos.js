//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div");
console.log(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let anotherDiv = document.createElement("div");

let newParagraph = document.createElement("p");

anotherDiv.appendChild(newParagraph);
console.log(anotherDiv);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let AnotherDivTwo = document.createElement("div");
for (let i = 0; i <= 6; i++) {
  document.createElement("p");
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
window.onload = () => {
  addContent();
  addItem();
};

const addContent = () => {
  let anotherParagraph = document.createElement("p");
  let newContent = document.createTextNode("Soy dinámico!");

  anotherParagraph.appendChild(newContent);

  let currentp = document.getElementById("fn-insert-here");
  document.body.insertBefore(anotherParagraph, currentp);
};

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const addItem = () => {
  let newText = document.createTextNode("Wubba Lubba dub dub");
};

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
