let ball;
let catcher;
let score = 0;

function setup() {
  createCanvas(400, 400);
  ball = new Ball();
  catcher = new Catcher();
}

function draw() {
  background(80,92,124);
  ball.update();
  ball.show();
  catcher.update();
  catcher.show();
  if (catcher.intersects(ball)) {
    ball.reset();
    score++;
  }
  textSize(20);
  text("Score: " + score, 10, 30);
}

class Ball {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.speed = random(1, 5);
    this.radius = 10;
    
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.reset();
    }
  }

  show() {
    ellipse(this.x, this.y, this.radius * 2);
  }

  reset() {
    this.x = random(width);
    this.y = 0;
    this.speed = random(1, 5);
  }
}

class Catcher {
  constructor() {
    fill(253,255,0)
    this.x = width / 2;
    this.y = height - 20;
    this.width = 60;
    this.height = 10;
  }

  update() {
    this.x = mouseX;
  }

  show() {
    rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  intersects(ball) {
    let d = dist(this.x, this.y, ball.x, ball.y);
    return d < this.width / 2 + ball.radius && ball.y < this.y && ball.speed > 0;
  }
}
