Game = function (game) {}

Game.prototype = {
	init: function (param1) {
		// console.log(param1);
		// console.log(param2);
		// console.log(param3);
		// this.game.physics.startSystem(Phaser.Physics.ARCADE);
		// this.levelSpeed = 200;

		// this.game.physics.arcade.gravity.y = 1000;
		// this.maxJumpDistance = 120;
		// this.myCoins = 0;
		this.backgrounds = this.game.add.group();
		scaleH = this.game.height/1080;
		scaleW = this.game.width/1920;
		this.bgSpeed = -100;
		this.createBGLayer(1.0,scaleH,scaleW,'background4');
		this.createBGLayer(2.0,scaleH,scaleW,'background3');
		this.createBGLayer(2.7,scaleH,scaleW,'background2');
		this.createBGLayer(3.5,scaleH,scaleW,'background1');
		this.points = 0;
		this.life = param1;

		
		
		//this.floor.body.allowGravity = false;
		//this.floor.body.immovable = true;
	},
	create: function () {
		// this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		// this.background.tileScale.y = 2;
		// this.background.autoScroll(this.levelSpeed / 6, 0);

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;

		this.floor = this.game.add.sprite(0,0)
		this.floor.width = this.game.width
		this.game.physics.arcade.enable(this.floor)
		this.floor.body.allowGravity = false;
		this.floor.body.immovable = true;
		this.floor.y = this.game.height-this.floor.height*2
		
		this.player = new Player(this.game, 50, 140, "player_cover");
		this.game.physics.arcade.enable(this.player)
		//this.player.body.collideWorldBounds = true;
		this.game.add.existing(this.player);

		this.game.physics.arcade.enable(this.floor)

		let style = {
			font: '20px Arial',
			fill: "#fff"
		};
		this.pointsLabel = this.game.add.text(10, 20, 'Points: ' + this.points, style)
		this.lifeLabel = this.game.add.text(this.game.width - 100, 20, 'Life: ' + this.life, style)
		this.keyX = this.input.keyboard.addKey(Phaser.Keyboard.X);
		this.keyX.onDown.add(this.coverPlayer, this);
		this.keyX.onUp.add(this.coverPlayer, this);

		this.keys = this.game.input.keyboard.createCursorKeys();
	},
	coverPlayer: function (param) {
		this.player.coverPlayer(this.player.x, this.player.y, param);
		if (param.isDown) {
			this.player.destroy();
			this.player = new Player(this.game, 50, 140, "player_cover");
		} else {
			this.player.destroy();
			this.player = new Player(this.game, 50, 140, "player_run");
		}
		this.game.add.existing(this.player);

	},


	update: function () {
		this.game.physics.arcade.collide(this.player, this.floor)

		if(this.player.body.touching.down){
			if(this.keys.up.isDown){
				this.player.body.velocity.y= -500;
				this.player.animations.play("jump");
				this.player.jump()
			}
			if(this.keys.up.isUp){
				this.player.stopJump()
			}
			
		}
		if(this.keys.left.isDown){
			//this.player.body.velocity.x = -100;
			//this.player.scale.setTo(-2,2);
		}
		else if(this.keys.right.isDown){
			//this.player.body.velocity.x = 100;
			//this.player.scale.setTo(2);
		}else{
			//this.player.animations.stop();
			//this.player.frame = 3;
		}
	},

	createBGLayer(speed, scaleH, scaleW, bgName){
		bgLayer = this.add.tileSprite(0, 0, 1920, 1080, bgName);
		bgLayer.scale.setTo(scaleH,scaleW);
		bgLayer.autoScroll(this.bgSpeed*speed, 0);
		this.backgrounds.add(bgLayer)
	}
}