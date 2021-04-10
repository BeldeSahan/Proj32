class Block{
    constructor(x,y,width,height){
        var options = {
            restitution :0.4,
            friction :0.0,
            //isStatic:true
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);

    }
    display(){
    console.log(this.body.speed);
    if(this.body.speed<1000){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke("red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        pop();

    } 
    }
    }
