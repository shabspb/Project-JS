"use strict";

let modal = document.querySelector('.modal'),
    btnReceive = document.querySelector('#receive'),
    btnClose = document.querySelector('.close'),
    textArea = document.querySelector('textarea'),
    inputName = document.querySelector('.contactform_name');


btnReceive.addEventListener('click', function () {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', function () {
    modal.style.display = 'none';
});

inputName.addEventListener('input', function () {
    textArea.value = `Меня зовут ${inputName.value} и я хочу написать о том, что `;
});