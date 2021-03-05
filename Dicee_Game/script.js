// random number generator
let randomNumber1 = Math.floor(Math.random()*6);

let randomNumber2 = Math.floor(Math.random()*6);

//to have a random dice image in left dice
let randomImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomImage;

//to have a random dice image in right dice
let randomImage1 = "dice" + randomNumber2 + ".png";
let randomImageSource1 = "images/" + randomImage1;

// to have the dice roll imagery on the page
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);


// to display a result


if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!🏆";
    }

else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🏆Player 1 Wins!";
}

else {

}