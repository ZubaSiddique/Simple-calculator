let firstnumber = "";
let operator = "";
let secondnumber = "";

function updateFullDisplay() {
    let full = firstnumber;
    if (operator !== "") full += " " + operator + " ";
    if (secondnumber !== "") full += secondnumber;

    document.getElementById("display").innerText = full || "0";
}

function press(num) {
    if (operator === "") {
        firstnumber += num;
    } else {
        secondnumber += num;
    }
    updateFullDisplay();
}

function operation(op) {
    if (firstnumber !== "") {
        operator = op;
        updateFullDisplay();
    }
}

function calculate() {
    if (firstnumber !== "" && operator !== "" && secondnumber !== "") {
        let a = Number(firstnumber);
        let b = Number(secondnumber);
        let result = 0;

        if (operator === "+") result = a + b;
        else if (operator === "-") result = a - b;
        else if (operator === "*") result = a * b;
        else if (operator === "/") result = a / b;

        firstnumber = String(result);
        operator = "";
        secondnumber = "";

        updateFullDisplay(); // show result
    }
}

function clearall() {
    firstnumber = "";
    operator = "";
    secondnumber = "";
    updateFullDisplay();
}
