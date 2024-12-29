// gsap function for page
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          scrub: true,
        },
      }
    );
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".stats-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(section);
});
// Функция для проверки видимости элемента
function checkVisibility() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add("visible");
    }
  });
}

// Отслеживаем прокрутку и запускаем проверку
window.addEventListener("scroll", checkVisibility);

// Запускаем проверку сразу после загрузки страницы
document.addEventListener("DOMContentLoaded", checkVisibility);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    speed: 800,
    parallax: true,
    loop: true, // Чтобы слайды зацикливались
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
const leftButton = document.querySelector(".scroll-button-left");
const rightButton = document.querySelector(".scroll-button-right");
const container = document.querySelector(".scroll-container");

// Прокрутка влево
leftButton.addEventListener("click", () => {
  container.scrollBy({
    left: -300, // Прокрутка на 300px влево
    behavior: "smooth",
  });
});

// Прокрутка вправо
rightButton.addEventListener("click", () => {
  container.scrollBy({
    left: 300, // Прокрутка на 300px вправо
    behavior: "smooth",
  });
});

// Свайп для мобильных устройств
let isTouching = false;
let startX;
let scrollLeft;

container.addEventListener("touchstart", (e) => {
  isTouching = true;
  startX = e.touches[0].pageX;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("touchmove", (e) => {
  if (!isTouching) return;
  const moveX = e.touches[0].pageX;
  const diffX = moveX - startX;
  container.scrollLeft = scrollLeft - diffX;
});

container.addEventListener("touchend", () => {
  isTouching = false;
});

// Найти изображение
const rotatingImage = document.getElementById("decor-scroll-rotate");
let previousScrollY = window.scrollY;
let currentRotation = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > previousScrollY) {
    currentRotation += 5;
  } else {
    currentRotation -= 5;
  }

  rotatingImage.style.transform = `rotate(${currentRotation}deg)`;

  previousScrollY = scrollY;
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
