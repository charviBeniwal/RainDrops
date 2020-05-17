class RainDrop extends BaseClass {
        constructor(x,y){
        super(x,y,7,50);
    }
    display(){
        super.display();
        fill(109,217,237);
    }
    move(){
        this.body.velocity.y = random(-2,-5);
    }
}
