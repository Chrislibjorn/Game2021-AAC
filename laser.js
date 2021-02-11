function Laser(spos, angle) {
    this.vel = p5.Vector.fromAngle(angle);
    this.start = p5.Vector.fromAngle(angle);
    this.start.mult(ship.r+5);
    this.pos = createVector(spos.x, spos.y);
    this.vel.mult(10);
    this.pos.add(this.start);

    this.update = function () {
        this.pos.add(this.vel);
    }
    this.render = function () {
        push();
        stroke(0,255,100)
        strokeWeight(3)
        circle(this.pos.x, this.pos.y, 3)
        pop();
    }
    this.hits = function (asteroid) {
        var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
        if (d < asteroid.r+8) {
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