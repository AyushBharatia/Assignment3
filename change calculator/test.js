"use strict";

const $ = (selector) => document.querySelector(selector);

const processEntry = () => {
    const amountOfChange = parseFloat($("#amountOfChange").value);
    if (isNaN(amountOfChange) || amountOfChange < 0 || amountOfChange > 99) {
        alert("Amount Of Change Due Must Be Between 0 and 99");
    } else {
        makeChange(amountOfChange);
    }
};

const makeChange = (amountOfChange) => {
    const amountOfQuarters = Math.floor(amountOfChange / 25);
    amountOfChange -= amountOfQuarters * 25;

    const amountOfDimes = Math.floor(amountOfChange / 10);
    amountOfChange -= amountOfDimes * 10;

    const amountOfNickles = Math.floor(amountOfChange / 5);
    amountOfChange -= amountOfNickles * 5;

    const amountOfPennies = amountOfChange;

    $("#amountOfQuarters").value = amountOfQuarters;
    $("#amountOfDimes").value = amountOfDimes;
    $("#amountOfNickles").value = amountOfNickles;
    $("#amountOfPennies").value = amountOfPennies;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
});
