(function () {
  'use strict';
  App.register('media', function (s, h) {
    var gallery = (s.images || []).map(function (im) {
      return '<figure><img loading="lazy" src="' + h.esc(im.src) + '" alt="' + h.esc(im.caption) + '"><figcaption>' + h.esc(im.caption) + '</figcaption></figure>';
    }).join('');
    return h.section(s, '<video class="demo-video" controls preload="metadata" playsinline poster="' + h.esc(s.poster) + '"><source src="' + h.esc(s.video) + '" type="video/mp4">브라우저에서 영상을 재생할 수 없습니다. <a href="' + h.esc(s.video) + '">영상 파일 열기</a></video><p class="media-note">전체 영상 3분 54초 · 차량 경로 추종, 편집 도구와 추격 연출의 기술 사례는 아래에 정리했습니다.</p><div class="scene-gallery">' + gallery + '</div>');
  });
})();
