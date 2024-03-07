const menu = document.getElementById('menu');
const indicator = document.getElementById('indicator');
const sections = document.querySelectorAll('.section');

let sizeIndicator = menu.querySelector('a').offsetWidth;
indicator.style.width = sizeIndicator + 'px';

let sectionIndex;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entries => {
        if (entries.isIntersecting) {
            sectionIndex = [...sections].indexOf(entries.target);
            if (sectionIndex == -1 || sizeIndicator < 110) {
                indicator.style.transform = `translateX(${sizeIndicator * (sectionIndex)}px)`;
            } else {
                indicator.style.transform = `translateX(${sizeIndicator * (sectionIndex + 1)}px`;
            }
        }
    });
}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.15
});


observer.observe(document.getElementById('hero'));
sections.forEach(section => (observer.observe(section)));

const onResize = () => {
    sizeIndicator = menu.querySelector('a').offsetWidth;
    indicator.style.width = `${sizeIndicator}px`;
    indicator.style.transform = `translateX(${sizeIndicator * (sectionIndex + 1)}px)`;
}

window.addEventListener('resize', onResize);