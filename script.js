const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

let expression = "";

function calculate(expr) {
    expr = expr
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/√/g, "Math.sqrt")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/\^/g, "**"); // power operator

    return Function('"use strict";return (' + expr + ')')();
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                expression = calculate(expression).toString();
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        } else if (value === "AC") {
            expression = "";
            input.value = "";
        } else if (value === "DEl") {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += value;
            input.value = expression;
        }
    });
});
