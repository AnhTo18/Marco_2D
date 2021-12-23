 
 	
	//Global vars
	var restart = false;
	var nextlevel = false;
	var mainmenu = false;
	var move = true;
	var restartlink = '../jsp/level2.jsp';
	var main = '../jsp/home.jsp';
	var level3 = '../jsp/level3.jsp';


    var warrior=new Image();
    warrior.src="../images/militaWarrior.png";
    var rWarrior=new Image();
    rWarrior.src="../images/rWarrior.png";



	//Time in milliseconds - 1 minute = 60000 - Modify this to get time
	var gameTime = 60000;
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
        x: 50,
        y: 600,
        x_v: 0,
        y_v: 0,
        jump : true,
        //height: 20,
        //width: 20,
        
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
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 1280, 720);
    }
    // Function to render the player
    function renderplayer(){
        //ctx.fillStyle = "#F08080";
        //ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
        //setInterval(function(){
         //   drawImage();
        //}, 1000);
		drawImage();
        }
    // Function to create platforms
    function createplat(){
        for(i = 0; i < num; i++) {
            //Borders
			//Left Wall [0]
			platforms.push(
				{
                x: 0,
                y: 0,
                width: 20,
                height: 720
                }
            );
			//Right Wall [1]
			platforms.push(
                {
                x: 1260,
                y: 0,
                width: 20,
                height: 720
                }
            );
			//Floor [2]
			platforms.push(
                {
                x: 0,
                y: 600,
                width: 1280,
                height: 120
                }
            );
			//Ceiling [3]
			platforms.push(
                {
                x: 0,
                y: 0,
                width: 1280,
                height: 20
                }
            );
			
			//Platforms
			platforms.push(
                {
                x: 100,
                y: 475 + (30),
                width: 110,
                height: 15
                }
            );
			platforms.push(
                {
                x: 200,
                y: 400,
                width: 80,
                height: 15
                }
            );
			platforms.push(
                {
                x: 100,
                y: 325,
                width: 50,
                height: 15
                }
            );
			platforms.push(
                {
                x: 240,
                y: 250,
                width: 100,
                height: 15
                }
            );
			platforms.push(
                {
                x: 400,
                y: 200,
                width: 40,
                height: 40
                }
            );
			platforms.push(
                {
                x: 550,
                y: 400,
                width: 100,
                height: 40
                }
            );
			platforms.push(
                {
                x: 740,
                y: 400,
                width: 25,
                height: 15
                }
            );
			platforms.push(
                {
                x: 800,
                y: 300,
                width: 15,
                height: 15
                }
            );
			platforms.push(
                {
                x: 875,
                y: 250,
                width: 20,
                height: 20
                }
            );
			platforms.push(
                {
                x: 1000,
                y: 300,
                width: 200,
                height: 15
                }
            );
			platforms.push(
                {
                x: 1200,
                y: 210,
                width: 80,
                height: 15
                }
            );
			platforms.push(
                {
                x: 1100,
                y: 175,
                width: 50,
                height: 15
                }
            );
			platforms.push(
                {
                x: 900,
                y: 100,
                width: 175,
                height: 15
                }
            );
			
			//Goal
			platforms.push(
                {
                x: 655,
                y: 150,
                width: 20,
                height: 15
                }
            );
			//Goal Platform
			platforms.push(
                {
                x: 675,
                y: 150,
                width: 133,
                height: 15
                }
            );
			//Goal window thing
			platforms.push(
                {
                x: 655,
                y: 115,
                width: 20,
                height: 50
                }
            );
			
			//Lava traps
			platforms.push(
                {
                x: 200,
                y: 560,
                width: 1060,
                height: 40
                }
            );
			
			//Lava pool wall
			platforms.push(
                {
                x: 180,
                y: 540,
                width: 20,
                height: 60
                }
            );
        }
        }
		
	
    // Function to render platforms
    function renderplat(){
        ctx.fillStyle = "#45597E";
		//Borders
		ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0]. height);
		ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width, platforms[1]. height);
		ctx.fillRect(platforms[2].x, platforms[2].y, platforms[2].width, platforms[2]. height);
		ctx.fillRect(platforms[3].x, platforms[3].y, platforms[3].width, platforms[3]. height);
		//Platforms
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
		ctx.fillRect(platforms[14].x, platforms[14].y, platforms[14].width, platforms[14]. height);
		ctx.fillRect(platforms[15].x, platforms[15].y, platforms[15].width, platforms[15]. height);
		ctx.fillRect(platforms[16].x, platforms[16].y, platforms[16].width, platforms[16]. height);
		//Goal platform
		ctx.fillRect(platforms[18].x, platforms[18].y, platforms[18].width, platforms[18]. height);
		ctx.fillRect(platforms[21].x, platforms[21].y, platforms[21].width, platforms[21]. height);
    }
	
	//Render Spikes or death traps
	function renderDeath() {
		ctx.fillStyle = "#A00000";
		ctx.fillRect(platforms[20].x, platforms[20].y, platforms[20].width, platforms[20]. height);
	}
	
	//Render goal
	function renderGoal() {
		 ctx.fillStyle = "#1FFF00";
		 ctx.fillRect(platforms[17].x, platforms[17].y, platforms[17].width, platforms[17]. height);
		 //Goal window
		 ctx.fillRect(platforms[19].x, platforms[19].y, platforms[19].width, platforms[19]. height);
	}
	
    // This function will be called when a key on the keyboard is pressed
    function keydown(e) {
        // 37 is the code for the left arrow key
        if(e.keyCode == 37 && move == true) {
            keys.left = true;
        }
        // 37 is the code for the up arrow key
        if(e.keyCode == 38 && move == true) {
            if(player.jump == false) {
                player.y_v = -10;
            }
        }
        // 39 is the code for the right arrow key
        if(e.keyCode == 39 && move == true) {
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
        
        // If the player is not jumping apply the effect of friction
        if(player.jump == false) {
            player.x_v *= friction;
        } else {
            // If the player is in the air then apply the effect of gravity
            player.y_v += gravity;
        }
        player.jump = true;
        // If the left key is pressed increase the relevant horizontal velocity
        if(keys.left && move == true) {
            player.x_v = -2.5;
			player.x += player.x_v;
        }
        if(keys.right && move == true) {
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
         if(player.x >= 1276){
            player.x = 1276;
        }
		//Floor
		if(platforms[2].x < player.x && player.x < platforms[2].x + platforms[2].width &&
        platforms[2].y  < player.y && player.y < platforms[2].y + platforms[2].height){
            i = 2;
        }
		//Lava Pool Wall
		if(player.x >= 196 && player.x <= 200 && player.y >= 540){
            //i = 21;
			player.x = 196;
        }
		//Ceiling
		if(player.y <= 56){
            player.y = 56;
        }
		
		//Platforms
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
		if(platforms[17].x < player.x && player.x < platforms[17].x + 20 + platforms[17].width &&
        platforms[17].y  < player.y && player.y < platforms[17].y + platforms[17].height){
            i = 17;
			win = 1;
			move = false;
        } 
		if(platforms[18].x < player.x && player.x < platforms[18].x + 20 + platforms[18].width &&
        platforms[18].y  < player.y && player.y < platforms[18].y + platforms[18].height){
            i = 18;
        } 
		
		//Lava traps
		if(platforms[20].x < player.x && player.x < platforms[20].x + 20 + platforms[20].width &&
        platforms[20].y  < player.y && player.y < platforms[20].y + platforms[20].height){
            i = 20;
			death = 1;
			
        } 
		
        if (i > -1){
            player.jump = false;
            player.y = platforms[i].y;    
        }
        // Rendering the canvas, the player and the platforms
        rendercanvas();
        renderplayer();
        renderplat();
		renderDeath();
		renderGoal();
		
		if(win == 1) {
			clearInterval(timer);
			ctx.font = "160px Arial";
			ctx.fillStyle = "black";
			ctx.fillText("You Win!", 300, 300);
			move = false;
			if(nextlevel == false) {
				nextlevel = true;
				let btn = document.createElement("button");
				btn.innerHTML = "Next Level";
				btn.onclick = function () {
					window.location = level3;
				};
				document.body.appendChild(btn);
			}
		}
		if(death == 1) {
			clearInterval(timer);
			ctx.font = "160px Arial";
			ctx.fillStyle = "black";
			ctx.fillText("You Died!", 300, 300);
			move = false;
			//document.getElementById("savescore").value = score;
			//alert(score);
		}
		
	//Buttons
	/*
		if(mainmenu == false) {
			mainmenu = true;
			let mbtn = document.createElement("button");
			mbtn.innerHTML = "Main Menu";
			mbtn.onclick = function () {
				window.location = main;
			};
			document.body.appendChild(mbtn);
		}
		
		if(restart == false) {
			restart = true;
			let btn = document.createElement("button");
			btn.innerHTML = "Restart";
			btn.onclick = function () {
				window.location = restartlink;
			};
			document.body.appendChild(btn);
		}
	*/	
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
    ctx.canvas.height = 620;
    ctx.canvas.width = 1280;
    createplat();
	
    // Adding the event listeners
    document.addEventListener("keydown",keydown);
    document.addEventListener("keyup",keyup);
    setInterval(loop,22);
