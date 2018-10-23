'use strict';

/*
USAGE:

1. Add to markup toggle button:
<button class="kss-toggle">Toggle popup</button>

2. Add to the next elem attr hidden to hide it:
<div class="b-popup" hidden>

3.After rebuilding demo toggle button will toggle attr hidden for the next sibling
*/

(function() {
  const doc = document;
  const toggleControls = doc.querySelectorAll('.kss-toggle');

  if(!toggleControls) {
    return;
  }

  toggleControls.forEach(control => {
    const toggleTarget = control.nextElementSibling;

    control.addEventListener('click', () => {
      toggleTarget.hidden = !toggleTarget.hidden;
    });
  });

  // ------------------------------

  const toggleClassControls = doc.querySelectorAll('.kss-toggle-class');

  if(!toggleClassControls) {
    return;
  }

  toggleClassControls.forEach(control => {
    const toggleClass = control.dataset.toggleClass;

    control.addEventListener('click', (event) => {
      event.preventDefault();
      control.classList.toggle(toggleClass);
    });
  })
})();
