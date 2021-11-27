player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_name").innerHTML = player1_score;
ocument.getElementById("player2_name").innerHTML = player2_score;

document.getElementById("player1_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player1_answer").innerHTML = "Answer Turn - " + player2_name;