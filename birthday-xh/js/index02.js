window.onload=function(){
	let topImg=document.getElementsByClassName("top_img")[0];
	let topUl=topImg.getElementsByTagName("ul")[0];
	let topLi=topImg.getElementsByTagName("li");
	let time="";
	let num=0;
	let zhuang="#";
	let arry=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g"];
	for(let j=0;j<topLi.length;j++){
		zhuang="#"
		for(let i=0;i<6;i++){
			let shuiji=parseInt(Math.random()*arry.length);
			zhuang+=arry[shuiji];
		}
		topLi[j].style.borderColor=zhuang;
	}
	topUl.innerHTML+=topUl.innerHTML;

	function run(){
		num++;
		if(num>1000){
			num=0;
		
		for(var k=19;k>9;k--){
			topLi[k].remove()
		}
		for(let j=0;j<topLi.length;j++){
			zhuang="#"
			for(let i=0;i<6;i++){
				let shuiji=parseInt(Math.random()*arry.length);
				zhuang+=arry[shuiji];
			}
			console.log(zhuang)
			topLi[j].style.borderColor=zhuang;
		}
			topUl.innerHTML+=topUl.innerHTML;
		}
		topUl.style.marginLeft=-1*num+"px";
		
	}
	time=setInterval(function(){
		run();
	},10)
	
	topImg.onmouseover=function(){
		clearInterval(time)
	}
	
	topImg.onmouseout=function(){
		time=setInterval(function(){
			run();
		},10)
	}
	
}
//function top(){
//		num++
//		if(num>1020){
//			num=0
//			for(var k=9;k>4;k--){
//				liiTop[k].remove()
//			}
//			for(var j=0;j<5;j++){
//				zhuang=""
//				for(var i=0;i<6;i++){
//					var suiji=parseInt(Math.random()*shuzu.length)
//					zhuang+=shuzu[suiji]
//				}
//				liiTop[j].style.borderColor="#"+zhuang
//			}
//			ulTop.innerHTML+=ulTop.innerHTML	
//		}
//		ulTop.style.marginLeft=-1*num+"px"
//	}