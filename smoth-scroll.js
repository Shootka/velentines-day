document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll('section');
    let windowHeight = window.innerHeight;

    function updateOpacity() {
        sections.forEach(function(section, index) {
            let distanceFromTop = section.getBoundingClientRect().top;
            section.style.opacity = 1 - Math.abs(distanceFromTop) / windowHeight;
        });
    }

    function scrollToNextSection() {
        let currentSection = document.querySelector(':target') || sections[0];
        let nextSection = currentSection.nextElementSibling || sections[0];
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('scroll', updateOpacity);
    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            scrollToNextSection();
        }
    });
});