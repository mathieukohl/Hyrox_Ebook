if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),a={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-88524fa1"],(function(e){"use strict";e.enable(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/index-Do9DHCms.js",revision:null},{url:"assets/index.FYEtKd4f.css",revision:null},{url:"assets/index9-BKSp17e-.js",revision:null},{url:"assets/input-shims-B9GRlKGN.js",revision:null},{url:"assets/ios.transition-d6NSsFkG.js",revision:null},{url:"assets/keyboard2-Rx5A38p7.js",revision:null},{url:"assets/md.transition-DFC44it9.js",revision:null},{url:"assets/status-tap-CDGEKghi.js",revision:null},{url:"assets/swipe-back-KNaq2CqD.js",revision:null},{url:"index.html",revision:"75a2686ea648855ae3cfc60bf90143ee"},{url:"pwa-192x192.png",revision:"742789897727358511c2bacd0fee3949"},{url:"pwa-512x512.png",revision:"bdf439756e7255aebcd7b2bebe1aafad"},{url:"registerSW.js",revision:"7536a0aed69e72aa2f0095944678fe5e"},{url:"pwa-192x192.png",revision:"742789897727358511c2bacd0fee3949"},{url:"pwa-512x512.png",revision:"bdf439756e7255aebcd7b2bebe1aafad"},{url:"manifest.webmanifest",revision:"f23e9492619f9b9b816c5b450fdfad41"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/Hyrox_Ebook/index.html"),{denylist:[/^\/api/]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
