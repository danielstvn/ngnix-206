(self.webpackChunkzero_dd_mf=self.webpackChunkzero_dd_mf||[]).push([[5303],{23214:(L,m,l)=>{l.r(m),l.d(m,{Sidebar:()=>w,SidebarModule:()=>I});var e=l(45449),r=l(37340),d=l(90944),h=l(61711),p=l(41045),b=l(60859),c=l(37524);function u(i,n){1&i&&e.\u0275\u0275elementContainer(0)}function f(i,n){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",8),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.close(o))})("keydown.enter",function(o){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.close(o))}),e.\u0275\u0275element(1,"span",9),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275attribute("aria-label",t.ariaCloseLabel)}}function _(i,n){1&i&&e.\u0275\u0275elementContainer(0)}function g(i,n){1&i&&e.\u0275\u0275elementContainer(0)}const v=function(i,n,t,s,o,a){return{"p-sidebar":!0,"p-sidebar-active":i,"p-sidebar-left":n,"p-sidebar-right":t,"p-sidebar-top":s,"p-sidebar-bottom":o,"p-sidebar-full":a}},y=function(i,n){return{transform:i,transition:n}},C=function(i){return{value:"visible",params:i}};function S(i,n){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1,2),e.\u0275\u0275listener("@panelState.start",function(o){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onAnimationStart(o))})("@panelState.done",function(o){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onAnimationEnd(o))}),e.\u0275\u0275elementStart(2,"div",3),e.\u0275\u0275template(3,u,1,0,"ng-container",4),e.\u0275\u0275template(4,f,2,1,"button",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",6),e.\u0275\u0275projection(6),e.\u0275\u0275template(7,_,1,0,"ng-container",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",7),e.\u0275\u0275template(9,g,1,0,"ng-container",4),e.\u0275\u0275elementEnd()()}if(2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275classMap(t.styleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction6(10,v,t.visible,"left"===t.position&&!t.fullScreen,"right"===t.position&&!t.fullScreen,"top"===t.position&&!t.fullScreen,"bottom"===t.position&&!t.fullScreen,t.fullScreen))("@panelState",e.\u0275\u0275pureFunction1(20,C,e.\u0275\u0275pureFunction2(17,y,t.transformOptions,t.transitionOptions)))("ngStyle",t.style),e.\u0275\u0275attribute("aria-modal",t.modal),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngTemplateOutlet",t.headerTemplate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.showCloseIcon),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngTemplateOutlet",t.contentTemplate),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngTemplateOutlet",t.footerTemplate)}}const E=["*"],x=(0,r.oQ)([(0,r.oB)({transform:"{{transform}}",opacity:0}),(0,r.jt)("{{transition}}")]),k=(0,r.oQ)([(0,r.jt)("{{transition}}",(0,r.oB)({transform:"{{transform}}",opacity:0}))]);let w=(()=>{class i{constructor(t,s,o,a){this.el=t,this.renderer=s,this.cd=o,this.config=a,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.modal=!0,this.dismissible=!0,this.showCloseIcon=!0,this.closeOnEscape=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new e.EventEmitter,this.onHide=new e.EventEmitter,this.visibleChange=new e.EventEmitter,this._position="left",this._fullScreen=!1,this.transformOptions="translate3d(-100%, 0px, 0px)"}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){switch(this._position=t,t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)"}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}show(){this.autoZIndex&&c.ZIndexUtils.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(){this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){this.mask||(this.mask=document.createElement("div"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex)-1),p.DomHandler.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",t=>{this.dismissible&&this.close(t)})),document.body.appendChild(this.mask),this.blockScroll&&p.DomHandler.addClass(document.body,"p-overflow-hidden"))}disableModality(){this.mask&&(p.DomHandler.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.destroyModal.bind(this),this.mask.addEventListener("animationend",this.animationEndListener))}destroyModal(){this.unbindMaskClickListener(),this.mask&&document.body.removeChild(this.mask),this.blockScroll&&p.DomHandler.removeClass(document.body,"p-overflow-hidden"),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){"visible"===t.toState&&(this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener())}onAnimationEnd(t){"void"===t.toState&&(this.hide(),c.ZIndexUtils.clear(this.container),this.unbindGlobalListeners())}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):p.DomHandler.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",s=>{27==s.which&&parseInt(this.container.style.zIndex)===c.ZIndexUtils.get(this.container)&&this.close(s)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.mask.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.el.nativeElement.appendChild(this.container),this.container&&this.autoZIndex&&c.ZIndexUtils.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.Renderer2),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(b.PrimeNGConfig))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["p-sidebar"]],contentQueries:function(t,s,o){if(1&t&&e.\u0275\u0275contentQuery(o,b.PrimeTemplate,4),2&t){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(s.templates=a)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:"blockScroll",style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",modal:"modal",dismissible:"dismissible",showCloseIcon:"showCloseIcon",closeOnEscape:"closeOnEscape",transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},ngContentSelectors:E,decls:1,vars:1,consts:[["role","complementary",3,"ngClass","ngStyle","class",4,"ngIf"],["role","complementary",3,"ngClass","ngStyle"],["container",""],[1,"p-sidebar-header"],[4,"ngTemplateOutlet"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[1,"p-sidebar-footer"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[1,"p-sidebar-close-icon","pi","pi-times"]],template:function(t,s){1&t&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,S,10,22,"div",0)),2&t&&e.\u0275\u0275property("ngIf",s.visible)},dependencies:[d.NgClass,d.NgIf,d.NgTemplateOutlet,d.NgStyle,h.Ripple],styles:[".p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}\n"],encapsulation:2,data:{animation:[(0,r.X$)("panelState",[(0,r.eR)("void => visible",[(0,r._7)(x)]),(0,r.eR)("visible => void",[(0,r._7)(k)])])]},changeDetection:0}),i})(),I=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,h.RippleModule]}),i})()}}]);