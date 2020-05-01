function ajax(url,fnSucc,fnFail) {
    //1.创建Ajax对象
    var oAjax = new XMLHttpRequest();
    //2.连接服务器
    oAjax.open('GET',url,true);
    //3.发送请求
    oAjax.send();
    //4.返回返回值
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState == 4){
            if (oAjax.status == 200){
                fnSucc(oAjax.responseText);
            }else {
                fnFail(oAjax.status);
            }
        }
    }

}