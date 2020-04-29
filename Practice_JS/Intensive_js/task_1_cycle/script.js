"use strict";

//Циклы

/* let answers = [],
    questions = [
        "Как вас зовут?",
        "Ваша фамилия?",
        "Ваш возраст?"
    ];

// Самый часто используемый цикл for
for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}
console.log(answers); */

//Цикл do while
/* let i = 0;
do {
    answers[i] = prompt(questions[i], '');
    i++;
} while (i < questions.length);
console.log(answers); */

//Цикл while do
/* let i = 0;
while (i < questions.length) {
    answers[i] = prompt(questions[i], '');
    i++;
}
console.log(answers); */

function myFirstApp(name, age) {
    console.log(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (let i = 0; i < skills.length; i++) {
            console.log(`Я владею: ${skills[i]}`);
        }
    }

    showSkills();

    function checkAge() {
        let goodAge = prompt('Сколько вам лет?', '18');
        if (goodAge >= 18) {
            alert('У тебя отличные шансы стать FrontEnd dev!');
        } else {
            alert('Твои шансы не велики=)))');
        }
    }

    checkAge();

    function calcPow(number) {
        return number ** 2;
    }

    console.log(calcPow(4)); // 16
}

myFirstApp('Vasiliy', 32);