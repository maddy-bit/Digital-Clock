const clock = document.getElementById('clock');
const timezoneSelect = document.getElementById('timezone-select');

function updateClock() {
  const timezone = timezoneSelect.value;
  const now = new Date();

  const timeInZone = now.toLocaleTimeString("en-US", {
    timeZone: timezone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  clock.textContent = timeInZone;
}

setInterval(updateClock, 1000);
timezoneSelect.addEventListener('change', updateClock);
updateClock();
