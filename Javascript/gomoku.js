const board = new Array(81);

for(var i = 0;i < 81;i++){
    if(i%9 == 0) board[i] = "<tr><td bgcolor='#CC9966'></td>";
    else if(i%9 == 8) board[i] = "<td bgcolor='#CC9966'></td></tr>";
    else board[i] = "<td bgcolor='#CC9966'></td>";
}
document.write("<center>");
document.write("<table rules='all'>");
for(var i = 0;i < 81;i++){
    document.write(board[i]);
}
document.write("</table>");
document.write("</center>");




/*
function getID(element) {
    var id = element.id;
    alert(id);
}
*/
