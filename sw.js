if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/index-CCP4sXjB.js",revision:null},{url:"assets/index-g_Oia1Z4.css",revision:null},{url:"assets/index9-BaBXFDNR.js",revision:null},{url:"assets/input-shims-D1WrJRq0.js",revision:null},{url:"assets/ios.transition-C6dFXGoy.js",revision:null},{url:"assets/keyboard2-CiTHYybZ.js",revision:null},{url:"assets/md.transition-Ca9MEfFv.js",revision:null},{url:"assets/status-tap-Dq3OLOe8.js",revision:null},{url:"assets/swipe-back-BipV2Q9d.js",revision:null},{url:"index.html",revision:"a2671763811b4f9f527522030d096f2c"},{url:"registerSW.js",revision:"7536a0aed69e72aa2f0095944678fe5e"},{url:"manifest.webmanifest",revision:"20bccba00f5498ffe53c7bc7cc00a773"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
