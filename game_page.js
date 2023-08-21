function send() 
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    var question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    inputbox = "<br> resposta: <input type='text' id='input_check_bots' >";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHtMl = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player2name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player2name; 
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player1_name;
    }
}
