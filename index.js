import{S as b,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const w="https://pixabay.com/api/",L="47417091-7b1b728bfc28f8d5b77701890";async function y(t,r=1,n=12){const s=`${w}?key=${L}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{const e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}function g(t){return t.map(({webformatURL:r,largeImageURL:n,tags:s,likes:e,views:o,comments:a,downloads:h})=>`
        <a href="${n}" class="gallery-item" title="${s}">
            <img src="${r}" alt="${s}" loading="lazy">
            <div class="info">
                <p><b>Likes:</b> ${e}</p>
                <p><b>Views:</b> ${o}</p>
                <p><b>Comments:</b> ${a}</p>
                <p><b>Downloads:</b> ${h}</p>
            </div>
        </a>
    `).join("")}function $(t){t.innerHTML=""}function c(t,r){t.style.display=r?"block":"none"}const m=document.querySelector("#search-form"),d=document.querySelector(".gallery"),i=document.querySelector(".loader");let p=new b(".gallery a"),u=1,f="";m.addEventListener("submit",async t=>{t.preventDefault();const r=m.elements.searchQuery.value.trim();if(!r){l.error({title:"Error",message:"Please enter a search term!"});return}f=r,u=1,$(d),c(i,!0);try{const n=await y(f,u);if(n.hits.length===0){l.warning({title:"No Results",message:"No images found. Try another keyword!"});return}const s=g(n.hits);d.insertAdjacentHTML("beforeend",s),p.refresh()}catch{l.error({title:"Error",message:"Failed to load images. Please try again!"})}finally{c(i,!1)}});d.addEventListener("click",t=>{if(t.target.tagName==="IMG"){const n=t.target.closest(".gallery-item").querySelector(".image-title");n.style.display="block"}});window.addEventListener("scroll",async()=>{if(window.innerHeight+window.scrollY>=document.body.offsetHeight-500&&!i.style.display){u+=1,c(i,!0);try{const t=await y(f,u),r=g(t.hits);d.insertAdjacentHTML("beforeend",r),p.refresh()}catch{l.error({title:"Error",message:"Failed to load more images!"})}finally{c(i,!1)}}});
//# sourceMappingURL=index.js.map