class Mango{
    constructor(x, y, diametre) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0
        }
        this.x=x;
        this.y=y;
        this.diametre=diametre;
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(this.x, this.y, this.diametre , options);
              
        World.add(world, this.body);
      }
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
		    fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0, this.diametre,this.diametre);
        pop();
      }
}