function tobig(){
	var ob =document.getElementById('box');
	ob.style.width='400px';
	ob.style.height='400px';
	ob.style.backgroundColor='skyblue';
}
function tosmall(){
	var ob =document.getElementById('box');
	ob.style.width='100px';
	ob.style.height='100px';
	ob.style.backgroundColor='red';
}

// var ob =document.getElementById('box');
// 	ob.onmouseover=tobig;
// 	ob.onmouseout=tosmall;
	/*匿名函数就是没有名字的函数*/
	var ob =document.getElementById('box');
	ob.onmouseover = function(){
		tobig();
	}
	ob.onmouseout = function(){
		tosmall();
	}