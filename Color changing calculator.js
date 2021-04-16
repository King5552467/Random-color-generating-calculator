//DISPLY FUNCTION: this only displays the user input, followed by the results

function dis(calculate) {
    document.getElementById("king").value+=calculate
};

//SOLVE FUNCTION: eval() is a global function in JavaScript and has a defined purpose of solving JavaScript codes

function solve() {
    let a= document.getElementById("king").value
    let b= eval(a)
    document.getElementById("king").value= b
};

//CLEAR FUNCTION: we only need a void in between the quotes to perform this function

function clr() {
    document.getElementById("king").value=""
};

//COLOR FUNCTION: it generates new random color

function changeBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const body = document.getElementById("king");
    body.style.backgroundColor = "#" + randomColor;
};

    document.getElementById("text");
    changeBg();


