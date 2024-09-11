const themeCheckbox = document.getElementById('theme-checkbox');

themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
});