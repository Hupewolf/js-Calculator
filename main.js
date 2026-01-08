const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");

function setClear(type) {
    clearBtn.innerText = type;
}

function append(value) {
    setClear("C");

    if (display.innerText === "0") {
        display.innerText = value;
    } 
    else {
        display.innerText += value;
    }
}

function clearAll() {
    display.innerText = "0";
    setClear("AC");
}

function del() {
    setClear("C");

    if (display.innerText.length === 1) {
        display.innerText = "0";
    } 
    else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
        setClear("AC");
    } 
    catch {
        display.innerText = "Error";
        setClear("AC");
    }
}

function reciprocal() {
    setClear("C");
    let x = Number(display.innerText);
    if (x !== 0) display.innerText = 1 / x;
}

// √x
function sqrt() {
    setClear("C");
    let x = Number(display.innerText);
    if (x >= 0) display.innerText = Math.sqrt(x);
}

// xʸ
function power() {
    setClear("C");
    display.innerText += "**";
}