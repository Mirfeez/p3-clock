// Update the digital clock display every second.
(function () {
  function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Optional: keep logging for debugging (comment out to disable)
    // console.log(hours, minutes, seconds);

    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    const formattedTime = formatter.format(now);

    const digitalClock = document.getElementById("digi-clock");
    if (digitalClock) {
      // Use textContent to avoid parsing HTML
      digitalClock.textContent = formattedTime;
    }
  }

  // Initialize immediately and then update every second
  updateClock();
  setInterval(updateClock, 1000);
})();

// new one
// ===============================
// ANALOG CLOCK HANDS
// ===============================
(function () {
  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");

  function updateAnalogClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate angles
    const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360° / 12 + minutes effect
    const minuteDeg = minutes * 6 + seconds * 0.1; // 360° / 60 + seconds effect
    const secondDeg = seconds * 6; // 360° / 60

    // Apply rotation
    hourHand.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
  }

  updateAnalogClock();
  setInterval(updateAnalogClock, 1000);
})();


