(self.webpackChunkzero_fd_mf=self.webpackChunkzero_fd_mf||[]).push([[7183],{32435:(T,u,a)=>{a.r(u),a.d(u,{OverlayPanel:()=>b,OverlayPanelModule:()=>O});var e=a(45449),d=a(90944),c=a(41045),h=a(60859),f=a(61711),l=a(37340),p=a(37524);function m(i,s){1&i&&e.\u0275\u0275elementContainer(0)}function v(i,s){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",5),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(r.onCloseClick(o))})("keydown.enter",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(o.hide())}),e.\u0275\u0275element(1,"span",6),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275attribute("aria-label",t.ariaCloseLabel)}}const y=function(i,s){return{showTransitionParams:i,hideTransitionParams:s}},_=function(i,s){return{value:i,params:s}};function g(i,s){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1),e.\u0275\u0275listener("click",function(o){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.onOverlayClick(o))})("@animation.start",function(o){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.onAnimationStart(o))})("@animation.done",function(o){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.onAnimationEnd(o))}),e.\u0275\u0275elementStart(1,"div",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.onContentClick())})("mousedown",function(){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.onContentClick())}),e.\u0275\u0275projection(2),e.\u0275\u0275template(3,m,1,0,"ng-container",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,v,2,1,"button",4),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275classMap(t.styleClass),e.\u0275\u0275property("ngClass","p-overlaypanel p-component")("ngStyle",t.style)("@animation",e.\u0275\u0275pureFunction2(10,_,t.overlayVisible?"open":"close",e.\u0275\u0275pureFunction2(7,y,t.showTransitionOptions,t.hideTransitionOptions))),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngTemplateOutlet",t.contentTemplate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.showCloseIcon)}}const C=["*"];let b=(()=>{class i{constructor(t,n,o,r,w,k){this.el=t,this.renderer=n,this.cd=o,this.zone=r,this.config=w,this.overlayService=k,this.dismissable=!0,this.appendTo="body",this.autoZIndex=!0,this.baseZIndex=0,this.focusOnShow=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.onShow=new e.EventEmitter,this.onHide=new e.EventEmitter,this.overlayVisible=!1,this.render=!1,this.isOverlayAnimationInProgress=!1,this.selfClick=!1}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template,this.cd.markForCheck()})}bindDocumentClickListener(){!this.documentClickListener&&this.dismissable&&this.zone.runOutsideAngular(()=>{let t=c.DomHandler.isIOS()?"touchstart":"click";this.documentClickListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document",t,o=>{!this.container.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.zone.run(()=>{this.hide()}),this.selfClick=!1,this.cd.markForCheck()})})}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(t,n){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(t,n)&&(this.destroyCallback=()=>{this.show(null,n||t.currentTarget||t.target)}),this.hide()):this.show(t,n))}show(t,n){this.isOverlayAnimationInProgress||(this.target=n||t.currentTarget||t.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(){this.selfClick=!0}hasTargetChanged(t,n){return null!=this.target&&this.target!==(n||t.currentTarget||t.target)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):c.DomHandler.appendChild(this.container,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.container)}align(){this.autoZIndex&&p.ZIndexUtils.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),c.DomHandler.absolutePosition(this.container,this.target);const t=c.DomHandler.getOffset(this.container),n=c.DomHandler.getOffset(this.target);let o=0;t.left<n.left&&(o=n.left-t.left),this.container.style.setProperty("--overlayArrowLeft",`${o}px`),t.top<n.top&&(c.DomHandler.addClass(this.container,"p-overlaypanel-flipped"),this.showCloseIcon&&(this.container.style.marginTop="30px"))}onAnimationStart(t){"open"===t.toState&&(this.container=t.element,this.onShow.emit(null),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(t){switch(t.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&p.ZIndexUtils.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1}this.isOverlayAnimationInProgress=!1}focus(){let t=c.DomHandler.findSingle(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}hide(){this.isOverlayAnimationInProgress||(this.overlayVisible=!1,this.cd.markForCheck())}onCloseClick(t){this.hide(),t.preventDefault()}onWindowResize(t){this.overlayVisible&&!c.DomHandler.isTouchDevice()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new c.ConnectedOverlayScrollHandler(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&p.ZIndexUtils.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.Renderer2),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(h.PrimeNGConfig),e.\u0275\u0275directiveInject(h.OverlayService))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["p-overlayPanel"]],contentQueries:function(t,n,o){if(1&t&&e.\u0275\u0275contentQuery(o,h.PrimeTemplate,4),2&t){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(n.templates=r)}},hostAttrs:[1,"p-element"],inputs:{dismissable:"dismissable",showCloseIcon:"showCloseIcon",style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:"autoZIndex",ariaCloseLabel:"ariaCloseLabel",baseZIndex:"baseZIndex",focusOnShow:"focusOnShow",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},ngContentSelectors:C,decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-overlaypanel-content",3,"click","mousedown"],[4,"ngTemplateOutlet"],["type","button","class","p-overlaypanel-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],["type","button","pRipple","",1,"p-overlaypanel-close","p-link",3,"click","keydown.enter"],[1,"p-overlaypanel-close-icon","pi","pi-times"]],template:function(t,n){1&t&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,g,5,13,"div",0)),2&t&&e.\u0275\u0275property("ngIf",n.render)},dependencies:[d.NgClass,d.NgIf,d.NgTemplateOutlet,d.NgStyle,f.Ripple],styles:['.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}\n'],encapsulation:2,data:{animation:[(0,l.X$)("animation",[(0,l.SB)("void",(0,l.oB)({transform:"scaleY(0.8)",opacity:0})),(0,l.SB)("close",(0,l.oB)({opacity:0})),(0,l.SB)("open",(0,l.oB)({transform:"translateY(0)",opacity:1})),(0,l.eR)("void => open",(0,l.jt)("{{showTransitionParams}}")),(0,l.eR)("open => close",(0,l.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),i})(),O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,f.RippleModule,h.SharedModule,h.SharedModule]}),i})()}}]);