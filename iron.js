class Iron{
    constructor(x,y){
        var option={
            'density':12,
            'friction': 3,
            'restitution':0.8
        } 
        this.x=x;
		this.y=y;
       
		this.body=Bodies.rectangle(this.x, this.y,100,50,option);
		World.add(world, this.body);
    }
    display(){
        var ironpos =this.body.position;		
        push()
        translate(ironpos.x, ironpos.y);
        rotate(this.body.angle);
        
        strokeWeight(1);
        stroke("black");
        fill("red");
        ellipseMode(RADIUS);
        //draw the ellipse here to display the rubber ball
       ellipse(0,0,80,50);
        pop()
    }
}