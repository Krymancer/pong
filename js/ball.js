export default class Ball{
    constructor(x,y,r=20){
        this.x = x;
        this.y = y;
        this.r = r;
        this.speedx = 8;
        this.speedy = 0;
        this.directionx = 1;
        this.directiony = 1;

    }

    update(){
        this.collide();
        this.x += this.speedx * this.directionx;
        this.y += this.speedy * this.directiony;
    }

    collide(){
        if(this.y < 0 || this.y + this.r > 600){
            this.directiony = -this.directiony;
        }
    }

    show(context){
        context.fillStyle = 'white';
        context.fillRect(this.x,this.y,this.r,this.r);
    }

    angle(bar){
        let collidePoint = (this.y - (bar.y + bar.height/2));
        collidePoint = collidePoint / (bar.height/2);
        let rad = (Math.PI/4) * collidePoint;
        this.speedy = 2 *  Math.sin(rad); 

    }
}