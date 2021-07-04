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
		scaleH = this.game.height / 1080;
		scaleW = this.game.width / 1920;
		this.bgSpeed = -100;
		this.createBGLayer(1.0, scaleH, scaleW, 'background6');
		this.createBGLayer(1.0, scaleH, scaleW, 'background5');
		this.createBGLayer(1.0, scaleH, scaleW, 'background4');
		this.createBGLayer(2.0, scaleH, scaleW, 'background3');
		this.createBGLayer(2.7, scaleH, scaleW, 'background2');
		this.createBGLayer(3.5, scaleH, scaleW, 'background1');
		this.points = 0;
		this.life = param1;
		this.elapseEnemies = 0;
		this.elapseBarricade= 0;
		//this.floor.body.allowGravity = false;
		//this.floor.body.immovable = true;
	},

	// render: function () {
	// 	this.game.debug(this.enemy, 20, 32);
	// },
	create: function () {
		// this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		// this.background.tileScale.y = 2;
		// this.background.autoScroll(this.levelSpeed / 6, 0);
		// this.levelSpeed = 2;
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 700;
		this.music = this.game.add.audio('cocacola');
		this.music.volume = 0.4;
		this.music.loop = true;
		this.music.autoplay = true;
		this.music.play();

		this.levelspeed = 100;
		// console.log(this.music);
		this.floor = this.game.add.sprite(0, 0)
		this.floor.width = this.game.width
		this.game.physics.arcade.enable(this.floor)
		this.floor.body.allowGravity = false;
		this.floor.body.immovable = true;
		this.floor.y = this.game.height - this.floor.height * 2

		this.enemiesPool = this.game.add.group(); // enemigos
		this.barricadePool = this.game.add.group(); 
		
		this.barricade = this.game.add.sprite(this.game.width + 20, this.game.height - 90, 'barricade');
		this.game.physics.arcade.enable(this.barricade);
		this.barricade.anchor.setTo(0.5);
		this.barricade.scale.setTo(1);
		this.barricade.body.allowGravity = false;
		this.barricade.body.velocity.x = -this.levelspeed;
		this.barricadePool.add(this.barricade);
		this.barricade.kill();
		// this.barricadePool.callAll("kill");


		this.enemy = this.game.add.sprite(this.game.width + 20, this.game.height - 105, 'enemies');
		this.game.physics.arcade.enable(this.enemy);
		this.enemy.animations.add("attack", [0, 1, 2, 3, 4, 5, 6, 7], 8, true);
		this.enemy.animations.play("attack");
		this.enemy.anchor.setTo(0.5);
		this.enemy.body.allowGravity = false;
		this.enemy.scale.setTo(-2, 2);
		this.enemy.body.velocity.x = -this.levelspeed;
		this.enemiesPool.add(this.enemy);

		this.player = new Player(this.game, 50, 110, "player_run");
		this.game.physics.arcade.enable(this.player);
		//this.player.body.collideWorldBounds = true;
		this.game.add.existing(this.player);

		this.game.physics.arcade.enable(this.floor);

		let style = {
			font: '20px Arial',
			fill: "#fff"
		};
		this.pointsLabel = this.game.add.text(10, this.game.height - 40, 'Points: ' + this.points, style)
		this.lifeLabel = this.game.add.text(this.game.width - 100, this.game.height - 40, 'Life: ' + this.life, style)
		this.keyX = this.input.keyboard.addKey(Phaser.Keyboard.X);
		this.keyX.onDown.add(this.coverPlayer, this);
		this.keyX.onUp.add(this.coverPlayer, this);

		this.keys = this.game.input.keyboard.createCursorKeys();
	},

	createPlatform: function () {
		let currentEnemy = this.enemiesPool.getFirstDead();
		if (currentEnemy) {
			currentEnemy.reset(this.game.width + 20, this.game.height - 105);
		} else {
			currentEnemy = this.game.add.sprite(this.game.width + 20, this.game.height - 105, 'enemies');

			this.enemiesPool.add(currentEnemy);
		}

		this.game.physics.arcade.enable(currentEnemy);
		currentEnemy.animations.add("attack", [0, 1, 2, 3, 4, 5, 6, 7], 8, true);
		currentEnemy.animations.play("attack");
		currentEnemy.anchor.setTo(0.5);
		currentEnemy.body.allowGravity = false;

		currentEnemy.scale.setTo(-2, 2);
		currentEnemy.body.velocity.x = -this.levelspeed;
	},

	createBarricade: function () {
		let currentBarricade = this.barricadePool.getFirstDead();
		if (currentBarricade) {
			currentBarricade.reset(this.game.width + 20, this.game.height - 90);
		} else {
			currentBarricade = this.game.add.sprite(this.game.width + 20, this.game.height - 90, 'barricade');
			this.barricadePool.add(currentBarricade);
		}

		this.game.physics.arcade.enable(currentBarricade);
		currentBarricade.anchor.setTo(0.5);
		currentBarricade.scale.setTo(0.9,1);
		currentBarricade.body.allowGravity = false;

		currentBarricade.body.velocity.x = -this.levelspeed;
	},



	coverPlayer: function (param) {
		this.player.coverPlayer(param);
	},

	update: function () {

		this.game.physics.arcade.collide(this.player, this.floor);
		this.game.physics.arcade.collide(this.enemiesPool, this.floor);
		this.game.physics.arcade.collide(this.barricadePool, this.floor);
		if (this.player.body.touching.down) {
			if (this.keys.up.isDown) {
				this.player.body.velocity.y = -500;
				this.player.animations.play("jump");
				this.player.jump()
			}
			if (this.keys.up.isUp) {
				this.player.stopJump()
			}
		}
		if (this.keys.left.isDown) {
			//this.player.body.velocity.x = -100;
			//this.player.scale.setTo(-2,2);
		} else if (this.keys.right.isDown) {
			//this.player.body.velocity.x = 100;
			//this.player.scale.setTo(2);
		} else {
			//this.player.animations.stop();
			//this.player.frame = 3;
		}

		this.elapseEnemies += this.game.time.elapsed;
		this.elapseBarricade += this.game.time.elapsed;
		if (this.elapseEnemies >= 4000) {
			this.elapseEnemies = 0;
			this.enemiesPool.forEachAlive(function (enemy) {
				if (enemy.right < enemy.width) {
					enemy.kill();
				}
			}, this);
			if (this.enemiesPool.length && this.enemiesPool.children[this.enemiesPool.length - 1].right < this.game.width) {
				this.createPlatform();
			}

		}

		if (this.elapseBarricade >= 7000) {
			this.elapseBarricade = 0;
			this.barricadePool.forEachAlive(function (barri) {
				if (barri.right < barri.width) {
					barri.kill();
				}
			}, this);
			console.log(this.barricadePool.length);
			if (this.barricadePool.length) {
				this.createBarricade();
			}

		}
		
	},

	createBGLayer(speed, scaleH, scaleW, bgName) {
		bgLayer = this.add.tileSprite(0, 0, 1920, 1080, bgName);
		bgLayer.scale.setTo(scaleH, scaleW);
		bgLayer.autoScroll(this.bgSpeed * speed, 0);
		this.backgrounds.add(bgLayer)
	}
}