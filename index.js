const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});



loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close popup when clicking outside the form box
// (only while the popup is active)
document.addEventListener('click', (event) => {
    if (!wrapper.classList.contains('active-popup')) return;

    const clickedInside = wrapper.contains(event.target);
    const clickedToggle = event.target.closest('.login-link, .register-link, .btnLogin-popup');

    if (!clickedInside && !clickedToggle) {
        wrapper.classList.remove('active-popup');
    }
});