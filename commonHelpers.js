import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(o){if(o.ep)return;o.ep=!0;const t=e(o);fetch(o.href,t)}})();function d(){const r=h.value.trim().split(",").join("+"),s=new URLSearchParams({key:"43219571-0a26e2304ee50d7f75a2b614a",q:[r],image_type:"photo",orientation:"horizontal",safesearch:!0});return y(),fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return response.json()})}function f(r){if(r.length==0)a.error({theme:"dark",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",position:"topRight"});else{const s=r.map(e=>`<li class="photos-list-item">
            <a class="photos-list-link" href="${e.largeImageURL}">
            <img class="photo" src="${e.webformatURL}" alt="${e.tags}"/>
            </a>
            <ul class="photo-information-container">
            <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${e.likes}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${e.views}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${e.comments}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${e.downloads}</p></li>
            </ul>
            </li>`).join("");m.insertAdjacentHTML("beforeend",s),g.refresh()}}const i=document.querySelector(".search-form"),h=i.elements.search,m=document.querySelector(".gallery"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".loader");l.style.display="none";const y=()=>{l.style.display="flex"},p=()=>{l.style.display="none"};i.addEventListener("submit",b);function b(r){r.preventDefault(),m.innerHTML="",r.target.elements.search.value.trim()!==""?(window.onload=()=>{d().then(e=>{f(e.hits),p()}).catch(e=>{console.log(e),p(),a.error({theme:"dark",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",message:"Sorry, an error occurred while loading. Please try again!",messageColor:"#FAFAFB",position:"topRight"})})},window.onload(),i.reset()):a.show({theme:"dark",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",message:"Please complete the field!",messageColor:"#FAFAFB",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map