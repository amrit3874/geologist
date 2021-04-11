class Stone{
    constructor(x,y,width,height){
        var options = {
            'density':12.0,
            'friction': 9.0,
            'restitution':0.8
          };
          this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white')
        fill('grey')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
    
    
    
    }