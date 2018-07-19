/**
 * Created by Administrator on 2017/7/25.
 */
function Superclass(){
    this.initial=function (box,left,right,type,line) {
        this.box=box;
        this.left=left;
        this.right=right;
        this.indexs=0;
        this.type=type;
        this.line=line;
        this.time=null;
    };
    this.result=function () {
        if(this.type==1){
            this.sliding(false);
            if(this.indexs<this.box.children[0].children.length-1){
                this.indexs++;
            }else{
                this.indexs=0;
            }
            this.reds();
            this.sliding(true);
        }else if(this.type==2){
            this.opacity(false);
            if(this.indexs<this.box.children[0].children.length-1){
                this.indexs++;
            }else{
                this.indexs=0;
            }
            this.reds();
            this.opacity(true);
        }

    };
    this.lesult=function(){
        if(this.type==1){
            this.clearanimval();
            this.sliding(false);
            if(this.indexs>0){
                this.indexs--;
            }else{
                this.indexs=this.box.children[0].children.length-1;
            }
            this.reds();
            this.sliding(true);
            this.setanimval();
        }else if(this.type==2){
            this.clearanimval();
            this.opacity(false);
            if(this.indexs>0){
                this.indexs--;
            }else{
                this.indexs=this.box.children[0].children.length-1;
            }
            this.reds();
            this.opacity(true);
            this.setanimval();
        }
    };
    this.lines=function () {
        for(var i=0;i<this.box.children[0].children.length;i++){
            var div=document.createElement('div');
            div.className='yuan';
            this.line.appendChild(div);
        }
    };
    this.reds=function () {
        var childs=this.line.children;
        Array.prototype.slice.call(childs).forEach(function (boj) {
            boj.style.background='#A2A5A6';
        },false);
        childs[this.indexs].style.background='#fff';
    };
    this.setanimval=function () {
        this.time=setInterval(function(){this.result()}.bind(this),2000);
    };
    this.clearanimval=function(){
        clearInterval(this.time);
    };
    this.Listener=function () {
        this.right.addEventListener('click',function (e) {
            this.result();
        }.bind(this),false);
        this.left.addEventListener('click',function (e) {
            this.lesult();
        }.bind(this),false);
        this.line.addEventListener('mouseover',function (e) {
            if(e.target.className=='yuan'){
                this.clearanimval();
                if(this.type==1){
                    this.sliding(false);
                    this.indexs=Array.prototype.slice.call(this.line.children).indexOf(e.target);
                    this.sliding(true);
                }else if(this.type==2){
                    this.opacity(false);
                    this.indexs=Array.prototype.slice.call(this.line.children).indexOf(e.target);
                    this.opacity(true);
                }
                this.reds();
            }
        }.bind(this),false);
        this.line.addEventListener('mouseout',function (e) {
            if(e.target.className=='yuan'){
                this.setanimval();
            }
        }.bind(this),false);
    };

}