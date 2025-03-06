let toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.outerHTML = '<i class="fa-solid fa-toggle-on" id="toggle-btn" alt="Toggle On"></i>';
  } else {
    toggleBtn.outerHTML = '<i class="fa-solid fa-toggle-off" id="toggle-btn" alt="Toggle Off"></i>';
  }

  // Re-assign the event listener to the new button
  toggleBtn = document.getElementById("toggle-btn");
  toggleBtn.addEventListener("click", toggleDarkMode);
}

// Initial Event Listener
toggleBtn.addEventListener("click", toggleDarkMode);