import{A as f,S as w,a as b,i as k}from"./assets/vendor-D1x2inJp.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#about-me"),s=document.querySelector("#projects"),n=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),o.textContent.includes("About Me")?e.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Projects")?s.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Contacts")&&n.scrollIntoView({behavior:"smooth"})})})});const x=document.querySelector(".hero-button");x.addEventListener("click",function(e){e.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const j="/svderek-portfolio/assets/project-1-DDSEQAry.jpg",y="/svderek-portfolio/assets/project-12x-CXqOLe9D.jpg",E="/svderek-portfolio/assets/project-2-CnZ2isJx.jpg",L="/svderek-portfolio/assets/project-22x-yOt2G9ZS.jpg",S="/svderek-portfolio/assets/project-3-CBpo9lGd.jpg",I="/svderek-portfolio/assets/project-32x-DzBqeYZt.jpg",A="/svderek-portfolio/assets/project-4-8O6LE6YW.jpg",C="/svderek-portfolio/assets/project-42x-CM03vmRJ.jpg",B="/svderek-portfolio/assets/project-5-9d7B4pnA.jpg",M="/svderek-portfolio/assets/project-52x-D2rCJnjo.jpg",q="/svderek-portfolio/assets/project-6-C1hSzmeH.jpg",J="/svderek-portfolio/assets/project-62x-DCrUwTXX.jpg",P="/svderek-portfolio/assets/project-7-BGE4RsUG.jpg",T="/svderek-portfolio/assets/project-72x-DCVLQ1gE.jpg",D="/svderek-portfolio/assets/project-8-DOlwvTCj.jpg",G="/svderek-portfolio/assets/project-82x-D-BoNZSb.jpg",O="/svderek-portfolio/assets/project-9-C4ztqAgA.jpg",N="/svderek-portfolio/assets/project-92x-DJRCm-Uy.jpg",$="/svderek-portfolio/assets/project-10-7G_bG3ud.jpg",R="/svderek-portfolio/assets/project-102x-BrUkPh2C.jpg",V="/svderek-portfolio/assets/icons-BK_QZYKW.svg",a=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":B,"2x":M}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":C}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":O,"2x":N}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":j,"2x":y}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":E,"2x":L}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":D,"2x":G}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":I}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":q,"2x":J}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":T}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":$,"2x":R}}];let c=0;const H=3,F=document.getElementById("myProjectsList"),p=document.getElementById("load-more-btn");function U(e){return`
    <li class="my-projects-item">
      <div class="image-container">
        <picture>
        <source
          srcset="
            ${e.images["1x"]} 1x,
            ${e.images["2x"]} 2x
          "
          media="(min-width: 320px)"
        />
        <img
          class="my-projects-img"
          src="${e.images["1x"]}"
          alt="${e.title}"
        />
      </picture>
       </div>
      <p class="my-projects-technologies">${e.technologies}</p>
      <div class="my-projects-card-row">
        <h3 class="my-projects-names">${e.title}</h3>
        <a class="my-projects-link" href="${e.link}" target="_blank">
          Visit
          <svg class="icon-arrow" width="24" height="24">
            <use href="${V}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function u(){const e=a.length-c,s=Math.min(H,e);for(let n=0;n<s;n++){const r=U(a[c]);F.insertAdjacentHTML("beforeend",r),c++}c>=a.length&&(p.style.display="none")}p.addEventListener("click",u);u();document.addEventListener("DOMContentLoaded",()=>{new f(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews-list");function s(n){return n.map(({author:r,avatar_url:o,review:t})=>`
        <li class="swiper-slide" id="reviews-list-item">
     <p class="reviews-item-text">${t}</p>
     <div class="img-title-wraper">
            <img class="reviews-item-img"
                 src=${o}
                 alt="image of ${r}"
                 width="40"
                 height="40">
            <h3 class="reviews-item-title">${r}</h3>
          </div>          
        </li>`).join("")}fetch("https://portfolio-js.b.goit.study/api/reviews").then(n=>{if(!n.ok)throw new Error("Not found");return n.json()}).then(n=>{e.insertAdjacentHTML("beforeend",s(n));const r=new w(".swiper-container",{slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#swiper-button-next",prevEl:"#swiper-button-prev"},breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},simulateTouch:!0,autoHeight:!1,on:{init:function(){const i=document.querySelector("#swiper-button-prev");this.isBeginning&&i.classList.add("disabled")},reachBeginning:function(){document.querySelector("#swiper-button-prev").classList.add("disabled")},fromEdge:function(){const i=document.querySelector("#swiper-button-prev"),l=document.querySelector("#swiper-button-next");i.classList.remove("disabled"),l.classList.remove("disabled")},reachEnd:function(){document.querySelector("#swiper-button-next").classList.add("disabled")}}}),o=document.querySelector("#swiper-button-next"),t=document.querySelector("#swiper-button-prev");o.addEventListener("click",()=>{r.slideNext()}),t.addEventListener("click",()=>{r.slidePrev()})}).catch(n=>{e.insertAdjacentHTML("beforeend",`<li>
          <p>${n.message}</p>
        </li>`)})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contactForm"),s=document.querySelector(".wt-popup"),n="https://portfolio-js.b.goit.study/api/requests",r=t=>{if(t){const i=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty("--scrollbar-width",`${i}px`),document.body.classList.add("wt-popup-open"),s.style.display="flex"}else document.body.classList.remove("wt-popup-open"),s.style.display="none",document.documentElement.style.setProperty("--scrollbar-width","0px")};document.querySelector(".wt-close-btn").addEventListener("click",()=>{r(!1)}),window.addEventListener("click",t=>{t.target===s&&r(!1)}),window.addEventListener("keydown",t=>{t.key==="Escape"&&r(!1)}),e.addEventListener("submit",async t=>{t.preventDefault();const i=document.getElementById("email").value,l=document.getElementById("message").value,v={email:i,comment:l};try{if((await b.post(n,v,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)r(!0),e.reset();else throw new Error("Unexpected response status")}catch(d){console.error("Error submitting form:",d),k.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const o=document.getElementById("email");o.addEventListener("input",()=>{const t=o.nextElementSibling.nextElementSibling;o.validity.valid?t.style.display="none":t.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),s=document.querySelector(".menu-icon-close"),n=document.querySelector(".mob-menu"),r=document.querySelectorAll(".mob-nav-link");function o(){n.classList.add("is-open"),e.hidden=!0,s.hidden=!1}function t(){n.classList.remove("is-open"),e.hidden=!1,s.hidden=!0}e==null||e.addEventListener("click",o),s==null||s.addEventListener("click",t),r.forEach(i=>{i.addEventListener("click",t)})});function W(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#E4E5E6"/>
      <circle cx="12" cy="12" r="10" fill="#00B068"/>
    </svg>
  `}function Z(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#292929"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21.1679C35.5318 19.6248 38 16.1006 38 12C38 7.89936 35.5318 4.3752 32 2.83209C33.2249 2.29689 34.5778 2 36 2C41.5228 2 46 6.47715 46 12C46 17.5228 41.5228 22 36 22C34.5778 22 33.2249 21.7031 32 21.1679Z" fill="#00B068"/>
    </svg>
  `}function m(){const e=document.documentElement.getAttribute("data-theme"),s=document.getElementById("themeIcon");s.innerHTML=e==="light"?W():Z()}function z(){const e=document.documentElement;e.getAttribute("data-theme")==="light"?(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(e.setAttribute("data-theme","light"),localStorage.setItem("theme","light")),m()}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme"),s=document.documentElement;e?s.setAttribute("data-theme",e):s.setAttribute("data-theme","light"),m()});document.querySelector("#themeToggleButton").addEventListener("click",z);const _=document.querySelectorAll(".ac-trigger");function g(e){_.forEach(s=>{const n=s.querySelector(".icon-1"),r=s.querySelector(".icon-2");n&&n.remove(),r&&r.remove();const o=e==="dark"?"#F0F0F0":"#292929",t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","icon-1"),t.setAttribute("width","24"),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.innerHTML=`
      <path d="M18 9L12 15L6 9" stroke="${o}" stroke-width="2" stroke-linecap="round" />
    `;const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("class","icon-2"),i.setAttribute("width","24"),i.setAttribute("height","24"),i.setAttribute("viewBox","0 0 24 24"),i.setAttribute("fill","none"),i.innerHTML=`
      <path d="M18 15L12 9L6 15" stroke="${o}" stroke-width="2" stroke-linecap="round" />
    `,s.appendChild(t),s.appendChild(i)})}function h(){return document.documentElement.getAttribute("data-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}const K=new MutationObserver(()=>{const e=h();g(e)});K.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});g(h());
//# sourceMappingURL=index.js.map