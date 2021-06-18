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
}