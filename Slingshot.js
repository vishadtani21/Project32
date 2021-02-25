class Slingshot
{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            'stiffness':0.08,
            'lenght':0.2
        };

        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

  }
  
  attach(body) {
      this.sling.bodyA = body;
  }

  fly(){
      this.sling.bodyA=null;
  }

  display(){

 if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    fill ("white");
    line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
  }

}
