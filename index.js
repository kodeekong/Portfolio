let board = [[document.getElementById("elem1"), document.getElementById("elem2"), document.getElementById("elem3")], [document.getElementById("elem4"), document.getElementById("elem5"), document.getElementById("elem6")], [document.getElementById("elem7"), document.getElementById("elem8"), document.getElementById("elem9")]]

var xTurn = true

var xScore = 0
var oScore = 0

function turn(id){
    if(checkWin() == ''){
        if(xTurn == true){
            if(document.getElementById(id).innerHTML == "")
            {
                document.getElementById(id).innerHTML = 'X'
                xTurn = false
            }
        }

        else
        {
            if(document.getElementById(id).innerHTML == "")
            {
                document.getElementById(id).innerHTML = 'O'
                xTurn = true
            }
            
        }
    }

    
    if(checkWin() == 'X')
    {
        xScore++;
        document.getElementById("playerx").innerHTML = "Player X Score: " + xScore;
    }
    else if(checkWin() == 'O')
    {
        oScore++;
        document.getElementById("playero").innerHTML = "Player O Score: " + oScore;
    }

    //call function to check if all squares r full
    //if they are, call reset function
    else if(isFull() && checkWin() == '')
    {
        alert("Board Full. No Winner. Resetting Board");
        reset(false);
    }
}


function checkWin()
{
    winner = "";
    //check horizontals
    if(board[0][0].innerHTML == board[0][1].innerHTML && board[0][1].innerHTML == board[0][2].innerHTML)
    {
        winner = board[0][0].innerHTML;
        if(board[0][0].innerHTML != "")
        {
            board[0][0].style.backgroundColor = "green"
            board[0][1].style.backgroundColor = "green"
            board[0][2].style.backgroundColor = "green"
        }
    }
    else if(board[1][0].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[1][2].innerHTML)
    {
        winner = board[1][0].innerHTML;
        if(board[1][0].innerHTML != "")
        {
            board[1][0].style.backgroundColor = "green"
            board[1][1].style.backgroundColor = "green"
            board[1][2].style.backgroundColor = "green"
        }
    }
    else if (board[2][0].innerHTML == board[2][1].innerHTML && board[2][1].innerHTML == board[2][2].innerHTML)
    {
        winner = board[2][0].innerHTML;
        if(board[2][0].innerHTML != "")
        {
            board[2][0].style.backgroundColor = "green"
            board[2][1].style.backgroundColor = "green"
            board[2][2].style.backgroundColor = "green"
        }
    }

    //check veticals
    else if(board[0][0].innerHTML == board[1][0].innerHTML && board[1][0].innerHTML == board[2][0].innerHTML)

    {
        winner = board[0][0].innerHTML;
        if(board[0][0].innerHTML != "")
        {
            board[0][0].style.backgroundColor = "green"
            board[1][0].style.backgroundColor = "green"
            board[2][0].style.backgroundColor = "green"
        }
    }
    else if(board[0][1].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[2][1].innerHTML)
    {
        winner = board[0][1].innerHTML;
        if(board[0][1].innerHTML != "")
        {
            board[0][1].style.backgroundColor = "green"
            board[1][1].style.backgroundColor = "green"
            board[2][1].style.backgroundColor = "green"
        }
    }
    else if (board[0][2].innerHTML == board[1][2].innerHTML && board[1][2].innerHTML == board[2][2].innerHTML)
    {
        winner = board[0][2].innerHTML;
        if(board[0][2].innerHTML != "")
        {
            board[0][2].style.backgroundColor = "green"
            board[1][2].style.backgroundColor = "green"
            board[2][2].style.backgroundColor = "green"
        }
    }

    //check horizontals
    else if(board[0][0].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[2][2].innerHTML)
    {
        winner = board[0][0].innerHTML;
        if(board[0][0].innerHTML != "")
        {
            board[0][0].style.backgroundColor = "green"
            board[1][1].style.backgroundColor = "green"
            board[2][2].style.backgroundColor = "green"
        }
    }
    else if(board[2][0].innerHTML == board[1][1].innerHTML && board[1][1].innerHTML == board[0][2].innerHTML)
    {
        winner = board[2][0].innerHTML;
        if(board[2][0].innerHTML != "")
        {
            board[2][0].style.backgroundColor = "green"
            board[1][1].style.backgroundColor = "green"
            board[0][2].style.backgroundColor = "green"
        }
    }

    return winner;
}

function reset(fullReset){
    var cells = document.getElementsByClassName("cell")
    for(var k = 0; k < cells.length; k++){
        cells[k].innerHTML = ''
    }

    //resets background color
    board[0][0].style.backgroundColor = "#F5F5F5"
    board[0][1].style.backgroundColor = "#F5F5F5"
    board[0][2].style.backgroundColor = "#F5F5F5"
    board[1][0].style.backgroundColor = "#F5F5F5"
    board[1][1].style.backgroundColor = "#F5F5F5"
    board[1][2].style.backgroundColor = "#F5F5F5"
    board[2][0].style.backgroundColor = "#F5F5F5"
    board[2][1].style.backgroundColor = "#F5F5F5"
    board[2][2].style.backgroundColor = "#F5F5F5"

    xTurn = true;//resets xtrun so x always goes first

    if(fullReset == true)
    {
        oScore = 0;
        xScore = 0;
        document.getElementById("playerx").innerHTML = "Player X Score: " + xScore;
        document.getElementById("playero").innerHTML = "Player O Score: " + oScore;
    }
}


//implelement function to check if all squares r used
function isFull()
{
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)//iterates through board. if an empty square is found, return false. if not. return true after iterations
            if(board[i][j].innerHTML == "")
            {
                return false;
            }
    }
    return true
}