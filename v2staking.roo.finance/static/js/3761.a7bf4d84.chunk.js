"use strict";(self.webpackChunkgameon=self.webpackChunkgameon||[]).push([[3761],{73761:function(n,t,o){o.r(t),o.d(t,{default:function(){return ln}});var i=o(1413),e=o(74165),r=o(15861),a=o(43144),c=o(15671),s=o(97326),l=o(60136),f=o(29388),d=o(29439),u=o(33833),v=o(62810),p=o(21009),m=o(12290),y=o(49615);o(82379),o(5524),o(4819),o(84471),o(93721),o(82514),o(45513),o(57381),o(97143);function b(n,t){var o=t.from,i=t.to,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=getComputedStyle(n),a="none"===r.transform?"":r.transform,c=r.transformOrigin.split(" ").map(parseFloat),s=(0,d.Z)(c,2),l=s[0],f=s[1],v=o.left+o.width*l/i.width-(i.left+l),p=o.top+o.height*f/i.height-(i.top+f),m=e.delay,y=void 0===m?0:m,b=e.duration,h=void 0===b?function(n){return 120*Math.sqrt(n)}:b,g=e.easing,x=void 0===g?u.ae:g;return{delay:y,duration:(0,u.Z)(h)?h(Math.sqrt(v*v+p*p)):h,easing:x,css:function(n,t){var e=t*v,r=t*p,c=n+t*o.width/i.width,s=n+t*o.height/i.height;return"transform: ".concat(a," translate(").concat(e,"px, ").concat(r,"px) scale(").concat(c,", ").concat(s,");")}}}function h(n){(0,u.a)(n,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function g(n){var t,o;return{c:function(){t=(0,u.j)("div"),(0,u.k)(t,"class","border svelte-13cuwwo"),(0,u.k)(t,"style",o="\n    width: ".concat(n[2]-2*n[3],"px; \n    height: ").concat(n[2]-2*n[3],"px; \n    border-color: var(").concat(n[1],"); \n    padding: ").concat(n[3],"px; \n    background-color: ").concat(n[4],";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  "))},m:function(o,i){(0,u.b)(o,t,i),t.innerHTML=n[0]},p:function(n,i){var e=(0,d.Z)(i,1)[0];1&e&&(t.innerHTML=n[0]),30&e&&o!==(o="\n    width: ".concat(n[2]-2*n[3],"px; \n    height: ").concat(n[2]-2*n[3],"px; \n    border-color: var(").concat(n[1],"); \n    padding: ").concat(n[3],"px; \n    background-color: ").concat(n[4],";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  "))&&(0,u.k)(t,"style",o)},i:u.n,o:u.n,d:function(n){n&&(0,u.d)(t)}}}function x(n,t,o){var i=t.icon,e=t.borderColorVar,r=t.size,a=t.padding,c=void 0===a?0:a,s=t.background,l=void 0===s?"transparent":s;return n.$$set=function(n){"icon"in n&&o(0,i=n.icon),"borderColorVar"in n&&o(1,e=n.borderColorVar),"size"in n&&o(2,r=n.size),"padding"in n&&o(3,c=n.padding),"background"in n&&o(4,l=n.background)},[i,e,r,c,l]}var k=function(n){(0,l.Z)(o,n);var t=(0,f.Z)(o);function o(n){var i;return(0,c.Z)(this,o),i=t.call(this),(0,u.i)((0,s.Z)(i),n,x,g,u.s,{icon:0,borderColorVar:1,size:2,padding:3,background:4},h),i}return(0,a.Z)(o)}(u.S);function w(n){(0,u.a)(n,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function $(n){var t,o,i,e,r,a,c,s,l=u.af[n[1].type].eventIcon+"",f=!n[1].id.includes("customNotification")&&!n[1].id.includes("preflight"),d="pending"===n[1].type&&j(),v=f&&Z(n);return{c:function(){t=(0,u.j)("div"),d&&d.c(),o=(0,u.G)(),i=(0,u.j)("div"),e=(0,u.j)("div"),c=(0,u.G)(),v&&v.c(),(0,u.k)(e,"class",r=(0,u.l)("notification-icon flex items-center justify-center ".concat("pending"===n[1].type?"pending-icon":""))+" svelte-jvic9v"),(0,u.k)(i,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),(0,u.k)(i,"style",a="background:".concat(u.af[n[1].type].backgroundColor,"; color: ").concat(u.af[n[1].type].iconColor||"","; ").concat("pending"===n[1].type?"height: 28px; width: 28px; margin: 2px;":"border: 2px solid ".concat(u.af[n[1].type].borderColor),"; ")),(0,u.k)(t,"class","relative")},m:function(n,r){(0,u.b)(n,t,r),d&&d.m(t,null),(0,u.m)(t,o),(0,u.m)(t,i),(0,u.m)(i,e),e.innerHTML=l,(0,u.m)(t,c),v&&v.m(t,null),s=!0},p:function(n,c){"pending"===n[1].type?d||((d=j()).c(),d.m(t,o)):d&&(d.d(1),d=null),(!s||2&c)&&l!==(l=u.af[n[1].type].eventIcon+"")&&(e.innerHTML=l),(!s||2&c&&r!==(r=(0,u.l)("notification-icon flex items-center justify-center ".concat("pending"===n[1].type?"pending-icon":""))+" svelte-jvic9v"))&&(0,u.k)(e,"class",r),(!s||2&c&&a!==(a="background:".concat(u.af[n[1].type].backgroundColor,"; color: ").concat(u.af[n[1].type].iconColor||"","; ").concat("pending"===n[1].type?"height: 28px; width: 28px; margin: 2px;":"border: 2px solid ".concat(u.af[n[1].type].borderColor),"; ")))&&(0,u.k)(i,"style",a),2&c&&(f=!n[1].id.includes("customNotification")&&!n[1].id.includes("preflight")),f?v?(v.p(n,c),2&c&&(0,u.x)(v,1)):((v=Z(n)).c(),(0,u.x)(v,1),v.m(t,null)):v&&((0,u.y)(),(0,u.A)(v,1,1,(function(){v=null})),(0,u.z)())},i:function(n){s||((0,u.x)(v),s=!0)},o:function(n){(0,u.A)(v),s=!1},d:function(n){n&&(0,u.d)(t),d&&d.d(),v&&v.d()}}}function j(n){var t;return{c:function(){t=(0,u.j)("div"),(0,u.k)(t,"class","border-action absolute svelte-jvic9v")},m:function(n,o){(0,u.b)(n,t,o)},d:function(n){n&&(0,u.d)(t)}}}function Z(n){var t,o,i;return o=new k({props:{icon:n[0].icon,size:16,background:n[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c:function(){t=(0,u.j)("div"),(0,u.F)(o.$$.fragment),(0,u.k)(t,"class","absolute chain-icon-container svelte-jvic9v")},m:function(n,e){(0,u.b)(n,t,e),(0,u.I)(o,t,null),i=!0},p:function(n,t){var i={};1&t&&(i.icon=n[0].icon),1&t&&(i.background=n[0].color),o.$set(i)},i:function(n){i||((0,u.x)(o.$$.fragment,n),i=!0)},o:function(n){(0,u.A)(o.$$.fragment,n),i=!1},d:function(n){n&&(0,u.d)(t),(0,u.K)(o)}}}function z(n){var t,o,i=n[1].type&&$(n);return{c:function(){i&&i.c(),t=(0,u.e)()},m:function(n,e){i&&i.m(n,e),(0,u.b)(n,t,e),o=!0},p:function(n,o){var e=(0,d.Z)(o,1)[0];n[1].type?i?(i.p(n,e),2&e&&(0,u.x)(i,1)):((i=$(n)).c(),(0,u.x)(i,1),i.m(t.parentNode,t)):i&&((0,u.y)(),(0,u.A)(i,1,1,(function(){i=null})),(0,u.z)())},i:function(n){o||((0,u.x)(i),o=!0)},o:function(n){(0,u.A)(i),o=!1},d:function(n){i&&i.d(n),n&&(0,u.d)(t)}}}function C(n,t,o){var i=t.chainStyles,e=void 0===i?u._:i,r=t.notification;return n.$$set=function(n){"chainStyles"in n&&o(0,e=n.chainStyles),"notification"in n&&o(1,r=n.notification)},[e,r]}var L=function(n){(0,l.Z)(o,n);var t=(0,f.Z)(o);function o(n){var i;return(0,c.Z)(this,o),i=t.call(this),(0,u.i)((0,s.Z)(i),n,C,z,u.s,{chainStyles:0,notification:1},w),i}return(0,a.Z)(o)}(u.S);function P(n){(0,u.a)(n,"svelte-pm7idu","div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(\n      --notify-onboard-timer-color,\n      var(--onboard-gray-300, var(--gray-300))\n    );margin-left:4px}")}function T(n){var t,o,i,e,r=n[2](n[1]-n[0])+"";return{c:function(){t=(0,u.t)("-\n    "),o=(0,u.j)("span"),i=(0,u.t)(r),e=(0,u.t)("\n    ago"),(0,u.k)(o,"class","svelte-pm7idu")},m:function(n,r){(0,u.b)(n,t,r),(0,u.b)(n,o,r),(0,u.m)(o,i),(0,u.b)(n,e,r)},p:function(n,t){3&t&&r!==(r=n[2](n[1]-n[0])+"")&&(0,u.v)(i,r)},d:function(n){n&&(0,u.d)(t),n&&(0,u.d)(o),n&&(0,u.d)(e)}}}function S(n){var t,o=n[0]&&T(n);return{c:function(){t=(0,u.j)("div"),o&&o.c(),(0,u.k)(t,"class","time svelte-pm7idu")},m:function(n,i){(0,u.b)(n,t,i),o&&o.m(t,null)},p:function(n,i){var e=(0,d.Z)(i,1)[0];n[0]?o?o.p(n,e):((o=T(n)).c(),o.m(t,null)):o&&(o.d(1),o=null)},i:u.n,o:u.n,d:function(n){n&&(0,u.d)(t),o&&o.d()}}}function M(n,t,o){var i,e;(0,u.c)(n,v._,(function(n){return o(3,i=n)})),(0,u.c)(n,v.SP,(function(n){return o(4,e=n)}));var r=t.startTime;var a=Date.now(),c=setInterval((function(){o(1,a=Date.now())}),1e3);return(0,u.ad)((function(){clearInterval(c)})),n.$$set=function(n){"startTime"in n&&o(0,r=n.startTime)},[r,a,function(n){var t=Math.floor(n/1e3),o=t<0?0:t;return o>=60?"".concat(Math.floor(o/60).toLocaleString(e)," ").concat(i("notify.time.minutes")):"".concat(o.toLocaleString(e)," ").concat(i("notify.time.seconds"))}]}var A=function(n){(0,l.Z)(o,n);var t=(0,f.Z)(o);function o(n){var i;return(0,c.Z)(this,o),i=t.call(this),(0,u.i)((0,s.Z)(i),n,M,S,u.s,{startTime:0},P),i}return(0,a.Z)(o)}(u.S);function F(n){(0,u.a)(n,"svelte-1otz6tt","div.notify-transaction-data.svelte-1otz6tt{font-size:var(\n      --notify-onboard-transaction-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(\n      --notify-onboard-hash-time-font-size,\n      var(--onboard-font-size-7, var(--font-size-7))\n    );line-height:var(\n      --notify-onboard-hash-time-font-line-height,\n      var(--onboard-font-line-height-4, var(--font-line-height-4))\n    )}.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-address-hash-color,\n      var(--onboard-primary-200, var(--primary-200))\n    )}a.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-anchor-color,\n      var(--onboard-primary-400, var(--primary-400))\n    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}")}function G(n){var t,o,i,e;function r(n,t){return n[0].link?E:I}var a=r(n),c=a(n);return i=new A({props:{startTime:n[0].startTime}}),{c:function(){t=(0,u.j)("span"),c.c(),o=(0,u.G)(),(0,u.F)(i.$$.fragment),(0,u.k)(t,"class","hash-time svelte-1otz6tt")},m:function(n,r){(0,u.b)(n,t,r),c.m(t,null),(0,u.m)(t,o),(0,u.I)(i,t,null),e=!0},p:function(n,e){a===(a=r(n))&&c?c.p(n,e):(c.d(1),(c=a(n))&&(c.c(),c.m(t,o)));var s={};1&e&&(s.startTime=n[0].startTime),i.$set(s)},i:function(n){e||((0,u.x)(i.$$.fragment,n),e=!0)},o:function(n){(0,u.A)(i.$$.fragment,n),e=!1},d:function(n){n&&(0,u.d)(t),c.d(),(0,u.K)(i)}}}function I(n){var t,o,i=(0,u.E)(n[0].id)+"";return{c:function(){t=(0,u.j)("div"),o=(0,u.t)(i),(0,u.k)(t,"class","address-hash svelte-1otz6tt")},m:function(n,i){(0,u.b)(n,t,i),(0,u.m)(t,o)},p:function(n,t){1&t&&i!==(i=(0,u.E)(n[0].id)+"")&&(0,u.v)(o,i)},d:function(n){n&&(0,u.d)(t)}}}function E(n){var t,o,i,e=(0,u.E)(n[0].id)+"";return{c:function(){t=(0,u.j)("a"),o=(0,u.t)(e),(0,u.k)(t,"class","address-hash svelte-1otz6tt"),(0,u.k)(t,"href",i=n[0].link),(0,u.k)(t,"target","_blank"),(0,u.k)(t,"rel","noreferrer noopener")},m:function(n,i){(0,u.b)(n,t,i),(0,u.m)(t,o)},p:function(n,r){1&r&&e!==(e=(0,u.E)(n[0].id)+"")&&(0,u.v)(o,e),1&r&&i!==(i=n[0].link)&&(0,u.k)(t,"href",i)},d:function(n){n&&(0,u.d)(t)}}}function R(n){var t,o,i,e,r,a=n[0].message+"",c=n[0].id&&!n[0].id.includes("customNotification")&&!n[0].id.includes("preflight"),s=c&&G(n);return{c:function(){t=(0,u.j)("div"),o=(0,u.j)("span"),i=(0,u.t)(a),e=(0,u.G)(),s&&s.c(),(0,u.k)(o,"class","transaction-status svelte-1otz6tt"),(0,u.k)(t,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m:function(n,a){(0,u.b)(n,t,a),(0,u.m)(t,o),(0,u.m)(o,i),(0,u.m)(t,e),s&&s.m(t,null),r=!0},p:function(n,o){var e=(0,d.Z)(o,1)[0];(!r||1&e)&&a!==(a=n[0].message+"")&&(0,u.v)(i,a),1&e&&(c=n[0].id&&!n[0].id.includes("customNotification")&&!n[0].id.includes("preflight")),c?s?(s.p(n,e),1&e&&(0,u.x)(s,1)):((s=G(n)).c(),(0,u.x)(s,1),s.m(t,null)):s&&((0,u.y)(),(0,u.A)(s,1,1,(function(){s=null})),(0,u.z)())},i:function(n){r||((0,u.x)(s),r=!0)},o:function(n){(0,u.A)(s),r=!1},d:function(n){n&&(0,u.d)(t),s&&s.d()}}}function H(n,t,o){var i=t.notification;return n.$$set=function(n){"notification"in n&&o(0,i=n.notification)},[i]}var K=function(n){(0,l.Z)(o,n);var t=(0,f.Z)(o);function o(n){var i;return(0,c.Z)(this,o),i=t.call(this),(0,u.i)((0,s.Z)(i),n,H,R,u.s,{notification:0},F),i}return(0,a.Z)(o)}(u.S),O='\n<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n',D=["txPool"],N=["main","matic-main"],V=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],_=function(n){return D.includes(n)},q=function(n){return N.includes(n)},B=function(n){return n&&V.includes(n.label)};function J(n){return U.apply(this,arguments)}function U(){return(U=(0,r.Z)((0,e.Z)().mark((function n(t){var o,r,a,c,s,l,f,v,p,m,b,h,g,x,k,w,$,j,Z,z,C,L,P;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.type,r=t.wallet,a=t.transaction,c=a.from,s=a.input,l=a.value,f=a.to,v=a.nonce,p=a.gas,m=a.network,b=u.ag[m],h=u.a4.get().notify.replacement.gasPriceProbability,g=u.a8.gas,x=u.a8.apiKey,n.next=7,g.get({chains:[u.ag[m]],endpoint:"blockPrices",apiKey:x});case 7:return k=n.sent,w=(0,d.Z)(k,1),$=w[0],j=$.blockPrices[0].estimatedPrices.find((function(n){return n.confidence===("speedup"===o?h.speedup:h.cancel)})),Z=j.maxFeePerGas,z=j.maxPriorityFeePerGas,C=(0,u.ah)(Z),L=(0,u.ah)(z),P="0x"===s?{}:{data:s},n.abrupt("return",r.provider.request({method:"eth_sendTransaction",params:[(0,i.Z)({type:"0x2",from:c,to:"cancel"===o?c:f,chainId:parseInt(b),value:"".concat(y.O$.from(l).toHexString()),nonce:(0,u.ai)(v),gasLimit:(0,u.ai)(p),maxFeePerGas:C,maxPriorityFeePerGas:L},P)]}));case 15:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function X(n){(0,u.a)(n,"svelte-6ot4iy",".bn-notify-notification.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-color:var(--border-color);border-radius:var(\n      --notify-onboard-border-radius,\n      var(--onboard-border-radius-4, var(--border-radius-4))\n    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{padding:0.75rem}.bn-notify-notification.svelte-6ot4iy:hover>div.bn-notify-notification-inner.svelte-6ot4iy>div.notify-close-btn-desktop.svelte-6ot4iy{visibility:visible;opacity:1}div.notify-close-btn.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-6ot4iy .close-icon.svelte-6ot4iy.svelte-6ot4iy{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-6ot4iy>.close-icon.svelte-6ot4iy.svelte-6ot4iy{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-6ot4iy:hover>.close-icon.svelte-6ot4iy.svelte-6ot4iy{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{color:var(\n      --notify-onboard-transaction-status-color,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:14px}.dropdown.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{height:48px}.dropdown-buttons.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{background-color:var(\n      --notify-onboard-dropdown-background,\n      var(--onboard-gray-700, var(--gray-700))\n    );width:100%;padding:8px}.dropdown-button.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy{padding:4px 12px;border-radius:var(\n      --notify-onboard-dropdown-border-radius,\n      var(--onboard-border-radius-5, var(--border-radius-5))\n    );background-color:transparent;font-size:var(\n      --notify-onboard-dropdown-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );color:var(\n      --notify-onboard-dropdown-text-color,\n      var(--onboard-primary-400, var(--primary-400))\n    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-6ot4iy.svelte-6ot4iy.svelte-6ot4iy:hover{background:var(\n      --notify-onboard-dropdown-btn-hover-background,\n      rgba(146, 155, 237, 0.2)\n    )}")}function Q(n){var t,o,i,e,r,a;return{c:function(){t=(0,u.j)("div"),(o=(0,u.j)("button")).textContent="Cancel",i=(0,u.G)(),(e=(0,u.j)("button")).textContent="Speed-up",(0,u.k)(o,"class","dropdown-button svelte-6ot4iy"),(0,u.k)(e,"class","dropdown-button svelte-6ot4iy"),(0,u.k)(t,"class","dropdown-buttons flex items-center justify-end svelte-6ot4iy")},m:function(c,s){(0,u.b)(c,t,s),(0,u.m)(t,o),(0,u.m)(t,i),(0,u.m)(t,e),r||(a=[(0,u.p)(o,"click",n[9]),(0,u.p)(e,"click",n[10])],r=!0)},p:u.n,d:function(n){n&&(0,u.d)(t),r=!1,(0,u.L)(a)}}}function W(n){var t,o,i,e,r,a,c,s,l,f,v,p,m,y;i=new L({props:{notification:n[0],chainStyles:u.aj[u.ag[n[0].network]]}}),r=new K({props:{notification:n[0]}});var b="txPool"===n[0].eventCode&&Q(n);return{c:function(){t=(0,u.j)("div"),o=(0,u.j)("div"),(0,u.F)(i.$$.fragment),e=(0,u.G)(),(0,u.F)(r.$$.fragment),a=(0,u.G)(),c=(0,u.j)("div"),s=(0,u.j)("div"),l=(0,u.G)(),f=(0,u.j)("div"),b&&b.c(),(0,u.k)(s,"class","flex items-center close-icon svelte-6ot4iy"),(0,u.k)(c,"class","notify-close-btn notify-close-btn-"+n[4].type+" pointer flex svelte-6ot4iy"),(0,u.k)(o,"class","flex bn-notify-notification-inner svelte-6ot4iy"),(0,u.k)(f,"class","dropdown svelte-6ot4iy"),(0,u.H)(f,"dropdown-visible",n[2]&&n[5]&&_(n[0].eventCode)&&q(n[0].network)&&B(n[7])),(0,u.k)(t,"class",v="bn-notify-notification bn-notify-notification-"+n[0].type+"} svelte-6ot4iy"),(0,u.H)(t,"bn-notify-clickable",n[0].onClick)},m:function(d,v){(0,u.b)(d,t,v),(0,u.m)(t,o),(0,u.I)(i,o,null),(0,u.m)(o,e),(0,u.I)(r,o,null),(0,u.m)(o,a),(0,u.m)(o,c),(0,u.m)(c,s),s.innerHTML=O,(0,u.m)(t,l),(0,u.m)(t,f),b&&b.m(f,null),p=!0,m||(y=[(0,u.p)(c,"click",(0,u.J)(n[8])),(0,u.p)(t,"mouseenter",n[11]),(0,u.p)(t,"mouseleave",n[12]),(0,u.p)(t,"click",n[13])],m=!0)},p:function(n,o){var e=(0,d.Z)(o,1)[0],a={};1&e&&(a.notification=n[0]),1&e&&(a.chainStyles=u.aj[u.ag[n[0].network]]),i.$set(a);var c={};1&e&&(c.notification=n[0]),r.$set(c),"txPool"===n[0].eventCode?b?b.p(n,e):((b=Q(n)).c(),b.m(f,null)):b&&(b.d(1),b=null),(!p||165&e)&&(0,u.H)(f,"dropdown-visible",n[2]&&n[5]&&_(n[0].eventCode)&&q(n[0].network)&&B(n[7])),(!p||1&e&&v!==(v="bn-notify-notification bn-notify-notification-"+n[0].type+"} svelte-6ot4iy"))&&(0,u.k)(t,"class",v),(!p||1&e)&&(0,u.H)(t,"bn-notify-clickable",n[0].onClick)},i:function(n){p||((0,u.x)(i.$$.fragment,n),(0,u.x)(r.$$.fragment,n),p=!0)},o:function(n){(0,u.A)(i.$$.fragment,n),(0,u.A)(r.$$.fragment,n),p=!1},d:function(n){n&&(0,u.d)(t),(0,u.K)(i),(0,u.K)(r),b&&b.d(),m=!1,(0,u.L)(y)}}}function Y(n,t,o){var i,a;(0,u.c)(n,u.w,(function(n){return o(15,i=n)})),(0,u.c)(n,v._,(function(n){return o(3,a=n)}));var c,s=u.a8.device,l=u.a8.gas,f=t.notification,d=t.updateParentOnRemove,p=!1,m=u.ak.getValue().find((function(n){return n.hash===f.id})),y=m&&i.find((function(n){return!!n.accounts.find((function(n){return n.address.toLowerCase()===m.from.toLowerCase()}))}));(0,u.ad)((function(){clearTimeout(c)}));var b=function(){var n=(0,r.Z)((0,e.Z)().mark((function n(){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J({type:"cancel",wallet:y,transaction:m});case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),t="".concat(m.hash.slice(0,9),":txReplaceError").concat(m.hash.slice(-5)),(0,u.an)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3});case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)((0,e.Z)().mark((function n(){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J({type:"speedup",wallet:y,transaction:m});case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),t="".concat(m.hash.slice(0,9),":txReplaceError").concat(m.hash.slice(-5)),(0,u.an)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3});case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();return n.$$set=function(n){"notification"in n&&o(0,f=n.notification),"updateParentOnRemove"in n&&o(1,d=n.updateParentOnRemove)},n.$$.update=function(){1&n.$$.dirty&&f.autoDismiss&&(c=setTimeout((function(){(0,u.al)(f.id),(0,u.am)(f.id)}),f.autoDismiss))},[f,d,p,a,s,l,m,y,function(){(0,u.al)(f.id),(0,u.am)(f.id),d()},b,h,function(){return o(2,p=!0)},function(){return o(2,p=!1)},function(n){return f.onClick&&f.onClick(n)}]}var nn=function(n){(0,l.Z)(o,n);var t=(0,f.Z)(o);function o(n){var i;return(0,c.Z)(this,o),i=t.call(this),(0,u.i)((0,s.Z)(i),n,Y,W,u.s,{notification:0,updateParentOnRemove:1},X),i}return(0,a.Z)(o)}(u.S);function tn(n){(0,u.a)(n,"svelte-1h8mmo3","ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(\n      --notify-onboard-font-size,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(\n      --notify-onboard-font-family,\n      var(--onboard-font-family-normal, inherit)\n    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}")}function on(n,t,o){var i=n.slice();return i[12]=t[o],i}function en(n){for(var t,o,i,e,r=[],a=new Map,c=n[2],s=function(n){return n[12].key},l=0;l<c.length;l+=1){var f=on(n,c,l),d=s(f);a.set(d,r[l]=rn(d,f))}return{c:function(){t=(0,u.j)("ul");for(var e=0;e<r.length;e+=1)r[e].c();(0,u.k)(t,"class",o="bn-notify-"+n[0]+" "+n[5]+" svelte-1h8mmo3"),(0,u.k)(t,"style",i="".concat(n[0].includes("top")?"justify-content:flex-start;":"","; max-height: calc(100vh - ").concat(n[6].expanded?"412px":n[1]&&"mobile"!==n[7].type?"82px":n[1]||"mobile"!==n[7].type?"24px":"108px",")"))},m:function(n,o){(0,u.b)(n,t,o);for(var i=0;i<r.length;i+=1)r[i].m(t,null);e=!0},p:function(n,l){if(517&l){c=n[2],(0,u.y)();for(var f=0;f<r.length;f+=1)r[f].r();r=(0,u.u)(r,l,s,1,n,c,a,t,u.ar,rn,null,on);for(var d=0;d<r.length;d+=1)r[d].a();(0,u.z)()}(!e||33&l&&o!==(o="bn-notify-"+n[0]+" "+n[5]+" svelte-1h8mmo3"))&&(0,u.k)(t,"class",o),(!e||67&l&&i!==(i="".concat(n[0].includes("top")?"justify-content:flex-start;":"","; max-height: calc(100vh - ").concat(n[6].expanded?"412px":n[1]&&"mobile"!==n[7].type?"82px":n[1]||"mobile"!==n[7].type?"24px":"108px",")")))&&(0,u.k)(t,"style",i)},i:function(n){if(!e){for(var t=0;t<c.length;t+=1)(0,u.x)(r[t]);e=!0}},o:function(n){for(var t=0;t<r.length;t+=1)(0,u.A)(r[t]);e=!1},d:function(n){n&&(0,u.d)(t);for(var o=0;o<r.length;o+=1)r[o].d()}}}function rn(n,t){var o,i,e,r,a,c,s,l,f,d,v=u.n;return i=new nn({props:{notification:t[12],updateParentOnRemove:t[9]}}),{key:n,first:null,c:function(){o=(0,u.j)("li"),(0,u.F)(i.$$.fragment),e=(0,u.G)(),(0,u.k)(o,"class",r=(0,u.l)("bn-notify-li-".concat(t[0]," ").concat(t[0].includes("top")?"notification-list-top":"notification-list-bottom"))+" svelte-1h8mmo3"),this.first=o},m:function(n,r){(0,u.b)(n,o,r),(0,u.I)(i,o,null),(0,u.m)(o,e),l=!0,f||(d=(0,u.p)(o,"click",(0,u.J)(t[10])),f=!0)},p:function(n,e){t=n;var a={};4&e&&(a.notification=t[12]),i.$set(a),(!l||1&e&&r!==(r=(0,u.l)("bn-notify-li-".concat(t[0]," ").concat(t[0].includes("top")?"notification-list-top":"notification-list-bottom"))+" svelte-1h8mmo3"))&&(0,u.k)(o,"class",r)},r:function(){s=o.getBoundingClientRect()},f:function(){(0,u.ao)(o),v(),(0,u.ap)(o,s)},a:function(){v(),v=(0,u.aq)(o,s,b,{duration:500})},i:function(n){l||((0,u.x)(i.$$.fragment,n),(0,u.U)((function(){c&&c.end(1),(a=(0,u.V)(o,u.a3,{duration:1200,delay:300,x:t[3],y:t[4],easing:cn})).start()})),l=!0)},o:function(n){(0,u.A)(i.$$.fragment,n),a&&a.invalidate(),c=(0,u.ac)(o,u.X,{duration:300,easing:u.ae}),l=!1},d:function(n){n&&(0,u.d)(o),(0,u.K)(i),n&&c&&c.end(),f=!1,d()}}}function an(n){var t,o,i=n[2].length&&en(n);return{c:function(){i&&i.c(),t=(0,u.e)()},m:function(n,e){i&&i.m(n,e),(0,u.b)(n,t,e),o=!0},p:function(n,o){var e=(0,d.Z)(o,1)[0];n[2].length?i?(i.p(n,e),4&e&&(0,u.x)(i,1)):((i=en(n)).c(),(0,u.x)(i,1),i.m(t.parentNode,t)):i&&((0,u.y)(),(0,u.A)(i,1,1,(function(){i=null})),(0,u.z)())},i:function(n){o||((0,u.x)(i),o=!0)},o:function(n){(0,u.A)(i),o=!1},d:function(n){i&&i.d(n),n&&(0,u.d)(t)}}}function cn(n){return Math.sin(-13*(n+1)*Math.PI/2)*Math.pow(2,-35*n)+1}function sn(n,t,o){var i,e=u.a8.device,r=u.a4.select("accountCenter").pipe((0,p.O)(u.a4.get().accountCenter),(0,m.d)(1));(0,u.c)(n,r,(function(n){return o(6,i=n)}));var a,c=t.position,s=t.sharedContainer,l=t.notifications;a=0;var f="y-scroll",d=function(){var n=null;return function(t,o){clearTimeout(n),n=setTimeout(t,o)}}();return n.$$set=function(n){"position"in n&&o(0,c=n.position),"sharedContainer"in n&&o(1,s=n.sharedContainer),"notifications"in n&&o(2,l=n.notifications)},n.$$.update=function(){1&n.$$.dirty&&(c.includes("top")?o(4,a=-50):o(4,a=50))},[c,s,l,0,a,f,i,e,r,function(){"y-visible"!==f&&o(5,f="y-visible"),d((function(){o(5,f="y-scroll")}),1e3)},function(t){u.a9.call(this,n,t)}]}var ln=function(n){(0,l.Z)(o,n);var t=(0,f.Z)(o);function o(n){var i;return(0,c.Z)(this,o),i=t.call(this),(0,u.i)((0,s.Z)(i),n,sn,an,u.s,{position:0,sharedContainer:1,notifications:2},tn),i}return(0,a.Z)(o)}(u.S)}}]);
//# sourceMappingURL=3761.a7bf4d84.chunk.js.map