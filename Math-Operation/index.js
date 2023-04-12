let num1 = prompt ("");
let num2 = prompt ("");
num1 = Number(num1);
num2 = Number(num2);
let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
alert(`
    ${num1}+${num2}=${sum}
    ${num1}-${num2}=${sub}
    ${num1}*${num2}=${mult}
    ${num1}/${num2}=${div}
`)