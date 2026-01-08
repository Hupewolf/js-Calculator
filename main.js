const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
let error = false;

function setClear(type) {
    clearBtn.innerText = type;
}

function append(value) {
    if (error) return;
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
    if (error) return;
    setClear("C");

    if (display.innerText.length === 1) {
        display.innerText = "0";
    } 
    else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    if (error) return;
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
        setClear("AC");
        error = false;
    } 
    catch {
        display.innerText = "Error (click AC)";
        setClear("AC");
        error = true;
    }
}
// phân số
function reciprocal() {
    if (error) return;
    setClear("C");
    let x = Number(display.innerText);
    if (x !== 0) display.innerText = 1 / x;
}

// căn
function sqrt() {
    if (error) return;
    setClear("C");
    let x = Number(display.innerText);
    if (x >= 0) display.innerText = Math.sqrt(x);
}

// mũ
function power() {
    if (error) return;
    setClear("C");
    display.innerText += "**";
}