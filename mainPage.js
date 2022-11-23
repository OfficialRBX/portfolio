var loadingScreen = document.getElementById("loadingScreen");

window.onload = function () {
  console.log("loaded");
  loadingScreen.style.display = "none";
};

var role = document.getElementById("role");

let headlines = ["Roblox scripter", "interface designer", "modeler"];
let currentHeadline = 0;

function writeHeading() {
  let i = 0;
  let headingArray = Array.from(headlines[currentHeadline]);
  let type = setInterval(function () {
    if (i == headingArray.length) {
      setTimeout(deleteHeading, 3000);
      clearInterval(type);
    } else {
      role.innerHTML += headingArray[i];
      i++;
    }
  }, 50);
}
writeHeading();

function deleteHeading() {
  let headingArray = Array.from(headlines[currentHeadline]);
  let i = headingArray.length;
  let remove = setInterval(function () {
    if (i == 0) {
      if (currentHeadline == headlines.length - 1) {
        currentHeadline = 0;
      } else {
        currentHeadline++;
      }
      setTimeout(writeHeading, 500);
      clearInterval(remove);
    } else {
      headingArray.pop();
      i--;
      role.innerHTML = "";
      headingArray.forEach((letter) => {
        role.innerHTML += letter;
      });
    }
  }, 50);
}
