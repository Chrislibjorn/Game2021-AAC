var deads = true;
var imortal = false;
var imortalframe
var menu;

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
    createCanvas(600, windowHeight - 100);
    frameRate(60);
    ship = new Ship();
    menu = new Menu();
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
    var imortalframeDif = frameCount - imortalframe;

    if (deads) {
        menu.render();
    }
    if (imortalframeDif < 180) {
        imortal = true;
    } else {
        imortal = false;
    }
    if (deads == false) {
        for (var i = 0; i < asteroids.length; i++) {
            if (ship.hits(asteroids[i]) && imortal == false) {
                deads = true;

            }
            asteroids[i].render();
            asteroids[i].edges();
            asteroids[i].update();
        }
        for (var i = lasers.length - 1; i >= 0; i--) {
            lasers[i].render();
            lasers[i].update();
            for (var j = asteroids.length - 1; j >= 0; j--) {
                if (lasers[i].hits(asteroids[j])) {
                    if (asteroids[j].r > 15) {
                        var newAsteroids = asteroids[j].breakup();
                        asteroids = asteroids.concat(newAsteroids);
                    }
                    asteroids.splice(j, 1)
                    lasers.splice(i, 1);
                    break;
                }
            }
        }
    }
    //tæller ned til udødelighed stopper
    {
        let countDown = map(imortalframeDif, 0, 180, 3, 1)
        let countDownRound = round(countDown,);
        if (deads == false && imortalframeDif < 180) {
            push()
            textSize(80)
            textAlign(CENTER, CENTER)
            text(countDownRound, width / 2, 100)
            pop()
        }
    }
    if(asteroids.length == 0){
        deads = true;
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
    if (key == ' ' && imortal == false) {
        lasers.push(new Laser(ship.pos, ship.heading));
    } else if (keyCode == RIGHT_ARROW) {
        ship.setRotation(Rotspd);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-Rotspd);
    } else if (keyCode == UP_ARROW) {
        ship.Boosting(true);
    }
}
function mousePressed() {
    if (mouseX < 220 && mouseY < 220 && deads == true) {
        deads = false
        imortalframe = frameCount
        //tilføjer nye asteroider.
        {
            for (var i = 0; i < ants; i++) {
                if (asteroids.length < ants) {
                    asteroids.push(new asteroid())
                }
            }
        }
    }
}