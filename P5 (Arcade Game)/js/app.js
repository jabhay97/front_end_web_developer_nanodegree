// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.ceil(Math.random() * 500 + 100);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt; // updates the position of the enemy
    if (this.x > 500) {
        this.x = -100; // reset the position of enemy if enemy reaches the end of the canvas
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function(x, y) {
    // Variables applied to each of our instances go here,we've provided one for you to get started
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.chances = 5;
    this.score = 0;
}

player.prototype.update = function(dt) {
    for (var a = 0; a < allEnemies.length; a++) {
        if (this.x < allEnemies[a].x + 75 && this.x + 75 > allEnemies[a].x && this.y < allEnemies[a].y + 75 && this.y + 75 > allEnemies[a].y) {
            this.chances -= 1;
            this.reset();
        }
    }
}

player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
    var remChances = document.getElementById('chance');
    remChances.innerHTML = this.chances;
    if (this.chances == 0) {
        window.alert("Game Over !!!");
        window.alert("Your Score is : " + this.score);
        document.write("<h2>Please Refresh To Load New Game</h2>")
    }
}

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
player.prototype.handleInput = function(checkKey) {
    switch (checkKey) {
        case 'up':
            if (this.y < 85) //checks if the character does not move out of bound
            {
                this.score += 1;
                var newScore = document.getElementById('score');
                newScore.innerHTML = this.score;
                this.reset();
            } else {
                this.y -= 85; //move the character one place up
            }
            break;
        case 'down':
            if (this.y > 340) //checks if the character does not move out of bound
            {
                this.reset();
            } else {
                this.y += 85; //move the character one place down
            }
            break;
        case 'left':
            if (this.x == 0) //checks if the character does not move out of bound
            {
                this.reset();
            } else {
                this.x -= 50; //move the character one place left
            }
            break;
        case 'right':
            if (this.x > 400) //checks if the character does not move out of bound
            {
                this.reset();
            } else {
                this.x += 50; //move the character one place right
            }
            break;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
    new Enemy(0, 60),
    new Enemy(0, 145),
    new Enemy(0, 220)
];
var player = new player(200, 390);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});