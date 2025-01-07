function darkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
}
