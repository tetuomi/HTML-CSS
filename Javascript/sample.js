function OnLinkClick(){
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    document.getElementById("output").innerHTML=
        hour+"時"+minute+"分"+second+"秒に読破しましたね♡";
};

function Scroll(){
    var a = document.documentElement;
    var y = a.scrollHeight - a.clientHeight;
    window.scroll(0, y);

    // scrollHeight：ページの高さ
    // clientHeight：ブラウザの高さ
    // window.scroll(水平方向,垂直方向)
};
