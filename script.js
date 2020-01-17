"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY - MM - DD", "YYYY - MM - DD");
let mustExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = +prompt("Во сколько обойдется?", "");
let mustExpenses2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost2 = +prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        mustExpenses : cost,
        mustExpenses2 : cost2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("Ваш бюджет на 1 день = " + (appData.budget - appData.expenses.mustExpenses - appData.expenses.mustExpenses2) / 30 + " руб");






