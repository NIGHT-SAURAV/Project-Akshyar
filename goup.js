// scrollButton.js

var scrollButton = document.getElementById('scrollButton');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) { // Adjust the scroll threshold as needed
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', function() {
    scrollToTop(1000); // Adjust the duration of the scroll animation
});

function scrollToTop(duration) {
    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
        var currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        var timeElapsed = currentTime - startTime;
        var scrollTo = easeInOutQuad(timeElapsed, start, -start, duration);
        window.scrollTo(0, scrollTo);
        if (timeElapsed < duration) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    scroll();
}
