function Laser(spos, angle) {
    this.vel = p5.Vector.fromAngle(angle);
    this.start = p5.Vector.fromAngle(angle);
    this.start.mult(25);
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
}