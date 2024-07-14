const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from("#cv",{
    y:20,
    duration:1,
    delay:1,
    repeat:-1,
    yoyo:true,
    speed:10000,
    ease:"easeOutCirc",
})
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to your backend or email service
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form
    document.getElementById('contact-form').reset();

    alert('Your message has been sent! Thank you for reaching out.');
});
