(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(54)},30:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),i=n.n(c),o=(n(30),n(2)),l=n(15),u=n(16),s=n(17),m=(n(45),n(47),function(){var e=function(){return window.innerWidth<=768},t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=new u.WebLinksAddon,i=new s.FitAddon,m=Object(r.useState)(0),d=Object(o.a)(m,2),w=d[0],g=d[1],f={background:"#0c1117",foreground:"#fbdb5c"},b={background:"#fbdb5c",foreground:"#0c1117"},h=Object(r.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),p=Object(o.a)(h,2),y=p[0],v=p[1];Object(r.useEffect)(function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(e){v(e.matches?"dark":"light"),g(function(e){return e+1})};return e.addEventListener("change",t),function(){e.removeEventListener("change",t)}},[]);var k=function(){n.current&&n.current.write(" > ")},j=function(e,t,n){var r={red:"\x1b[31m",green:"\x1b[32m",yellow:"\x1b[33m",blue:"\x1b[34m",magenta:"\x1b[35m",cyan:"\x1b[36m",white:"\x1b[37m",gray:"\x1b[90m",bold:"\x1b[1m",reset:"\x1b[0m"}[t]||"";return"".concat(n?"\x1b[1m":"").concat(r).concat(e,"\x1b[0m")};Object(r.useEffect)(function(){var r="dark"===y?f:b,a=r.background;if(document.documentElement.style.setProperty("--background-color",a),n.current=new l.Terminal({cursorBlink:!0,fontSize:e()?12:16,fontFamily:"FontAwesome, monospace",theme:r}),t.current&&n.current){n.current.loadAddon(c),n.current.loadAddon(i),n.current.open(t.current),i.fit(),e()||(n.current.writeln(""),n.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557"),n.current.writeln("   \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557     \u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d \u2588\u2588\u2551  \u2588\u2588\u2551"),n.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551     \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551"),n.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588   \u2588\u2588\u2551    \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551"),n.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551"),n.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u255d     \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d"),n.current.writeln(""),n.current.writeln(" If ascii art is not displaying properly, please rotate horizontally or widen the window!"),n.current.writeln("")),n.current.writeln(" ".concat((new Date).getFullYear()," Sahaj Singh. All Rights Reserved.")),n.current.writeln(" Welcome to Sahaj's terminal portfolio!"),n.current.writeln(" Type ".concat(j("help","magenta",!0)," to see available commands.")),k();var o="",u=n.current.onData(function(e){"\r"===e?(n.current.writeln(""),n.current.writeln(""),E(o.trim()),n.current.writeln(""),o="",k()):"\x7f"===e?o.length>0&&(o=o.slice(0,-1),n.current.write("\b \b")):(n.current.write(e),o+=e)}),s=function(){n.current&&i.fit()};return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s),u.dispose(),n.current.dispose()}}},[w]);var E=function(e){if(n.current){if("clear"===e)return n.current.clear(),n.current.reset(),n.current.writeln(" Welcome to my terminal portfolio!"),void n.current.writeln(' Type "help" to see available commands.');switch(e){case"help":n.current.writeln(j(" Available commands are as follows:","magenta",!0)),n.current.writeln(" ".concat(j("\uf2b5","magenta",!0),"  Type ").concat(j("about","magenta",!0)," to learn more about me!")),n.current.writeln(" ".concat(j("\uf095","magenta",!0),"  Type ").concat(j("contact","magenta",!0)," to view my contact information.")),n.current.writeln(" ".concat(j("\uf0e2","magenta",!0),"  Type ").concat(j("clear","magenta",!0)," to clear the terminal.")),n.current.writeln(" ".concat(j("\uf186","magenta",!0),"  Type ").concat(j("toggle","magenta",!0)," to toggle between light and dark mode."));break;case"about":n.current.writeln(" I'm a 4th-year Simon Fraser University student pursuing a Computer Engineering degree with a minor in Computing Sciences. Passionate about coding, I specialize in C and Python. I began self-learning programming in middle school and continued to develop my skills through my degree. Check out my GitHub for projects and my journey on sahajs.com \ud83c\udf10.");break;case"contact":n.current.writeln(' \uf1fa Type "email" to contact me via Email'),n.current.writeln(' \uf0ac Type "website" to visit my Personal Website'),n.current.writeln(' \uf09b Type "github" to view my GitHub'),n.current.writeln(' \uf08c Type "linkedin" to view my LinkedIn');break;case"email":window.open("mailto:sahaj_singh@sfu.ca"),n.current.writeln(" ... Opening \uf1fa email client...");break;case"website":window.open("https://www.sahajs.com"),n.current.writeln(" ... Opening \uf0ac personal website...");break;case"github":window.open("https://github.com/SatireSage"),n.current.writeln(" ... Opening \uf09b GitHub...");break;case"linkedin":window.open("https://www.linkedin.com/in/sahaj--singh/"),n.current.writeln(" ... Opening \uf08c LinkedIn...");break;case"toggle":v("dark"===y?"light":"dark"),g(function(e){return e+1});break;default:n.current.writeln(" Command not found: ".concat(e))}}};return a.a.createElement("div",{ref:t,style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}})}),d=n(21),w=(n(52),function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),l=Object(o.a)(i,2),u=l[0],s=l[1];return Object(r.useEffect)(function(){var e=setTimeout(function(){c(!1)},1500),t=setTimeout(function(){s(!0)},1500);return function(){clearTimeout(e),clearTimeout(t)}},[]),a.a.createElement("div",{className:"App"},a.a.createElement("main",{className:"App-content"},a.a.createElement("div",{className:"loader ".concat(n?"visible":"")},a.a.createElement(d.a,{color:getComputedStyle(document.documentElement).getPropertyValue("--light-color"),height:80,width:80})),a.a.createElement("div",{className:"fade-in ".concat(u?"visible":"")},a.a.createElement(m,null))))}),g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,55)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null))),g()}},[[22,3,2]]]);
//# sourceMappingURL=main.9055357a.chunk.js.map