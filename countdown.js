const countdownElement = document.getElementById("countdown");
const eventDate = new Date("June 12, 2025 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "The event has started!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
