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

// Mobile menu toggle: attach to the anchor for larger hit area
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu_icon');
const navbar = document.querySelector('.dropNav');
if (menuToggle && menuIcon && navbar) {
    // Ensure initial ARIA states
    menuToggle.setAttribute('aria-expanded', menuToggle.getAttribute('aria-expanded') || 'false');
    navbar.setAttribute('aria-hidden', navbar.classList.contains('hidden') ? 'true' : 'false');

    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        const isOpen = navbar.classList.toggle('hidden') ? false : true;
        menuIcon.classList.toggle('bx-menu', !isOpen);
        menuIcon.classList.toggle('bx-x', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        navbar.setAttribute('aria-hidden', String(!isOpen));
        // If ScrollReveal previously hid the menu (inline styles), force it visible when opened
        if (isOpen) {
            const menuEls = navbar.querySelectorAll('.menu, .nav-menu-mobile');
            menuEls.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
                el.style.visibility = 'visible';
            });
        }
    });

    // Close menu when a nav link is clicked
    navbar.addEventListener('click', function (e) {
        const target = e.target.closest('a');
        if (target) {
            navbar.classList.add('hidden');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
            menuToggle.setAttribute('aria-expanded', 'false');
            navbar.setAttribute('aria-hidden', 'true');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
            if (!navbar.classList.contains('hidden')) {
                navbar.classList.add('hidden');
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu');
                menuToggle.setAttribute('aria-expanded', 'false');
                navbar.setAttribute('aria-hidden', 'true');
            }
        }
    });
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

// Contact form: EmailJS submit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_0luhwds',
            'template_a1r067h',
            this
        ).then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed: ' + error.text);
        });
    });
}
