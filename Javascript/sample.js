function OnLinkClick(){
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    target=document.getElementById("output");
    target.innerHTML=hour+"時"+minute+"分"+second+"秒に読破しましたね♡";
};
