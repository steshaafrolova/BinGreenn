const lenis = new Lenis({
  autoRaf: true,
});
lenis.on("scroll", (e) => {
  console.log(e);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navItems = document.querySelectorAll(".nav-item");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Управление подменю на мобильных
  navItems.forEach((item) => {
    const dropdown = item.querySelector(".dropdown");

    if (dropdown) {
      const link = item.querySelector("a");

      link.addEventListener("click", (e) => {
        if (window.innerWidth < 769) {
          e.preventDefault();
          item.classList.toggle("open");
        }
      });
    }
  });
});
document.querySelector(".scroll-button").addEventListener("click", function () {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

// button back
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");
  let lastScrollPosition = 0;

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 100) {
      if (currentScroll < lastScrollPosition) {
        backToTopButton.classList.add("show");
        backToTopButton.classList.remove("hide");
      } else {
        backToTopButton.classList.add("hide");
        backToTopButton.classList.remove("show");
      }
    } else {
      backToTopButton.classList.remove("show");
      backToTopButton.classList.add("hide");
    }

    lastScrollPosition = currentScroll;
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// swiper for another page
let scrollAllowed = false;
const swiper = new Swiper(".swiper", {
  mousewheel: {
    releaseOnEdges: true,
    eventsTarget: ".swiper",
  },

  speed: 1700,
  parallax: true,
  simulateTouch: false,
});

document.addEventListener("wheel", (event) => {
  if (!scrollAllowed && event.deltaY < 0) {
    event.preventDefault();
  }
});

// animation for text
document.querySelectorAll(".header-content h1").forEach((e) => {
  e.innerHTML = e.textContent
    .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
    .replace(/(\S*)/g, (m) => {
      return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');
    });
  e.querySelectorAll(".letter").forEach(function (l, i) {
    l.setAttribute(
      "style",
      `z-index: -${i}; transition-duration: ${i / 5 + 1}s`
    );
  });
});

swiper.on("slideChange", function () {
  document.querySelectorAll(".header-content__slide").forEach(function (e, i) {
    return swiper.activeIndex === i
      ? e.classList.add("active")
      : e.classList.remove("active");
  });
});

// Navigation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.699)"; // Используем #5cba49 с прозрачностью
    navbar.style.borderRadius = "100px";
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.4)";
    navbar.style.padding = "10px 20px";
    navbar.style.transition = "all 0.3s ease";
  } else {
    navbar.style.background = "transparent"; // Прозрачный фон
    navbar.style.borderRadius = "0";
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
    navbar.style.padding = "20px 20px";
    navbar.style.transition = "all 0.3s ease";
  }
});
// JavaScript to handle quantity changes on button click
document
  .querySelectorAll(".t-store__prod__quantity__minus")
  .forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.closest(".t-store__prod__quantity").querySelector(
        "input"
      );
      let currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1;
      }
    });
  });

document
  .querySelectorAll(".t-store__prod__quantity__plus")
  .forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.closest(".t-store__prod__quantity").querySelector(
        "input"
      );
      let currentValue = parseInt(input.value);
      input.value = currentValue + 1;
    });
  });
