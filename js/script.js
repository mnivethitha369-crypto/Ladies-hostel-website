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

const scriptURL =
"https://script.google.com/macros/s/AKfycbzuvME_ehxd08WxoDE51LOFHS2AlgIa-IzX3qt35n77ljcy7WZ8SX4Fyn3SHnV9K90gIA/exec";

function toggleMenu(){
    document
        .querySelector(".contact-menu")
        .classList.toggle("active");
}