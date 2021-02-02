class Asteroids{
    constructor(x,y){
        var options= {
            gravity: 1.0,
            density: 1.0,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("images/images (1).png");
        World.add(world, this.body);
    }
    display(){
        image(this.image, 0, 0, this.width, this.height);
    }
}