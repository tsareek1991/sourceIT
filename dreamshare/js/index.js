window.onload = function () {
    const toTopButton = document.getElementById('toTopButton');

    window.addEventListener('scroll', function () {
        if(window.pageYOffset > 400) {
            toTopButton.classList.add('active');
        }else {
            toTopButton.classList.remove('active');
        }
    })

    toTopButton.addEventListener('click', function () {
        let windowTop = window.pageYOffset;
        var timer
        scrollToTop()
        function scrollToTop() {
            if(window.pageYOffset > 100) {
                windowTop = windowTop - 50;
                window.scrollTo( 0, windowTop - 20 )
                 timer = setTimeout(scrollToTop, 10);
            }
            else {
                clearInterval(timer);
                window.scrollTo(0, 0);
            }
        }
    })

}