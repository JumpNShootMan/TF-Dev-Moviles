Preload = function (game) {}


Preload.prototype = {
	preload: function () {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;

		// this.game.load.image("background", "assets/images/background.png");
		// this.game.load.image("coin", "assets/images/coin.png");
		// this.game.load.image("floor", "assets/images/floor.png");
		// this.game.load.image("player_dead", "assets/images/player_dead.png");
		// this.game.load.spritesheet("player_spritesheet", "assets/images/player_spritesheet.png",51,67,5);
		this.game.load.spritesheet("player_run", "assets/images/Biker_run.png",48,48,6);
		// this.game.load.image("water", "assets/images/water.png");
		// this.game.load.audio("coin",['assets/audio/coin.mp3','assets/audio/coin.ogg']);
	},
	create: function () {
		this.game.state.start("Game",true,false,3);//limpiar mundo, limpiar cache
	}
}