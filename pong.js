// Variables
var playerHeight = 80;
var playerWidth = 20;
var playerSpeed = 8;
var playerL = 170;
var playerR = 170;

var scoreL = 0;
var scoreR = 0;

var ballX = 300;
var ballY = 200;
var ballSize = 20;
var ballXSpeed = 6;
var ballYSpeed = -2;

var gameOver = 0;


function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  if (gameOver == 0) {
    background(130,200,100);
    fill(255);
    noStroke();
    rect(300,0,2,400);
    

    // draw left player
    fill(255,70,70);
    rect(0, playerL, playerWidth, playerHeight,20);

    // draw right player
    fill(0,100,255);
    rect(width - playerWidth, playerR, playerWidth, playerHeight,20);

    // draw ball
    fill(255);
    ellipse(ballX, ballY, ballSize);


      textSize(40);
      fill(255,70,70);
      text(scoreL, 140, 50);
      fill(0,100,255);
      text(scoreR, 440, 50);

    /* User Input */
    // 'W' key
    if (keyIsDown(87)) {
      playerL = playerL - playerSpeed
    }
    // 'S' key
    if (keyIsDown(83)) {
      playerL = playerL + playerSpeed
    }

    if (keyIsDown(UP_ARROW)) {
      playerR = playerR - playerSpeed
    }
    if (keyIsDown(DOWN_ARROW)) {
      playerR = playerR + playerSpeed
    }

    /* Game logic */
    if (playerL <= 0) {
      playerL = 0;
    }
    if (playerL > height - playerHeight) {
      playerL = height - playerHeight;
    }

    if (playerR <= 0) {
      playerR = 0;
    }
    if (playerR > height - playerHeight) {
      playerR = height - playerHeight;
    }

    ballX = ballX + ballXSpeed
    ballY = ballY + ballYSpeed

    // Bounce off top wall
    if (ballY < 0) {
      ballY = 0;
      ballYSpeed = -ballYSpeed;
    }

    // Bounce off bottom wall
    if (ballY > height) {
      ballY = height;
      ballYSpeed = -ballYSpeed;
    }


    // bounce off right player
    if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
      ballX = width - playerWidth
      ballXSpeed = -ballXSpeed
    }

    // playerL scores!
    if (ballX > width) {
      ballX = width / 2
      ballY = height / 2
      scoreL = scoreL + 1
      ballXSpeed = -ballXSpeed
    }

    // bounce off left player
    if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
      ballX = playerWidth
      ballXSpeed = ballXSpeed * -1
    }

    // playerR scores!
    if (ballX < 0) {
      ballX = width / 2
      ballY = height / 2
      scoreR = scoreR + 1
      ballXSpeed = -ballXSpeed
    }
    
    if (scoreL == 7 || scoreR == 7) {
      gameOver = 1;
      print('gameStarted = 1');
    }
  }


    if (gameOver == 1) {
      fill(255);
      textSize(40);
      text('game over!', 195, 210);
      fill(130,200,100);
      noStroke();
      rect(130,10,50,60);
      rect(440,10,50,60);
      fill(255,70,70);
      text(scoreL, 140, 50);
      fill(0,100,255);
      text(scoreR, 440, 50);
    }
}
