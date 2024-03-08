var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomNum2 = Math.floor(Math.random()*6) + 1;
var img1Elements = document.getElementsByClassName("img1");
var img2Elements = document.getElementsByClassName("img2");
var resultText = document.querySelector("h1");

for (var i = 0; i<img1Elements.length; i++){
    img1Elements[i].setAttribute('src', './images/dice' + randomNum1 + '.png');
}

for (var j = 0; j < img2Elements.length; j++) {
    img2Elements[j].setAttribute('src', './images/dice' + randomNum2 + '.png');
}

if (randomNum1 > randomNum2) {
    resultText.textContent = "Player 1 wins!";
} else if (randomNum1 < randomNum2) {
    resultText.textContent = "Player 2 wins!";
} else {
    resultText.textContent = "Draw!";
}


console.log("Script is running!");