(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,r){t.exports={xtermViewport:"terminal_xtermViewport__3AESn"}},30:function(t,e,r){t.exports=r(62)},38:function(t,e,r){},61:function(t,e,r){},62:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(20),c=r.n(a),i=(r(38),r(4)),u=r(21),l=r(22),s=r(23),m=r(24),h=(r(52),r(53),r(64)),f=r(25),d=r.n(f);function w(){w=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,c=Object.create(a.prototype),i=new F(n||[]);return o(c,"_invoke",{value:O(t,r,i)}),c}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function y(){}function v(){}function b(){}var k={};l(k,c,function(){return this});var E=Object.getPrototypeOf,j=E&&E(E(P([])));j&&j!==r&&n.call(j,c)&&(k=j);var L=b.prototype=y.prototype=Object.create(k);function x(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function I(t,e){function r(o,a,c,i){var u=m(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then(function(t){r("next",t,c,i)},function(t){r("throw",t,c,i)}):e.resolve(s).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,i)})}i(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=h;return function(a,c){if(o===d)throw new Error("Generator is already running");if(o===p){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var u=T(i,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=m(e,r,n);if("normal"===l.type){if(o=n.done?p:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=p,n.method="throw",n.arg=l.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=m(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},x(I.prototype),l(I.prototype,i,function(){return this}),e.AsyncIterator=I,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new I(s(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},x(L),l(L,u,"Generator"),l(L,c,function(){return this}),l(L,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}var p=function(){var t=function(){return window.innerWidth<=768},e=Object(n.useRef)(null),r=Object(n.useRef)(null),a=new s.WebLinksAddon,c=new m.FitAddon,f=Object(n.useState)(0),p=Object(i.a)(f,2),g=p[0],y=p[1],v={background:"#0c1117",foreground:"#fffff0"},b={background:"#fffff0",foreground:"#0c1117"},k=Object(n.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),E=Object(i.a)(k,2),j=E[0],L=E[1];Object(n.useEffect)(function(){var t=window.matchMedia("(prefers-color-scheme: dark)"),e=function(t){L(t.matches?"dark":"light"),y(function(t){return t+1})};return t.addEventListener("change",e),function(){t.removeEventListener("change",e)}},[]);var x=function(){r.current&&(r.current.writeln(" Type ".concat(O("help","green",!0)," to see available commands.")),r.current.write(" > "))},I=function(t,e,r){var n={red:"\x1b[31m",green:"\x1b[32m",yellow:"\x1b[33m",blue:"\x1b[34m",magenta:"\x1b[35m",cyan:"\x1b[36m",white:"\x1b[37m",gray:"\x1b[90m",bold:"\x1b[1m",reset:"\x1b[0m"};return"".concat(r?"\x1b[1m":"").concat(n[e]||"").concat(t).concat(n.reset)},O=function(t,e,r){var n={red:"\x1b[31m",green:"\x1b[32m",yellow:"\x1b[33m",blue:"\x1b[34m",magenta:"\x1b[35m",cyan:"\x1b[36m",white:"\x1b[37m",gray:"\x1b[90m",bold:"\x1b[1m",reset:"\x1b[0m"}[e]||"";return"".concat(r?"\x1b[1m":"").concat(n).concat(t,"\x1b[0m")};Object(n.useEffect)(function(){var n="dark"===j?v:b,o=n.background;if(document.documentElement.style.setProperty("--background-color",o),r.current=new l.Terminal({cursorBlink:!0,fontSize:t()?14:18,fontFamily:"FontAwesome , monospace",theme:n}),e.current&&r.current){r.current.loadAddon(a),r.current.loadAddon(c),r.current.open(e.current),c.fit();var i=e.current.querySelector(".xterm-viewport");i&&i.classList.add(d.a.xtermViewport),t()||(r.current.writeln(""),r.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557"),r.current.writeln("   \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557     \u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d \u2588\u2588\u2551  \u2588\u2588\u2551"),r.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551     \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551"),r.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588   \u2588\u2588\u2551    \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551"),r.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551"),r.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u255d     \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d"),r.current.writeln(I(" *If ascii art is not displaying properly, please rotate horizontally or widen the window!","gray",!0))),r.current.writeln(""),r.current.writeln(""),r.current.writeln(""),r.current.writeln(" Welcome to Sahaj's terminal portfolio!"),x();var u="",s=r.current.onData(function(t){"\r"===t?(r.current.writeln(""),r.current.writeln(""),T(u.trim()),r.current.writeln(""),u="",x()):"\x7f"===t?u.length>0&&(u=u.slice(0,-1),r.current.write("\b \b")):t.charCodeAt(0)>=32&&(r.current.write(t),u+=t)}),m=function(){r.current&&c.fit()};return window.addEventListener("resize",m),function(){window.removeEventListener("resize",m),s.dispose(),r.current.dispose()}}},[g]);var T=function(e){if(r.current){if("clear"===e)return r.current.clear(),r.current.reset(),t()||(r.current.writeln(""),r.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557"),r.current.writeln("   \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557     \u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d \u2588\u2588\u2551  \u2588\u2588\u2551"),r.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551     \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551"),r.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588   \u2588\u2588\u2551    \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551"),r.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551"),r.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u255d     \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d"),r.current.writeln(I(" *If ascii art is not displaying properly, please rotate horizontally or widen the window!","gray",!0))),r.current.writeln(""),r.current.writeln(""),r.current.writeln(""),void r.current.writeln(" Welcome to Sahaj's terminal portfolio!");switch(e){case"help":r.current.writeln(O(" Available commands are as follows:","green",!0)),r.current.writeln(" ".concat(O("\uf2b5","magenta",!0),"  Type ").concat(O("about","magenta",!0)," to learn more about me!")),r.current.writeln(" ".concat(O("\uf07b","magenta",!0),"  Type ").concat(O("projects","magenta",!0)," to view my projects.")),r.current.writeln(" ".concat(O("\uf095","cyan",!0),"  Type ").concat(O("contact","cyan",!0)," to view my contact information.")),r.current.writeln(" ".concat(O("\uf15b","cyan",!0),"  Type ").concat(O("resume","cyan",!0)," to view my resume!")),r.current.writeln(" ".concat(O("\uf0e2","red",!0),"  Type ").concat(O("clear","red",!0)," to clear the terminal.")),r.current.writeln(" ".concat(O("\uf186","gray",!0),"  Type ").concat(O("toggle","gray",!0)," to toggle between light and dark mode."));break;case"about":r.current.writeln(" Hello World!"),r.current.writeln(" "),r.current.writeln(" I'm a ".concat(O("4th-year Simon Fraser University","magenta",!0)," student pursuing a ").concat(O("Computer Engineering","magenta",!0)," degree with a minor in Computing Sciences. Passionate about coding, I specialize in ").concat(O("C and Python","magenta",!0),". I began self-learning programming in middle school and continued to develop my skills through my degree. Check out my GitHub for projects and my journey on ").concat(O("\uf0ac https://sahajs.com","cyan",!0),". Click on the link or simply type ").concat(O("website","cyan",!0)," to check it out!")),r.current.writeln(" "),r.current.writeln(" Here are some fun facts about me:"),r.current.writeln("   ".concat(O("->","magenta",!0)," I'm majoring in Computer Engineering \ud83e\uddd1\u200d\ud83d\udcbb")),r.current.writeln("   ".concat(O("->","magenta",!0)," I'm working on making a Pi-Arcade \ud83d\udd79\ufe0f")),r.current.writeln("   ".concat(O("->","magenta",!0)," I like to write short stories \ud83d\udcdd")),r.current.writeln("   ".concat(O("->","magenta",!0)," I'm a student at SFU \ud83d\udcd5")),r.current.writeln("   ".concat(O("->","magenta",!0)," I like mystery movies \ud83c\udfa5")),r.current.writeln("   ".concat(O("->","magenta",!0)," I can't sing \ud83c\udfa4 but I'm a music lover \ud83c\udfa7")),r.current.writeln("   ".concat(O("->","magenta",!0)," I'm a gamer \ud83c\udfae")),r.current.writeln("   ".concat(O("->","magenta",!0)," I've traveled a lot \ud83d\udeeb")),r.current.writeln("   ".concat(O("->","magenta",!0)," I'm an avid photographer \ud83d\udcf7")),r.current.writeln("   ".concat(O("->","magenta",!0)," I love cooking \ud83c\udf73")),r.current.writeln("   ".concat(O("->","magenta",!0)," I'm a dreamer \ud83d\udcad")),r.current.writeln("   ".concat(O("->","magenta",!0)," I've been coding since middle school \ud83d\udcd6")),r.current.writeln(" "),r.current.writeln(" Thanks for visiting my terminal portfolio! Make sure to check out my ".concat(O("\uf09b GitHub","cyan",!0)," and ").concat(O("\uf08c LinkedIn","cyan",!0)," by simply typing ").concat(O("contact","cyan",!0),"!")),r.current.writeln(" \uf1f9 ".concat((new Date).getFullYear()," Sahaj Singh. All Rights Reserved."));break;case"projects":r.current.writeln(I(" Fetching projects...","gray",!0));var n="";Object(u.a)(w().mark(function t(){var e,o,a,c;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("https://api.github.com/users/SatireSage/repos");case 3:e=t.sent,o=e.data,a=o.sort(function(t,e){return new Date(e.pushed_at).getTime()-new Date(t.pushed_at).getTime()}),c=a.map(function(t){return" \x1b[1m\x1b[35mName:\x1b[0m ".concat(t.name,"\n \x1b[1m\x1b[36mURL: ").concat(t.html_url,"\x1b[0m\n \x1b[1m\x1b[35mDescription:\x1b[0m ").concat(t.description||"No description","\n\n")}).join(""),n=c,r.current.clear(),r.current.reset(),r.current.writeln(I(" \n\n\nProjects I've worked on:\n","magenta",!0)),n.split("\n").forEach(function(t){r.current.writeln(t)}),r.current.writeln(I(" Feel free to click on the link to visit the respective repository!","gray",!0)),r.current.writeln(""),x(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.error("Error fetching the repos:",t.t0);case 20:case"end":return t.stop()}},t,null,[[0,17]])}))(),console.log("Done");break;case"resume":r.current.writeln(" ... Redirecting to my ".concat(O("\uf15b resume","cyan",!0)," ...")),window.open("http://resume.sahajs.com");break;case"contact":r.current.writeln(" Here are ways to get in touch with me:"),r.current.writeln(" ".concat(O("\uf1fa","cyan",!0)," Type ").concat(O("email","cyan",!0)," to contact me via Email")),r.current.writeln(" ".concat(O("\uf0ac","cyan",!0)," Type ").concat(O("website","cyan",!0)," to visit my Personal Website")),r.current.writeln(" ".concat(O("\uf09b","cyan",!0)," Type ").concat(O("github","cyan",!0)," to view my GitHub")),r.current.writeln(" ".concat(O("\uf08c","cyan",!0)," Type ").concat(O("linkedin","cyan",!0)," to view my LinkedIn"));break;case"email":r.current.writeln(" ... Redirecting to ".concat(O("\uf1fa email","gray",!0)," client..")),window.open("mailto:sahaj_singh@sfu.ca");break;case"website":r.current.writeln(" ... Redirecting to ".concat(O("\uf0ac personal website","gray",!0),"...")),window.open("https://sahajs.com");break;case"github":r.current.writeln(" ... Redirecting to ".concat(O("\uf09b GitHub","gray",!0),"...")),window.open("http://github.sahajs.com");break;case"linkedin":r.current.writeln(" ... Redirecting to ".concat(O("\uf08c LinkedIn","gray",!0),"...")),window.open("http://linkedin.sahajs.com");break;case"toggle":L("dark"===j?"light":"dark"),y(function(t){return t+1});break;default:r.current.writeln(" Command not found: ".concat(O("".concat(e),"red",!0)))}}};return o.a.createElement("div",{ref:e,style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"20px",marginRight:"20px",marginTop:"20px",marginBottom:"20px"}})},g=r(29),y=(r(61),function(){var t=Object(n.useState)(!0),e=Object(i.a)(t,2),r=e[0],a=e[1],c=Object(n.useState)(!1),u=Object(i.a)(c,2),l=u[0],s=u[1];return Object(n.useEffect)(function(){var t=setTimeout(function(){a(!1)},1500),e=setTimeout(function(){s(!0)},1500);return function(){clearTimeout(t),clearTimeout(e)}},[]),o.a.createElement("div",{className:"App"},o.a.createElement("main",{className:"App-content"},o.a.createElement("div",{className:"loader ".concat(r?"visible":"")},o.a.createElement(g.a,{color:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?getComputedStyle(document.documentElement).getPropertyValue("--light-color").trim():getComputedStyle(document.documentElement).getPropertyValue("--dark-color").trim(),height:80,width:80})),o.a.createElement("div",{className:"fade-in ".concat(l?"visible":"")},o.a.createElement(p,null))))}),v=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,65)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;r(t),n(t),o(t),a(t),c(t)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null))),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.02ce91d3.chunk.js.map