(function () {
  var nav = document.getElementById('book-nav');
  if (!nav) return;

  var currentFile = location.pathname.split('/').pop() || 'index.html';

  fetch('../_nav.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      nav.innerHTML = html;

      // Đánh dấu active cho trang hiện tại
      var links = nav.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (href && href.split('/').pop() === currentFile) {
          links[i].classList.add('active');
          break;
        }
      }
    })
    .catch(function () {
      // Nếu fetch thất bại (mở file:// trực tiếp), hiện thông báo
      nav.innerHTML = '<p style="padding:1rem;color:#888;font-size:0.85rem;">'
        + '⚠ Cần mở qua server cục bộ để hiển thị nav.<br>'
        + 'Dùng: <code>python3 -m http.server</code> trong thư mục <code>book/</code>'
        + '</p>';
    });
})();
