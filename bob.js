class bob
{
    constructor(x, y, r){

        let options = {
            restitution: 1,
            friction: 0,
            density: 0.2
        };

        this.r = r;

        this.body = Bodies.circle(x, y, this.r / 2, options);

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}