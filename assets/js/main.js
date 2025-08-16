
document.addEventListener('DOMContentLoaded', () => {

    // Breakpoints
    const breakpoints = {
        xlarge: '(max-width: 1680px)',
        large:  '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small:  '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    };

    // Play initial animations on page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('is-preload');
        }, 100);
    });

});
