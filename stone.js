class Stone{
    constructor(x,y){
        var option={
            'density':30,
            'friction': 0.9,
            'restitution':0.8
        } 
        this.x=x;
		this.y=y;
       
		this.body=Bodies.rectangle(this.x, this.y,100,50,option);
		World.add(world, this.body);
    }
    display(){
        var stonepos =this.body.position;		
        push()
        translate(stonepos.x, stonepos.y);
        rotate(this.body.angle);
        
        strokeWeight(1);
        stroke("black");
        fill("gray");
        ellipseMode(RADIUS);
        //draw the ellipse here to display the rubber ball
       ellipse(0,0,50,50);
        pop()
    }
}