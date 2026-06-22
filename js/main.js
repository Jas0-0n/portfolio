// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));

// Close nav on link click
links
    .querySelectorAll("a")
    .forEach((a) =>
        a.addEventListener("click", () => links.classList.remove("open")),
    );

// Nav scroll effect
const nav = document.getElementById("nav");
window.addEventListener("scroll", () =>
    nav.classList.toggle("scrolled", window.scrollY > 50),
);

// Back to top
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () =>
    backTop.classList.toggle("visible", window.scrollY > 400),
);
backTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
);

// Scroll reveal
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
