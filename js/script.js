const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});

function toggleMenu(){
    document
        .querySelector(".contact-menu")
        .classList.toggle("active");
}

function toggleNav(){

    document
        .getElementById("navMenu")
        .classList.toggle("active");

    document
        .getElementById("hamburger-btn")
        .classList.toggle("open");
}