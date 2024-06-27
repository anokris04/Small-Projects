//calculator

const display = document.getElementsByClassName("display")[0];

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    //error handling
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}