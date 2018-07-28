function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState ==4 && xhr.status===200){
				callback(xhr.responseText)
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	basic(data.details);
	edu(data.education);
})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(Nagalakshmi){
var image=document.createElement("img");
image.src=Nagalakshmi.image;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=Nagalakshmi.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=Nagalakshmi.email;
left.appendChild(email);
var phone=document.createElement("h3");
phone.textContent=Nagalakshmi.phone;
left.appendChild(phone);
}

var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var un=document.createElement("ul");
	right.appendChild(un);
	for (var i =education.length - 1; i >= 0; i--) {
	var l=document.createElement("li");
	l.textContent=education[i].course;
	un.appendChild(l);
	var l1=document.createElement("li");
	l1.textContent=education[i].college;
	un.appendChild(l1);
	var l2=document.createElement("li");
	l2.textContent=education[i].per;
	un.appendChild(l2);
}




}

