(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[562],{50369:(P,f,c)=>{c.r(f),c.d(f,{ConfirmPopup:()=>E,ConfirmPopupModule:()=>x});var t=c(45449),m=c(90944),l=c(60859),d=c(463),h=c(37524),a=c(37340),p=c(41045);function _(n,r){if(1&n&&t.\u0275\u0275element(0,"i",8),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275classMap(e.confirmation.icon),t.\u0275\u0275property("ngClass","p-confirm-popup-icon")}}function b(n,r){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",9),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const i=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(i.reject())}),t.\u0275\u0275elementEnd()}if(2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275classMap(e.confirmation.rejectButtonStyleClass||"p-button-text"),t.\u0275\u0275property("icon",e.confirmation.rejectIcon)("label",e.rejectButtonLabel)("ngClass","p-confirm-popup-reject p-button-sm"),t.\u0275\u0275attribute("aria-label",e.rejectButtonLabel)}}function v(n,r){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",9),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const i=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(i.accept())}),t.\u0275\u0275elementEnd()}if(2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275classMap(e.confirmation.acceptButtonStyleClass),t.\u0275\u0275property("icon",e.confirmation.acceptIcon)("label",e.acceptButtonLabel)("ngClass","p-confirm-popup-accept p-button-sm"),t.\u0275\u0275attribute("aria-label",e.acceptButtonLabel)}}const C=function(n,r){return{showTransitionParams:n,hideTransitionParams:r}},g=function(n){return{value:"open",params:n}};function y(n,r){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",1),t.\u0275\u0275listener("click",function(i){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.onOverlayClick(i))})("@animation.start",function(i){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.onAnimationStart(i))})("@animation.done",function(i){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.onAnimationEnd(i))}),t.\u0275\u0275elementStart(1,"div",2,3),t.\u0275\u0275template(3,_,1,3,"i",4),t.\u0275\u0275elementStart(4,"span",5),t.\u0275\u0275text(5),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(6,"div",6),t.\u0275\u0275template(7,b,1,6,"button",7),t.\u0275\u0275template(8,v,1,6,"button",7),t.\u0275\u0275elementEnd()()}if(2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275classMap(e.styleClass),t.\u0275\u0275property("ngClass","p-confirm-popup p-component")("ngStyle",e.style)("@animation",t.\u0275\u0275pureFunction1(12,g,t.\u0275\u0275pureFunction2(9,C,e.showTransitionOptions,e.hideTransitionOptions))),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",e.confirmation.icon),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.confirmation.message),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",!1!==e.confirmation.rejectVisible),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!1!==e.confirmation.acceptVisible)}}let E=(()=>{class n{constructor(e,o,i,s,L,D){this.el=e,this.confirmationService=o,this.renderer=i,this.cd=s,this.config=L,this.overlayService=D,this.defaultFocus="accept",this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.autoZIndex=!0,this.baseZIndex=0,this.subscription=this.confirmationService.requireConfirmation$.subscribe(u=>{u?u.key===this.key&&(this.confirmation=u,this.confirmation.accept&&(this.confirmation.acceptEvent=new t.EventEmitter,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new t.EventEmitter,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(e){this._visible=e,this.cd.markForCheck()}onAnimationStart(e){if("open"===e.toState){this.container=e.element,document.body.appendChild(this.container),this.align(),this.bindListeners();const o=this.getElementToFocus();o&&o.focus()}}onAnimationEnd(e){"void"===e.toState&&this.onContainerDestroy()}getElementToFocus(){switch(this.defaultFocus){case"accept":return p.DomHandler.findSingle(this.container,".p-confirm-popup-accept");case"reject":return p.DomHandler.findSingle(this.container,".p-confirm-popup-reject");case"none":return null}}align(){this.autoZIndex&&h.ZIndexUtils.set("overlay",this.container,this.config.zIndex.overlay),p.DomHandler.absolutePosition(this.container,this.confirmation.target);const e=p.DomHandler.getOffset(this.container),o=p.DomHandler.getOffset(this.confirmation.target);let i=0;e.left<o.left&&(i=o.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${i}px`),e.top<o.top&&p.DomHandler.addClass(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}accept(){this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}reject(){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindListeners(){this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let e=p.DomHandler.isIOS()?"touchstart":"click";const o=this.el?this.el.nativeElement.ownerDocument:document;this.documentClickListener=this.renderer.listen(o,e,i=>{let s=this.confirmation.target;this.container!==i.target&&!this.container.contains(i.target)&&s!==i.target&&!s.contains(i.target)&&this.hide()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.hide()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new p.ConnectedOverlayScrollHandler(this.confirmation.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&h.ZIndexUtils.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&document.body.removeChild(this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation.acceptLabel||this.config.getTranslation(l.TranslationKeys.ACCEPT)}get rejectButtonLabel(){return this.confirmation.rejectLabel||this.config.getTranslation(l.TranslationKeys.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(l.ConfirmationService),t.\u0275\u0275directiveInject(t.Renderer2),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(l.PrimeNGConfig),t.\u0275\u0275directiveInject(l.OverlayService))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["p-confirmPopup"]],hostAttrs:[1,"p-element"],inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",visible:"visible"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class","click",4,"ngIf"],[3,"ngClass","ngStyle","click"],[1,"p-confirm-popup-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-popup-message"],[1,"p-confirm-popup-footer"],["type","button","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],[3,"ngClass"],["type","button","pButton","",3,"icon","label","ngClass","click"]],template:function(e,o){1&e&&t.\u0275\u0275template(0,y,9,14,"div",0),2&e&&t.\u0275\u0275property("ngIf",o.visible)},dependencies:[m.NgIf,m.NgClass,m.NgStyle,d.ButtonDirective],styles:['.p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n'],encapsulation:2,data:{animation:[(0,a.X$)("animation",[(0,a.SB)("void",(0,a.oB)({transform:"scaleY(0.8)",opacity:0})),(0,a.SB)("open",(0,a.oB)({transform:"translateY(0)",opacity:1})),(0,a.eR)("void => open",(0,a.jt)("{{showTransitionParams}}")),(0,a.eR)("open => void",(0,a.jt)("{{hideTransitionParams}}"))])]},changeDetection:0}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[m.CommonModule,d.ButtonModule]]}),n})()}}]);