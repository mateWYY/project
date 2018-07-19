 var box=document.getElementsByClassName('nav-banner')[0];
 var zenlun=document.getElementsByClassName('zenlun')[0];
 var zenlunchuld=[...zenlun.children];
        var childbox=box.childNodes;
        var childs=[];
        var num=0;
 var nums=0;
        function childcompatile(obj,array) {
            for(let i=0;i<obj.length;i++){
                if(obj[i].tagName==undefined){
                    continue
                }else{
                    array.push(obj[i]);
                }
            }
        }
        childcompatile(childbox,childs);
        function ainmval() {
            if(num>1){
                num=0
            }else {
                num+=1;
            }
            for(let i=0;i<childs.length;i++){
                childs[i].style.zIndex=0;
            }
            childs[num].style.zIndex=1;
        }
        setInterval(ainmval,3000);
 console.log(zenlunchuld.length)
 function ainmva2() {
     if(nums>3){
         nums=0
     }else {
         nums+=1;
     }
     for(let i=0;i<zenlunchuld.length;i++){
         zenlunchuld[i].style.zIndex=0;
     }
     zenlunchuld[nums].style.zIndex=1;
 }
 setInterval(ainmva2,3000);