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
        asteroids.push(new asteroid())
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
    for (var i = lasers.length-1; i >= 0; i--) {
        lasers[i].render();
        lasers[i].update();
        for (var j = asteroids.length-1; j >= 0; j--) {
            if (lasers[i].hits(asteroids[j])) {
                var newAsteroids = asteroids[j].breakup();
                asteroids = asteroids.concat(newAsteroids);
                asteroids.splice(j,1)
                lasers.splice(i,1);
                break;
            }
        }
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
