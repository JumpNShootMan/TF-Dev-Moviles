Platform = function (game,floorPool,numTiles,x,y,speed) {
    Phaser.Group.call(this,game);
    this.tilesSize = 48;
    this.game = game;
    this.enableBody = true;
    this.floorPool = floorPool;
    // this.coinsPool = coinsPool;
    this.prepare(numTiles,x,y,speed);
}
Platform.prototype = Object.create(Phaser.Group.prototype);

Platform.prototype.constructor = Platform;

Platform.prototype.prepare = function(numTiles,x,y,speed){
	this.alive = true;
	let i = 0;
	while(i < numTiles){
		let floorTile = this.floorPool.getFirstDead();
		if(!floorTile){
			floorTile = new Phaser.Sprite(this.game,x+i*this.tileSize,y,'enemies');
		}else{
			floorTile.reset(x+i*this.tileSize,y);
		}
		this.add(floorTile);
		i++;
	}
	this.setAll("body.immovable",true);
	this.setAll("body.allowGravity",false);
	this.setAll("body.velocity.x",speed);

}
Platform.prototype.kill = function () {
    this.alive = false;
    this.callAll("kill");
    let sprite = [];
    this.forEach(function(tile) {
        sprite.push(tile);
    },this);
    sprite.forEach(function (tile) {
        this.floorPool.add(tile);
    },this);
}
Platform.prototype.addCoins = function (speed) {
    
}