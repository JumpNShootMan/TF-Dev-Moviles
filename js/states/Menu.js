Menu = function (game) {}

Menu.prototype = {
	init: function (param1) {
        this.backgrounds = this.game.add.group();
		scaleH = this.game.height / 1080;
		scaleW = this.game.width / 1920;
		this.bgSpeed = -220;
		this.createBGLayer(1.0, scaleH, scaleW, 'background6');
		this.createBGLayer(1.0, scaleH, scaleW, 'background5');
		this.createBGLayer(1.0, scaleH, scaleW, 'background4');
		this.createBGLayer(2.0, scaleH, scaleW, 'background3');
		this.createBGLayer(2.7, scaleH, scaleW, 'background2');
		this.createBGLayer(3.5, scaleH, scaleW, 'background1');
        this.title = this.add.image(42,50, "title")
		this.creditos = this.add.image(50, 120, "creditos");
    	this.creditos.scale.setTo(0.4);

		this.startBtn = this.game.add.image(120,150, 'start'); //pos x, y, nombre
		this.startBtn.inputEnabled = true //enable input
		this.startBtn.events.onInputDown.add(this.iniciar,this) //se agrega el evento
		this.startBtn.scale.setTo(0.4)

	},

	create: function () {

		this.levelspeed = 220;
		// console.log(this.music);
		this.floor = this.game.add.sprite(0, 0)
		this.floor.width = this.game.width
		this.game.physics.arcade.enable(this.floor)
		this.floor.body.allowGravity = false;
		this.floor.body.immovable = true;
		this.floor.y = this.game.height - this.floor.height * 2

		this.game.physics.arcade.enable(this.floor);

		let style = {
			font: '20px Arial',
			fill: "#fff"
		};


	},

	update: function () {
	
	},

	iniciar: function() {
		this.game.state.start("Game",true,false,3)
	},

	createBGLayer(speed, scaleH, scaleW, bgName) {
		bgLayer = this.add.tileSprite(0, 0, 1920, 1080, bgName);
		bgLayer.scale.setTo(scaleH, scaleW);
		bgLayer.autoScroll(this.bgSpeed * speed, 0);
		this.backgrounds.add(bgLayer)
	},
}