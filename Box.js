class Box{

    constructor(x,y,width,height){

        var options = {
            isStatic:false,
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        };

        this.visibility = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.color = color(random(0,255), random(0,255), random(0,255));

        World.add(world,this.body);

     }

 score(){
     if(this.visibility<0 && this.visibility >-105){
         score++;
     }
 }    

 display(){
    
    //console.log(this.body.speed);

    if(this.body.speed<6.5){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill (this.color);
        rect(0,0,this.width,this.height);
        pop ();
    }
    else{
        World.remove(world,this.body);
        push ();
        this.visibility = this.visibility-5;
        tint (255,this.visibility)
        pop();
    }
    
 }

}