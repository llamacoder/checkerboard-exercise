document.addEventListener("DOMContentLoaded", function() {

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



  // make a div with the incoming color
  function makeDiv(inColor) {
    let myDiv = document.createElement("div");
    myDiv.style.backgroundColor = inColor;
    myDiv.style.paddingBottom = "11.1%";
    myDiv.style.width = "11.1%";
    myDiv.style.float = "left";
    return myDiv;
  }

  //  make a row that alternates colors
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

  //  make a row that alternates colors
  function makeRowOfRandomColors() {

    //  make a div container to hold a row
    let myContainerDiv = document.createElement("div");

    for (let i = 0; i < 8; i++) {
      let myDiv = makeDiv(getRandomColor());
      if (i === 0) {
        myDiv.style.clear = "left";
      }
      myContainerDiv.appendChild(myDiv);
    }
    return myContainerDiv;
  }

  function makeGridOfAlternatingColors(firstColor, secondColor) {
    let myBody = document.querySelector("body");

    for (let i = 0; i < 8; i++) {
      myBody.appendChild(makeRow(firstColor, secondColor));
      [firstColor, secondColor] = [secondColor, firstColor];
    }
  }

  function makeGridOfRandomColors() {
    let myBody = document.querySelector("body");

    // add some music!
    let myAudio = document.createElement('audio');
    myAudio.autoplay = true;
    myAudio.loop = true;
    myAudio.src = "./audio/02.mp3"
    myAudio.controls = true;
    myBody.appendChild(myAudio);


    for (let i = 0; i < 8; i++) {
      myBody.appendChild(makeRowOfRandomColors());
    }
  }

  // makeGridOfAlternatingColors("#ff0000", "#000000");
  makeGridOfRandomColors();

});
