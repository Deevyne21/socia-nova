const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const icon = menuBtn.querySelector("i");
const navbar = document.getElementById("navbar");

// Toggle mobile dropdown
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("scale-y-100");

  if (isOpen) {
    // Close the menu
    navLinks.classList.add("scale-y-0");
    setTimeout(() => {
      navLinks.classList.add("hidden"); // hide after animation
    }, 300); // matches duration-500 (0.3s delay)
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    // Open the menu
    navLinks.classList.remove("hidden");
    setTimeout(() => {
      navLinks.classList.remove("scale-y-0");
      navLinks.classList.add("scale-y-100");
    }, 10); // small delay to trigger animation
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
});

// Close the menu when a nav link is clicked
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    // Only close if on mobile view
    if (window.innerWidth < 768) {
      navLinks.classList.remove("scale-y-100");
      navLinks.classList.add("scale-y-0");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});

// Change background when scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("bg-primary/80");
    navbar.classList.add("bg-primary", "shadow-md");
  } else {
    navbar.classList.add("bg-primary/80");
    navbar.classList.remove("bg-primary", "shadow-md");
  }
});

// ScrollSpy: highlight active nav link
const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 100; // Offset so highlight changes a bit earlier

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinksAll.forEach((link) => {
        link.classList.remove("active"); // remove highlight from all
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active"); // add highlight to the current one
        }
      });
    }
  });
});

// Testimonial Review Carousels

const carousel = document.getElementById("testimonial-carousel");
const slides = carousel.children;
const totalSlides = slides.length;

let index = 0;

function showSlide(i) {
  // Ensure index loops around
  index = (i + totalSlides) % totalSlides;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Buttons
document.getElementById("next").addEventListener("click", () => {
  showSlide(index + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  showSlide(index - 1);
});

// Auto-slide every 6 seconds
setInterval(() => {
  showSlide(index + 1);
}, 6000);
