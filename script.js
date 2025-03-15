//your JS code here. If required.
// Function to get a cookie by its name
function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Apply the font size and color from cookies (if they exist)
window.onload = function() {
  const storedFontSize = getCookie("fontsize");
  const storedFontColor = getCookie("fontcolor");

  if (storedFontSize) {
    document.documentElement.style.setProperty('--fontsize', storedFontSize + "px");
  }

  if (storedFontColor) {
    document.documentElement.style.setProperty('--fontcolor', storedFontColor);
  }
};

// Event listener for the Save button
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save preferences in cookies
  setCookie("fontsize", fontSize, 30);  // Save for 30 days
  setCookie("fontcolor", fontColor, 30);

  // Apply the new values to the page
  document.documentElement.style.setProperty('--fontsize', fontSize + "px");
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});
