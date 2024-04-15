import{a as b,i as c,S as v}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const w="43226566-fed9ea78cdf96918d4e965adc",M="https://pixabay.com/api/";async function p(i="",t,s){const a=new URLSearchParams({per_page:s,page:t,key:w,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),{data:e}=await b.get(`${M}?${a}`);return e}function f(i){return i.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:L})=>`<li class="card">
        <a href="${s}">
          <img src="${t}" alt="${a}" width="360" height="152"/>
        </a>
        <ul class="list-stat">
          <li class="item">
            <h2 class="title">likes</h2>
            <p class="stat">${e}</p>
          </li>
          <li class="item">
            <h2 class="title">Views</h2>
            <p class="stat">${r}</p>
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
      </li>`).join("")}const o={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),btnLoadMore:document.querySelector(".btn-load-more"),loader:document.querySelector(".loader")};let l,d=1,u=15;o.form.addEventListener("submit",S);o.btnLoadMore.addEventListener("click",$);async function S(i){i.preventDefault(),h(),o.gallery.innerHTML="";const{text:t}=i.currentTarget.elements;if(l=t.value.trim(),l==="")return c.warning({color:"#fc6e51",message:"Field is empty!",position:"topCenter"});try{const{hits:s}=await p(l,d=1,u);if(s.length===0){c.warning({color:"#fc6e51",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),y();return}o.gallery.insertAdjacentHTML("beforeend",f(s)),m.refresh(),g()}catch(s){c.error({color:"red",message:`${s}`,position:"topCenter"})}finally{o.form.reset()}}async function $(i){h(),d+=1;try{const{hits:t,totalHits:s}=await p(l,d,u),a=Math.ceil(s/u);if(d===a){const e=s-(a-1)*u,r=t.slice(0,e);return o.gallery.insertAdjacentHTML("beforeend",f(r)),m.refresh(),y(),c.warning({color:"#fc6e51",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})}o.gallery.insertAdjacentHTML("beforeend",f(t)),m.refresh(),g(),P()}catch(t){c.error({color:"red",message:`${t}`,position:"topCenter"})}finally{o.form.reset()}}const m=new v(".card a",{captionsData:"alt",captionDelay:250,captionPosition:"outside"});function h(){o.loader.classList.remove("is-active"),o.btnLoadMore.classList.add("is-active")}function g(){o.loader.classList.add("is-active"),o.btnLoadMore.classList.remove("is-active")}function y(){o.btnLoadMore.classList.add("is-active"),o.loader.classList.add("is-active")}function P(){const t=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({left:0,top:t*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
