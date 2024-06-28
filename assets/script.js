/// Add an event listener to the theme switch
document.getElementById('theme-switch').addEventListener('click', function() {
  // Toggle dark mode class on the body
  document.body.classList.toggle('dark-mode');
});



/* ======== toogle icon navbar ===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toogle('bx-x')
    navbar.classList.toogle('active')
};

/* ======== scroll sections active link ===========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.scroll = () => {
    sections.forEach( sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };
    });
    /* ======== sticky navbar ===========*/
    let header =  document.querySelector(header);

    header.classList.toggle('sticky',window.scrollY > 100);

    /*=================== remote toogle iocon and navbar when click navbar link(scroll) */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

/* ======== scrol reveal ===========*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

/* ======== typed js ===========*/
const typed = new Typed('.multiple-text', {
    strings:['Frontend Developer', 'Software Engineer','School Leader'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop:true

});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const formData = new FormData(contactForm);
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Construct the email body
        const emailBody = `Subject: ${subject}%0D%0A%0D%0A${message}`;
        const mailToLink = `mailto:redietmuluken95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open default email client with pre-filled fields
        window.location.href = mailToLink;
    });
});
