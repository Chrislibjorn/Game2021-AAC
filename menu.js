function Menu() {
    this.render = function (){
        this.stx = 20;
        this.sty = 20;
        this.stW = 200
        this.stH = 100
        push();
        noFill();
        rect(this.stx, this.sty, this.stW, this.stH);
        textSize(80)
        textAlign(CENTER, CENTER)
        text('Start', this.stx + this.stW * 0.5, this.sty + this.stH * 0.5);
        pop();
    }
}