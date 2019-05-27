var turn = 0; // 0:BLACK  1:WHITE
const directions = new Array(-9,-8,1,10);

function getID(element) {
    var id = element.id;
    var position = document.getElementById(id);
    console.log(position)
    if(position.className == "none"){
        position.className = "circle" + turn;
        turn ^= 1;
    }
}

function length(element){
    var position = document.getElementById(element.id);
    var Cname = position.className;
    var count = 0,max_count = 0,num_id = Number(position.id);
    var x;
    for(var i = 0;i < 4;i++){
        count = 0;
        for(var j = 0;j < 5;j++){
            if((num_id + directions[i]*j) < 0 || (num_id + directions[i]*j) > 80) break;
            x = document.getElementById((num_id + directions[i]*j)).className;
            if(x != Cname)break;
            else if(x == Cname) count++;
        }
        count--;
        for(var j = 0;j < 5;j++){
            if((num_id - directions[i]*j) < 0 || (num_id - directions[i]*j) > 80) break;
            x = document.getElementById((num_id - directions[i]*j)).className;
            if(x != Cname)break;
            else if(x == Cname) count++;
        }
        console.log(count)
        max_count = (count > max_count)? count : max_count;
    }
    return max_count;   
}

function judge(connectted_stone){
    if(connectted_stone >= 5){
        var finish = document.getElementById("end");
        finish.innerHTML = (turn^1)? "白石の勝ち!" : "黒石の勝ち!";
        finish.innerHTML += "<br>相手が弱かったwww".strike();
        for(var i = 0;i < 81;i++){
            var board = document.getElementById(i);
            board.onclick = "";
        }
    }
}
var table = document.getElementById("table");
var element = "";
for(var i = 0;i < 81;i++){
    if(i%9 == 0){
        element += "<tr>";
        console.log(i);
    }
    element += "<td bgcolor='#CC9966' class='none' id='"
        + i + "' onclick='getID(this);judge(length(this));'></td>";
    if(i%9 == 8){
        element += "</tr>";
        console.log(i);
    }
}
table.innerHTML += element;
