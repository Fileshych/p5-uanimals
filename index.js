let coins = [];
let opacity = 255;
let coinImg;
let sound;
let gifCat;

function preload() {
    coinImg = loadImage('coin.png');
    sound = loadSound('coinSound.mp3');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    background('#091941');
    smooth();
}

function draw() {
    background('#091941');
    
    for (let i = 0; i < coins.length; i++) {
        coins[i].display();
        coins[i].move();
    }
}

function mouseClicked(event) {
    coins.push(new Coin(mouseX - 47 / 2, mouseY - 55));
    sound.play();
    setTimeout(() => coins[0].remove(), 500);
}

function Coin(x, y) {
    this.x = x;
    this.y = y;

    this.display = function() {
        image(coinImg, this.x, this.y, 47, 55);
    }

    this.remove = function() {
        coins.splice(0, 1);
    }
    
    this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}