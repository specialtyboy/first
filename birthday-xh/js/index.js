window.onload=function(){
	let userName=document.getElementById("username");
	let passWord=document.getElementById("pasd");
	let shuRu=document.getElementById("shuru");
	let yangZheng=document.getElementsByClassName("yangzheng")[0];
	let Ochange=document.getElementsByClassName("change")[0];
	let Login=document.getElementById("login");
	
	let arry=["520","025","888"]
	let localtTime=new Date();
	let timeChuo=localtTime.getTime();
	let furTime=timeChuo+10000;
	
	let shuiji=parseInt(Math.random()*arry.length);
	yangZheng.innerHTML=arry[shuiji];
	console.log(yangZheng.innerHTML)
	
	Ochange.onclick=function(){
		let localtTime=new Date();
		let timeChuo=localtTime.getTime();
		furTime=timeChuo+10000;
		let shuiji=parseInt(Math.random()*arry.length);
		yangZheng.innerHTML=arry[shuiji];
	}
	
	Login.onclick=function(){
		let localtTime=new Date();
		let timeChuo=localtTime.getTime();
		if(timeChuo>furTime){
			alert("验证码实效！")
			return false;
		}
		if(shuRu.value===""){
			alert("验证码不能为空！");
			return false;
		}else if(shuRu.value!==yangZheng.innerHTML){
			alert("验证码错误！");
			return false;
		}else{
			if(userName.value=="小慧" && passWord.value=="970124"){
				window.location="css/index02.html";
				alert("登录成功！")
			}else{
				alert("用户名或密码不正确！");
				return false;
			}
		}

	}
}
