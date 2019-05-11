function OnLinkClick(){
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    document.write(hour+"時",+minute+"分"+second+"秒");
};
