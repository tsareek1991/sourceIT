window.onload = function () {
    const burgerButton = document.getElementById('bur-button');
    const tabsButton = document.querySelectorAll('.tabs-button-list .tabs-button-item');
    const scrollMenuItem = document.querySelectorAll('.navigation-list .navigation-item .navigation-link');
    const footerMenuItem = document.querySelectorAll('.footer-nav .footer-nav-item .footer-nav-link');
    const dropDownMenu = document.getElementById('dropDown');


    burgerButton.addEventListener('click', function () {

        this.classList.toggle('burger-open');

        if(this.classList.contains('burger-open')) {
            document.getElementById('header-nav').classList.add('header-navigation-open');
        }else {
            document.getElementById('header-nav').classList.remove('header-navigation-open');
        }
    });

    function tabClick() {

        for(let i = 0; i < tabsButton.length; i++) {
            tabsButton[i].onclick = function (e) {
                e.preventDefault();
                let tabItem = document.querySelectorAll('.tabs-contant-container .tabs-list');
                for(let j = 0; j < tabsButton.length; j++) {
                    tabsButton[j].classList.remove('active');
                    tabItem[j].classList.remove('active');
                }
                this.classList.add('active');
                tabItem[i].classList.add('active');
            }
        }
    }
    tabClick();


    function smoothScroll(element) {
        for(let i = 0; i < element.length; i++) {
            element[i].onclick = function (e) {

                e.preventDefault();

                const target = this.getAttribute('href').slice(1);
                const targetToTop = document.getElementById(target).offsetTop;
                let pageCoord = window.pageYOffset;

                scrollTo()

                function scrollTo() {
                    var timer;
                    if( targetToTop > pageCoord && pageCoord < (targetToTop - 40) ) {
                       pageCoord = pageCoord + 15;
                       window.scrollTo(0, pageCoord);
                       timer = setTimeout(scrollTo, 5);

                    }else {
                        clearInterval(timer)
                        window.scrollTo(0, targetToTop);

                    };

                    if( pageCoord > targetToTop && pageCoord > (targetToTop + 40) ) {
                        pageCoord = pageCoord - 15;
                        window.scrollTo(0, pageCoord);
                        timer = setTimeout(scrollTo, 5);
                    }


                };

            };
        }
    };




    smoothScroll(scrollMenuItem);
    smoothScroll(footerMenuItem);

    $(document).ready(function(){
        $('.reviews-slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    });


    window.addEventListener('scroll', function () {
        if(this.pageYOffset >= 400) {
            dropDownMenu.classList.add('dropped');
            window.document.body.style.paddingTop = dropDownMenu.scrollHeight  + "px";
        }else {
            dropDownMenu.classList.remove('dropped');
            window.document.body.style.paddingTop = "";
        }
    });




};



