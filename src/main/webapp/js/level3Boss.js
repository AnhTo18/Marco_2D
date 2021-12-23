	//Time in milliseconds - 1 minute = 60000 - Modify this to get time
	var gameTime = 120000;
	//Do not modify gameSecs or score
	var gameSecs = gameTime / 1000;
	var score = gameTime / 10;
	//Win/Death vars
	var win = 0;
	var death = 0;
	
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
    x: 40,
    y: 50,
    x_v: 0,
    y_v: 0,
    jump : true,
    height: 20,
    width: 20
    };
//the attributes of the boss
var boss = {
    x: 1350,
    y: 445,
    x_v: 0,
    y_v: 0,
    height: 50,
    width: 50
}
//projectiles that boss shoots out. It rotates them around using the extra variable 
var projectile1 = {
    x: -500,
    y: 0,
    x_v: 0,
    y_v: 0,
    height: 75,
    width: 50
}
var projectile2 = {
    x: -500,
    y: 0,
    x_v: 0,
    y_v: 0,
    height: 100,
    width: 50
}
var projectile3 = {
    x: -500,
    y: 0,
    x_v: 0,
    y_v: 0,
    height: 75,
    width: 50
}
var projectile4 = {
    x: -500,
    y: 0,
    x_v: 0,
    y_v: 0,
    height: 40,
    width: 50
}
var projectile5 = {
    x: -500,
    y: 0,
    x_v: 0,
    y_v: 0,
    height: 200,
    width: 100
}
var whichProjectile = 1;
var wait = 0;
//variables relating to the boss
var goingUp = 0;
var bossHits = 0;

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
    ctx.fillRect(0, 0, 1500, 850);
}
//render the projectiles
function renderProjectiles(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(projectile1.x, projectile1.y, projectile1.width, projectile1.height);
    ctx.fillRect(projectile2.x, projectile2.y, projectile2.width, projectile2.height);
    ctx.fillRect(projectile3.x, projectile3.y, projectile3.width, projectile3.height);
    ctx.fillRect(projectile4.x, projectile4.y, projectile4.width, projectile4.height);
    ctx.fillRect(projectile5.x, projectile5.y, projectile5.width, projectile5.height);
}
// Function to render the player
function renderplayer(){
    ctx.fillStyle = "#F08080";
    ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
    }
//funtion to render the boss
function renderBoss(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(boss.x, boss.y, boss.width, boss.height);
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
        
        // bottom layer of Platforms
        // 3 middle left
        platforms.push(
            {
            x: 0,
            y: 600,
            width: 400,
            height: 30
            }
        );
        // 4 middle middle
        platforms.push(
            {
            x: 450,
            y: 600,
            width: 400,
            height: 30
            }
        );
        // 5 middle right
        platforms.push(
            {
            x: 900,
            y: 600,
            width: 400,
            height: 30
            }
        );
        // 6 bottom left
        platforms.push(
            {
            x: 300,
            y: 700,
            width: 250,
            height: 30
            }
        );
        // 7 bottom right
        platforms.push(
            {
            x: 750,
            y: 700,
            width: 250,
            height: 30
            }
        );
        // 8 top left
        platforms.push(
            {
            x: 300,
            y: 500,
            width: 250,
            height: 30
            }
        );
        // 9 top right
        platforms.push(
            {
            x: 750,
            y: 500,
            width: 250,
            height: 30
            }
        );
        //top layer of platforms
        //10 upper middle left
        platforms.push(
            {
            x: 125,
            y: 400,
            width: 275,
            height: 30
            }
        );
        //11 upper middle middle left
        platforms.push(
            {
            x: 475,
            y: 400,
            width: 150,
            height: 30
            }
        );
        //12 upper middle middle right
        platforms.push(
            {
            x: 675,
            y: 400,
            width: 150,
            height: 30
            }
        );
        //13 upper middle right
        platforms.push(
            {
            x: 900,
            y: 400,
            width: 400,
            height: 30
            }
        );
        //14 upper top left
        platforms.push(
            {
            x: 300,
            y: 300,
            width: 250,
            height: 30
            }
        );
        //15 upper top right
        platforms.push(
            {
            x: 750,
            y: 300,
            width: 250,
            height: 30
            }
        );
        //16 spawn platform
        platforms.push(
            {
            x: 0,
            y: 50,
            width: 60,
            height: 15
            }
        );
    }
    

// Function to render platforms
function renderplat(){
    ctx.fillStyle = "#45597E";
    //Borders
    ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);
    ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width, platforms[1].height);
    ctx.fillRect(platforms[2].x, platforms[2].y, platforms[2].width, platforms[2].height);
    //Platforms
    ctx.fillRect(platforms[3].x, platforms[3].y, platforms[3].width, platforms[3].height);
    ctx.fillRect(platforms[4].x, platforms[4].y, platforms[4].width, platforms[4].height);
    ctx.fillRect(platforms[5].x, platforms[5].y, platforms[5].width, platforms[5].height);
    ctx.fillRect(platforms[6].x, platforms[6].y, platforms[6].width, platforms[6].height);
    ctx.fillRect(platforms[7].x, platforms[7].y, platforms[7].width, platforms[7].height);
    ctx.fillRect(platforms[8].x, platforms[8].y, platforms[8].width, platforms[8].height);
    ctx.fillRect(platforms[9].x, platforms[9].y, platforms[9].width, platforms[9].height);
    ctx.fillRect(platforms[10].x, platforms[10].y, platforms[10].width, platforms[10].height);
    ctx.fillRect(platforms[11].x, platforms[11].y, platforms[11].width, platforms[11].height);
    ctx.fillRect(platforms[12].x, platforms[12].y, platforms[12].width, platforms[12].height);
    ctx.fillRect(platforms[13].x, platforms[13].y, platforms[13].width, platforms[13].height);
    ctx.fillRect(platforms[14].x, platforms[14].y, platforms[14].width, platforms[14].height);
    ctx.fillRect(platforms[15].x, platforms[15].y, platforms[15].width, platforms[15].height);
    ctx.fillRect(platforms[16].x, platforms[16].y, platforms[16].width, platforms[16].height);
}

//Check if player is outside the bounds of the map or touched something deadly 
function checkForDeath(){
    if(player.x > 1500 || player.y > 850 || death == 1){
        location.replace("../html/deathPage.html");
    }
    if(gameSecs == 0){
        location.replace("../html/deathPage.html");
    }
}
function checkForWin(){
    if(bossHits == 3){
        location.replace("../html/victoryPage.html");
    }
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
        player.x_v = -3.5;
        player.x += player.x_v;
    }
    if(keys.right) {
        player.x_v = 3.5;
        player.x += player.x_v;
    }
    // Updating the y and x coordinates of the player
    player.y += player.y_v;

    //moving the boss of the level
    if(goingUp == 1){
        boss.y_v = -6;
    }
    if(goingUp == 0){
        boss.y_v = 6;
    }
    if(boss.y > 750){
        boss.y_v = -7;
        goingUp = 1;
    }
    if(boss.y < 100){
        boss.y_v = 7;
        goingUp = 0;
    }
    boss.y += boss.y_v;

    if(whichProjectile == 6){
        whichProjectile = 1;
    }
    if(Math.floor(Math.random() * 75) == 0 && wait >= 10){
        switch(whichProjectile){
            case 1:
                projectile1.y = boss.y;
                projectile1.x = boss.x;
                wait = 0;
                break;
            case 2:
                projectile2.y = boss.y;
                projectile2.x = boss.x;
                wait = 0;
                break;
            case 3:
                projectile3.y = boss.y;
                projectile3.x = boss.x;
                wait = 0;
                break;
            case 4:
                projectile4.y = boss.y;
                projectile4.x = boss.x;
                wait = 0;
                break;
            case 5:
                projectile5.y = boss.y;
                projectile5.x = boss.x;
                wait = 0;
                break;
        }   
    } 
    whichProjectile += 1;
    wait += 1;

    projectile1.x += -10
    projectile2.x += -10
    projectile3.x += -10
    projectile4.x += -15
    projectile5.x += -5

    
    // A simple code that checks for collions with the platform
    let i = -1;
    //Borders
    //Left Wall
    if(player.x <= 40){
        player.x = 40;
    }
    //Right Wall
     if(player.x >= 1500){
        player.x = 1500;
    }
    //Ceiling
    if(player.y <= 20){
        player.y = 20;
    }
    
    //Platforms
    if(platforms[2].x < player.x && player.x < platforms[2].x + platforms[2].width &&
    platforms[2].y  < player.y && player.y < platforms[2].y + platforms[2].height){
        i = 2;
    }
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
    if(boss.x < player.x && player.x < boss.x + 20 + boss.width && boss.y < player.y && player.y < boss.y + boss.height){
        bossHits += 1;
        player.y = 50;
        player.x = 40;
    }
    // checking collision with projectiles
    if(projectile1.x < player.x && player.x < projectile1.x + 20 + projectile1.width &&
        projectile1.y  < player.y && player.y < projectile1.y + projectile1.height){
            location.replace("../html/deathPage.html");
        }
    if(projectile2.x < player.x && player.x < projectile2.x + 20 + projectile2.width &&
        projectile2.y  < player.y && player.y < projectile2.y + projectile2.height){
            location.replace("../html/deathPage.html");
        }
    if(projectile3.x < player.x && player.x < projectile3.x + 20 + projectile3.width &&
        projectile3.y  < player.y && player.y < projectile3.y + projectile3.height){
            location.replace("../html/deathPage.html");
        }
    if(projectile4.x < player.x && player.x < projectile4.x + 20 + projectile4.width &&
        projectile4.y  < player.y && player.y < projectile4.y + projectile4.height){
            location.replace("../html/deathPage.html");
        }
    if(projectile5.x < player.x && player.x < projectile5.x + 20 + projectile5.width &&
        projectile5.y  < player.y && player.y < projectile5.y + projectile5.height){
            location.replace("../html/deathPage.html");
        }
    if (i > -1){
        player.jump = false;
        player.y = platforms[i].y;    
    }
    // Rendering the canvas, the player and the platforms
    rendercanvas();
    renderplayer();
    renderBoss();
    renderProjectiles();
    renderplat();

    if(win == 1){

    }
    document.getElementById("bossHits").innerHTML = "Boss has " + parseInt(3-bossHits) + " health left ";
    checkForDeath();
    checkForWin();
}

canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.canvas.height = 825;
ctx.canvas.width = 1500;
createplat();

// Adding the event listeners
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
setInterval(loop,22);
win();