player1_score = 0;
player2_score = 0;

player1_name = localStorage.getItem("player1loginid");
player2_name = localStorage.getItem("player2loginid");

document.getElementById("scorep1").innerHTML = player1_name + " : ";
document.getElementById("scorep2").innerHTML = player2_name + " : ";

document.getElementById("socreofp1").innerHTML = player1_score ;
document.getElementById("socreofp2").innerHTML = player2_score ;

document.getElementById("q1").innerHTML = "Question Turn - " + player1_name ; 
document.getElementById("q2").innerHTML = "Answer Turn -"    + player2_name ;

function sent1() {
    get_word = document.getElementById("input1").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word );
    
    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2); 
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    remove_charAt1 = word.replace(charAt1, "_"); 
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display> Q. "+ remove_charAt3+"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("input1").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case -" + answer);
    if(answer == word)
    {
        if(answer_turn == "player1"){
           player1_score = player1_score +1;
           document.getElementById("socreofp1").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("socreofp2").innerHTML = player2_score;  
        }
    }
    
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("q1").innerHTML = "Question Turn -" + player2_name; 
    }
    else
    {
        question_turn = "player1"
        document.getElementById("q2").innerHTML = "Question Turn -" + player1_name; 
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name; 
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name; 
    }

    document.getElementById("output").innerHTML = "";
}
