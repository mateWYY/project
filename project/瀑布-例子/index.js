/**
 * Created by Administrator on 2017/8/24.
 */
function animval() {
    let box=document.getElementsByClassName('box')[0];
    let imgs=box.children;
    let windowidth=window.innerWidth;
    let imgwidth=imgs[0].offsetWidth;
    let si=Math.floor(windowidth/imgwidth);
    box.style.width=si*imgwidth+'px';
    let arr=[];
    for(let i=0;i<si;i++){
        let heightindex=imgs[i].offsetHeight;
        arr.push(heightindex);
        imgs[i].style.top=0;
        imgs[i].style.left=i*imgwidth+'px'
    }
    for(let i=si;i<imgs.length;i++){
        let minheight=Math.min.apply(null,arr);
        let minindex=arr.indexOf(minheight);
        let height=imgs[i].offsetHeight;
        arr[minindex]+=height;
        imgs[i].style.top=minheight+'px';
        imgs[i].style.left=minindex*imgwidth+'px'
    }
}
window.onload=function () {
    function animval() {
        let box=document.getElementsByClassName('box')[0];
        let imgs=box.children;
        let windowidth=window.innerWidth;
        let imgwidth=imgs[0].offsetWidth;
        let si=Math.floor(windowidth/imgwidth);
        box.style.width=si*imgwidth+'px';
        let arr=[];
        for(let i=0;i<si;i++){
            let heightindex=imgs[i].offsetHeight;
            arr.push(heightindex);
            imgs[i].style.top=0;
            imgs[i].style.left=i*imgwidth+'px'
        }
        for(let i=si;i<imgs.length;i++){
            let minheight=Math.min.apply(null,arr);
            let minindex=arr.indexOf(minheight);
            let height=imgs[i].offsetHeight;
            arr[minindex]+=height;
            imgs[i].style.top=minheight+'px';
            imgs[i].style.left=minindex*imgwidth+'px'
        }
    }
    animval();
};
window.onscroll=function () {
    let winheight=window.innerHeight;
    let scrolltop=document.body.scrollTop;
    let scrollheight=document.body.scrollHeight;
    let box=document.getElementsByClassName('box')[0];
    let imgs=box.children;
    let arr=['1756.jpg_wh300.jpg','6453.jpg_wh300.jpg','7104.jpg_wh300.jpg','8984.jpg_wh300.jpg','webp.webp (1).jpg','webp.webp (2).jpg','webp.webp.jpg']
    if(winheight+scrolltop+200>scrollheight){
        arr.forEach(function (obj,index) {
            let img=document.createElement('img');
            img.src='image/'+obj;
            box.appendChild(img);
        }.bind(this),false)
    }
    animval();
};
window.onresize=function () {
    animval();
};
