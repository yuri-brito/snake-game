
let x1;
let y1;
function process_touchstart(ev){

    x1=ev.changedTouches[0].clientX
    y1=ev.changedTouches[0].clientY
    
  }
function process_touchend(ev){
    let x2=ev.changedTouches[0].clientX
    let y2=ev.changedTouches[0].clientY
    if (Math.abs(y2-y1)>Math.abs(x2-x1)){
        if (y2>y1){
            let e = new KeyboardEvent('keydown',{'keyCode':40,'which':40});
            //console.log(e);
            window.dispatchEvent(e);
        } else{
            let e = new KeyboardEvent('keydown',{'keyCode':38,'which':38});
            //console.log(e);
            window.dispatchEvent(e);
        }
    }else{
        if (x2>x1){
            let e = new KeyboardEvent('keydown',{'keyCode':39,'which':39});
            //console.log(e);
            window.dispatchEvent(e);

        } else{
            let e = new KeyboardEvent('keydown',{'keyCode':37,'which':37});
            //console.log(e);
            window.dispatchEvent(e);
        }
    }

}
document.getElementsByTagName('body')[0].addEventListener('touchstart',process_touchstart)
document.getElementsByTagName('body')[0].addEventListener('touchend',process_touchend)