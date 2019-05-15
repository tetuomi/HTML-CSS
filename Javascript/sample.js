var count=0;

function show_time(id){
    var time=new Date();

    var hour=time.getHours();
    var minute=time.getMinutes();
  //  var second=time.getSeconds();
    document.getElementById(id).innerHTML=
        hour+"時"+minute+"分"; // +second+"秒";
/*
    document.getElementById(id).innerHTML=
        time.toLocaleTimeString();
*/
};

window.onload = function(){
    show_time("clock");
}

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

function show_text(){
    var text=document.form1.textarea1.value;
    document.getElementById("text").innerHTML=text+"と書き込みましたね♡";
};

function hit_count(){
    count++
};

function show_result(){
    var box=document.getElementById("result");
    box.innerHTML="あなたのクリックパワーは　"+count+" です。<br>";

    if(count>=42)box.innerHTML+="ゴッドフィンガー";
    else if(count>=35)box.innerHTML+="あはん。上にはえのき師匠がいるぞ";
    else if(count>=20)box.innerHTML+="テクニシャンにきみはなる!";
    else{box.innerHTML+="見てられん";}
};
