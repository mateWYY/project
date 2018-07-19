/**
 * Created by Administrator on 2017/10/25.
 */
//首页轮播
var bigbanner=document.getElementsByClassName("big-banner")[0];
var smallbann=document.getElementsByClassName('small-bann');
var smallbanner=document.getElementsByClassName('small-banner')[0];
var num=0;//轮播自增量
var pcimg=document.getElementsByClassName('pcimg');
function lunbo() {
    num++;
    if(num>bigbanner.children.length-1){
        num=0;
    }
    Array.prototype.slice.call(bigbanner.children).forEach(function (obj, index) {
        obj.style.display='none';
    },false);
    Array.prototype.slice.call(smallbann).forEach(function (obj, index) {
        obj.style.background='#f0f0f0';
        obj.style.color='#666666';
        obj.children[1].style.display='none';
    },false);
    bigbanner.children[num].style.display='block';
    smallbann[num].children[1].style.display='block';
    smallbann[num].style.color='#fff';
}

function aa() {
    setInterval(lunbo,2000)
}
smallbanner.addEventListener('mouseover',function (e) {
        if(e.target.tagName=='P'){
            Array.prototype.slice.call(bigbanner.children).forEach(function (obj, index) {
                obj.style.display='none';
            },false);
            Array.prototype.slice.call(smallbann).forEach(function (obj, index) {
                obj.style.background='#f0f0f0';
                obj.style.color='#666666';
                obj.children[1].style.display='none';
            },false);
            var index=Array.prototype.slice.call(smallbanner.children).indexOf(e.target.parentNode);
            bigbanner.children[index].style.display='block';
            pcimg[index].style.display='block';
            smallbann[index].style.color='#fff';
            bigbanner.children[index].style.display='block';
        }
});
smallbanner.addEventListener('out',function (e) {
    if(e.target.tagName=='P'){
        aa();
    }
});
aa();

