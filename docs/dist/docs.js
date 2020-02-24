!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t={addCSS:!0,thumbWidth:15,watch:!0};function n(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var r=function(e){return null!=e?e.constructor:null},i=function(e,t){return!!(e&&t&&e instanceof t)},u=function(e){return null==e},o=function(e){return r(e)===Object},a=function(e){return r(e)===String},c=function(e){return Array.isArray(e)},s=function(e){return i(e,NodeList)},l=a,f=c,d=s,h=function(e){return i(e,Element)},m=function(e){return i(e,Event)},v=function(e){return u(e)||(a(e)||c(e)||s(e))&&!e.length||o(e)&&!Object.keys(e).length};function b(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}var g=function(){function r(e,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,r),h(e)?this.element=e:l(e)&&(this.element=document.querySelector(e)),h(this.element)&&v(this.element.rangeTouch)&&(this.config=Object.assign({},t,n),this.init())}return i=r,o=[{key:"setup",value:function(e){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=null;if(v(e)||l(e)?u=Array.from(document.querySelectorAll(l(e)?e:'input[type="range"]')):h(e)?u=[e]:d(e)?u=Array.from(e):f(e)&&(u=e.filter(h)),v(u))return null;var o=Object.assign({},t,i);if(l(e)&&o.watch){var a=new MutationObserver((function(t){Array.from(t).forEach((function(t){Array.from(t.addedNodes).forEach((function(t){h(t)&&n(t,e)&&new r(t,o)}))}))}));a.observe(document.body,{childList:!0,subtree:!0})}return u.map((function(e){return new r(e,i)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}],(u=[{key:"init",value:function(){r.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){r.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[n](e,(function(e){return t.set(e)}),{userCapture:!1,passive:!0})}))}},{key:"get",value:function(e){if(!r.enabled||!m(e))return null;var t,n=e.target,i=e.changedTouches[0],u=parseFloat(n.getAttribute("min"))||0,o=parseFloat(n.getAttribute("max"))||100,a=parseFloat(n.getAttribute("step"))||1,c=n.getBoundingClientRect(),s=100/c.width*(this.config.thumbWidth/2)/100;return 0>(t=100/c.width*(i.clientX-c.left))?t=0:100<t&&(t=100),50>t?t-=(100-2*t)*s:50<t&&(t+=2*(t-50)*s),u+b(t/100*(o-u),a)}},{key:"set",value:function(e){r.enabled&&m(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t,{bubbles:!0});e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}])&&e(i.prototype,u),o&&e(i,o),r;var i,u,o}(),y=function(e){var t=new XMLHttpRequest,n=document.body;"withCredentials"in t&&(t.open("GET",e,!0),t.onload=function(){var e=document.createElement("div");e.setAttribute("hidden",""),e.innerHTML=t.responseText,n.insertBefore(e,n.childNodes[0])},t.send())};document.addEventListener("DOMContentLoaded",(function(){["dist/docs.svg"].forEach(y),window.shr.setup({count:{classname:"btn__count"}}),g.setup(".js-example",{thumbWidth:20})}))}();
//# sourceMappingURL=docs.js.map
