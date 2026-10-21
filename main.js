let navbar = document.querySelector('nav');
let links = document.querySelectorAll('.nav-link');
let navbarnav = document.querySelector('#navbarNav');
let logo = document.querySelector('#logo');


links.forEach((link)=>{
    link.addEventListener('mouseenter',()=>{
        link.classList.remove('text-b');
        link.classList.add('text-p');
    });
    link.addEventListener('mouseleave', ()=>{
                link.classList.remove('text-p');
                link.classList.toggle('text-b');
            })

})

window.addEventListener('scroll',()=>{
    if (window.scrollY > 0) {
        navbar.style.height="100px";
        navbar.classList.remove('bg-sec');
        navbar.classList.add('bg-primo');
        navbarnav.classList.remove('bg-sec');
        navbarnav.classList.add('bg-primo');
        logo.src = "http://127.0.0.1:5500/media/glasses2.png"

        links.forEach((link)=>{
            link.classList.remove('text-b');
            link.classList.add('text-w');
            link.addEventListener('mouseenter',()=>{
                 link.classList.remove('text-w');
                 link.classList.add('text-b');
            });
             link.addEventListener('mouseleave', ()=>{
                link.classList.remove('text-b');
               link.classList.add('text-w');
            })
        })
    }else{
        navbar.style.height="76px";
        navbar.classList.remove('bg-primo');
        navbar.classList.add('bg-sec');
        navbarnav.classList.remove('bg-primo');
        navbarnav.classList.add('bg-sec');
        logo.src = "http://127.0.0.1:5500/media/glasses.png"
        links.forEach((link)=>{
            link.classList.remove('text-w');
            link.classList.add('text-b');
        })
    }
    
})