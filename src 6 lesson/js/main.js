"use strict";

let btn = document.getElementById('start'); //Получить кнопку "Начать расчет" через id

console.log(btn);

let budget = document.getElementsByClassName('budget-value')[0]; //Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

console.log(budget);

let daybudget = document.getElementsByClassName('daybudget-value')[0];

console.log(daybudget);

let level = document.getElementsByClassName('level-value')[0];

console.log(level);

let expenses = document.getElementsByClassName('expenses-value')[0];

console.log(expenses);

let optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0];

console.log(optionalexpenses);

let income = document.getElementsByClassName('income-value')[0];

console.log(income);

let monthsavings = document.getElementsByClassName('monthsavings-value')[0];

console.log(monthsavings);


let yearsavings = document.getElementsByClassName('yearsavings-value')[0];

console.log(yearsavings);

let input = document.getElementsByClassName('expenses-item'); //Получить поля(input) c обязательными расходами через класс.(class = ”expenses - item”)

console.log(input);

let optionalexpensesBtn = document.getElementsByTagName('button')[1]; // Получить кнопки“ Утвердить” и“ Рассчитать” через Tag, каждую в своей переменной.

console.log(optionalexpensesBtn);

let countBudgetBtn = document.getElementsByTagName('button')[2]; // Получить кнопки“ Утвердить” и“ Рассчитать” через Tag, каждую в своей переменной.

console.log(countBudgetBtn);

let optionalexpensesItem = document.querySelectorAll('.data .optionalexpenses-item'); // Получить поля для ввода необязательных расходов(optionalexpenses - item) при помощи querySelectorAll

console.log(optionalexpensesItem);

let chooseIncomeLabel = document.querySelector('#income'), // Получить оставшиеся поля через querySelector(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    checksavings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    timeData = document.querySelector('.time-data');

console.log(chooseIncomeLabel, checksavings, sum, percent, timeData);