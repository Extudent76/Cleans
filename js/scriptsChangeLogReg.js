var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector('.login-link');
var registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})