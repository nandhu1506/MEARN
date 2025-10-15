//displayContent : used to display content
function displayContent(content){
    result.value += content
}

//all clear
function clearCalcDisplay(){
    result.value = ""
}

// remove last digit
function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}

// result calculation
function calcResult(){
    try{result.value = eval(result.value)}
    catch{
        result.value = "Invalid Expression"
    }
}