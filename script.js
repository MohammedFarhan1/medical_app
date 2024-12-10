// Add interactivity if needed
document.querySelector('.settings-btn').addEventListener('click', () => {
    alert('Settings clicked!');
  });
  
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight

    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  }

  setInterval(updateClock, 1000); // Update clock every second
  updateClock(); // Initial call to avoid 1-second delay

  