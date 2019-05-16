const board = new Array(81);
var turn = 0; // 0:BLACK  1:WHITE

for(var i = 0;i < 81;i++){ //無駄なことしてるが、undefinedが入ってしまいできなっかた
    if(i%9 == 0) board[i] = "<tr><td bgcolor='#CC9966' id='No"+i+"' onclick='getID(this)'></td>";
    else if(i%9 == 8) board[i] = "<td bgcolor='#CC9966'id='No"+i+"' onclick='getID(this);'></td></tr>";
    else board[i] = "<td bgcolor='#CC9966' id='No"+i+"' onclick='getID(this);'></td>";
}
document.write("<center>");
document.write("<table rules='all'>");
for(var i = 0;i < 81;i++){
    document.write(board[i]);
}
document.write("</table>");
document.write("</center>");

function getID(element) {
    var id = element.id;
    var position = document.getElementById(id);
    position.innerHTML="<div class='circle"+turn+"'></div>";
    turn ^= 1;
}
