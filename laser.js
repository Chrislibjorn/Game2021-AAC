function Laser(spos, angle) {
    this.pos = createVector(spos.x, spos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(10);

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