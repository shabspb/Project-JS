"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY - MM - DD", "YYYY - MM - DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let mustExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = +prompt("Во сколько обойдется?", "");
let mustExpenses2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost2 = +prompt("Во сколько обойдется?", "");

appData.expenses[mustExpenses] = cost;
appData.expenses[mustExpenses2] = cost2;

alert("Ваш бюджет на 1 день = " + appData.budget / 30 + " руб");






