//skibet bliver defineret
var ship;
//definere asteroid
var asteroids = [];
//antal asteroider
var ants = 10
//laser array
var lasers = [];
//rotationshastighed
const Rotspd = 0.1
function setup() {
    createCanvas(600, 700);
    ship = new Ship();
    for (var i = 0; i < ants; i++) {
        asteroids.push(new Asteroid())
    }
}
// makes the magic happen
function draw() {
    background(0);
    noFill();
    stroke(255)
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();
    for (var i = 0; i < asteroids.length; i++) {
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }
    for (var i = 0; i < lasers.length; i++) {
        lasers[i].render();
        lasers[i].update();
    }
}
// stopper skibet fra at rotere
function keyReleased() {
    if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0);
    } else if (keyCode == LEFT_ARROW && keyCode == UP_ARROW == false) {
        ship.setRotation(0);
    } else if (keyCode == UP_ARROW) {
        ship.Boosting(false);
    }
}

// for skibet til at rotere
function keyPressed() {
    if (key == ' ') {
        lasers.push(new Laser(ship.pos, ship.heading));
    } else if (keyCode == RIGHT_ARROW) {
        ship.setRotation(Rotspd);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-Rotspd);
    } else if (keyCode == UP_ARROW) {
        ship.Boosting(true);
    }
}
