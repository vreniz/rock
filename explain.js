/**
 * =========================================
 * BADGE ANIMATION + MOBILE MENU HANDLING
 * =========================================
 */

/* -----------------------------------------
   BADGE ANIMATION ON PAGE LOAD
----------------------------------------- */

// Wait until the entire page (HTML, CSS, images) is fully loaded
window.addEventListener('load', function () {

  // Get the badge card element by its ID
  const badge = document.getElementById('badgeCard');

  // If the element does not exist, stop execution to avoid errors
  if (!badge) return;

  // Show the badge after 600 milliseconds (0.6 seconds)
  setTimeout(function () {
    // Add the CSS class that triggers the animation (fade in + move up)
    badge.classList.add('badge-visible');
  }, 600);

  // Hide the badge after 3.6 seconds total (visible for ~3 seconds)
  setTimeout(function () {
    // Remove the class to reverse the animation (fade out + move down)
    badge.classList.remove('badge-visible');
  }, 3600);

});


/* -----------------------------------------
   CLOSE MOBILE BURGER MENU ON LINK CLICK
----------------------------------------- */

// Select all navigation links inside the mobile menu
document.querySelectorAll('.nav-links a').forEach(function (link) {

  // Add a click event to each link
  link.addEventListener('click', function () {

    // Uncheck the hidden checkbox that controls the burger menu
    // This automatically closes the mobile menu (CSS-driven behavior)
    document.getElementById('menu-toggle').checked = false;

  });

});
