/**
 * Created by Administrator on 2017/10/22.
 */
//左侧点击事件
let boxleftv=document.getElementsByClassName('box-leftv');
let boxleftv1=document.getElementsByClassName('box-leftv1');
let boxleftv2=document.getElementsByClassName('box-leftv2');
let boxleftv3=document.getElementsByClassName('box-leftv3');
let boxleftv4=document.getElementsByClassName('box-leftv4');
let boxleftv5=document.getElementsByClassName('box-leftv5');
let boxleftv6=document.getElementsByClassName('box-leftv6');
let boxleftv7=document.getElementsByClassName('box-leftv7');
let num1=-1;
let num2=-1;
let num3=-1;
let num4=-1;
let num5=-1;
let num6=-1;
let num7=-1;

boxleftv[0].onclick=function () {
    [...boxleftv1].forEach(function (obj,index) {
        if(num1>0){
            obj.style.display='block';
        }else{
            obj.style.display='none';
        }
        num1=-num1;
    })
};
boxleftv[1].onclick=function () {
    [...boxleftv2].forEach(function (obj,index) {
        if(num2>0){
            obj.style.display='block';
        }else{
            obj.style.display='none';
        }
    });
    num2=-num2;
};
boxleftv[2].onclick=function () {
    [...boxleftv3].forEach(function (obj,index) {
        if(num3>0){
            obj.style.display='block';
        }else{
            obj.style.display='none';
        }
    });
    num3=-num3;
};
boxleftv[3].onclick=function () {
    [...boxleftv4].forEach(function (obj,index) {
        if(num4>0){
            obj.style.display='block';
        }else{
            obj.style.display='none';
        }
    });
    num4=-num4;
};
boxleftv[4].onclick=function () {
    [...boxleftv5].forEach(function (obj,index) {
        if(num5>0){
            obj.style.display='block';
        }else{
            obj.style.display='none';
        }
    });
    num5=-num5;
};
boxleftv[5].onclick=function () {
    [...boxleftv6].forEach(function (obj,index) {
        if(num6>0){
            obj.style.display='block';
        }else{
            obj.style.display='none';
        }
    });
    num6=-num6;
};
boxleftv[6].onclick=function () {
    [...boxleftv7].forEach(function (obj,index) {
        if(num7>0){
            obj.style.display='block';
        }else{
            obj.style.display='none';
        }
    });
    num7=-num7;
};