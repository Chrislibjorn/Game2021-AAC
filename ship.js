function Ship() {
    //laver positionen på skibet
    this.pos = createVector(width / 2, height / 2);
    //størrelse på rumskib
    this.r = 20;
    //model på trekant
    this.heading = 0;
    //rotation
    this.rotation = 0;
    this.vel = createVector(0, 0);

    this.isBoosting = false;

    this.Boosting = function (b) {
        this.isBoosting = b;
    }

    this.update = function () {
        if (this.isBoosting) {
            this.boost();
        }
        this.pos.add(this.vel);
        //friction på trekanten
        this.vel.mult(0.99)
    }

    this.boost = function () {
        var force = p5.Vector.fromAngle(this.heading);
        force.mult(0.1)
        this.vel.add(force);
    }

    this.hits = function (asteroid) {
        var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        if (d < this.r-10 + asteroid.r) {
            return true;
        } else {
            return false;
        }
    }

    this.render = function () {
        push();
        translate(this.pos.x, this.pos.y)
        rotate(this.heading + PI / 2);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
        square(4, this.r, 10)
        square(-14, this.r, 10)
        if (this.isBoosting) {
            noFill
            stroke(255, 100, 0)
            triangle(-14, 10 + this.r, -4, 10 + this.r, -8, 2.2 * (this.r))
            triangle(14, 10 + this.r, 4, 10 + this.r, 8, 2.2 * (this.r))
        }
        pop();
    }
    //funktion der drejer skibet

    this.setRotation = function (a) {
        this.rotation = a
    }

    this.turn = function () {
        this.heading += this.rotation;
    }
    this.edges = function () {
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < - this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < - this.r) {
            this.pos.y = height + this.r;
        }
    }
}