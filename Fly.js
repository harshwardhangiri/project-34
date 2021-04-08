class Fly{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001           
        }
           this.bodyA = bodyA;
            this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world, this.fly);

    }

   

    display() {

        var pointA = this.fly.bodyA.position; 
        var pointB = this.pointB;
         strokeWeight(4); 
         line(pointA.x, pointA.y, pointB.x, pointB.y);


    }
}