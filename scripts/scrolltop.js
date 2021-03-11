let top_btn = document.querySelector('#scrolltop');

document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 100) {
        top_btn.style = "opacity: 1";
    } else {
        top_btn.style = "opacity: 0";
    }
});

top_btn.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    window.scrollTo(0,0);

})