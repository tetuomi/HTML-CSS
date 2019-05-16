var turn = 0; // 0:BLACK  1:WHITE

document.write("<center>");
document.write("<table rules='all'>");
for(var i = 0;i < 81;i++){
    if(i%9 == 0) document.write("<tr>");
    document.write("<td bgcolor='#CC9966' class='none' id='",i,"' onclick='getID(this);'></td>");
    if(i%9 == 8) document.write("</tr>");
}
document.write("</table>");
document.write("</center>");

function getID(element) {
    var id = element.id;
    var position = document.getElementById(id);
    console.log(position)
    position.className="circle"+turn;
    turn ^= 1;
}
/*
function length(element){
    const directions = new Array(-9,-8,1,10);
    var position = document.getElementById(element.id);
    var Cname = position.className;
    var num = 0;
    var x;
    for(var i = 0;i < 4;i++){
        
        for(var j = 0;j < 5;j++){
            if((position + directions[i]*j) < 0 || (position + directions[i]*j) > 80) break;
            x = document.getElementById((position + directions[i]*j)).className;
            if(x == "none")break;
            else if(x == Cname) num++;
        }
        for(var j = 0;j < 5;j++){
            
        }
    }
}*/
