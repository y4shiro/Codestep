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
  // ここは jQuery + プラグインを使用
  // intersection observer で書き直した
  observerInview('slide-left');
  observerInview('slide-right');

  // 受講生の声（ふきだし）
  $('.inview-balloon').on(
    'inview',
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // 要素が表示されたらballoonクラスを追加
        $(this).stop().addClass('balloon');
      }
    }
  );
});

const observerInview = (className) => {
  const target = document.querySelector(`.inview-${className}`);
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(className);
        target.classList.add(className);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
};
