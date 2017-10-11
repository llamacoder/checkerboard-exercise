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
function makeRow(firstColor, secondColor) {

  //  make a div container to hold a row
  let myContainerDiv = document.createElement("div");

  for (let i = 0; i < 8; i++) {
     myContainerDiv.appendChild(makeDiv(firstColor));
     [firstColor, secondColor] = [secondColor, firstColor];
  }
  return myContainerDiv;
}

//  make the grid
function makeGrid() {
  let firstColor = "#ff0000";
  let secondColor = "#000000";

  let rowDiv = makeRow(firstColor, secondColor);
  let myBody = document.querySelector("body");
  myBody.appendChild(rowDiv);
}

makeGrid();

});
