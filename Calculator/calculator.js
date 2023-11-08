//array for equation. ex. [3, "+", 6]
let equation = [];
let historyArr = [];

//functions to add/remove element in array
function equationAdd(ele)
{
    equation.push(ele);
    console.log(equation);
    updateText()
}

function equationremove()
{
    equation.pop();
    console.log(equation);
    updateText()
}

function equationClear()
{
    equation = [];
    console.log(equation);
    updateText()
}

function updateText()
{
    let output = "";
for(let i = 0; i < equation.length; i++)
{
    output += equation[i].toString()
}
document.getElementById("output").innerHTML = output;
}

function updatehistory()//called after user hits = and code merges numbers
{
    let equationString = ""
    for(let i = 0; i < equation.length; i++)//iterate through equation and add to string
    {
        equationString+=equation[i];
    }
    historyArr.push(equationString);//add the string to the hsitroy arr. history arr now array of strings

    let list = document.getElementById("listy");
    let li = document.createElement('h3');
    li.innerText = equationString;
    list.appendChild(li);

    //implement a display for history
}

//combines numbers
function startEquation()//merge numbers and turn them back into numbers, not strings
{
    updatehistory();
    for(let i = 1; i < equation.length + 1;i++)//iterates length of equation arr minus one so last element is checked
    {    
        if(isFinite(equation[i-1]) && isFinite(equation[i]) || equation[i-1] == "." && isFinite(equation[i]) || isFinite(equation[i-1]) && equation[i] == "." || equation[i-1] == "_" && isFinite(equation[i]) || isFinite(equation[i-1]) && equation[i] == "%")//checks if equation[i] and the index before it are numbers or periods or _ which will turn into negatives
        {
            if(equation[i-1] == '_')
            {
                equation[i-1] = '-';
            }
            if(equation[i] == "%")//veronica added % functionality but it saved incorrectly so i wrote it when i saved my work
            {
                equation[i-1] = equation[i-1] / 100;
                equation.splice(i,1);
            }
            else{
            equation[i-1] = '' + equation[i-1] + equation[i];//combines equation[i] and the index beofore
            equation.splice(i, 1);//removes element at index i
            i--;//subtracts one from i so it doesnt skip a number
            }
        }
    }


    //iterates through array to turn numbers into floats using parsefloat
    for(let j = 0; j < equation.length; j++)
    {
        if(isFinite(parseFloat(equation[j])))//checks if the item at index j is a number
        {
            equation[j] = parseFloat(equation[j]);//turn item at index j into float if it is finite
        }
    }
    

    
    updateText()
    //checks for invalid equations scuh as 1+- or 5**7
    for(let k = 1; k < equation.length+1; k++)
    {
        if(isNaN(equation[k-1]) && isNaN(equation[k]) || isNaN(equation[0]) || isNaN(equation[equation.length-1]))
        {
            //outputs invalid rightn now
            //implement text output later
            equation = [];
            equationClear();
            document.getElementById("output").innerHTML = "Invalid";
        }
    }
mathy();
}

function mathy()
{
    //math
    //mulitplication and division       
    for(let l = 1; l < equation.length;)
    {
        if(equation[l] == "*")
        {
            equation[l-1] = equation[l-1] * equation[l+1];
            equation.splice(l, 2);
            updateText()
        }
        else if(equation[l] == "/")
        {
            equation[l-1] = equation[l-1] / equation[l+1];
            equation.splice(l, 2);
            updateText()
        }
        else
        {
            l++
        }
    }

    //addition and subtraction
    for(let l = 1; l < equation.length; )
    {
        if(equation[l] == "+")
        {
            equation[l-1] = equation[l-1] + equation[l+1];
            equation.splice(l, 2);
            updateText()
        }
        else if(equation[l] == "-")
        {
            equation[l-1] = equation[l-1] - equation[l+1];
            equation.splice(l, 2);
            updateText()
        }
        else
        {
            l++
        }
    }

}