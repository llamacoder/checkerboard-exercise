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
  function makeRowOfAlternatingColors(firstColor, secondColor) {

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
      myBody.appendChild(makeRowOfAlternatingColors(firstColor, secondColor));
      [firstColor, secondColor] = [secondColor, firstColor];
    }
  }

  function makeGridOfGradientColors() {
    let myBody = document.querySelector("body");

    // add some music!
    let myAudio = document.createElement('audio');
    myAudio.autoplay = true;
    myAudio.loop = true;
    myAudio.src = "./audio/01.mp3"
    myAudio.controls = true;
    myBody.appendChild(myAudio);


    let firstColorRed = 50;
    let firstColorGreen = 197;
    let firstColorBlue = 274;
    let secondColorRed = 194;
    let secondColorGreen = 18;
    let secondColorBlue = 274;

    for (let i = 0; i < 8; i++) {
      firstColorRed += 10;
      firstColorGreen -= 22;
      firstColor = "rgb(" + firstColorRed + "," + firstColorGreen + "," +
                            firstColorBlue + ")";
      secondColorGreen -= 22;
      secondColorBlue += 1;
      secondColor = "rgb(" + secondColorRed + "," + secondColorGreen + "," +
                            secondColorBlue + ")";
      if (i%2 === 0) {
        myBody.appendChild(makeRowOfAlternatingColors(firstColor, secondColor));
      } else {
        myBody.appendChild(makeRowOfAlternatingColors(secondColor, firstColor));
      }
    }
  }
  function changeColors() {
    let divs = document.querySelectorAll("div");
    let divArray = Array.from(divs);

    return divArray.map(function(element) {
      element.style.backgroundColor = getRandomColor();
    });
  }

  function makeGridOfRandomColors() {
    let myBody = document.querySelector("body");

    for (let i = 0; i < 8; i++) {
      myBody.appendChild(makeRowOfRandomColors());
    }
  }

  function intervalFunction() {
    setInterval(function(){
      changeColors();
    }, 2000);
  }

  // makeGridOfAlternatingColors("#ff0000", "#000000");
  // makeGridOfRandomColors();
  makeGridOfGradientColors("rgb(50, 219, 255)", "rgb(216, 18, 273)");
  intervalFunction();

});
