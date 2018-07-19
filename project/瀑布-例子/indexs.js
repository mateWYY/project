/**
 * Created by Administrator on 2017/8/24.
 */
function Animval() {
    this.init=function (box,imgs) {
        this.box=box;
        this.imgs=imgs;
        this.imgwidth=this.imgs[0].offsetWidth;
        this.windowWidth=window.innerWidth;
        this.width=Math.floor(this.windowWidth/this.imgwidth);
        this.arr=[];
    };
    this.Widthadjustment=function () {
        this.box.style.width=this.width*this.imgwidth+'px';
    };
    this.firstLine=function () {
        for(let i=0;i<this.width;i++){
            this.arr.push(this.imgs[i].offsetHeight);
            this.imgs[i].style.top=0;
            this.imgs[i].style.left=i*this.imgwidth+'px';
        }
    };
    this.Yudownlink=function () {
        for(let i=this.width;i<this.imgs.length;i++){
            let min=Math.min.apply(null,this.arr);
            let minindex=this.arr.indexOf(min);
            let iheight=this.imgs[i].offsetHeight;
            this.arr[minindex]+=iheight;
            this.imgs[i].style.top=min+'px';
            this.imgs[i].style.left=minindex*this.imgwidth+'px';
        }
    }
}
window.onload=function () {
    let box=document.getElementsByClassName('box')[0];
    let imgs=box.children;
    let animval=new Animval();
    animval.init(box,imgs);
    animval.Widthadjustment();
    animval.firstLine();
    animval.Yudownlink();
};
window.onresize=function () {
    let box=document.getElementsByClassName('box')[0];
    let imgs=box.children;
    let animval=new Animval();
    animval.init(box,imgs);
    animval.Widthadjustment();
    animval.firstLine();
    animval.Yudownlink();
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
    let animval=new Animval();
    animval.init(box,imgs);
    animval.Widthadjustment();
    animval.firstLine();
    animval.Yudownlink();
}