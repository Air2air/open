(function(){const jQueryEls=document.querySelectorAll('.ep-posts-load-more, .ep-item-grid-paged, .av-countdown-timer, .tabcontainer, .togglecontainer, .av_gmaps_main_wrap');Array.prototype.forEach.call(jQueryEls,function(t){if(!t.dataset.lazyDep)t.dataset.lazyDep='/wp-includes/js/jquery/jquery.js';if(!t.dataset.lazyDepObj)t.dataset.lazyDepObj='window.jQuery'});const pg=document.querySelectorAll('.ep-posts-load-more');Array.prototype.forEach.call(pg,function(t){if(!t.dataset.lazy)t.dataset.lazy='/wp-content/plugins/enfold-fast/assets/js/dist/posts-grid.js'});const ig=document.querySelectorAll('.ep-item-grid-paged');Array.prototype.forEach.call(ig,function(t){if(!t.dataset.lazy)t.dataset.lazy='/wp-content/plugins/enfold-fast/assets/js/dist/item-grid.js'});const maps=document.querySelectorAll('.av_gmaps_main_wrap');Array.prototype.forEach.call(maps,function(t){if(!t.dataset.lazy)t.dataset.lazy='/wp-content/plugins/enfold-fast/assets/js/dist/avia/map-combo.js'});const animCountDowns=document.querySelectorAll('.av-countdown-timer');Array.prototype.forEach.call(animCountDowns,function(t){if(!t.dataset.lazy)t.dataset.lazy='/wp-content/plugins/enfold-fast/assets/js/dist/avia/countdown.js'});const tabs=document.querySelectorAll('.tabcontainer');Array.prototype.forEach.call(tabs,function(t){if(!t.dataset.lazy)t.dataset.lazy='/wp-content/plugins/enfold-fast/assets/js/dist/avia/tabs.js'});const toggles=document.querySelectorAll('.togglecontainer');Array.prototype.forEach.call(toggles,function(t){if(!t.dataset.lazy)t.dataset.lazy='/wp-content/plugins/enfold-fast/assets/js/dist/avia/toggles.js'})})();(()=>{var __webpack_exports__={};function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()};function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}};function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)};function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)};function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a};function scriptAppender(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null==document.querySelector("script[src='".concat(e,"']"))){var r=document.createElement("script");r.src=e,t&&(r.onload=t),document.body.appendChild(r)}};function styleAppender(e){if(null==document.querySelector("link[href='".concat(e,"']"))){var r=document.createElement("link");r.href=e,r.rel="stylesheet",document.head.appendChild(r)}};function lazyLoader(e){var r=e.dataset;void 0!==r.lazy&&""!==r.lazy&&(void 0!==r.lazyDep?void 0!==r.lazyDepObj&&void 0===eval(r.lazyDepObj)?scriptAppender(r.lazyDep,(function(){scriptAppender(r.lazy)})):scriptAppender(r.lazy):void 0!==r.lazyDepObj?void 0===eval(r.lazyDepObj)&&scriptAppender(r.lazy):scriptAppender(r.lazy)),void 0!==r.lazyCss&&styleAppender(r.lazyCss),setTimeout((function(){e.classList.add("ep-lazy-loaded")}),150)};function lazyfallBack(e){_toConsumableArray(e).forEach((function(e){lazyLoader(e)}))};function lazy(){var e=document.querySelectorAll(".ep-lazy, [data-lazy], [data-lazy-css], [data-lazy-bg]");if(e)if(window.IntersectionObserver){var r=new IntersectionObserver((function(e,r){e.forEach((function(e,t){e.isIntersecting&&(lazyLoader(e.target),r.unobserve(e.target))}))}),{root:null,threshold:0,rootMargin:"100px 0px 100px 0px"});_toConsumableArray(e).forEach((function(e){r.observe(e)}))}
else lazyfallBack(e)};window.scriptAppender=scriptAppender,window.styleAppender=styleAppender,lazy()})();(()=>{'use strict';function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator'])return Array.from(e)}(e)||function(e,n){if(e){if('string'==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return'Object'===r&&e.constructor&&(r=e.constructor.name),'Map'===r||'Set'===r?Array.from(e):'Arguments'===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};function n(e){var t;e.classList.add('avia_start_delayed_animation'),'function'==typeof Event?t=new Event('avia_start_animation'):(t=document.createEvent('Event')).initEvent('avia_start_animation',!0,!0),e.dispatchEvent(t)};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};function i(e){void 0===jQuery.fn.magnificPopup&&(styleAppender('/wp-content/plugins/enfold-fast/assets/css/dist/avia/lightbox-combo.css'),scriptAppender('/wp-content/plugins/enfold-fast/assets/js/dist/avia/lightbox-combo.js',(function(){e.click()})))};function a(e){e.preventDefault();var t=e.target;void 0===window.jQuery?scriptAppender('/wp-includes/js/jquery/jquery.js',(function(){i(t)})):i(t)};function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};function u(){void 0===jQuery.fn.mediaelementplayer&&scriptAppender('/wp-content/plugins/enfold-fast/assets/js/dist/avia/mej.js',(function(){void 0===jQuery.fn.avia_html5_activation&&scriptAppender('/wp-content/plugins/enfold-fast/assets/js/dist/avia/video-combo.js',(function(){styleAppender('/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow/slideshow.css'),scriptAppender('/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow/slideshow.js',(function(){jQuery.fn.aviaSlider&&jQuery('.avia-slideshow:not(.av_fullscreen)','body').aviaSlider()}))}))}))};var s,l;!function(){var t=document.querySelectorAll('.av-animated-generic, .avia_animate_when_visible, .avia_animate_when_almost_visible');if(t)if(window.IntersectionObserver){var r=new IntersectionObserver((function(e,t){e.forEach((function(e,r){e.isIntersecting&&(setTimeout((function(){n(e.target)}),100*r),t.unobserve(e.target))}))}),{root:null,threshold:.5});e(t).forEach((function(e){r.observe(e)}))}
else window.requestAnimationFrame((function(){return function(t){e(t).forEach((function(e){return n(e)}))}(t)}))}(),(s=document.querySelectorAll('.av-cell-link, .av-column-link'))&&(l=s,function(e){if(Array.isArray(e))return r(e)}(l)||function(e){if('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator'])return Array.from(e)}(l)||function(e,t){if(e){if('string'==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return'Object'===n&&e.constructor&&(n=e.constructor.name),'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(l)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()).forEach((function(e){e.addEventListener('click',(function(t){if(void 0===t.target||void 0===t.target.href){var o=e,r=o.dataset.linkColumnUrl,i=o.dataset.linkColumnTarget;if(window.location.hostname,window.location.pathname,void 0!==r&&'string'==typeof r){if(void 0!==i||'_blank'==i){var n=document.createElement('a');return n.href=r,n.target='_blank',n.rel='noopener noreferrer',n.click(),!1};window.location.href=r,t.preventDefault()}}}))})),function(){if(void 0===window.jQuery||void 0===jQuery.fn.magnificPopup){var e=document.querySelectorAll('a.lightbox, a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], a[href*=".jpg?"], a[href*=".png?"], a[href*=".gif?"], a[href*=".jpeg?"], a[href$=".mov"], a[href$=".swf"], a[href*="vimeo.com"], a[href*="youtube.com/watch"], a[href*="iframe=true"]');e&&function(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator'])return Array.from(e)}(e)||function(e,t){if(e){if('string'==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return'Object'===n&&e.constructor&&(n=e.constructor.name),'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}(e).forEach((function(e){e.addEventListener('click',a)}))}}(),function(){var e=document.querySelectorAll('.avia-video, .av-section-video-bg');if(e)if(window.IntersectionObserver){var t=new IntersectionObserver((function(e,t){e.forEach((function(e,n){e.isIntersecting&&(void 0===window.jQuery?scriptAppender('/wp-includes/js/jquery/jquery.js',(function(){u()})):u(),t.unobserve(e.target))}))}),{root:null,threshold:0});(function(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator'])return Array.from(e)}(e)||function(e,t){if(e){if('string'==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return'Object'===n&&e.constructor&&(n=e.constructor.name),'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()})(e).forEach((function(e){t.observe(e)}))}
else u()}()})();(()=>{'use strict';function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator'])return Array.from(e)}(e)||function(e,n){if(e){if('string'==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return'Object'===r&&e.constructor&&(r=e.constructor.name),'Map'===r||'Set'===r?Array.from(e):'Arguments'===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator'])return Array.from(e)}(e)||function(e,t){if(e){if('string'==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return'Object'===n&&e.constructor&&(n=e.constructor.name),'Map'===n||'Set'===n?Array.from(e):'Arguments'===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};function i(e){e.preventDefault();var t=e.target,n=t.dataset.pgpId,r=document.querySelector('[data-pgp-key="'+n+'"]');r&&(navigator.clipboard.writeText(r.value),t.style.display='none',document.querySelector('.pgp-copied[data-pgp-id="'+n+'"]').style.display='inline-block')};var a,c,l;document.querySelector('.header')&&function(){var n=window,r=function(){var e=document.documentElement;e.scrollTop<90?e.classList.remove('header-is-scrolled'):e.classList.add('header-is-scrolled')};n.addEventListener('scroll',(function(){n.requestAnimationFrame(r)})),r();var o=document.querySelectorAll('.header .header-menu .main-menu > .menu-item-has-children'),t={};e(o).forEach((function(e,n){var r=e;r.addEventListener('mouseenter',(function(){t[n]=!0,setTimeout((function(){1==t[n]&&r.classList.add('sub-menu-is-active')}),200)})),r.addEventListener('mouseleave',(function(){t[n]=!1,setTimeout((function(){0==t[n]&&r.classList.remove('sub-menu-is-active')}),325)}))})),e(document.querySelectorAll('.hamburger-content .main-menu > .menu-item-has-children')).forEach((function(e){var t=document.createElement('span');t.className='sub-menu-indicator',e.appendChild(t),t.addEventListener('click',(function(){e.classList.toggle('sub-menu-is-active')}))})),e(document.querySelectorAll('.hamburger-toggle, .hamburger-overlay, .hamburger-content a')).forEach((function(e){e.addEventListener('click',(function(){document.documentElement.classList.toggle('burger-is-active')}))}))}(),document.querySelector('.accordion-section')&&function(){if((e=document.querySelectorAll('.accordion-section .container .entry-content-wrapper'),function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if('undefined'!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e['@@iterator'])return Array.from(e)}(e)||function(e,t){if(e){if('string'==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return'Object'===r&&e.constructor&&(r=e.constructor.name),'Map'===r||'Set'===r?Array.from(e):'Arguments'===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()).forEach((function(e){e.addEventListener('click',(function(){e.classList.toggle('is-active')}))})),''!==window.location.hash){var t=window.location.hash;document.querySelector(''.concat(t)).closest('.avia-section').querySelector('.accordion-toggle').click()};var e}(),(a=document.querySelectorAll('.ep-grid-wrapper.is-toggleable')).length>0&&r(a).forEach((function(e){var n=!!e.classList.contains('open-first'),o=!!e.classList.contains('multiple-open'),i=e.classList.contains('toggle-hover')?'mouseenter':'click',a=!!e.classList.contains('force-open'),t=r(e.querySelectorAll('.ep-item-grid-item'));n&&t[0].classList.add('is-active'),r(t).forEach((function(e){e.addEventListener(i,(function(){var e=this;o||t.filter((function(t){return t!==e})).forEach((function(e){return e.classList.remove('is-active')})),a?this.classList.add('is-active'):this.classList.toggle('is-active')}))}))})),function(){var e=document.querySelectorAll('.ep-flickity-slider-wrapper');if(e){var t=new IntersectionObserver((function(e,t){e.forEach((function(e,n){e.isIntersecting&&(e.target,setTimeout((function(){window.dispatchEvent(new Event('resize'))}),200),t.unobserve(e.target))}))}),{root:null,threshold:0,rootMargin:'100px 0px 100px 0px'});r(e).forEach((function(e){t.observe(e)}))}}(),document.querySelector('.facetwp-template')&&(c=document.body,l=document.querySelector('.facetwp-template'),document.addEventListener('facetwp-loaded',(function(){l.classList.remove('fwp-loading')})),document.addEventListener('facetwp-refresh',(function(){l.classList.add('fwp-loading'),setTimeout((function(){c.classList.toggle('fwp-on',-1!=window.location.href.indexOf('?_'))}),100)}))),document.querySelector('[data-pgp-id]')&&document.querySelectorAll('.pgp-copy[data-pgp-id]').forEach((function(e){e.addEventListener('click',i)}))})();