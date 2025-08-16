
document.addEventListener('DOMContentLoaded', () => {

    // Play initial animations on page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('is-preload');
        }, 100);
    });

});
