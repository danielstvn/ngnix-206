(self.webpackChunkzero_host_mf=self.webpackChunkzero_host_mf||[]).push([[7319,7919],{37340:(K,C,m)=>{m.d(C,{F4:()=>F,IO:()=>L,LC:()=>p,SB:()=>I,X$:()=>d,ZE:()=>O,ZN:()=>w,_7:()=>S,_j:()=>e,eR:()=>E,jt:()=>h,k1:()=>$,l3:()=>u,oB:()=>v,oQ:()=>T,pV:()=>D,vP:()=>M});class e{}class p{}const u="*";function d(s,a){return{type:7,name:s,definitions:a,options:{}}}function h(s,a=null){return{type:4,styles:a,timings:s}}function M(s,a=null){return{type:2,steps:s,options:a}}function v(s){return{type:6,styles:s,offset:null}}function I(s,a,l){return{type:0,name:s,styles:a,options:l}}function F(s){return{type:5,steps:s}}function E(s,a,l=null){return{type:1,expr:s,animation:a,options:l}}function T(s,a=null){return{type:8,animation:s,options:a}}function D(s=null){return{type:9,options:s}}function S(s,a=null){return{type:10,animation:s,options:a}}function L(s,a,l=null){return{type:11,selector:s,animation:a,options:l}}function b(s){Promise.resolve().then(s)}class w{constructor(a=0,l=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=a+l}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(a=>a()),this._onDoneFns=[])}onStart(a){this._originalOnStartFns.push(a),this._onStartFns.push(a)}onDone(a){this._originalOnDoneFns.push(a),this._onDoneFns.push(a)}onDestroy(a){this._onDestroyFns.push(a)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){b(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(a=>a()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(a=>a()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(a){this._position=this.totalTime?a*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(a){const l="start"==a?this._onStartFns:this._onDoneFns;l.forEach(c=>c()),l.length=0}}class O{constructor(a){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=a;let l=0,c=0,x=0;const y=this.players.length;0==y?b(()=>this._onFinish()):this.players.forEach(g=>{g.onDone(()=>{++l==y&&this._onFinish()}),g.onDestroy(()=>{++c==y&&this._onDestroy()}),g.onStart(()=>{++x==y&&this._onStart()})}),this.totalTime=this.players.reduce((g,P)=>Math.max(g,P.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(a=>a()),this._onDoneFns=[])}init(){this.players.forEach(a=>a.init())}onStart(a){this._onStartFns.push(a)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(a=>a()),this._onStartFns=[])}onDone(a){this._onDoneFns.push(a)}onDestroy(a){this._onDestroyFns.push(a)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(a=>a.play())}pause(){this.players.forEach(a=>a.pause())}restart(){this.players.forEach(a=>a.restart())}finish(){this._onFinish(),this.players.forEach(a=>a.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(a=>a.destroy()),this._onDestroyFns.forEach(a=>a()),this._onDestroyFns=[])}reset(){this.players.forEach(a=>a.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(a){const l=a*this.totalTime;this.players.forEach(c=>{const x=c.totalTime?Math.min(1,l/c.totalTime):1;c.setPosition(x)})}getPosition(){const a=this.players.reduce((l,c)=>null===l||c.totalTime>l.totalTime?c:l,null);return null!=a?a.getPosition():0}beforeDestroy(){this.players.forEach(a=>{a.beforeDestroy&&a.beforeDestroy()})}triggerCallback(a){const l="start"==a?this._onStartFns:this._onDoneFns;l.forEach(c=>c()),l.length=0}}const $="!"},17919:(K,C,m)=>{m.r(C),m.d(C,{BasePanelMenuItem:()=>A,PanelMenu:()=>se,PanelMenuModule:()=>re,PanelMenuSub:()=>U});var e=m(45449),p=m(37340),u=m(90944),d=m(10730),h=m(46785),k=m(41045);function M(n,o){1&n&&e.\u0275\u0275element(0,"li",4)}const v=function(n,o){return{"pi-angle-right":n,"pi-angle-down":o}};function I(n,o){if(1&n&&e.\u0275\u0275element(0,"span",15),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(2,v,!t.expanded,t.expanded))("ngStyle",t.iconStyle)}}function F(n,o){if(1&n&&e.\u0275\u0275element(0,"span",16),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.icon)("ngStyle",t.iconStyle)}}function E(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.label)}}function T(n,o){if(1&n&&e.\u0275\u0275element(0,"span",18),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("innerHTML",t.label,e.\u0275\u0275sanitizeHtml)}}function D(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",19),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.badgeStyleClass),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.badge)}}const S=function(n){return{"p-disabled":n}};function L(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",9),e.\u0275\u0275listener("keydown",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(_.onItemKeyDown(r))})("click",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(2).$implicit,f=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(f.handleClick(r,_))}),e.\u0275\u0275template(1,I,1,5,"span",10),e.\u0275\u0275template(2,F,1,2,"span",11),e.\u0275\u0275template(3,E,2,1,"span",12),e.\u0275\u0275template(4,T,1,1,"ng-template",null,13,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(6,D,2,2,"span",14),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275reference(5),i=e.\u0275\u0275nextContext(2).$implicit,r=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(12,S,i.disabled))("target",i.target),e.\u0275\u0275attribute("href",i.url,e.\u0275\u0275sanitizeUrl)("tabindex",r.item.expanded&&r.parentExpanded&&!i.disabled?"0":null)("id",i.id)("aria-expanded",i.expanded)("title",i.title),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.items),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.icon),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!1!==i.escape)("ngIfElse",t),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.badge)}}function R(n,o){if(1&n&&e.\u0275\u0275element(0,"span",15),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(2,v,!t.expanded,t.expanded))("ngStyle",t.iconStyle)}}function b(n,o){if(1&n&&e.\u0275\u0275element(0,"span",16),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.icon)("ngStyle",t.iconStyle)}}function w(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.label)}}function O(n,o){if(1&n&&e.\u0275\u0275element(0,"span",18),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("innerHTML",t.label,e.\u0275\u0275sanitizeHtml)}}function $(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",19),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.badgeStyleClass),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.badge)}}const s=function(){return{exact:!1}};function a(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",20),e.\u0275\u0275listener("keydown",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(_.onItemKeyDown(r))})("click",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(2).$implicit,f=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(f.handleClick(r,_))}),e.\u0275\u0275template(1,R,1,5,"span",10),e.\u0275\u0275template(2,b,1,2,"span",11),e.\u0275\u0275template(3,w,2,1,"span",12),e.\u0275\u0275template(4,O,1,1,"ng-template",null,21,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(6,$,2,2,"span",14),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275reference(5),i=e.\u0275\u0275nextContext(2).$implicit,r=e.\u0275\u0275nextContext();e.\u0275\u0275property("routerLink",i.routerLink)("queryParams",i.queryParams)("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",i.routerLinkActiveOptions||e.\u0275\u0275pureFunction0(21,s))("ngClass",e.\u0275\u0275pureFunction1(22,S,i.disabled))("target",i.target)("fragment",i.fragment)("queryParamsHandling",i.queryParamsHandling)("preserveFragment",i.preserveFragment)("skipLocationChange",i.skipLocationChange)("replaceUrl",i.replaceUrl)("state",i.state),e.\u0275\u0275attribute("tabindex",r.item.expanded&&r.parentExpanded&&!i.disabled?"0":null)("id",i.id)("aria-expanded",i.expanded)("title",i.title),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.items),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.icon),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!1!==i.escape)("ngIfElse",t),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.badge)}}function l(n,o){if(1&n&&e.\u0275\u0275element(0,"p-panelMenuSub",22),2&n){const t=e.\u0275\u0275nextContext(2).$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("item",t)("parentExpanded",i.expanded&&i.parentExpanded)("expanded",t.expanded)("transitionOptions",i.transitionOptions)}}function c(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"li",5),e.\u0275\u0275template(1,L,7,14,"a",6),e.\u0275\u0275template(2,a,7,24,"a",7),e.\u0275\u0275template(3,l,1,4,"p-panelMenuSub",8),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275classProp("p-hidden",!1===t.visible),e.\u0275\u0275property("ngClass",t.styleClass)("ngStyle",t.style)("tooltipOptions",t.tooltipOptions),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.routerLink),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.routerLink),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.items)}}function x(n,o){if(1&n&&(e.\u0275\u0275template(0,M,1,0,"li",2),e.\u0275\u0275template(1,c,4,8,"li",3)),2&n){const t=o.$implicit;e.\u0275\u0275property("ngIf",t.separator),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.separator)}}const y=function(n,o){return{"p-submenu-list":!0,"p-panelmenu-root-submenu":n,"p-submenu-expanded":o}},g=function(n){return{transitionParams:n,height:"*"}},P=function(n){return{value:"visible",params:n}},V=function(n){return{transitionParams:n,height:"0"}},H=function(n){return{value:"hidden",params:n}},B=function(n,o){return{"pi-chevron-right":n,"pi-chevron-down":o}};function q(n,o){if(1&n&&e.\u0275\u0275element(0,"span",14),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(1,B,!t.expanded,t.expanded))}}function N(n,o){if(1&n&&e.\u0275\u0275element(0,"span",15),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.icon)("ngStyle",t.iconStyle)}}function j(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",16),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.label)}}function z(n,o){if(1&n&&e.\u0275\u0275element(0,"span",17),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("innerHTML",t.label,e.\u0275\u0275sanitizeHtml)}}function W(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",18),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.badgeStyleClass),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.badge)}}function X(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",8),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(2).$implicit,f=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(f.handleClick(r,_))})("keydown",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(_.onItemKeyDown(r))}),e.\u0275\u0275template(1,q,1,4,"span",9),e.\u0275\u0275template(2,N,1,2,"span",10),e.\u0275\u0275template(3,j,2,1,"span",11),e.\u0275\u0275template(4,z,1,1,"ng-template",null,12,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(6,W,2,2,"span",13),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275reference(5),i=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("target",i.target),e.\u0275\u0275attribute("href",i.url,e.\u0275\u0275sanitizeUrl)("tabindex",i.disabled?null:"0")("id",i.id)("title",i.title)("aria-expanded",i.expanded)("id",i.id+"_header")("aria-controls",i.id+"_content"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.items),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.icon),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!1!==i.escape)("ngIfElse",t),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.badge)}}function Y(n,o){if(1&n&&e.\u0275\u0275element(0,"span",14),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(1,B,!t.expanded,t.expanded))}}function Z(n,o){if(1&n&&e.\u0275\u0275element(0,"span",15),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.icon)("ngStyle",t.iconStyle)}}function G(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",16),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.label)}}function Q(n,o){if(1&n&&e.\u0275\u0275element(0,"span",17),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("innerHTML",t.label,e.\u0275\u0275sanitizeHtml)}}function J(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"span",18),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3).$implicit;e.\u0275\u0275property("ngClass",t.badgeStyleClass),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.badge)}}function ee(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",19),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(2).$implicit,f=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(f.handleClick(r,_))})("keydown",function(r){e.\u0275\u0275restoreView(t);const _=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(_.onItemKeyDown(r))}),e.\u0275\u0275template(1,Y,1,4,"span",9),e.\u0275\u0275template(2,Z,1,2,"span",10),e.\u0275\u0275template(3,G,2,1,"span",11),e.\u0275\u0275template(4,Q,1,1,"ng-template",null,20,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(6,J,2,2,"span",13),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275reference(5),i=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("routerLink",i.routerLink)("queryParams",i.queryParams)("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",i.routerLinkActiveOptions||e.\u0275\u0275pureFunction0(19,s))("target",i.target)("fragment",i.fragment)("queryParamsHandling",i.queryParamsHandling)("preserveFragment",i.preserveFragment)("skipLocationChange",i.skipLocationChange)("replaceUrl",i.replaceUrl)("state",i.state),e.\u0275\u0275attribute("title",i.title)("id",i.id)("tabindex",i.disabled?null:"0"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.items),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.icon),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!1!==i.escape)("ngIfElse",t),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.badge)}}const te=function(n){return{"p-panelmenu-expanded":n}};function ne(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",21),e.\u0275\u0275listener("@rootItem.done",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.onToggleDone())}),e.\u0275\u0275elementStart(1,"div",22),e.\u0275\u0275element(2,"p-panelMenuSub",23),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(2).$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(9,te,t.expanded))("@rootItem",t.expanded?e.\u0275\u0275pureFunction1(13,P,e.\u0275\u0275pureFunction1(11,g,i.animating?i.transitionOptions:"0ms")):e.\u0275\u0275pureFunction1(17,H,e.\u0275\u0275pureFunction1(15,V,i.transitionOptions))),e.\u0275\u0275advance(1),e.\u0275\u0275attribute("id",t.id+"_content")("aria-labelledby",t.id+"_header"),e.\u0275\u0275advance(1),e.\u0275\u0275property("item",t)("parentExpanded",t.expanded)("expanded",!0)("transitionOptions",i.transitionOptions)("root",!0)}}const ie=function(n,o){return{"p-component p-panelmenu-header":!0,"p-highlight":n,"p-disabled":o}};function ae(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",3)(1,"div",4),e.\u0275\u0275template(2,X,7,13,"a",5),e.\u0275\u0275template(3,ee,7,20,"a",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,ne,3,19,"div",7),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275classMap(t.styleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(8,ie,t.expanded,t.disabled))("ngStyle",t.style)("tooltipOptions",t.tooltipOptions),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.routerLink),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.routerLink),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.items)}}function oe(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,ae,5,11,"div",2),e.\u0275\u0275elementContainerEnd()),2&n){const t=o.$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.visible(t))}}class A{constructor(o){this.ref=o}handleClick(o,t){t.disabled?o.preventDefault():(t.expanded=!t.expanded,this.ref.detectChanges(),!t.url&&!t.routerLink&&o.preventDefault(),t.command&&t.command({originalEvent:o,item:t}))}}let U=(()=>{class n extends A{constructor(t){super(t)}onItemKeyDown(t){let i=t.currentTarget;switch(t.code){case"Space":case"Enter":i&&!k.DomHandler.hasClass(i,"p-disabled")&&i.click(),t.preventDefault()}}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-panelMenuSub"]],hostAttrs:[1,"p-element"],inputs:{item:"item",expanded:"expanded",parentExpanded:"parentExpanded",transitionOptions:"transitionOptions",root:"root"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:14,consts:[["role","tree",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-menu-separator","role","separator",4,"ngIf"],["class","p-menuitem","pTooltip","",3,"ngClass","p-hidden","ngStyle","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menu-separator"],["pTooltip","",1,"p-menuitem",3,"ngClass","ngStyle","tooltipOptions"],["class","p-menuitem-link","role","treeitem",3,"ngClass","target","keydown","click",4,"ngIf"],["class","p-menuitem-link","role","treeitem",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","keydown","click",4,"ngIf"],[3,"item","parentExpanded","expanded","transitionOptions",4,"ngIf"],["role","treeitem",1,"p-menuitem-link",3,"ngClass","target","keydown","click"],["class","p-panelmenu-icon pi pi-fw",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[1,"p-panelmenu-icon","pi","pi-fw",3,"ngClass","ngStyle"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],["role","treeitem",1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","keydown","click"],["htmlRouteLabel",""],[3,"item","parentExpanded","expanded","transitionOptions"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"ul",0),e.\u0275\u0275template(1,x,2,2,"ng-template",1),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(3,y,i.root,i.expanded))("@submenu",i.expanded?e.\u0275\u0275pureFunction1(8,P,e.\u0275\u0275pureFunction1(6,g,i.transitionOptions)):e.\u0275\u0275pureFunction1(12,H,e.\u0275\u0275pureFunction1(10,V,i.transitionOptions))),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",i.item.items))},dependencies:[u.NgClass,u.NgForOf,u.NgIf,u.NgStyle,d.RouterLinkWithHref,d.RouterLinkActive,h.Tooltip,n],encapsulation:2,data:{animation:[(0,p.X$)("submenu",[(0,p.SB)("hidden",(0,p.oB)({height:"0"})),(0,p.SB)("visible",(0,p.oB)({height:"*"})),(0,p.eR)("visible <=> hidden",[(0,p.jt)("{{transitionParams}}")]),(0,p.eR)("void => *",(0,p.jt)(0))])]}}),n})(),se=(()=>{class n extends A{constructor(t){super(t),this.multiple=!0,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)"}collapseAll(){for(let t of this.model)t.expanded&&(t.expanded=!1)}handleClick(t,i){if(!this.multiple)for(let r of this.model)i!==r&&r.expanded&&(r.expanded=!1);this.animating=!0,super.handleClick(t,i)}onToggleDone(){this.animating=!1}onItemKeyDown(t){let i=t.currentTarget;switch(t.code){case"Space":case"Enter":i&&!k.DomHandler.hasClass(i,"p-disabled")&&i.click(),t.preventDefault()}}visible(t){return!1!==t.visible}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-panelMenu"]],hostAttrs:[1,"p-element"],inputs:{model:"model",style:"style",styleClass:"styleClass",multiple:"multiple",transitionOptions:"transitionOptions"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:5,consts:[[3,"ngStyle","ngClass"],[4,"ngFor","ngForOf"],["class","p-panelmenu-panel",4,"ngIf"],[1,"p-panelmenu-panel"],["pTooltip","",3,"ngClass","ngStyle","tooltipOptions"],["class","p-panelmenu-header-link",3,"target","click","keydown",4,"ngIf"],["class","p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown",4,"ngIf"],["class","p-toggleable-content",3,"ngClass",4,"ngIf"],[1,"p-panelmenu-header-link",3,"target","click","keydown"],["class","p-panelmenu-icon pi",3,"ngClass",4,"ngIf"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["htmlLabel",""],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[1,"p-panelmenu-icon","pi",3,"ngClass"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown"],["htmlRouteLabel",""],[1,"p-toggleable-content",3,"ngClass"],["role","region",1,"p-panelmenu-content"],[3,"item","parentExpanded","expanded","transitionOptions","root"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,oe,2,1,"ng-container",1),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275classMap(i.styleClass),e.\u0275\u0275property("ngStyle",i.style)("ngClass","p-panelmenu p-component"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",i.model))},dependencies:[u.NgClass,u.NgForOf,u.NgIf,u.NgStyle,d.RouterLinkWithHref,d.RouterLinkActive,h.Tooltip,U],styles:[".p-panelmenu .p-panelmenu-header-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,p.X$)("rootItem",[(0,p.SB)("hidden",(0,p.oB)({height:"0"})),(0,p.SB)("visible",(0,p.oB)({height:"*"})),(0,p.eR)("visible <=> hidden",[(0,p.jt)("{{transitionParams}}")]),(0,p.eR)("void => *",(0,p.jt)(0))])]},changeDetection:0}),n})(),re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[u.CommonModule,d.RouterModule,h.TooltipModule,d.RouterModule,h.TooltipModule]}),n})()}}]);