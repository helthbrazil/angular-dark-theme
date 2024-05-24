import"./chunk-FQ5VONZ2.js";import"./chunk-PSGCAGRK.js";import{A as j,B as x,C as d,G as M,H as p,I as r,J as l,K as s,L as R,M as a,N as F,O as V,P as D,Q as C,W as u,X as k,Y as E,Z as I,c as y,ea as L,fa as g,ha as z,ia as A,j as w,ja as B,ka as H,la as N,ma as G,na as Q,o as m,oa as q,q as O,r as S,t as f,u as v,w as P,x as T}from"./chunk-HLPAVWY2.js";var J=[{path:"",redirectTo:"/gallery",pathMatch:"full"},{path:"gallery",loadChildren:()=>import("./chunk-F2PDLBKW.js").then(t=>t.GalleryModule)},{path:"settings",loadChildren:()=>import("./chunk-CFK5YUL6.js").then(t=>t.SettingsModule)},{path:"land-page",loadChildren:()=>import("./chunk-4EJK2S7G.js").then(t=>t.LandPageModule)},{path:"chat-gpt",loadChildren:()=>import("./chunk-H7VNS7IJ.js").then(t=>t.ChatGtpModule)},{path:"not-found",loadChildren:()=>import("./chunk-TGXYQTJP.js").then(t=>t.NotFoundModule)},{path:"**",redirectTo:"not-found"}];var K={providers:[Q(J),S(z)]};var U=(()=>{let e=class e{constructor(){this.darkTheme=!1}ngOnInit(){this.loadTheme()}loadTheme(){let i=localStorage.getItem("theme");this.darkTheme=i==="dark",this.applyTheme()}applyTheme(){let i=this.darkTheme?"dark-theme":"";this.setBodyClassName(i)}toggleTheme(){this.darkTheme=!this.darkTheme,this.applyTheme(),localStorage.setItem("theme",this.darkTheme?"dark":"light")}setBodyClassName(i){document.body.className=i}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["neo-toggle-theme"]],standalone:!0,features:[u],decls:5,vars:4,consts:[[1,"pointer",3,"click"],[1,"toggle-handler"],[1,"toggle"],["src","assets/images/sun.png","width","20","alt",""],["src","assets/images/moon.png","width","20","alt",""]],template:function(n,o){n&1&&(r(0,"div",0),a("click",function(){return o.toggleTheme()}),s(1,"div",1),r(2,"div",2),s(3,"img",3)(4,"img",4),l()()),n&2&&(x(),p("dark",!o.darkTheme)("light",o.darkTheme))},dependencies:[g],styles:[".toggle[_ngcontent-%COMP%]{position:relative;width:60px;height:30px;background-color:transparent;border:3px var(--bg-inverse) solid;border-radius:15px;padding:0 5px;display:flex;justify-content:space-between;align-items:center}.toggle-handler[_ngcontent-%COMP%]{z-index:99;position:absolute;margin-top:5px;width:25px;height:25px;background-color:var(--bg-inverse);border-radius:50%;cursor:pointer}.toggle-handler.light[_ngcontent-%COMP%]{margin-left:5px;transition-duration:var(--duration-animation);transition-timing-function:ease-out}.toggle-handler.dark[_ngcontent-%COMP%]{margin-left:45px;transition-duration:var(--duration-animation);transition-timing-function:ease-out}@media (max-width: 600px){.toggle[_ngcontent-%COMP%]{width:45px;height:30px}.toggle-handler[_ngcontent-%COMP%]{margin-top:7px;width:20px;height:20px}.toggle-handler.light[_ngcontent-%COMP%]{margin-left:5px}.toggle-handler.dark[_ngcontent-%COMP%]{margin-left:36px}.toggle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px}}"]});let t=e;return t})();var _=(()=>{let e=class e{constructor(){this.menuOpenSubject=new y(!1)}openMenu(){this.menuOpenSubject.next(!0)}closeMenu(){this.menuOpenSubject.next(!1)}toggleMenu(){let i=this.menuOpenSubject.getValue();this.menuOpenSubject.next(!i)}getMenuStatus(){return this.menuOpenSubject.asObservable()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var X=(()=>{let e=class e{constructor(i){this.menuService=i}toggleMenu(){this.menuService.toggleMenu()}};e.\u0275fac=function(n){return new(n||e)(d(_))},e.\u0275cmp=m({type:e,selectors:[["neo-toolbar"]],standalone:!0,features:[u],decls:4,vars:0,consts:[[1,"toolbar"],[1,"flex-menu",3,"click"],["src","assets/images/menu.png","width","25","height","25","alt","",1,"icon","zoom","pointer"]],template:function(n,o){n&1&&(r(0,"div",0)(1,"div",1),a("click",function(){return o.toggleMenu()}),s(2,"img",2),l(),s(3,"neo-toggle-theme"),l())},dependencies:[g,U],styles:[".toolbar[_ngcontent-%COMP%]{z-index:99;display:flex;justify-content:space-between;align-items:center;position:fixed;background-color:var(--bg-strong);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);top:0;left:0;width:100%;padding:10px 20px;box-sizing:border-box;box-shadow:0 2px 4px #0000001a;transition:box-shadow .3s ease}.flex-menu[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;justify-content:center;margin-left:-10px;align-items:center;gap:30px}.icon-theme[_ngcontent-%COMP%]{cursor:pointer;transition-duration:3s}.icon-theme[_ngcontent-%COMP%]   .flip[_ngcontent-%COMP%]{transform:rotate(180deg);transition-duration:3s}"]});let t=e;return t})();var Y=(()=>{let e=class e{constructor(i){this.elementRef=i,this.clickOutside=new T}onClick(i){this.elementRef.nativeElement.contains(i)||this.clickOutside.emit()}};e.\u0275fac=function(n){return new(n||e)(d(P))},e.\u0275dir=O({type:e,selectors:[["","neoClickOutside",""]],hostBindings:function(n,o){n&1&&a("click",function(h){return o.onClick(h.target)},!1,j)},outputs:{clickOutside:"clickOutside"},standalone:!0});let t=e;return t})();var te=["sideMenu"],ie=()=>["/gallery"],ne=()=>["/dashboard"],oe=()=>["/chat-gpt"],re=()=>["/settings"],Z=(()=>{let e=class e{constructor(i,n,o){this.menuService=i,this.router=n,this.route=o,this.showMenu=!1}ngOnInit(){this.menuService.getMenuStatus().subscribe(i=>{this.showMenu=i})}toggleMenu(){this.menuService.toggleMenu()}isRouteActive(i){return this.router.url.toLowerCase().includes(i.toLowerCase())}clickOutside(i){if(this.sideMenu){let n=this.sideMenu.nativeElement,o=window.getComputedStyle(n).marginLeft}}};e.\u0275fac=function(n){return new(n||e)(d(_),d(N),d(B))},e.\u0275cmp=m({type:e,selectors:[["neo-side-menu"]],viewQuery:function(n,o){if(n&1&&F(te,5),n&2){let c;V(c=D())&&(o.sideMenu=c.first)}},standalone:!0,features:[u],decls:25,vars:20,consts:[["sideMenu",""],["neoClickOutside","",1,"side-menu",3,"clickOutside"],[2,"display","flex","justify-content","space-between","align-items","center","padding","0 5px"],[1,"avatar","pointer","zoom"],["src","https://i.pravatar.cc/50","alt",""],[1,"close",3,"click"],["src","assets/images/close.png","width","15","height","15","alt","",1,"icon","pointer","zoom"],[1,"itens"],[1,"item-menu",3,"click","routerLink"],["src","assets/images/image-gallery.png","alt","",1,"icon"],["src","assets/images/dashboard.png","alt","",1,"icon"],["src","assets/images/chat-gpt.png","alt","",1,"icon"],["src","assets/images/settings.png","alt","",1,"icon"]],template:function(n,o){if(n&1){let c=R();r(0,"div",1,0),E(2,"async"),a("clickOutside",function(ee){return f(c),v(o.clickOutside(ee))}),r(3,"div",2)(4,"div",3),s(5,"img",4),l(),r(6,"div",5),a("click",function(){return f(c),v(o.toggleMenu())}),s(7,"img",6),l()(),r(8,"div",7)(9,"div",8),a("click",function(){return f(c),v(o.toggleMenu())}),s(10,"img",9),r(11,"p"),C(12,"Gallery"),l()(),r(13,"div",8),a("click",function(){return f(c),v(o.toggleMenu())}),s(14,"img",10),r(15,"p"),C(16,"Dashboard"),l()(),r(17,"div",8),a("click",function(){return f(c),v(o.toggleMenu())}),s(18,"img",11),r(19,"p"),C(20,"Chat-GPT"),l()(),r(21,"div",8),a("click",function(){return f(c),v(o.toggleMenu())}),s(22,"img",12),r(23,"p"),C(24,"Settings"),l()()()()}n&2&&(p("active",I(2,14,o.menuService.getMenuStatus())),x(9),p("active",o.isRouteActive("gallery")),M("routerLink",k(16,ie)),x(4),p("active",o.isRouteActive("dashboard")),M("routerLink",k(17,ne)),x(4),p("active",o.isRouteActive("chat-gpt")),M("routerLink",k(18,oe)),x(4),p("active",o.isRouteActive("settings")),M("routerLink",k(19,re)))},dependencies:[g,L,Y,q,G],styles:[".side-menu[_ngcontent-%COMP%]{position:fixed;display:flex;flex-direction:column;gap:10px;padding:10px;z-index:100;top:0;left:0;transform:translate(-100%);background-color:var(--bg-strong);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);width:300px;height:100vh;box-sizing:border-box;transition:transform .5s ease;box-shadow:5px 0 15px #0000004d}.itens[_ngcontent-%COMP%]{margin-top:20px}.user-info[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.side-menu.active[_ngcontent-%COMP%]{transform:translate(0);transition:transform .5s ease}.item-menu[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;display:flex;padding:10px;gap:20px;align-items:center;justify-content:flex-start;border-radius:10px;width:100%;height:40px}.item-menu[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:20px;height:20px}.item-menu[_ngcontent-%COMP%]:not(.active):hover{background-image:linear-gradient(to right,var(--bg-strong-2),var(--bg))}.item-menu.active[_ngcontent-%COMP%]{background-image:linear-gradient(to right,var(--primary),var(--bg));font-weight:700;transition:background-image var(--duration-animation)}.close[_ngcontent-%COMP%]{display:flex;width:40px;height:40px;margin-right:-15px;justify-content:center;align-items:center}@media (max-width: 600px){.side-menu[_ngcontent-%COMP%]{-webkit-backdrop-filter:none;backdrop-filter:none;background-color:var(--bg-strong-solid)}.item-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:80px}}"]});let t=e;return t})();var $=(()=>{let e=class e{constructor(){this.title="Neo"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[u],decls:3,vars:0,template:function(n,o){n&1&&s(0,"neo-toolbar")(1,"neo-side-menu")(2,"router-outlet")},dependencies:[g,H,X,Z]});let t=e;return t})();A($,K).catch(t=>console.error(t));
