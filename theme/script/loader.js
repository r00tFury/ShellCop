const loader = document.createElement('div');
loader.id = 'site-loader';
loader.innerHTML = `
  <div class="loader-spinner"></div>
  <span class="loader-text">Loading ShellCop...</span>
`;
document.body.appendChild(loader);

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => loader.remove(), 400);
    }, 400);
});


document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});
