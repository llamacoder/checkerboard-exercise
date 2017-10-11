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
    let myDiv = makeDiv(firstColor);
    if (i === 0) {
      myDiv.style.clear = "left";
    }
     myContainerDiv.appendChild(myDiv);
     [firstColor, secondColor] = [secondColor, firstColor];
  }
  return myContainerDiv;
}

//  make the grid
function makeGrid() {
  let firstColor = "#ff0000";
  let secondColor = "#000000";

  let myBody = document.querySelector("body");

  for (let i = 0; i < 8; i++) {
    myBody.appendChild(makeRow(firstColor, secondColor));
    [firstColor, secondColor] = [secondColor, firstColor];
  }
}

makeGrid();

});
