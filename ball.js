class Ball{

constructor(x,y,radius){



    var option={


isStatic:false,
restitution:1,
friction:0,
density:7.8


    }


this.body=Bodies.circle(x,y,radius,option)
this.radius=radius;

World.add(world,this.body);





}


display(){

    
    push()
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(this.body.position.x,this.body.position.y,this.radius,);
    pop()



}


}