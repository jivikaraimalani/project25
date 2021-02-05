class Paper {
    constructor(x, y,radius) {
      var options = {         
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.radius = 70;
      this.body = Bodies.circle( 20,329,radius/2, options);
      this.image = loadImage("paper.png");


      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      translate(pos.x, pos.y);

      strokeWeight(4);
      stroke("green");
      fill("yellow");
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  } 