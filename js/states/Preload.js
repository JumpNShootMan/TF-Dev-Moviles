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
		// this.game.load.spritesheet("player_spritesheet", "assets/images/Biker_run.png",48,48,5);
		// this.game.load.image("water", "assets/images/water.png");
		// this.game.load.audio("coin",['assets/audio/coin.mp3','assets/audio/coin.ogg']);
		this.game.load.image("background1", "assets/background/PNG/City2/Pale/background1.png");
		this.game.load.image("background2", "assets/background/PNG/City2/Pale/background2.png");
		this.game.load.image("background3", "assets/background/PNG/City2/Pale/background3.png");
		this.game.load.image("background4", "assets/background/PNG/City2/Pale/background4.png");
		this.game.load.image("background5", "assets/background/PNG/City2/Pale/background5.png");
		this.game.load.image("background6", "assets/background/PNG/City2/Pale/background6.png");
		this.game.load.image("background", "assets/background/PNG/City2/Pale/background.png");
		console.log("Hola");
	},
	create: function () {
		this.game.state.start("Game",true,false,1,'modo pana',true);//limpiar mundo, limpiar cache
	}
}