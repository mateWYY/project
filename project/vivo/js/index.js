//悬停
var hul=document.getElementsByClassName("h_ul")[0];
var nav=document.getElementsByClassName("nav")[0];

hul.onmouseover=function(){
	nav.style.height=160+"px";
}
hul.onmouseout=function(){
	nav.style.height=44+"px";
}
//视频播放
function btn(){
	window.scrollTo(0,0); 
}