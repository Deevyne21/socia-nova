const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const callBtn = document.getElementById("callBtn");
const icon = menuBtn.querySelector("i");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  const isOpen = !navLinks.classList.contains("hidden");

  if (isOpen) {
    // Close the menu
    navLinks.classList.add("hidden");
    callBtn.classList.add("hidden");
    callBtn.classList.remove("block");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    // Open the menu
    navLinks.classList.remove("hidden");

    // Show CTA button in mobile menu
    if (window.innerWidth < 768) {
      navLinks.appendChild(callBtn);
      callBtn.classList.remove("hidden");
      callBtn.classList.add(
        "block",
        "w-full",
        "px-6",
        "pt-4",
        "pb-2",
        "md:w-auto",
        "md:px-0",
        "md:pt-0",
        "md:pb-0"
      );
      callBtn
        .querySelector("a")
        .classList.add(
          "block",
          "w-full",
          "text-center",
          "md:inline-block",
          "md:w-auto"
        );
    }

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
});

// Close the menu when a nav link is clicked (mobile only)
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navLinks.classList.add("hidden");
      callBtn.classList.add("hidden");
      callBtn.classList.remove("block");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});

// Restore CTA position on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    const navbar = document.querySelector("nav > div");
    if (!navbar.contains(callBtn)) {
      navbar.appendChild(callBtn);
    }
    callBtn.classList.remove("hidden");
    callBtn.classList.add("block");
  }
});

// Counter animation function
function animateCounter(element, target, duration = 2000) {
  const isDecimal = target % 1 !== 0;
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = isDecimal
        ? target.toFixed(1)
        : Math.floor(target).toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = isDecimal
        ? current.toFixed(1)
        : Math.floor(current).toLocaleString();
    }
  }, 16);
}

// Intersection Observer to trigger animation when section is visible
const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        animateCounter(counter, target);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe the stats section
const statsSection = document.getElementById("stats");
if (statsSection) {
  observer.observe(statsSection);
}

// Blog Post Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal.id);
    }
  });
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (!modal.classList.contains("hidden")) {
        closeModal(modal.id);
      }
    });
  }
});

// Testimonial Review Carousels

const carousel = document.getElementById("testimonial-carousel");
const slides = carousel.children;
const totalSlides = slides.length;

let index = 0;

function showSlide(i) {
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

// FAQ SECTION
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".faq-icon i");
    const isActive = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    // Close all other FAQs
    document.querySelectorAll(".faq-answer").forEach((item) => {
      if (item !== answer) {
        item.style.maxHeight = "0px";
        item.previousElementSibling
          .querySelector(".faq-icon i")
          .classList.remove("fa-minus");
        item.previousElementSibling
          .querySelector(".faq-icon i")
          .classList.add("fa-plus");
      }
    });

    // Toggle current FAQ
    if (isActive) {
      answer.style.maxHeight = "0px";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  });
});
