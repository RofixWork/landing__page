//navabr
let navbar = document.querySelector('header .navbar');

document.onscroll =  () => {  
    if(document.documentElement.scrollTop > 30) {
        navbar.classList.add('fixed-top');

        navbar.style.cssText = `
            background-color: #f3f7fb;
            border-bottom: 1px solid var(--mainColor)
        `;
    } else{
        navbar.classList.remove('fixed-top');

        navbar.style.cssText = `
            background-color: white;
            border-bottom: none
        `;
    }
}

//scroll
let links = document.querySelectorAll('.nav-item .nav-link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.dataset.scroll).scrollIntoView({
            behavior: 'smooth'
        })

    })
});