class Stone{
    constructor(x, y,diametre) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
        }
        this.x=x;
        this.y=y;
        this.diametre=diametre;
        this.body = Bodies.circle(this.x, this.y, this.diametre, options);
        
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.diametre,this.diametre);
        pop();
      }
}