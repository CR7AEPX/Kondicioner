let totalSeconds = 6 * 3600 + 14 * 60 + 49;
function updateCountdown() {
  if (totalSeconds <= 0) {
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  totalSeconds--;
}
updateCountdown();
setInterval(updateCountdown, 1000);
const sliderTrack = document.querySelector(".slider-track");
if (sliderTrack) {
  const slides = sliderTrack.querySelectorAll("img");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }
  setInterval(nextSlide, 3000);
}
