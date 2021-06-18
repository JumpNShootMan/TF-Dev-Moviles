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
		// this.cursors = this.game.input.keyboard.createCursorKeys();
		this.points = 0;
		this.life = param1;
	},
	create: function () {
		// this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		// this.background.tileScale.y = 2;
		// this.background.autoScroll(this.levelSpeed / 6, 0);

		this.player = this.game.add.sprite(50, 240, 'player_run');
		this.player.anchor.setTo(0.5);
		this.player.animations.add('running', [0, 1, 2, 3, 4, 5], 15, true);
		this.player.animations.play("running");
		// this.player2 = new Player(this.game,50,140, "player_run");
		
		let style = {
			font: '20px Arial',
			fill: "#fff"
		};
		this.pointsLabel = this.game.add.text(10, 20, 'Points: ' + this.points, style)
		this.lifeLabel = this.game.add.text(this.game.width - 100, 20, 'Life: ' + this.life, style)
		this.keyX = this.input.keyboard.addKey(Phaser.Keyboard.X);
		this.keyX.onDown.add(this.coverPlayer, this);
		this.keyX.onUp.add(this.coverPlayer, this);
	},
	coverPlayer: function (param) {
		console.log(param);
		if (param.isDown) {
			this.player.destroy();
			this.player = this.game.add.sprite(50, 240, 'player_cover');
			this.player.anchor.setTo(0.5);
			this.player.animations.add('cover', [0, 1, 2, 3, 4, 5], 15, true);
			this.player.animations.play("cover");
		} else {
			this.player.destroy();
			this.player = this.game.add.sprite(50, 240, 'player_run');
			this.player.anchor.setTo(0.5);
			this.player.animations.add('running', [0, 1, 2, 3, 4, 5], 15, true);
			this.player.animations.play("running");
		}
	},


	update: function () {

	},
}