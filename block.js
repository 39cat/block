var gamediv = document.getElementById('gamediv');
var game = document.getElementById('game');

var blockwidth = gamediv.offsetWidth/4-(2/4),
    blockheight = gamediv.offsetHeight/5-(2/4);
	

console.log (blockheight + '-----' + blockwidth);


function Block(tags){
	this.name = tags.name,
	this.width = blockwidth,
	this.height = blockheight,
	this.X = tags.X,
	this.Y = tags.Y,
	this.block = null,
	this.color = tags.color
}

Block.prototype.move = function(k){
	
	this.block.style.top = k + "px";
	
	
	
}

Block.prototype.init = function(){
	
	this.block = document.createElement('div');
	this.block.name = this.name;
	this.block.style.width = this.width + "px";
	this.block.style.height = this.height + "px";
	this.block.style.background = this.color;
	this.block.style.position = "relative";
	this.block.style.top = -blockheight + 'px';
	game.insertBefore(this.block,game.firstChild);
	return this.block;
}