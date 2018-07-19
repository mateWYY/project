/**
 * Created by Administrator on 2017/10/11.
 */
//图标变化
var input1=document.getElementsByClassName('input1')[0];
var input2=document.getElementsByClassName('input2')[0];
var aa=document.getElementsByClassName('i1')[0];
var bb=document.getElementsByClassName('i2')[0];
var btn=document.getElementsByClassName('btn')[0];
var cuowu=document.getElementsByClassName('cuowu')[0];
input1.onfocus=function () {
    aa.style.background="url('image/shouji.png')"
};
input1.onblur=function () {
    aa.style.background="url('image/weiShouji.png')"
};
input2.onfocus=function () {
    bb.style.background="url('image/suo.png')"
};
input2.onblur=function () {
    bb.style.background="url('image/weisuo.png')"
};
btn.onclick=function () {
    if(1==1){
        cuowu.style.display='block';
    }
};