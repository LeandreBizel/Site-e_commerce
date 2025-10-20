const links = document.querySelectorAll('.navLink a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

links[0].classList.add('active');