"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY - MM - DD", "YYYY - MM - DD");

    while ((isNaN(money)) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдется?", "");

            if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log('done');

                appData.expenses[a] = b;

            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            alert("Высокий уровень достатка");
        } else {
            alert("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed());
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let qExpenses = prompt("Статья необязательных расходов?", "");
            let aExpenses = prompt("Во сколько обойдётся?", "");

            if (typeof (qExpenses) === "string" && typeof (qExpenses) != null &&
                typeof (aExpenses) === "string" && typeof (aExpenses) != null &&
                qExpenses != "" && aExpenses != "" && qExpenses.length < 50) {

                console.log("ok");

                appData.optionalExpenses[qExpenses] = aExpenses;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");

        if (typeof (items) != "string" || items == "" || typeof (items) == null) {
            console.log("Вы ввели некорректное значение или не ввели его вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
        }

        appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + '' + appData[key]);
}


/* Задание
2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome).
Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.*/

/*Используем цикл while
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");    

    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null
        && a != "" && b != "" && a.length < 50) {
            console.log('done');
    appData.expenses[a] = b;
    }   else {
        console.log("bad result");
        i--;
    }
    i++;
}*/

/*Используем цикл DO...WHILE
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");
    
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null
        && a != "" && b != "" && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
        i++;
} while( i < 2 );
*/