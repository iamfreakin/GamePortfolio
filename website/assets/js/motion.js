/* =========================================================
   Motion: 스크롤 등장 · 접기/펼치기 · 커스텀 애니메이션
   ---------------------------------------------------------
   CSS 전환으로 되는 것   → motion.css 에 프리셋 추가 (data-reveal)
   JS 가 필요한 것        → Motion.define('이름', fn) 로 등록 (data-motion)

   예) 숫자 올라가는 효과
     <span data-motion="count-up" data-count="72">0</span>

   예) 직접 만든 효과 등록 (app.js 보다 먼저, 또는 render 전에)
     Motion.define('shake', function (el) {
       el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }],
                  { duration: 300 });
     });
   ========================================================= */
(function (global) {
  'use strict';

  var root = document.documentElement;
  var reduceQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var handlers = {};
  var observer = null;

  var config = {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0,
    defaultStagger: 60
  };

  function prefersReduced() {
    return !!(reduceQuery && reduceQuery.matches);
  }

  function cssTime(name, fallback) {
    var raw = getComputedStyle(root).getPropertyValue(name).trim();
    if (!raw) return fallback;
    var n = parseFloat(raw);
    return raw.indexOf('ms') > -1 ? n : n * 1000;
  }

  function cssValue(name, fallback) {
    return getComputedStyle(root).getPropertyValue(name).trim() || fallback;
  }

  /* ---------- 등장 ---------- */
  function enter(el) {
    if (el.classList.contains('is-in')) return;
    el.classList.add('is-in');
    var name = el.getAttribute('data-motion');
    if (name && handlers[name]) {
      try { handlers[name](el, { reduced: prefersReduced() }); } catch (e) { console.error('[Motion] ' + name, e); }
    }
  }

  function leave(el) {
    el.classList.remove('is-in');
  }

  function applyTiming(scope) {
    scope.querySelectorAll('[data-stagger]').forEach(function (parent) {
      var step = parseInt(parent.getAttribute('data-stagger'), 10);
      if (isNaN(step)) step = config.defaultStagger;
      var base = parseInt(parent.getAttribute('data-stagger-start'), 10) || 0;
      var i = 0;
      Array.prototype.forEach.call(parent.children, function (child) {
        if (!child.hasAttribute('data-reveal')) return;
        if (!child.hasAttribute('data-reveal-delay')) child.style.setProperty('--reveal-delay', (base + i * step) + 'ms');
        i++;
      });
    });
    scope.querySelectorAll('[data-reveal-delay]').forEach(function (el) {
      el.style.setProperty('--reveal-delay', parseInt(el.getAttribute('data-reveal-delay'), 10) + 'ms');
    });
  }

  function getObserver() {
    if (observer) return observer;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var el = entry.target;
        var repeat = el.hasAttribute('data-reveal-repeat');
        if (entry.isIntersecting) {
          enter(el);
          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          leave(el);
        }
      });
    }, { rootMargin: config.rootMargin, threshold: config.threshold });
    return observer;
  }

  /* scope 안의 [data-reveal], [data-motion] 요소를 감시 시작 */
  function observe(scope) {
    scope = scope || document;
    applyTiming(scope);
    var els = scope.querySelectorAll('[data-reveal], [data-motion]');
    if (prefersReduced() || !('IntersectionObserver' in window)) {
      els.forEach(enter);
      return;
    }
    var io = getObserver();
    els.forEach(function (el) { if (!el.classList.contains('is-in')) io.observe(el); });
  }

  /* 전부 즉시 표시 (인쇄 등) */
  function revealAll() {
    document.querySelectorAll('[data-reveal], [data-motion]').forEach(enter);
  }

  function define(name, handler) {
    handlers[name] = handler;
  }

  /* ---------- 접기 / 펼치기 ---------- */
  function bodyOf(details) {
    return details.querySelector('[data-collapse-body]') || details.lastElementChild;
  }

  function setOpen(details, open, opts) {
    var animate = !(opts && opts.instant) && !prefersReduced() && typeof details.animate === 'function';
    var body = bodyOf(details);
    if (details._motionAnim) { details._motionAnim.cancel(); details._motionAnim = null; }

    details.classList.toggle('is-expanded', open);
    if (!animate || !body || body === details.querySelector('summary')) {
      details.open = open;
      return;
    }

    var from, to;
    if (open) {
      details.open = true;
      from = 0;
      to = body.scrollHeight;
    } else {
      from = body.offsetHeight;
      to = 0;
    }
    body.style.overflow = 'hidden';
    var anim = body.animate(
      [{ height: from + 'px', opacity: open ? 0 : 1 }, { height: to + 'px', opacity: open ? 1 : 0 }],
      { duration: cssTime('--dur-collapse', 300), easing: cssValue('--ease-out', 'ease-out') }
    );
    details._motionAnim = anim;
    anim.onfinish = function () {
      details._motionAnim = null;
      body.style.overflow = '';
      if (!open) details.open = false;
    };
    anim.oncancel = function () { body.style.overflow = ''; };
  }

  /* <details> 에 부드러운 열고 닫기를 붙임 */
  function enhanceDetails(scope) {
    (scope || document).querySelectorAll('details[data-collapsible]').forEach(function (details) {
      if (details._motionReady) return;
      details._motionReady = true;
      details.classList.toggle('is-expanded', details.open);
      var summary = details.querySelector('summary');
      if (!summary) return;
      summary.addEventListener('click', function (e) {
        e.preventDefault();
        setOpen(details, !details.classList.contains('is-expanded'));
      });
    });
  }

  /* ---------- 기본 제공 JS 애니메이션 ---------- */

  /* 숫자 카운트업: data-count="목표값" data-count-duration="ms" */
  define('count-up', function (el, ctx) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    var decimals = (String(el.getAttribute('data-count')).split('.')[1] || '').length;
    if (ctx.reduced) { el.textContent = target.toFixed(decimals); return; }
    var duration = parseInt(el.getAttribute('data-count-duration'), 10) || 1200;
    var start = performance.now();
    function tick(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  root.classList.add('motion-ready');

  global.Motion = {
    config: config,
    observe: observe,
    revealAll: revealAll,
    define: define,
    setOpen: setOpen,
    enhanceDetails: enhanceDetails,
    prefersReduced: prefersReduced
  };
})(window);
