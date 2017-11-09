//创建方块

var elementBlock = [];
var num = -blockheight;
var len,len2 = 0;
var createBlock = function(){
	
	var ele = [];
	var random = 0;
	var arr = [];
	var arr1 = [];
	
	 arr = [0,1,2,3]

    random = Math.floor(Math.random()*4);
	
	arr1 = arr.splice(random,1);
	for(let i = 0; i <= arr.length; i++){
		
		
		if(i == arr1[0]){
			
			ele.push(blackGame());
		
		}else{
		   ele.push (whileGame());
		}
	}
	
	return ele;
	
}
//初始化

var init = function(){
	
	for(var i = 0;i <= 5; i++){
		elementBlock.push(createBlock());
	}
	 
}

init();

var movechujie = function(){
	num += 1;
	//console.log(Math.ceil(num));
	if (Math.ceil(num) == 0){
		elementBlock.push(createBlock());
		num = -blockheight;
		removeBlock();
	};
	
	len = elementBlock.length;
	for(var i = 0;i < len; i++ ){
		len2 = elementBlock[i].length;
		for(var k = 0 ; k < len2 ; k++){
		  	elementBlock[i][k].move(num);		
		}
	}
	
	//console.log('-----------------');
}
//出界之后删除

function removeBlock(){
	
	len = elementBlock.length;
	for(var i = 0;i < len; i++ ){
		len2 = elementBlock[i].length;
		for(var k = 0 ; k < len2 ; k++){			
			if(elementBlock[i][k].block.offsetTop == 678){
				//console.log(elementBlock[i][k].block.offsetTop == gamediv.offsetHeight-3);				
				game.removeChild(elementBlock[i][k].block);
				//
		        //len--;
			};
						
		};
		
	};
	    elementBlock.splice(0,1);
		len--;
		
	
}

//点击事件
game.onclick = function(ev){
       var ev = ev || window.event;
	   var target = ev.target || ev.srcElement;
        if(target.name==='black'){	
		
          game.replaceChild(whileGame().block,target)		  
		};
}


setInterval(movechujie,10);



