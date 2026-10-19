(function () {
  'use strict';
  App.register('projects', function (s, h) {
    return h.section(s, (s.items || []).map(function (p) {
      var media = p.preview || {};
      var preview = media.poster ? '<div class="project-preview"><button class="preview-trigger" type="button" data-preview-id="' + h.esc(p.id) + '" aria-label="' + h.esc(p.name) + ' 영상 미리보기"><img src="' + h.esc(media.poster) + '" alt="' + h.esc(p.name) + ' 대표 장면" loading="lazy"><span class="preview-play" aria-hidden="true">▶</span><span class="preview-label">영상 미리보기</span></button><p class="preview-caption">' + h.esc(media.caption || '') + '</p></div>' : '<div class="project-preview"><button class="page-preview-trigger" type="button" data-preview-id="' + h.esc(p.id) + '"><span class="page-preview-kicker">PROJECT PREVIEW</span><strong>' + h.esc(p.name) + '</strong><span>' + h.esc(p.role || '') + '</span><span class="page-preview-action">페이지 미리보기 ↗</span></button></div>';
      return '<article class="project project-summary" id="' + h.esc(p.id) + '" data-toc-sub="' + h.esc(p.toc || p.name) + '"><div class="project-head"' + h.reveal('project') + '><h3>' + h.esc(p.name) + '</h3>' + (p.company ? '<span class="company">' + h.esc(p.company) + '</span>' : '') + (p.period ? '<span class="period">' + h.esc(p.period) + '</span>' : '') + (p.status ? '<span class="status' + (p.status.muted ? ' is-muted' : '') + '">' + h.esc(p.status.label) + '</span>' : '') + '</div><div class="project-summary-grid"><div class="project-summary-copy"><p class="project-role">' + h.esc(p.role || '') + '</p><p class="project-desc">' + h.esc(p.desc || '') + '</p>' + h.chips(p.tech) + '<a class="project-shortcut" href="' + h.esc(p.href) + '">상세 페이지 바로가기 <span aria-hidden="true">↗</span></a></div>' + preview + '</div></article>';
    }).join(''));
  });
  /* 그 밖의 프로젝트: 한 줄 목록 (행 전체가 상세 페이지 링크) */
  App.register('project-list', function (s, h) {
    return h.section(s, '<ul class="more-list"' + h.stagger(60) + '>' + (s.items || []).map(function (p) {
      return '<li class="more-item"' + h.reveal('item') + '><a class="more-link" href="' + h.esc(p.href || '#') + '">' +
        '<div class="more-head"><h3>' + h.esc(p.name) + '</h3>' + (p.company ? '<span class="company">' + h.esc(p.company) + '</span>' : '') + '</div>' +
        (p.role ? '<p class="more-role">' + h.esc(p.role) + '</p>' : '') +
        (p.desc ? '<p class="more-desc">' + h.esc(p.desc) + '</p>' : '') +
        '<span class="more-go">상세 보기 <span aria-hidden="true">↗</span></span>' +
      '</a></li>';
    }).join('') + '</ul>');
  });
  var dialog = document.createElement('dialog');
  dialog.className = 'preview-dialog';
  dialog.setAttribute('aria-labelledby', 'preview-title');
  dialog.innerHTML = '<div class="preview-dialog-head"><h2 id="preview-title">프로젝트 미리보기</h2><button type="button" class="preview-close" aria-label="미리보기 닫기">닫기 ×</button></div><video controls playsinline preload="metadata"></video><iframe class="page-preview-frame" title="프로젝트 상세 페이지 미리보기" hidden></iframe><p class="preview-dialog-caption"></p><a class="project-shortcut preview-detail-link">상세 페이지 바로가기 ↗</a>';
  document.body.appendChild(dialog);
  var video = dialog.querySelector('video');
  var trigger = null;
  var frame=dialog.querySelector('iframe');
  function close() { dialog.close(); }
  dialog.querySelector('.preview-close').addEventListener('click',close);
  dialog.addEventListener('click',function (e) { if(e.target === dialog) { var r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close(); } });
  dialog.addEventListener('close',function () { video.pause(); frame.removeAttribute('src'); video.removeAttribute('src'); video.load(); document.body.classList.remove('preview-is-open'); if(trigger)trigger.focus({preventScroll:true}); });
  document.addEventListener('click',function (e) {
    var button=e.target.closest('[data-preview-id]'); if(!button)return;
    var p=null;
    (window.PORTFOLIO.sections||[]).forEach(function (s) { if(s.type==='projects')(s.items||[]).forEach(function (it) {if(it.id===button.dataset.previewId)p=it;}); });
    if(!p||!p.preview)return;
    trigger=button;
    dialog.querySelector('#preview-title').textContent=p.name+' 미리보기';
    dialog.querySelector('.preview-dialog-caption').textContent=p.preview.caption||'';
    dialog.querySelector('.preview-detail-link').href=p.href;
    video.hidden=!p.preview.video; frame.hidden=!!p.preview.video;
    if(p.preview.video){video.poster=p.preview.poster||'';video.src=p.preview.video;}else{frame.src=p.preview.page||p.href;}
    dialog.showModal(); document.body.classList.add('preview-is-open');
  });
})();
