function setup() {
    let canvas = createCanvas (400, 400);
    canvas.parent(game) 
    slider = createSlider(2, 50, 2);
    slider.position(windowWidth/2-180,200 );
    slider.style('width', '80px');
}