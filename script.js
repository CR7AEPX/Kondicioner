const track = document.getElementById("sliderTrack");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let currentIndex = 0;
let slidesToShow = window.innerWidth <= 600 ? 1 : 3;
let totalSlides = document.querySelectorAll(".slide").length;

const updateSliderWidth = () => {
  slidesToShow = window.innerWidth <= 600 ? 1 : 3;
  moveTo(currentIndex);
};

function moveTo(index) {
  const slide = document.querySelector(".slide");
  const slideStyle = getComputedStyle(slide);
  const slideWidth =
    slide.offsetWidth +
    parseFloat(slideStyle.marginLeft) +
    parseFloat(slideStyle.marginRight);
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > totalSlides - slidesToShow) {
    currentIndex = 0;
  }
  moveTo(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - slidesToShow;
  }
  moveTo(currentIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
window.addEventListener("resize", updateSliderWidth);
window.addEventListener("load", updateSliderWidth);

let auto;
function slideLoop() {
  nextSlide();
  auto = requestAnimationFrame(() => {
    setTimeout(slideLoop, 4000);
  });
}
auto = requestAnimationFrame(() => {
  setTimeout(slideLoop, 4000);
});
document.querySelector(".slider-wrapper").addEventListener("mouseenter", () => {
  cancelAnimationFrame(auto);
});
document.querySelector(".slider-wrapper").addEventListener("mouseleave", () => {
  auto = requestAnimationFrame(() => {
    setTimeout(slideLoop, 4000);
  });
});
(function () {
  var myReviewsInit = function () {
    new window.myReviews.BlockWidget({
      uuid: "af30b6c1-fac8-4782-b61a-31c8c1a3292e",
      name: "g64048573",
      additionalFrame: "none",
      lang: "ru",
      widgetId: "0",
    }).init();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      myReviewsInit();
    });
  } else {
    myReviewsInit();
  }
})();
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const answer = item.querySelector(".faq-answer");
  function toggleFAQ(e) {
    e.preventDefault();
    const isOpen = item.classList.contains("active");
    faqItems.forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".faq-answer").style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  }
  item.addEventListener("click", toggleFAQ);
});
window.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const modal = document.getElementById("modal");
  const open = document.getElementById("show-policy");
  const close = document.getElementById("close-modal");

  if (localStorage.getItem("cookiesAccepted") !== "true") {
    cookieBanner.style.display = "flex";
    requestAnimationFrame(() => {
      cookieBanner.classList.add("show");
    });
  }
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.remove("show");
    setTimeout(() => {
      cookieBanner.style.display = "none";
    }, 1000);
  });
  open.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const openBtns = document.querySelectorAll(".open-callback");
  const modal = document.getElementById("callback-modal");
  const closeBtn = document.getElementById("callback-close");
  openBtns.forEach(openBtn => {
    openBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
