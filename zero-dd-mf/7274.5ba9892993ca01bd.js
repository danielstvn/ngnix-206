(self.webpackChunkzero_dd_mf=self.webpackChunkzero_dd_mf||[]).push([[7274],{9764:(B,d,p)=>{p.r(d),p.d(d,{Panel:()=>D,PanelModule:()=>S});var e=p(45449),s=p(90944),c=p(60859),g=p(61711),o=p(37340);function _(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"span",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275attribute("id",t.id+"_header"),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.header)}}function u(n,l){1&n&&e.\u0275\u0275elementContainer(0)}function m(n,l){}function h(n,l){1&n&&e.\u0275\u0275template(0,m,0,0,"ng-template")}function f(n,l){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",11),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.onIconClick(r))})("keydown.enter",function(r){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.onIconClick(r))}),e.\u0275\u0275element(1,"span"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275attribute("aria-label","collapse button")("id",t.id+"-label")("aria-controls",t.id+"-content")("aria-expanded",!t.collapsed),e.\u0275\u0275advance(1),e.\u0275\u0275classMap(t.collapsed?t.expandIcon:t.collapseIcon)}}const v=function(n,l,t){return{"p-panel-icons-start":n,"p-panel-icons-end":l,"p-panel-icons-center":t}};function T(n,l){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",6),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.onHeaderClick(r))}),e.\u0275\u0275template(1,_,2,2,"span",7),e.\u0275\u0275projection(2,1),e.\u0275\u0275template(3,u,1,0,"ng-container",4),e.\u0275\u0275elementStart(4,"div",8),e.\u0275\u0275template(5,h,1,0,null,4),e.\u0275\u0275template(6,f,2,6,"button",9),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275attribute("id",t.id+"-titlebar"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.header),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngTemplateOutlet",t.headerTemplate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(6,v,"start"===t.iconPos,"end"===t.iconPos,"center"===t.iconPos)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t.iconTemplate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.toggleable)}}function b(n,l){1&n&&e.\u0275\u0275elementContainer(0)}function y(n,l){1&n&&e.\u0275\u0275elementContainer(0)}function C(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div",12),e.\u0275\u0275projection(1,2),e.\u0275\u0275template(2,y,1,0,"ng-container",4),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngTemplateOutlet",t.footerTemplate)}}const P=["*",[["p-header"]],[["p-footer"]]],E=function(n,l){return{"p-panel p-component":!0,"p-panel-toggleable":n,"p-panel-expanded":l}},I=function(n){return{transitionParams:n,height:"0",opacity:"0"}},M=function(n){return{value:"hidden",params:n}},k=function(n){return{transitionParams:n,height:"*",opacity:"1"}},x=function(n){return{value:"visible",params:n}},w=["*","p-header","p-footer"];let O=0,D=(()=>{class n{constructor(t){this.el=t,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new e.EventEmitter,this.onBeforeToggle=new e.EventEmitter,this.onAfterToggle=new e.EventEmitter,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+O++}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":default:this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;case"icons":this.iconTemplate=t.template}})}onHeaderClick(t){"header"===this.toggler&&this.toggle(t)}onIconClick(t){"icon"===this.toggler&&this.toggle(t)}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(t):this.collapse(t)),t.preventDefault()}expand(t){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(t){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(t){this.animating=!1,this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.ElementRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-panel"]],contentQueries:function(t,a,r){if(1&t&&(e.\u0275\u0275contentQuery(r,c.Footer,5),e.\u0275\u0275contentQuery(r,c.PrimeTemplate,4)),2&t){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(a.footerFacet=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(a.templates=i)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:w,decls:7,vars:23,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(t,a){1&t&&(e.\u0275\u0275projectionDef(P),e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,T,7,10,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275listener("@panelContent.done",function(i){return a.onToggleDone(i)}),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275projection(4),e.\u0275\u0275template(5,b,1,0,"ng-container",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,C,3,1,"div",5),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275classMap(a.styleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(12,E,a.toggleable,!a.collapsed&&a.toggleable))("ngStyle",a.style),e.\u0275\u0275attribute("id",a.id),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",a.showHeader),e.\u0275\u0275advance(1),e.\u0275\u0275property("@panelContent",a.collapsed?e.\u0275\u0275pureFunction1(17,M,e.\u0275\u0275pureFunction1(15,I,a.animating?a.transitionOptions:"0ms")):e.\u0275\u0275pureFunction1(21,x,e.\u0275\u0275pureFunction1(19,k,a.animating?a.transitionOptions:"0ms"))),e.\u0275\u0275attribute("id",a.id+"-content")("aria-hidden",a.collapsed)("aria-labelledby",a.id+"-titlebar"),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngTemplateOutlet",a.contentTemplate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",a.footerFacet||a.footerTemplate))},dependencies:[s.NgClass,s.NgIf,s.NgTemplateOutlet,s.NgStyle,g.Ripple],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded .p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,o.X$)("panelContent",[(0,o.SB)("hidden",(0,o.oB)({height:"0"})),(0,o.SB)("void",(0,o.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,o.SB)("visible",(0,o.oB)({height:"*"})),(0,o.eR)("visible <=> hidden",[(0,o.jt)("{{transitionParams}}")]),(0,o.eR)("void => hidden",(0,o.jt)("{{transitionParams}}")),(0,o.eR)("void => visible",(0,o.jt)("{{transitionParams}}"))])]},changeDetection:0}),n})(),S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.CommonModule,c.SharedModule,g.RippleModule,c.SharedModule]}),n})()}}]);