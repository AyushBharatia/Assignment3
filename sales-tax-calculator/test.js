"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const subTotal = parseFloat($("#subTotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    if (isNaN(subTotal) || subTotal <= 0 || subTotal >= 10000){
        alert("Subtotal must be > 0 and < 10000");
        $("#subTotal").focus();
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12){
        alert("Tax Rate must be > 0 and < 12");
        $("#taxRate").focus();
        return;
    }

    const salesTax = (subTotal * taxRate) / 100;
    const total = subTotal + salesTax;

    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
    $("#subTotal").focus(); 
};

const clearForm = () => {
    handleSubTotalClick();
    handleTaxRateClick();
    $("#salesTax").value = "";
    $("#total").value = "";
    $("#subTotal").focus();
};

const handleSubTotalClick = () => {
    $("#subTotal").addEventListener("click", () => ($("#subTotal").value = ""));
};

const handleTaxRateClick = () => {
    $("#taxRate").addEventListener("click", () => ($("#taxRate").value = ""));
};


document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearForm);

    $("#subTotal").addEventListener("click", handleSubTotalClick);
    $("#taxRate").addEventListener("click", handleTaxRateClick);

    $("#subTotal").focus(); 


});