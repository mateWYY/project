/**
 * Created by Administrator on 2017/10/25.
 */
//手机点击
let duoxuanT=document.getElementsByClassName('duoxuanT')[0];
let yin=document.getElementsByClassName('yin')[0];
let num=-1;
duoxuanT.onclick=function () {
    if(num>0){
        yin.style.display='none';
        num=-num;
    }else{
        yin.style.display='block';
        num=-num;
    }

};
