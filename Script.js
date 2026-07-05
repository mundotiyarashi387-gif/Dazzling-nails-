// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ==========================
// Header Shadow on Scroll
// ==========================

const header = document.querySelector("header");


    if(window.scrollY > 50){
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
        header.style.background = "#ffffff";
    }else{
        header.style.boxShadow = "none";
        header.style.background = "#ffe8ef";
    }

});

// ==========================
// Fade Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".product-card,.about,.box").forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});
