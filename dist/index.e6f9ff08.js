const e=document.getElementById("preloader");document.body.onload=void(e.style.opacity="0",e.style.zIndex="-99999",document.body.classList.remove("noScroll"),e.style.visibility="hidden");const t=document.getElementById("navbarNavDropdown"),o=bootstrap.Collapse.getOrCreateInstance(t,{toggle:!1});document.addEventListener("click",e=>{!t.contains(e.target)&&t.classList.contains("show")&&o.toggle()}),document.getElementById("bannerClose").addEventListener("click",e=>{document.getElementById("banner").classList.add("visually-hidden")});let n=document.getElementById("btn-back-to-top");window.onscroll=function(){document.body.scrollTop>1e3||document.documentElement.scrollTop>1e3?(n.style.display="block",document.getElementById("banner").classList.remove("visually-hidden")):n.style.display="none"},n.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0});const d=document.getElementById("sideNav"),l=document.getElementById("overview"),s=document.getElementById("headerNav"),c=l.offsetTop,i=d.offsetWidth;window.addEventListener("scroll",function(){window.scrollY>c?(d.style.position="fixed",d.style.top=s.offsetHeight+48+"px",d.style.width=i+"px"):(d.style.position="static",d.style.top="",d.style.width="auto")});
//# sourceMappingURL=index.e6f9ff08.js.map
