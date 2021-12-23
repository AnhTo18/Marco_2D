	//Time in milliseconds - 1 minute = 60000 - Modify this to get time
	var gameTime = 60000;
	//Do not modify gameSecs or score
	var gameSecs = gameTime / 1000;
	var score = gameTime / 10;
	//Win/Death vars
	var win = 0;
	var death = 0;
    var gotSecret = 0;
	
	  var warrior=new Image();
    warrior.src="../images/militaWarrior.png";
    var rWarrior=new Image();
    rWarrior.src="../images/rWarrior.png";
	
	
	
	//Timer
	var timer = setInterval(function() {
		var dist = gameSecs;
		gameSecs -= 1
		var dists = score;
		score -= 100;
		document.getElementById("timer").innerHTML = "Time Left: " + dist + " seconds";
		document.getElementById("score").innerHTML = "Score: " + dists + " points";
		
		if(dist <= 0) {
			clearInterval(timer);
			death = 1;
		}
	}, 1000);

// The attributes of the player.
 var player = {
    x: 50,
    y: 600,
    x_v: 0,
    y_v: 0,
    jump : true,
    //height: 20,
    //width: 20
    
	srcX:0,
        srcY:0,
        width:36,
        height:36,
        current_frame:0,
        r_frame:6};
	
// The status of the arrow keys
var keys = {
    right: false,
    left: false,
    up: false,
    };
// The friction and gravity to show realistic movements    
var gravity = 0.5;
var friction = 0.7;
// The number of platforms
var num = 10;
// The platforms
var platforms = [];
// Function to render the canvas
function rendercanvas(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 1280, 720);
	
//	ctx.fillRect(0, 0, 1500, 850);
}
// Function to render the player
function renderplayer(){
    //ctx.fillStyle = "#F08080";
    //ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
	drawImage();
    }
// Function to create platforms
function createplat(){
        //Borders
        //Left Wall [0]
        platforms.push(
            {
            x: 0,
            y: 0,
            width: 20,
            height: 1000
            }
        );
        //Right Wall [1]
        platforms.push(
            {
            x: 1480,
            y: 0,
            width: 20,
            height: 1000
            }
        );
        //Ceiling [2]
        platforms.push(
            {
            x: 0,
            y: 0,
            width: 1500,
            height: 20
            }
        );
        
        //Platforms
        //4
        platforms.push(
            {
            x: 0,
            y: 600,
            width: 100,
            height: 15
            }
        );
        //5
        platforms.push(
            {
            x: 100,
            y: 700,
            width: 110,
            height: 30
            }
        );
        //6
        platforms.push(
            {
            x: 300,
            y: 660,
            width: 20,
            height: 30
            }
        );
        //7
        platforms.push(
            {
            x: 370,
            y: 800,
            width: 10,
            height: 30
            }
        );
        //8
        platforms.push(
            {
            x: 450,
            y: 700,
            width: 100,
            height: 15
            }
        );
        //9
        platforms.push(
            {
            x: 600,
            y: 600,
            width: 40,
            height: 40
            }
        );
        //10
        platforms.push(
            {
            x: 600,
            y: 490,
            width: 40,
            height: 20
            }
        );
        //11
        platforms.push(
            {
            x: 730,
            y: 410,
            width: 25,
            height: 15
            }
        );
        //12
        platforms.push(
            {
            x: 800,
            y: 300,
            width: 15,
            height: 15
            }
        );
        //13
        platforms.push(
            {
            x: 875,
            y: 250,
            width: 20,
            height: 20
            }
        );
        //14
        platforms.push(
            {
            x: 1000,
            y: 300,
            width: 200,
            height: 15
            }
        );
        //15
        platforms.push(
            {
            x: 20,
            y: 500,
            width: 5,
            height: 10
            }
        );
        //16
        platforms.push(
            {
            x: 20,
            y: 400,
            width: 5,
            height: 10
            }
        );
        //17
        platforms.push(
            {
            x: 20,
            y: 300,
            width: 5,
            height: 10
            }
        );
        //18
        platforms.push(
            {
            x: 20,
            y: 200,
            width: 5,
            height: 10
            }
        );
        //19
        platforms.push(
            {
            x: 20,
            y: 100,
            width: 350,
            height: 10
            }
        );
        
        //Goal
        platforms.push(
            {
            x: 380,
            y: 150,
            width: 20,
            height: 15
            }
        );
        //Goal Platform
        platforms.push(
            {
            x: 400,
            y: 150,
            width: 400,
            height: 15  
            }
        );
        //fake goal
        platforms.push(
            {
            x: 1300,
            y: 300,
            width: 50,
            height: 30
            }
        );
        platforms.push(
            {
                x: 25,
                y: 25,
                width: 5,
                height: 5
            }
        )
    }
    

// Function to render platforms
function renderplat(){
    ctx.fillStyle = "#45597E";
    //Borders
    ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0]. height);
    ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width, platforms[1]. height);
    ctx.fillRect(platforms[2].x, platforms[2].y, platforms[2].width, platforms[2]. height);
    //Platforms
    ctx.fillRect(platforms[3].x, platforms[3].y, platforms[3].width, platforms[3]. height);
    ctx.fillRect(platforms[4].x, platforms[4].y, platforms[4].width, platforms[4]. height);
    ctx.fillRect(platforms[5].x, platforms[5].y, platforms[5].width, platforms[5]. height);
    ctx.fillRect(platforms[6].x, platforms[6].y, platforms[6].width, platforms[6]. height);
    ctx.fillRect(platforms[7].x, platforms[7].y, platforms[7].width, platforms[7]. height);
    ctx.fillRect(platforms[8].x, platforms[8].y, platforms[8].width, platforms[8]. height);
    ctx.fillRect(platforms[9].x, platforms[9].y, platforms[9].width, platforms[9]. height);
    ctx.fillRect(platforms[10].x, platforms[10].y, platforms[10].width, platforms[10].height);
    ctx.fillRect(platforms[11].x, platforms[11].y, platforms[11].width, platforms[11].height);
    ctx.fillRect(platforms[12].x, platforms[12].y, platforms[12].width, platforms[12]. height);
    ctx.fillRect(platforms[13].x, platforms[13].y, platforms[13].width, platforms[13]. height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(platforms[14].x, platforms[14].y, platforms[14].width, platforms[14]. height);
    ctx.fillRect(platforms[15].x, platforms[15].y, platforms[15].width, platforms[15]. height);
    ctx.fillRect(platforms[16].x, platforms[16].y, platforms[16].width, platforms[16]. height);
    ctx.fillRect(platforms[17].x, platforms[17].y, platforms[17].width, platforms[17]. height);
    ctx.fillRect(platforms[18].x, platforms[18].y, platforms[18].width, platforms[18]. height);
    ctx.fillStyle = "#45597E";
    //Goal platform
    ctx.fillRect(platforms[20].x, platforms[20].y, platforms[20].width, platforms[20]. height);
    //fake goal
    ctx.fillStyle = "#1cb2f5";
    ctx.fillRect(platforms[21].x, platforms[21].y, platforms[21].width, platforms[21]. height);
    ctx.fillstyle = "#FFFFFF";
    ctx.fillRect(platforms[22].x, platforms[22].y, platforms[22].width, platforms[22]. height);
    if(gotSecret == 1){
        ctx.clearRect(platforms[22].x, platforms[22].y, platforms[22].width, platforms[22]. height);
    }
}

//Check if player is outside the bounds of the map or touched something deadly 
function checkForDeath(){
    if(player.x > 1500 || player.y >850){
        location.replace("../html/deathPage.html");
    }
}

//Render goal
function renderGoal() {
     ctx.fillStyle = "#45597E";
     ctx.fillRect(platforms[19].x, platforms[19].y, platforms[19].width, platforms[19]. height);
}


// This function will be called when a key on the keyboard is pressed
function keydown(e) {
    // 37 is the code for the left arrow key
    if(e.keyCode == 37) {
        keys.left = true;
    }
    // 37 is the code for the up arrow key
    if(e.keyCode == 38) {
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
    // 39 is the code for the right arrow key
    if(e.keyCode == 39) {
        keys.right = true;
    }
}
// This function is called when the pressed key is released
function keyup(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    if(e.keyCode == 38) {
        if(player.y_v < -2) {
        player.y_v = -3;
        }
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
} 
function loop() {
    var win = 0;
    var death = 0;
    // If the player is not jumping apply the effect of friction
    if(player.jump == false) {
        player.x_v *= friction;
    } else {
        // If the player is in the air then apply the effect of gravity
        player.y_v += gravity;
    }
    player.jump = true;
    // If the left key is pressed increase the relevant horizontal velocity
    if(keys.left) {
        player.x_v = -2.5;
        player.x += player.x_v;
    }
    if(keys.right) {
        player.x_v = 2.5;
        player.x += player.x_v;
    }
    // Updating the y and x coordinates of the player
    player.y += player.y_v;
    
    // A simple code that checks for collions with the platform
    let i = -1;
    //Borders
    //Left Wall
    if(player.x <= 40){
        player.x = 40;
    }
    //Right Wall
     if(player.x >= 1260){
        player.x = 1260;
    }
    //Floor
    if(platforms[2].x < player.x && player.x < platforms[2].x + platforms[2].width &&
    platforms[2].y  < player.y && player.y < platforms[2].y + platforms[2].height){
        i = 2;
    }
    //Ceiling
    if(player.y <= 20){
        player.y = 20;
    }
    
    //Platforms
    if(platforms[3].x < player.x && player.x < platforms[3].x + 20 + platforms[3].width &&
        platforms[3].y  < player.y && player.y < platforms[3].y + platforms[3].height){
            i = 3;
        }
    if(platforms[4].x < player.x && player.x < platforms[4].x + 20 + platforms[4].width &&
    platforms[4].y  < player.y && player.y < platforms[4].y + platforms[4].height){
        i = 4;
    }
    if(platforms[5].x < player.x && player.x < platforms[5].x + 20 + platforms[5].width &&
    platforms[5].y  < player.y && player.y < platforms[5].y + platforms[5].height){
        i = 5;
    } 
    if(platforms[6].x < player.x && player.x < platforms[6].x + 20 + platforms[6].width &&
    platforms[6].y  < player.y && player.y < platforms[6].y + platforms[6].height){
        i = 6;
    } 
    if(platforms[7].x < player.x && player.x < platforms[7].x + 20 + platforms[7].width &&
    platforms[7].y  < player.y && player.y < platforms[7].y + platforms[7].height){
        i = 7;
    } 
    if(platforms[8].x < player.x && player.x < platforms[8].x + 20 + platforms[8].width &&
    platforms[8].y  < player.y && player.y < platforms[8].y + platforms[8].height){
        i = 8;
    } 
    if(platforms[9].x < player.x && player.x < platforms[9].x + 20 + platforms[9].width &&
    platforms[9].y  < player.y && player.y < platforms[9].y + platforms[9].height){
        i = 9;
    } 
    if(platforms[10].x < player.x && player.x < platforms[10].x + 20 + platforms[10].width &&
    platforms[10].y  < player.y && player.y < platforms[10].y + platforms[10].height){
        i = 10;
    } 
    if(platforms[11].x < player.x && player.x < platforms[11].x + 20 + platforms[11].width &&
    platforms[11].y  < player.y && player.y < platforms[11].y + platforms[11].height){
        i = 11;
    } 
    if(platforms[12].x < player.x && player.x < platforms[12].x + 20 + platforms[12].width &&
    platforms[12].y  < player.y && player.y < platforms[12].y + platforms[12].height){
        i = 12;
    } 
    if(platforms[13].x < player.x && player.x < platforms[13].x + 20 + platforms[13].width &&
    platforms[13].y  < player.y && player.y < platforms[13].y + platforms[13].height){
        i = 13;
    } 
    if(platforms[14].x < player.x && player.x < platforms[14].x + 20 + platforms[14].width &&
    platforms[14].y  < player.y && player.y < platforms[14].y + platforms[14].height){
        i = 14;
    } 
    if(platforms[15].x < player.x && player.x < platforms[15].x + 20 + platforms[15].width &&
    platforms[15].y  < player.y && player.y < platforms[15].y + platforms[15].height){
        i = 15;
    } 
    if(platforms[16].x < player.x && player.x < platforms[16].x + 20 + platforms[16].width &&
    platforms[16].y  < player.y && player.y < platforms[16].y + platforms[16].height){
        i = 16;
    } 
    //Goal
    if(platforms[19].x < player.x && player.x < platforms[19].x + 20 + platforms[19].width &&
    platforms[19].y  < player.y && player.y < platforms[19].y + platforms[19].height){
        i = 19;
        win = 1;
    } 
    if(platforms[20].x < player.x && player.x < platforms[20].x + 20 + platforms[20].width &&
    platforms[20].y  < player.y && player.y < platforms[20].y + platforms[20].height){
        i = 20;
    } 
    if(platforms[18].x < player.x && player.x < platforms[18].x + 20 + platforms[18].width &&
        platforms[18].y  < player.y && player.y < platforms[18].y + platforms[18].height){
            i = 18;
        } 
    if(platforms[17].x < player.x && player.x < platforms[17].x + 20 + platforms[17].width &&
        platforms[17].y  < player.y && player.y < platforms[17].y + platforms[17].height){
             i = 17;
        } 
    if(platforms[22].x < player.x && player.x < platforms[22].x + 20 + platforms[22].width &&
        platforms[22].y  < player.y && player.y < platforms[22].y + platforms[22].height && gotSecret == 0){
             gotSecret = 1;
             score = score + 30000/10;
        }
    if (i > -1){
        player.jump = false;
        player.y = platforms[i].y;    
    }
    // Rendering the canvas, the player and the platforms
    rendercanvas();
    renderplayer();
    renderplat();
    renderGoal();
    checkForDeath();
    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("<--- Goal", 1375, 325);
    
    if(win == 1) {
        location.replace("../jsp/level3Boss.jsp"); 
    }
    if(gameSecs == 0){
        location.replace("../html/deathPage.html");
    }

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
    ctx.clearRect(player.x-36,player.y-36,player.width,player.height);
}
function drawImage(){
    updateFrame();
    if(keys.right){
        ctx.drawImage(warrior, player.srcX, player.srcY, player.width, player.height, player.x-36, player.y-36, 
        player.width, player.height);
    }
    if(keys.left){
        ctx.drawImage(rWarrior, player.srcX, player.srcY, player.width, player.height, player.x-36, player.y-36, 
        player.width, player.height);
    }
    if(!keys.left&&!keys.right){
        ctx.drawImage(warrior, 36, 1, 36, 36, player.x-36, player.y-36, 36, 36);
      }
}
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 850;
ctx.canvas.width = 1500;
createplat();

// Adding the event listeners
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
setInterval(loop,22);
win();