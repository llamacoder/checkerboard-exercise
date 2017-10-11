document.addEventListener("DOMContentLoaded", function() {




// make a div with the incoming color
function makeDiv(inColor) {
  let myDiv = document.createElement("div");
  myDiv.style.backgroundColor = inColor;
  myDiv.style.paddingBottom = "11.1%";
  myDiv.style.width = "11.1%";
  myDiv.style.float = "left";
  return myDiv;
}

//  make a row
function makeRow() {
  //  get the body
  let myBody = document.querySelector("body");

  //  make a div container to hold a row
  let myContainerDiv = document.createElement("div");

  let elem1 = makeDiv("#ff0000");
  let elem2 = makeDiv("#000000");
  myBody.appendChild(elem1);
  myBody.appendChild(elem2);
}

//  make the grid
function makeGrid() {
  makeRow();
}

makeGrid();

});
