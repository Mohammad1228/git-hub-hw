class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.S1 = loadImage("./sprites/sling1.png");
        this.S2 = loadImage("./sprites/sling2.png");
        this.S3 = loadImage("./sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       image(this.S1,200,25);
       image(this.S2,170,25);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(84,39,14);
            if(pointA.x < 200){
            line(pointA.x-10, pointA.y, pointB.x-20, pointB.y -30);
            line(pointA.x-10,pointA.y,pointB.x + 25,pointB.y - 40);
            image(this.S3,pointA.x -20,pointA.y-10,15,30);
            }
            else{
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y -30);
                line(pointA.x+20,pointA.y,pointB.x + 25,pointB.y - 40);
                image(this.S3,pointA.x +20,pointA.y-10,15,30);  
            }


        }
    }
    
}