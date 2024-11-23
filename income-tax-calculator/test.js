"use strict";

const $ = (selector) => document.querySelector(selector);

const processEntry = () => {
    const taxableIncome = parseFloat($("#taxableIncome").value);
    if(isNaN(taxableIncome) || taxableIncome <= 0){
        $("#taxableIncome_error").textContent = "Tax Amount Should Be > 0"
    } else {
        $("#taxableIncome_error").textContent = "";
        const tax = calculateTax(taxableIncome);
        $("#taxOwed").value = tax;
    }

    $("#taxableIncome").focus();
}

const calculateTax = (taxableIncome) => {
    let tax = 0;

    if (taxableIncome > 518400) {
        tax = 156235 + (taxableIncome - 518400) * 0.37;
    } else if (taxableIncome > 207350) {
        tax = 47367.5 + (taxableIncome - 207350) * 0.35;
    } else if (taxableIncome > 163300) {
        tax = 33271.5 + (taxableIncome - 163300) * 0.32;
    } else if (taxableIncome > 85525) {
        tax = 14605.5 + (taxableIncome - 85525) * 0.24;
    } else if (taxableIncome > 40125) {
        tax = 4617.5 + (taxableIncome - 40125) * 0.22;
    } else if (taxableIncome > 9875) {
        tax = 987.5 + (taxableIncome - 9875) * 0.12;
    } else {
        tax = taxableIncome * 0.1;
    }

    return tax.toFixed(2); 
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);

    $("#taxableIncome").focus();
})