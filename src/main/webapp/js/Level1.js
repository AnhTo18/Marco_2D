var gameState = "play";
var gameTime = 50;
var canvas;
var context;
var time;
var player;
var plat1;
var platArray = [];
var enemyArray = [];
var currPlat = -1;
var game;
var score = 0;
var warrior=new Image();
warrior.src="../images/militaWarrior.png";
var rWarrior=new Image();
rWarrior.src="../images/rWarrior.png";
var rightId;
var leftId;
var keys = {
    right: false,
    left: false,
    up: false,
    };
class NPC {
    isVisible;
    name;
    xPos;
    yPos;
    HP;
    constructor(name, x, y){
        this.isVisible = true;
        this.name = name;
        this.xPos = x;
        this.yPos = y;
    }
    draw(){
        if(this.isVisible){
            context.fillStyle = "#FF00FF";
            context.fillRect(this.xPos, this.yPos, 50, 50);
        }
        
    }
  
}
class Platform {
    xPos;
    yPos;
    width;
    height;
    constructor(x, y, w, h){
        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.height = h;
    }
    draw(){
        context.fillStyle = "#FF0000";
        context.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}
class PC {
    isVisible;
    playerName;
    xPos;
    yPos;
    acc;
    inAir;
    xVol;
    yVol;
    x;
    y;
    srcX;
    srcY;
    width;
    height;
    current_frame;
    r_frame;
    warrior;
    jump;
    laserArray = new Array(5);
    constructor(name){
        this.playerName = name;
        this.xPos = 300;
        this.yPos = 100;
        this.acc = 0;
        this.inAir = false;
        this.xVol = 0;
        this.yVol = 0;
        this.srcX=0;
        this.srcY=0;
        this.width=36;
        this.height=36;
        this.current_frame=0;
        this.r_frame=6;
        this.jump = true;
        this.isVisible = true;
        for(var i=0; i<6; i++){
            this.laserArray[i] = new laser(100);
        }

        
        if(name == "Marco"){

        }
        else if(name == "Polo"){

        }
        else{

        }
    }
   
    draw(){

        context.fillStyle = "#FFFF00";
        context.fillRect(this.xPos-50, this.yPos-50, 50, 50);
        
       
        
    }
    fire(){
        for(i=0; i<this.laserArray.length; i++){
            if(this.laserArray[i].isReady){
                this.laserArray[i].fire();
                break;
            }
        }
    }
   
}
class laser{
    isVisible;
    distance;
    xPos;
    yPos;
    xVol;
    startx;
    isReady = true;
    constructor(dist){
        this.isVisible = false;
        this.distance = dist;
        this.xVol = 2;
    }
    draw(startx, starty){
        
        if (this.isVisible){
            this.xPos += 5;
            this.yPos = starty-40;
            context.fillStyle = "#F0F0F0";
            context.fillRect(this.xPos+5, starty-40, 10, 10);
            for(i=0; i<enemyArray.length; i++){
                var enem = enemyArray[i];
                if(this.xPos >= enem.xPos && this.xPos <= enem.xPos+50 && this.yPos <= enem.yPos+50 && this.yPos >= enem.yPos){
                    enem.isVisible = false;
                    this.isVisible = false;
                    this.isReady = true;
                    score+=25
                }
            }
            if(this.xPos >= this.startx+this.distance){
                this.isVisible = false;
            }
        }
       
       
    }
    fire(){
        this.isReady = false;
        this.isVisible = true;
        this.xPos = player.xPos;
        this.startx = player.xPos;
    }
}
function initLevel(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    document.getElementById("score").innerHTML = "Score: 0"
    player = new PC("Marco");
    

    //player.draw();
    var plat0 = new Platform(0, 450, canvas.width, 50);
    var plat1 = new Platform(50, 50, 100, 20);
    var plat2 = new Platform(100, 100, 200, 50);
    var plat3 = new Platform(400, 200, 100, 100);
    platArray.push(plat0);
    platArray.push(plat1);
    platArray.push(plat2);
    platArray.push(plat3);
    var enemy1 = new NPC("", 400, 400);
    enemyArray.push(enemy1)
    enemy1.draw();
    context.fillStyle = "#FF0000";
    context.fillRect(plat1.xPos, plat1.yPos, plat1.width, plat1.height);
    gameState = "play";
    context.fillStyle = "#0FFF00";
    context.fillRect(700, 100, 50, 50);
    drawCanvas();
    time = setInterval(function(){timer()}, 1000);
    game = setInterval(function(){gameLoop()}, 22);
   //setInterval(function(){
    drawImage();
//}, 22);
    
} 

function updateFrame(){
    if(keys.right){
        player.current_frame= (player.current_frame+1)%6;
        player.srcX=player.current_frame*player.width;
        player.srcY=player.height;
    }
    if(keys.left){
        player.r_frame= (player.r_frame+5) % 6;
        player.srcX=player.r_frame*player.width;
        player.srcY=player.height;
    }
    context.clearRect(player.x-36,player.y-36,player.width,player.height);
}
function drawImage(){
    updateFrame();
    if(keys.right){
        context.drawImage(warrior, player.srcX, player.srcY, player.width, player.height, player.xPos-50, player.yPos-50, 
        player.width, player.height);
    }
    if(keys.left){
        context.drawImage(rWarrior, player.srcX, player.srcY, player.width, player.height, player.xPos-50, player.yPos-50, 
        player.width, player.height);
    }
    if(!keys.left&&!keys.right){
        context.drawImage(warrior, 36, 1, 36, 36, player.xPos-50, player.yPos-50, 36, 36);
      }
}


function gameLoop(){
    switch(gameState){
        case "end" :    
            gameTime = 0;
            document.getElementById("timer").innerHTML = "timer: " + gameTime;
            document.getElementById("score").innerHTML = "Score: " + score;
            window.clearInterval(time);
            window.clearInterval(game);
        case "play" :
            context.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById("timer").innerHTML = "timer: " + gameTime;
            document.getElementById("score").innerHTML = "Score: " + score;
            console.log(document.getElementById("score").innerHTML);
           
            // Updating the y and x coordinates of the player
            player.xPos += player.xVol;
            player.yPos += player.yVol;
            if(player.xPos >= 700 && player.yPos >= 450){
                context.font = "100px Arial";
                context.fillStyle = "black";
                context.fillText("You Win!", 300, 190);
                score = 5*gameTime;
                gameState = "end";
                
            }
            if(player.inAir){
                player.yVol += 0.5;
            }
          
            if(keys.left) {
                player.xVol = -2.5;
            }
            if(keys.right) {
                player.xVol = 2.5;
                
            }
            
            // Updating the y and x coordinates of the player
            player.xPos += player.xVol;
            player.yPos += player.yVol;
           
            drawCanvas();
            if(gameTime == 0){
                gameState = "end";

            }
            for(i=0; i<platArray.length; i++)
            {
                if(platArray[i].xPos < player.xPos){
                    if(player.xPos < platArray[i].xPos + 50 + platArray[i].width){
                        if(platArray[i].yPos <= player.yPos && player.yPos < platArray[i].yPos+(platArray[i].height)/2){
                            currPlat = i;
                            player.yPos = platArray[i].yPos;
                            player.yVol = 0;   
                            player.jump = true;
                        }
                        else{
                            currPlat = -1;
                        }
                    }
                    else{
                        currPlat = -1;
                    }
                }
                else{
                    currPlat = -1;
                }
        
            }
     
            if(currPlat > -1){
                player.inAir = false;
                player.jump = true;
            }
            else{
                player.inAir = true;
            }

            
           
            
           
            
    }
    

}
function timer(){
    gameTime = gameTime-1;
}
function drawCanvas(){
    //player.draw();
	  //setInterval(function(){
    drawImage();
//}, 22);
    for(i=0; i<platArray.length; i++){
        var plat = platArray[i];
        plat.draw();
    }
    for(i=0; i<enemyArray.length; i++){
        var enem = enemyArray[i];
        enem.draw();
    }
    for(i=0; i<player.laserArray.length; i++){
        var laser = player.laserArray[i];
        laser.draw(player.xPos, player.yPos);
        
    }
    context.fillStyle = "#FF0000";
    context.fillRect(0, 450, canvas.width, 50);
    context.fillStyle = "#0FFF00";
    context.fillRect(700, 0, 50, 450);
}
// This function will be called when a key on the keyboard is pressed
function keydown(e) {
    // 37 is the code for the left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }

    // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
    if(e.keyCode == 38){
        if(player.jump == true){
            player.jump = false;
            player.inAir = true;
            keys.up = true;
            player.yVol = -10;
            
        }
       
    }
    if(e.keyCode == 13){
        player.fire();
    }
}
// This function is called when the pressed key is released
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
        player.xVol = 0;
    }
 
    if(e.keyCode == 39) {
        keys.right = false;
        player.xVol = 0;
    }
  
} 
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
