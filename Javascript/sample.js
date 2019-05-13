var count=0;

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
function warning(){
    document.bgColor="red";
};

function show_button(){
    count=0;
    var div=document.getElementById("hit");
    var state=div.style.display;
    div.setAttribute("style","display:inline");
};

function delete_button(){
    var div=document.getElementById("hit");
    var state=div.style.display;
    div.setAttribute("style","display:none");
};

function hit_count(){
    count++
};

function show_result(){
    var box=document.getElementById("result");
    box.innerHTML="あなたのクリックパワーは　"+count+" です。<br>";

    if(count>=25)box.innerHTML+="師匠と呼んでもいいですか？";
    else if(count>=20)box.innerHTML+="テクニシャンにきみはなる!";
    else{box.innerHTML+="見てられん";}
};
