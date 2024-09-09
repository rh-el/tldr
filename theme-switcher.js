const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;


themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
});
