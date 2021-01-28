class Board{
    constructor(x,y){
        var options={
           
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,50,50,options);
        //this.width = width;
        //this.height = height;
        this.image = loadImage("images/archery board 2.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 400,400);
        pop();
    }
    
}