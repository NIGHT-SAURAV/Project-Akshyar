document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('section');

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    if (isInViewport(section)) {
      section.classList.add('section-animation');
      // Remove the event listener once the animation is triggered
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Attach the handleScroll function to the scroll event
  window.addEventListener('scroll', handleScroll);

  // Trigger the animation immediately if the section is initially in the viewport
  handleScroll();
});
