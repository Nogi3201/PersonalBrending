document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".slide-in");
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(section => observer.observe(section));
});
