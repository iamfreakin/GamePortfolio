/* =========================================================
   App: content.js 데이터를 화면으로 그림
   ---------------------------------------------------------
   섹션 종류 추가
     App.register('gallery', function (section, h) {
       return h.section(section, '<div>...</div>');
     });
     → content.js 에서 { type: 'gallery', ... } 로 사용
     (등록은 index.html 의 App.render() 호출보다 앞에 둡니다)

   어떤 요소에 어떤 등장 효과를 쓸지는 PORTFOLIO.motion 에서 바꿉니다.
     motion: { card: 'scale-in', project: 'fade-left' }
   ========================================================= */
(function (global) {
  'use strict';

  var data = global.PORTFOLIO || {};
  var renderers = {};

  /* 컴포넌트별 기본 등장 효과 (motion.css 프리셋 이름, null 이면 효과 없음) */
  var motionMap = Object.assign({
    hero: 'fade-up',
    portrait: 'portrait',
    motto: 'bar',
    section: 'rule',
    heading: 'fade-up',
    block: 'fade-up',
    card: 'fade-up',
    chip: 'fade',
    project: 'fade-up',
    item: 'fade-up'
  }, data.motion || {});

  /* ---------- 헬퍼 ---------- */
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function reveal(kind, extra) {
    var preset = motionMap[kind];
    var attrs = preset ? ' data-reveal="' + esc(preset) + '"' : '';
    return attrs + (extra || '');
  }

  function stagger(ms, start) {
    return ' data-stagger="' + ms + '"' + (start ? ' data-stagger-start="' + start + '"' : '');
  }

  function list(items, fn) {
    return (items || []).map(fn).join('');
  }

  function chips(items, cls) {
    if (!items || !items.length) return '';
    return '<ul class="chips' + (cls ? ' ' + cls : '') + '"' + stagger(30) + '>' +
      list(items, function (t) { return '<li' + reveal('chip') + '>' + esc(t) + '</li>'; }) +
      '</ul>';
  }

  function section(s, inner) {
    return '<section class="section" id="' + esc(s.id) + '" data-toc="' + esc(s.toc || s.title) + '"' + reveal('section') + '>' +
      '<h2' + reveal('heading') + '>' + esc(s.title) + '</h2>' +
      (s.lead ? '<p class="lead"' + reveal('block') + '>' + esc(s.lead) + '</p>' : '') +
      inner +
      '</section>';
  }

  function caseBlock(c, tag) {
    var steps = c.steps && c.steps.length
      ? '<ul class="case-steps">' + list(c.steps, function (t) { return '<li>' + esc(t) + '</li>'; }) + '</ul>'
      : '';
    return (c.title && tag !== false ? '<p class="case-title">' + esc(c.title) + '</p>' : '') +
      (c.context ? '<p class="case-context">' + esc(c.context) + '</p>' : '') +
      steps +
      (c.result ? '<p class="case-result">' + esc(c.result) + '</p>' : '');
  }

  var h = { esc: esc, reveal: reveal, stagger: stagger, list: list, chips: chips, section: section, caseBlock: caseBlock };

  function register(type, fn) {
    renderers[type] = fn;
  }

  /* ---------- 기본 섹션 ---------- */
  register('career', function (s) {
    return section(s, list(s.items, function (it) {
      return '<div class="entry"' + reveal('item') + '>' +
        '<div class="entry-head">' +
          '<h3>' + esc(it.name) + '</h3>' +
          (it.period ? '<span class="period">' + esc(it.period) + '</span>' : '') +
          (it.tenure ? '<span class="tenure">' + esc(it.tenure) + '</span>' : '') +
        '</div>' +
        (it.desc ? '<p class="entry-desc">' + esc(it.desc) + '</p>' : '') +
      '</div>';
    }));
  });

  register('education', renderers.career);

  /* 카드 배경은 격자선 역할을 하므로 그대로 두고, 카드 안의 글만 차례로 등장 */
  register('strengths', function (s) {
    return section(s,
      '<div class="strengths">' +
        list(s.items, function (it, i) {
          var d = i * 70;
          return '<div class="strength">' +
            '<p class="strength-title"' + reveal('card', ' data-reveal-delay="' + d + '"') + '>' + esc(it.title) + '</p>' +
            '<p class="strength-desc"' + reveal('card', ' data-reveal-delay="' + (d + 60) + '"') + '>' + esc(it.desc) + '</p>' +
          '</div>';
        }) +
      '</div>');
  });

  register('skills', function (s) {
    return section(s,
      '<div class="skills">' +
        list(s.groups, function (g) {
          return '<div class="skill-row"' + reveal('item') + '>' +
            '<span class="skill-label">' + esc(g.label) + '</span>' +
            chips(g.items) +
          '</div>';
        }) +
      '</div>');
  });

  register('projects', function (s) {
    return section(s, list(s.items, function (p) {
      var details = p.details || [];
      var body = list(p.cases, function (c) {
        return '<div class="case"' + reveal('block') + '>' + caseBlock(c) + '</div>';
      }) + list(details, function (d) {
        return '<details class="minor" data-collapsible' + reveal('block') + '>' +
          '<summary>' +
            '<span class="minor-title">' + esc(d.title) + '</span>' +
            (d.summary ? '<span class="minor-sum">' + esc(d.summary) + '</span>' : '') +
          '</summary>' +
          '<div class="minor-body" data-collapse-body>' + caseBlock(d, false) + '</div>' +
        '</details>';
      }) + (details.length ? '<button class="expand-all" type="button"' + reveal('block') + '></button>' : '');

      var status = p.status
        ? '<span class="status' + (p.status.muted ? ' is-muted' : '') + '">' + esc(p.status.label) + '</span>'
        : '';

      return '<article class="project" id="' + esc(p.id) + '" data-toc-sub="' + esc(p.toc || p.name) + '">' +
        '<div class="project-head"' + reveal('project') + '>' +
          '<h3>' + esc(p.name) + '</h3>' +
          (p.company ? '<span class="company">' + esc(p.company) + '</span>' : '') +
          (p.period ? '<span class="period">' + esc(p.period) + '</span>' : '') +
          status +
        '</div>' +
        (p.role ? '<p class="project-role"' + reveal('project') + '>' + esc(p.role) + '</p>' : '') +
        (p.desc ? '<p class="project-desc"' + reveal('project') + '>' + esc(p.desc) + '</p>' : '') +
        chips(p.tech) +
        (body ? '<div class="project-body">' + body + '</div>' : '') +
      '</article>';
    }));
  });

  register('activities', function (s) {
    return section(s,
      '<ul class="activity-list">' +
        list(s.items, function (it) {
          return '<li' + reveal('item') + '><span class="what">' + esc(it.what) + '</span><span class="when">' + esc(it.when) + '</span></li>';
        }) +
      '</ul>');
  });

  register('links', function (s) {
    return section(s, list(s.items, function (it) {
      return '<a class="link-card" href="' + esc(it.href || '#') + '" target="_blank" rel="noopener"' + reveal('item') + '>' +
        (it.kicker ? '<p class="link-kicker">' + esc(it.kicker) + '</p>' : '') +
        '<p class="link-title">' + esc(it.title) + '<span class="link-arrow" aria-hidden="true">↗</span></p>' +
      '</a>';
    }));
  });

  /* ---------- 헤더 · 푸터 ---------- */
  function renderHero(p) {
    p = p || {};
    var contact = list(p.links, function (l) {
      return '<a href="' + esc(l.href) + '">' + esc(l.label) + '</a>';
    });
    return '<header class="hero">' +
      '<div' + stagger(90) + '>' +
        (p.eyebrow ? '<p class="eyebrow"' + reveal('hero') + '>' + esc(p.eyebrow) + '</p>' : '') +
        '<div class="name-row"' + reveal('hero') + '>' +
          '<h1>' + esc(p.name) + '</h1>' +
          (p.nameEn ? '<span class="name-en">' + esc(p.nameEn) + '</span>' : '') +
        '</div>' +
        (contact ? '<p class="contact"' + reveal('hero') + '>' + contact + '</p>' : '') +
        (p.motto ? '<p class="motto"' + reveal('motto') + '>' + esc(p.motto) + '</p>' : '') +
      '</div>' +
      '<figure class="portrait" aria-hidden="true"' + reveal('portrait', ' data-reveal-delay="250"') + '>' +
        '<span>' + esc(p.initial || (p.name || '').charAt(0)) + '</span>' +
        (p.photo ? '<img src="' + esc(p.photo) + '" alt="" onerror="this.remove()">' : '') +
      '</figure>' +
    '</header>';
  }

  function renderFooter(f) {
    f = f || {};
    return '<footer class="footer"><span>' + esc(f.left) + '</span><span>' + esc(f.right) + '</span></footer>';
  }

  /* ---------- 기능 ---------- */
  function initTheme() {
    var btn = document.getElementById('themeBtn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
    });
  }

  function initToc(app) {
    var toc = document.getElementById('toc');
    var listEl = document.getElementById('tocList');
    var btn = document.getElementById('tocBtn');
    if (!toc || !listEl) return;

    var targets = Array.prototype.slice.call(app.querySelectorAll('[data-toc], [data-toc-sub]'));
    var links = {};
    listEl.innerHTML = '';
    targets.forEach(function (el) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + el.id;
      if (el.hasAttribute('data-toc-sub')) {
        a.textContent = el.getAttribute('data-toc-sub');
        a.className = 'sub';
      } else {
        a.textContent = el.getAttribute('data-toc');
      }
      li.appendChild(a);
      listEl.appendChild(li);
      links[el.id] = a;
    });

    function close() { toc.classList.remove('open'); if (btn) btn.setAttribute('aria-expanded', 'false'); }
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = toc.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
      });
    }
    toc.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
    document.addEventListener('click', function (e) { if (!toc.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    var ticking = false;
    function update() {
      ticking = false;
      var line = window.innerHeight * 0.3;
      var current = null;
      targets.forEach(function (el) { if (el.getBoundingClientRect().top <= line) current = el; });
      Object.keys(links).forEach(function (id) { links[id].classList.toggle('active', !!current && current.id === id); });
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function initExpandAll(app) {
    app.querySelectorAll('.project-body').forEach(function (body) {
      var btn = body.querySelector('.expand-all');
      var items = body.querySelectorAll('details.minor');
      if (!btn || !items.length) return;
      function allOpen() {
        return Array.prototype.every.call(items, function (d) { return d.classList.contains('is-expanded'); });
      }
      function sync() {
        var open = allOpen();
        btn.classList.toggle('is-open', open);
        btn.textContent = open ? '상세 모두 접기' : (items.length > 1 ? '상세 ' + items.length + '개 모두 펼치기' : '상세 펼치기');
      }
      btn.addEventListener('click', function () {
        var open = !allOpen();
        items.forEach(function (d) { global.Motion.setOpen(d, open); });
        sync();
      });
      items.forEach(function (d) {
        d.querySelector('summary').addEventListener('click', function () { requestAnimationFrame(sync); });
      });
      sync();
    });
  }

  function initPrint() {
    var reopened = [];
    window.addEventListener('beforeprint', function () {
      global.Motion.revealAll();
      reopened = [];
      document.querySelectorAll('details.minor').forEach(function (d) {
        if (!d.open) { global.Motion.setOpen(d, true, { instant: true }); reopened.push(d); }
      });
    });
    window.addEventListener('afterprint', function () {
      reopened.forEach(function (d) { global.Motion.setOpen(d, false, { instant: true }); });
      reopened = [];
    });
    var btn = document.getElementById('pdfBtn');
    if (btn) btn.addEventListener('click', function () { window.print(); });
  }

  /* ---------- 렌더 ---------- */
  function render() {
    var app = document.getElementById('app');
    if (!app) return;
    if (data.meta && data.meta.title) document.title = data.meta.title;

    var html = renderHero(data.profile);
    (data.sections || []).forEach(function (s) {
      var fn = renderers[s.type];
      if (fn) html += fn(s, h);
      else console.warn('[App] 등록되지 않은 섹션 type: ' + s.type);
    });
    html += renderFooter(data.footer);
    app.innerHTML = html;

    initToc(app);
    initExpandAll(app);
    global.Motion.enhanceDetails(app);
    global.Motion.observe(app);
  }

  global.App = { register: register, render: render, helpers: h, motion: motionMap };

  initTheme();
  initPrint();
  /* 실제 렌더는 index.html 맨 끝에서 App.render() 로 호출합니다 (그 전에 확장 등록 가능) */
})(window);
