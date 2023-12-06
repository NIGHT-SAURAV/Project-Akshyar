// JavaScript to check if the page is scrolled to the bottom
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY + window.innerHeight;
            var documentHeight = document.body.scrollHeight;

            if (scrollPosition >= documentHeight) {
                document.getElementById('site-footer').style.transform = 'translateY(0)';
            } else {
                document.getElementById('site-footer').style.transform = 'translateY(100%)';
            }
        });