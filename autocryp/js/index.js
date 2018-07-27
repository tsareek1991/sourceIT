window.onload = function () {
    const burgerButton = document.getElementById('bur-button');

    burgerButton.addEventListener('click', function () {

        this.classList.toggle('burger-open');

        if(this.classList.contains('burger-open')) {
            document.getElementById('header-nav').classList.add('header-navigation-open');
        }else {
            document.getElementById('header-nav').classList.remove('header-navigation-open');
        }
    });






};