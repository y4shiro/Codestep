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
  // intersection observer で書き直せそう
  $('.inview-slide-left').on(
    'inview',
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // 要素が表示されたらslide-leftクラスを追加
        $(this).stop().addClass('slide-left');
      }
    }
  );
  $('.inview-slide-right').on(
    'inview',
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // 要素が表示されたらslide-rightクラスを追加
        $(this).stop().addClass('slide-right');
      }
    }
  );
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
