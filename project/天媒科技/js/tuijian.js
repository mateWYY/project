/**
 * Created by Administrator on 2017/10/18.
 */
let tuijianAboxUL=document.getElementsByClassName('tuijianA-boxUL')[0];
let tuijianconentboxconentleft=document.getElementsByClassName('tuijian-conent-box-conent-left')[0];
tuijianAboxUL.addEventListener('click',function (e) {
    if(e.target.tagName=='A'){
        [...tuijianAboxUL.children].forEach(function (obj, index) {
            obj.children[0].style.color='#333';
        },false);
        console.log(e)
        e.target.style.color='#2A7FFF';
        tuijianconentboxconentleft.style.display='block';
    }
},false);