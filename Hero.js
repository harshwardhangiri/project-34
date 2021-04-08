class Hero{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':3.0
        }
        this.body = Bodies.circle(x, y,100,options);
        
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;

        push();
        translate(pos.x, pos.y);
        fill ("yellow")
        ellipseMode(CENTER);
        ellipse(0, 0, 100);
        pop();
      }
}