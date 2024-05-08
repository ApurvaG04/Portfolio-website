

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
        navbar.classList.remove('nav-passive');
    } else {
        navbar.classList.remove('nav-active');
        // navbar.classList.add('nav-passive');
    }
};

function sendingEmail() {
    const subjectValue = document.getElementById('subject').value;
    const messageValue = document.getElementById('message').value;
    const emailLink = document.getElementById('send')
    emailLink.setAttribute("href", "mailto:apurvagawande124@gmail.com?subject=" + subjectValue +"&body=" + messageValue) ;
    console.log(emailLink.getAttribute('href'))   
}
