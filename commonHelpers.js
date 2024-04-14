import{a as b,i as c,S as v}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w="43226566-fed9ea78cdf96918d4e965adc",M="https://pixabay.com/api/";async function f(a="",r,s){const i=new URLSearchParams({per_page:s,page:r,key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),{data:e}=await b.get(`${M}?${i}`);return e}function m(a){return a.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:o,comments:n,downloads:L})=>`<li class="card">
        <a href="${s}">
          <img src="${r}" alt="${i}" width="360" height="152"/>
        </a>
        <ul class="list-stat">
          <li class="item">
            <h2 class="title">likes</h2>
            <p class="stat">${e}</p>
          </li>
          <li class="item">
            <h2 class="title">Views</h2>
            <p class="stat">${o}</p>
          </li>
          <li class="item">
            <h2 class="title">Comments</h2>
            <p class="stat">${n}</p>
          </li>
          <li class="item">
            <h2 class="title">Downloads</h2>
            <p class="stat">${L}</p>
          </li>
        </ul>
      </li>`).join("")}const t={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),btnLoadMore:document.querySelector(".btn-load-more"),loader:document.querySelector(".loader"),card:document.querySelector(".card")};let l,d=1,u=15;t.form.addEventListener("submit",P);t.btnLoadMore.addEventListener("click",S);async function P(a){a.preventDefault();const{text:r}=a.currentTarget.elements;if(l=r.value.trim(),l==="")return c.warning({color:"#fc6e51",message:"Field is empty!",position:"topCenter"});t.gallery.innerHTML="";try{const{hits:s}=await f(l,d=29,u);if(s.length===0){c.warning({color:"#fc6e51",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),y();return}h(),t.gallery.insertAdjacentHTML("beforeend",m(s)),g(),p.refresh()}catch(s){c.error({color:"red",message:`${s}`,position:"topCenter"})}finally{t.form.reset()}}async function S(a){d+=1,h();try{const{hits:r,totalHits:s}=await f(l,d,u);if(Math.ceil(s/u)===d){c.warning({color:"#fc6e51",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}),y();return}t.gallery.insertAdjacentHTML("beforeend",m(r)),g();let e=t.card.getBoundingClientRect();p.refresh()}catch(r){c.error({color:"red",message:`${r}`,position:"topCenter"})}finally{t.form.reset()}}const p=new v(".card a",{captionsData:"alt",captionDelay:250,captionPosition:"outside"});function h(){t.loader.classList.remove("is-active"),t.btnLoadMore.classList.add("is-active")}function g(){t.loader.classList.add("is-active"),t.btnLoadMore.classList.remove("is-active")}function y(){t.btnLoadMore.classList.add("is-active"),t.loader.classList.add("is-active")}
//# sourceMappingURL=commonHelpers.js.map
