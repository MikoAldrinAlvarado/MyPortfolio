const educationBtn = document.getElementById('education_btn');
const courseBtn = document.getElementById('course_btn');
const experienceBtn = document.getElementById('experience_btn');
const detailsBtn = document.getElementById('details_btn');
const educationBox = document.getElementById('education');
const courseBox = document.getElementById('short_course');
const experienceBox = document.getElementById('experience');
const detailsBox = document.getElementById('details');

if (educationBtn && courseBtn && experienceBtn && detailsBtn) {
    educationBtn.addEventListener('click',function(){
        educationBox.classList.remove('hidden');
        courseBox.classList.add('hidden');
        experienceBox.classList.add('hidden');
        detailsBox.classList.add('hidden');
    })
    courseBtn.addEventListener('click',function(){
        educationBox.classList.add('hidden');
        courseBox.classList.remove('hidden');
        experienceBox.classList.add('hidden');
        detailsBox.classList.add('hidden');
    })
    experienceBtn.addEventListener('click',function(){
        educationBox.classList.add('hidden');
        courseBox.classList.add('hidden');
        experienceBox.classList.remove('hidden');
        detailsBox.classList.add('hidden');
    })
    detailsBtn.addEventListener('click',function(){
        educationBox.classList.add('hidden');
        courseBox.classList.add('hidden');
        experienceBox.classList.add('hidden');
        detailsBox.classList.remove('hidden');
    })
}

// Menu Icon 
const menuIcon = document.querySelector('.menu_icon');
const navbar = document.querySelector('.dropNav');
if (menuIcon && navbar) {
    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle('bx-menu');
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('hidden')
    }
}












/* -----------Typed Java Script-------------*/
const typedTarget = document.querySelector('.custom_text');
if (typedTarget && typeof Typed !== 'undefined') {
    const typed = new Typed('.custom_text', {
        strings: ['Frontend Web Developer', 'Backend Web Developer', 'Graphic Designer'],
        typeSpeed: 25,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    });
}

/* ----------------Scroll Reveal--------------*/
ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 300
})
ScrollReveal().reveal('.about', { origin: 'top' });
ScrollReveal().reveal('.banner_btn, .view_bottom', { origin: 'bottom' });
ScrollReveal().reveal('.logo, .name, .description, .about_card, .view_left', { origin: 'left' });
ScrollReveal().reveal('.menu, .hi_text, .customtext, .banner_social, .education, .view_right', { origin: 'right' });

// Projects carousel
const carousel = document.querySelector('[data-carousel]');
if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    const dotsWrap = document.querySelector('[data-carousel-dots]');
    let currentIndex = 0;

    const setActiveSlide = (index) => {
        if (slides.length === 0) return;
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === currentIndex);
        });
        if (dotsWrap) {
            const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));
            dots.forEach((dot, i) => {
                dot.classList.toggle('is-active', i === currentIndex);
            });
        }
    };

    if (dotsWrap) {
        dotsWrap.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', `Go to category ${i + 1}`);
            dot.addEventListener('click', () => setActiveSlide(i));
            dotsWrap.appendChild(dot);
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => setActiveSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => setActiveSlide(currentIndex + 1));

    setActiveSlide(0);
}
