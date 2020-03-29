function getStyle(obj, name) {
    if (obj.currenctStyle){
        return obj.currenctStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}
//startMove(oDiv, {width: 400, height: 400})

function startMove(obj, json,fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for (var attr in json){  //循环json的所有表头（1.width+speed 2.height+speed）
            var cur = 0;
            if (attr=='opacity'){
                cur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                cur = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr]-cur)/6;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if (cur != json[attr])  bStop = false;

            if (attr=='opacity'){
                obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity = (cur+speed)/100;
            }else {
                obj.style[attr] = cur+speed+'px';
            }
        }
        if (bStop){
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }
    },30);

}