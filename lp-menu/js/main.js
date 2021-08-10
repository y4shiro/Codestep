document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navi = document.querySelector('#navi');

  hamburger.addEventListener('click', () => {
    toggleActiveClass();
  });

  const toggleActiveClass = () => {
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
      navi.classList.add('active');
    } else {
      navi.classList.remove('active');
    }
  };
});
