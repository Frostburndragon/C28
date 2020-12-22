class Boy {
    constructor(x,y) {
        var options = {
            'friction':1,
            'density':1.5,
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 300;
        this.height = 400;
        this.image = loadImage("boy.png");
    }

    display(){
        var pos = this.body.angle;
        
        push();
        
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
    }
    
  }
