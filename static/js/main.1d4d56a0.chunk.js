(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(54)},30:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),i=(n(30),n(2)),l=n(15),u=n(16),m=n(17),s=(n(45),n(47),function(){var e=function(){return window.innerWidth<=768},t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=new u.WebLinksAddon,o=new m.FitAddon,s=Object(r.useState)(0),d=Object(i.a)(s,2),w=d[0],g=d[1],h={background:"#0c1117",foreground:"#fbdb5c"},p={background:"#fbdb5c",foreground:"#0c1117"},f=Object(r.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),b=Object(i.a)(f,2),y=b[0],v=b[1];Object(r.useEffect)(function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(e){v(e.matches?"dark":"light"),g(function(e){return e+1})};return e.addEventListener("change",t),function(){e.removeEventListener("change",t)}},[]);var k=function(){n.current&&n.current.write(" > ")},j=function(e,t,n){var r={red:"\x1b[31m",green:"\x1b[32m",yellow:"\x1b[33m",blue:"\x1b[34m",magenta:"\x1b[35m",cyan:"\x1b[36m",white:"\x1b[37m",gray:"\x1b[90m",bold:"\x1b[1m",reset:"\x1b[0m"}[t]||"";return"".concat(n?"\x1b[1m":"").concat(r).concat(e,"\x1b[0m")};Object(r.useEffect)(function(){var r="dark"===y?h:p,a=r.background;if(document.documentElement.style.setProperty("--background-color",a),n.current=new l.Terminal({cursorBlink:!0,fontSize:e()?14:18,fontFamily:"FontAwesome , monospace",theme:r}),t.current&&n.current){n.current.loadAddon(c),n.current.loadAddon(o),n.current.open(t.current),o.fit(),e()||(n.current.writeln(""),n.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557  \u2588\u2588\u2557"),n.current.writeln("   \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557     \u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d \u2588\u2588\u2551  \u2588\u2588\u2551"),n.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551     \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551"),n.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588   \u2588\u2588\u2551    \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551"),n.current.writeln("   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551"),n.current.writeln("   \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u255d     \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d"),n.current.writeln(" *If ascii art is not displaying properly, please rotate horizontally or widen the window!")),n.current.writeln(""),n.current.writeln(""),n.current.writeln(""),n.current.writeln(" Welcome to Sahaj's terminal portfolio!"),n.current.writeln(" Type ".concat(j("help","magenta",!0)," to see available commands.")),k();var i="",u=n.current.onData(function(e){"\r"===e?(n.current.writeln(""),n.current.writeln(""),E(i.trim()),n.current.writeln(""),i="",k()):"\x7f"===e?i.length>0&&(i=i.slice(0,-1),n.current.write("\b \b")):(n.current.write(e),i+=e)}),m=function(){n.current&&o.fit()};return window.addEventListener("resize",m),function(){window.removeEventListener("resize",m),u.dispose(),n.current.dispose()}}},[w]);var E=function(e){if(n.current){if("clear"===e)return n.current.clear(),n.current.reset(),n.current.writeln(" Welcome to my terminal portfolio!"),void n.current.writeln(' Type "help" to see available commands.');switch(e){case"help":n.current.writeln(j(" Available commands are as follows:","magenta",!0)),n.current.writeln(" ".concat(j("\uf2b5","magenta",!0),"  Type ").concat(j("about","magenta",!0)," to learn more about me!")),n.current.writeln(" ".concat(j("\uf095","magenta",!0),"  Type ").concat(j("contact","magenta",!0)," to view my contact information.")),n.current.writeln(" ".concat(j("\uf15b","magenta",!0),"  Type ").concat(j("resume","magenta",!0)," to view my resume.")),n.current.writeln(" ".concat(j("\uf0e2","magenta",!0),"  Type ").concat(j("clear","magenta",!0)," to clear the terminal.")),n.current.writeln(" ".concat(j("\uf186","magenta",!0),"  Type ").concat(j("toggle","magenta",!0)," to toggle between light and dark mode."));break;case"about":n.current.writeln(" Hello World!"),n.current.writeln(" "),n.current.writeln(" I'm a ".concat(j("4th-year Simon Fraser University","magenta",!0)," student pursuing a ").concat(j("Computer Engineering","magenta",!0)," degree with a minor in Computing Sciences. Passionate about coding, I specialize in ").concat(j("C and Python","magenta",!0),". I began self-learning programming in middle school and continued to develop my skills through my degree. Check out my GitHub for projects and my journey on ").concat(j("https://sahajs.com ","magenta",!0)," \ud83c\udf10. Type website to check it out!")),n.current.writeln(" "),n.current.writeln(" Here are some fun facts about me:"),n.current.writeln("   ".concat(j("->","magenta",!0)," I'm majoring in Computer Engineering \ud83e\uddd1\u200d\ud83d\udcbb")),n.current.writeln("   ".concat(j("->","magenta",!0)," I'm working on making a Pi-Arcade \ud83d\udd79\ufe0f")),n.current.writeln("   ".concat(j("->","magenta",!0)," I like to write short stories \ud83d\udcdd")),n.current.writeln("   ".concat(j("->","magenta",!0)," I'm a student at SFU \ud83d\udcd5")),n.current.writeln("   ".concat(j("->","magenta",!0)," I like mystery movies \ud83c\udfa5")),n.current.writeln("   ".concat(j("->","magenta",!0)," I can't sing \ud83c\udfa4 but I'm a music lover \ud83c\udfa7")),n.current.writeln("   ".concat(j("->","magenta",!0)," I'm a gamer \ud83c\udfae")),n.current.writeln("   ".concat(j("->","magenta",!0)," I've traveled a lot \ud83d\udeeb")),n.current.writeln("   ".concat(j("->","magenta",!0)," I'm an avid photographer \ud83d\udcf7")),n.current.writeln("   ".concat(j("->","magenta",!0)," I love cooking \ud83c\udf73")),n.current.writeln("   ".concat(j("->","magenta",!0)," I'm a dreamer \ud83d\udcad")),n.current.writeln("   ".concat(j("->","magenta",!0)," I've been coding since middle school \ud83d\udcd6")),n.current.writeln(" "),n.current.writeln(" Thanks for visiting my terminal portfolio!"),n.current.writeln(" ".concat((new Date).getFullYear()," Sahaj Singh. All Rights Reserved."));break;case"resume":n.current.writeln(" ... Redirecting to my ".concat(j("\uf15b resume","magenta",!0)," ...")),window.open("https://docs.google.com/gview?url=https://raw.githubusercontent.com/SatireSage/Resume/main/Sahaj_Singh_Resume.pdf&embedded=true");break;case"contact":n.current.writeln(" Here are ways to get in touch with me:"),n.current.writeln(" ".concat(j("\uf1fa","magenta",!0)," Type ").concat(j('"email"',"magenta",!0)," to contact me via Email")),n.current.writeln(" ".concat(j("\uf0ac","magenta",!0)," Type ").concat(j('"website"',"magenta",!0)," to visit my Personal Website")),n.current.writeln(" ".concat(j("\uf09b","magenta",!0)," Type ").concat(j('"github"',"magenta",!0)," to view my GitHub")),n.current.writeln(" ".concat(j("\uf08c","magenta",!0)," Type ").concat(j('"linkedin"',"magenta",!0)," to view my LinkedIn"));break;case"email":window.open("mailto:sahaj_singh@sfu.ca"),n.current.writeln(" ... Redirecting to ".concat(j("\uf1fa email","magenta",!0)," client.."));break;case"website":window.open("https://www.sahajs.com"),n.current.writeln(" ... Redirecting to ".concat(j("\uf0ac personal website","magenta",!0),"..."));break;case"github":window.open("https://github.com/SatireSage"),n.current.writeln(" ... Redirecting to ".concat(j("\uf09b GitHub","magenta",!0),"..."));break;case"linkedin":window.open("https://www.linkedin.com/in/sahaj--singh/"),n.current.writeln(" ... Redirecting to ".concat(j("\uf08c LinkedIn","magenta",!0),"..."));break;case"toggle":v("dark"===y?"light":"dark"),g(function(e){return e+1});break;default:n.current.writeln(" Command not found: ".concat(e))}}};return a.a.createElement("div",{ref:t,style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}})}),d=n(21),w=(n(52),function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),u=l[0],m=l[1];return Object(r.useEffect)(function(){var e=setTimeout(function(){c(!1)},1500),t=setTimeout(function(){m(!0)},1500);return function(){clearTimeout(e),clearTimeout(t)}},[]),a.a.createElement("div",{className:"App"},a.a.createElement("main",{className:"App-content"},a.a.createElement("div",{className:"loader ".concat(n?"visible":"")},a.a.createElement(d.a,{color:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?getComputedStyle(document.documentElement).getPropertyValue("--light-color").trim():getComputedStyle(document.documentElement).getPropertyValue("--dark-color").trim(),height:80,width:80})),a.a.createElement("div",{className:"fade-in ".concat(u?"visible":"")},a.a.createElement(s,null))))}),g=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,55)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null))),g()}},[[22,3,2]]]);
//# sourceMappingURL=main.1d4d56a0.chunk.js.map