// Smooth Scroll on Navbar Links

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
     });