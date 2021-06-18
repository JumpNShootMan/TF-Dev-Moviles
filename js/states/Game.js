Game = function (game) {}

Game.prototype = {
	init: function (param1, param2, param3) {
		// console.log(param1);
		// console.log(param2);
		// console.log(param3);
		// this.game.physics.startSystem(Phaser.Physics.ARCADE);
		// this.levelSpeed = 200;

		// this.game.physics.arcade.gravity.y = 1000;
		// this.maxJumpDistance = 120;
		// this.cursors = this.game.input.keyboard.createCursorKeys();
		// this.myCoins = 0;
		this.backgrounds = this.game.add.group();
		scaleH = this.game.height/1080;
		scaleW = this.game.width/1920;
		this.bgSpeed = -100;
		this.createBGLayer(0.3,scaleH,scaleW,'background6');
		this.createBGLayer(0.4,scaleH,scaleW,'background5');
		this.createBGLayer(0.6,scaleH,scaleW,'background4');
		this.createBGLayer(0.7,scaleH,scaleW,'background3');
		this.createBGLayer(0.9,scaleH,scaleW,'background2');
		this.createBGLayer(1.0,scaleH,scaleW,'background1');
		console.log("Hola");
	},
	create: function () {
		// this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		// this.background.tileScale.y = 2;
		// this.background.autoScroll(this.levelSpeed / 6, 0);

		// this.player = this.game.add.sprite(50, 140, 'player_spritesheet');
		// this.player.anchor.setTo(0.5);
		// this.player.animations.add('running', [0, 1, 2, 3, 2, 1], 15, true);
		// this.player.animations.play("running");
		// this.game.physics.arcade.enable(this.player);

		// // this.player.body.collideWorldBounds = true;
		// this.water = this.game.add.tileSprite(0, this.game.height - 30, this.game.width, 30, "water");
		// this.water.autoScroll(this.levelSpeed / 2, 0);

		// this.platformPool = this.game.add.group();
		// this.floorPool = this.game.add.group();
		// this.coinsPool = this.game.add.group();
		// this.coinsPool.enableBody = true;

		// this.currentPlatform = new Platform(this.game, this.floorPool, 11, 0, 200, -this.levelSpeed, this.coinsPool);
		// this.platformPool.add(this.currentPlatform);
		// let style = {
		// 	font: '30px Arial',
		// 	fill: "#fff"
		// };
		// this.coinCountLabel = this.game.add.text(10, 20, '0', style)
		// this.loadLevel();
	},
	
	update: function () {

	},

	createBGLayer(speed, scaleH, scaleW, bgName){
		bgLayer = this.add.tileSprite(0, 0, 1920, 1080, bgName);
		bgLayer.scale.setTo(scaleH,scaleW);
		bgLayer.autoScroll(this.bgSpeed*speed, 0);
		this.backgrounds.add(bgLayer)
	}
}