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

  // Inview
  // jQuery + プラグインを使用していたが intersection observer で書き直した
  observerInview('slide-left');
  observerInview('slide-right');
  observerInview('balloon');
});

const observerInview = (className) => {
  const targets = document.querySelectorAll(`.inview-${className}`);
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  targets.forEach((target) => observer.observe(target));
};
