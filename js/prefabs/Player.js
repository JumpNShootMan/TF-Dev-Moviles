Player = function (game, x, y, element) {
    Phaser.Sprite.call(this, game, x, y, element);
    this.game = game;
    this.element = element;
    this.anchor.setTo(0.5);
    this.scale.setTo(2,2);
    // this.scale.setTo(200);
    // this.enableBody = true;
    // this.x = x;
    // this.y = y;
    this.reset(x, y, this.element);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.reset = function (x, y, element) {
    Phaser.Sprite.prototype.reset.call(this, x, y);
    this.loadTexture(element);
    this.animations.add("running", [0, 1, 2, 3, 4, 5], 15, true);
    this.animations.add("jump", [0, 1, 2, 3], 7, false);
    this.animations.play("running");
}

Player.prototype.jump = function (){
    this.loadTexture('player_jump');
    this.animations.play('jump')
}

Player.prototype.stopJump = function (){
    if(this.key !='player_cover'){
        this.loadTexture('player_cover');
        this.animations.play('running')
    }
}
