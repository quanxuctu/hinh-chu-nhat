let canvas = document.getElementById("myCanvas");

class Rectangle {
    constructor(x,y,width,height,speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    getPerimeter(){
        return (this.width+this.height)*2;
    }
    draw(canvas){
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    drawImg(canvas){
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.src = "cloud.png";
        ctx.drawImage(img, this.x, this.y);
    }
    moveX(){
        this.x += this.speed;
    }

    setSpeed(value){
        this.speed = value;
    }
}
let clouds = [];
for (let i = 0; i < 5; i++) {
    let ranSpeed = Math.floor(Math.random()*7+3);
    let ranY = Math.floor(Math.random()*canvas.height);

    let cloud = new Rectangle(0,ranY,200,100,ranSpeed);
    clouds.push(cloud);
}

// rect.draw(canvas);
function main() {
    setInterval(function () {
        clearScreen();
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].moveX();
            clouds[i].drawImg(canvas);
        }
    },30)
}

function main2() {
    clearScreen();
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].moveX();
        clouds[i].drawImg(canvas);
        if(clouds[i].x > canvas.width || clouds[i].x < 0){
            clouds[i].setSpeed(-clouds[i].speed);
        }
    }
    requestAnimationFrame(main2);
}

function clearScreen() {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
main2();
