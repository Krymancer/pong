export default class Bar {
    constructor(x, y, width = 16, height = 100) {
        this.x = x;
        this.y = y;
        this.speed = 8;

        this.width = width;
        this.height = height;
    }

    move(direction) {
        if (this.y < 0) {
            this.y = 0;
        } else if (this.y + this.height > 600) {
            this.y = 600 - this.height;
        } else {
            this.y += this.speed * direction;
        }
        direction = 0;
    }

    show(context) {
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    collide(ball){
        let top    = this.y;
        let bottom = this.y + this.height;
        let left   = this.x;
        let right  = this.x + this.width;

        let ballTop = ball.y;
        let ballBottom = ball.y + ball.r;
        let ballLeft = ball.x;
        let ballRight = ball.x + ball.r;
    
        return left < ballRight && top < ballBottom && right > ballLeft && bottom > ballTop;
    }
}