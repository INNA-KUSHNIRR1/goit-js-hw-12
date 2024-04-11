import{a as c,i as u,S as p}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="43226566-fed9ea78cdf96918d4e965adc",f="https://pixabay.com/api/";let d=15,h=2;async function g(o=""){const s=new URLSearchParams({per_page:d,page:h,key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await c.get(`${f}?${s}`)).data}function y(o){return o.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:a,downloads:l})=>`<li class="card">
        <a href="${r}">
          <img src="${s}" alt="${n}" width="360" height="152"/>
        </a>
        <ul class="list-stat">
          <li class="item">
            <h2 class="title">likes</h2>
            <p class="stat">${e}</p>
          </li>
          <li class="item">
            <h2 class="title">Views</h2>
            <p class="stat">${t}</p>
          </li>
          <li class="item">
            <h2 class="title">Comments</h2>
            <p class="stat">${a}</p>
          </li>
          <li class="item">
            <h2 class="title">Downloads</h2>
            <p class="stat">${l}</p>
          </li>
        </ul>
      </li>`).join("")}const i={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),btnLoadMore:document.querySelector('button[type="button"]')};i.form.addEventListener("submit",L);function L(o){o.preventDefault(),i.gallery.innerHTML='<span class="loader"></span>';const{text:s}=o.currentTarget.elements;g(s.value.trim()).then(r=>{r.hits.length===0&&u.warning({color:"#fc6e51",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),i.gallery.innerHTML=y(r.hits),i.btnLoadMore.classList.remove("is-active"),b.refresh(),i.form.reset()}).catch(r=>{alert(r)})}const b=new p(".card a",{captionsData:"alt",captionDelay:250,captionPosition:"outside"});
//# sourceMappingURL=commonHelpers.js.map
