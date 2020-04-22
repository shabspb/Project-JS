function modalWindow() {

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        more = document.querySelector('.more'),
        descriptionBtn = document.querySelectorAll('.description-btn'); // получаем кнопку узнать подробнее

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    descriptionBtn.forEach(function (item) {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });
}

module.exports = modalWindow;