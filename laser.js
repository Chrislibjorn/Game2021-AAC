function Laser(spos, angle) {
    this.vel = p5.Vector.fromAngle(angle);
    this.start = p5.Vector.fromAngle(angle);
    this.start.mult(ship.r);
    this.pos = createVector(spos.x, spos.y);
    this.vel.mult(10);
    this.pos.add(this.start);

    this.update = function () {
        this.pos.add(this.vel);
    }
    this.render = function () {
        push();
        strokeWeight(3)
        circle(this.pos.x, this.pos.y, 3)
        pop();
    }
    this.hits = function (asteroid) {
        var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
        if (d < asteroid.r) {
            return true;
        } else {
            return false;
        }
    }
    //undersøg om laser er uden for skærmen.
    this.offScreen = function () {
        let result = (
            this.pos.x > width ||
            this.pos.x < 0 ||
            this.pos.y > height ||
            this.pos.y < 0
        )
        return result;
    }
}