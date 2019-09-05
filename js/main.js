import Bar from './bar.js';
import Ball from './ball.js';

const UP = -1;
const DOWN = 1;

const HEIGHT = 600;
const WIDTH = 800;

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

let score = 0;
let iascore = 0;

let direction = 0;
let flag = false;

function drawBackground(){
    context.fillStyle = 'black';
    context.fillRect(0,0,WIDTH,HEIGHT);
}

function drawNet(){
    context.fillStyle = 'white';
    context.fillRect(WIDTH/2,0,4,HEIGHT);
}

function drawScores(){
    context.fillStyle = "#FFF";
    context.font = "75px sans-serif";
    context.fillText(score, WIDTH/3, 70);
    context.fillText(iascore, 3 * WIDTH/5, 70);
    
}

function reset(){
    ball.directionx = -ball.directionx;
    ball.x = WIDTH/2;
    ball.y = HEIGHT/2;
}

document.addEventListener('keydown',(e) =>{
    if(e.code === 'ArrowUp'){
        flag = true;
        direction = UP;
    }else if(e.code === 'ArrowDown'){
        flag = true;
        direction = DOWN;
    }else{
        flag = false;
    }
}); 

document.addEventListener('keyup',(e) =>{
    flag = false;
}); 

window.ctx = context;

const bar = new Bar(20,HEIGHT/2);
const ia = new Bar(760,HEIGHT/2);
const ball = new Ball(WIDTH/2,HEIGHT/2);

function update(){
    ball.update();
    
    if(bar.collide(ball)){
        ball.directionx = -ball.directionx;
        ball.angle(bar);
    }

    if(ia.collide(ball)){
        ball.directionx = -ball.directionx;
        ball.angle(ia);
    }

    if(flag){
        bar.move(direction);
    }

    ia.y = ball.y;

    if (ia.y < 0) {
        ia.y = 0;
    }
     if (ia.y + ia.height > HEIGHT) {
        ia.y = HEIGHT - ia.height;
    }

    if(ball.x < 0){
        iascore++;
        reset();
    }

    if(ball.x > WIDTH){
        score++;
        reset();
    }

    drawBackground();
    drawScores();
    drawNet();

    bar.show(context);
    ia.show(context);
    ball.show(context);

    requestAnimationFrame(update);
}

update();