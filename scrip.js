const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
const theme = document.querySelector('.theme')
theme.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
    theme.src = theme.src.includes('moon.png') ? './assets/sun.png' : './assets/moon.png';
})

theme.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        theme.click();
    }
});

const venmo = document.querySelector('.venmo')
const showVenmo = document.querySelector('.showVenmo')

showVenmo.addEventListener('click', () => {
    venmo.style.display = venmo.style.display === 'block' ? 'none' : 'block';
    showVenmo.textContent = venmo.style.display === 'none' ? 'Show Venmo' : 'Hide Venmo';
})