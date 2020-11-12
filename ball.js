class Ball {
    constructor(x, y, r) {


        var ball_options ={
            restitution: 1.0
        }
    
        this.body = Bodies.circle(x, y, r,ball_options);
        this.radius = r;
        World.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}