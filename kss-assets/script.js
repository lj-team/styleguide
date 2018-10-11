'use strict';

/*
JS for LJ Styleguide demos
See htdocs/kss
*/

(function() {
  const doc = document;
  const dropDownControl = doc.querySelector('.dropdown-box__toggle');
  const dropDownTarget = doc.querySelector('.dropdown-box__list');

  if(!dropDownControl) {
    return;
  }

  dropDownControl.addEventListener('click', () => {
    dropDownControl.classList.toggle('dropdown-box__toggle--open')
    dropDownTarget.classList.toggle('hidden');
  });
})();
