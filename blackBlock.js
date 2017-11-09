//创建黑方块

var blackBlock = function(tags){
	this.score = tags.score,
	Block.call(this,tags),
	this.init = Block.prototype.init,
	this.init()
}
//创建白方块
var whileBlock = function(tags){
	Block.call(this,tags),
	this.isDead = false,
	this.init = Block.prototype.init,
	this.init()
}

blackBlock.prototype.move = Block.prototype.move;

whileBlock.prototype.move = Block.prototype.move;

var blackGame = function(){
	var options = {
		name : 'black',
		color : 'black',
		
	}
	return new blackBlock(options);
}

var whileGame = function(){
	var options = {
		name : 'while',
		color : 'while'
	}
	return new whileBlock(options);
}

