(self.webpackChunkzero_zm_mf=self.webpackChunkzero_zm_mf||[]).push([[4965],{73425:(R,m,o)=>{o.r(m),o.d(m,{MapperPipe:()=>v,Password:()=>_,PasswordDirective:()=>I,PasswordModule:()=>M,Password_VALUE_ACCESSOR:()=>g});var e=o(45449),u=o(90944),p=o(37340),y=o(93071),r=o(41045),d=o(60859),c=o(37524),f=o(11540);const w=["input"];function b(i,l){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"i",5),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.clear())}),e.\u0275\u0275elementEnd()}}function C(i,l){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"i",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.onMaskToggle())}),e.\u0275\u0275pipe(1,"mapper"),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pipeBind2(1,1,t.unmasked,t.toggleIconClass))}}function T(i,l){1&i&&e.\u0275\u0275elementContainer(0)}function L(i,l){1&i&&e.\u0275\u0275elementContainer(0)}function E(i,l){if(1&i&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,L,1,0,"ng-container",8),e.\u0275\u0275elementContainerEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t.contentTemplate)}}const P=function(i){return{width:i}};function k(i,l){if(1&i&&(e.\u0275\u0275elementStart(0,"div",11),e.\u0275\u0275element(1,"div",0),e.\u0275\u0275pipe(2,"mapper"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",e.\u0275\u0275pipeBind2(2,3,t.meter,t.strengthClass))("ngStyle",e.\u0275\u0275pureFunction1(6,P,t.meter?t.meter.width:"")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.infoText)}}function S(i,l){1&i&&e.\u0275\u0275elementContainer(0)}const D=function(i,l){return{showTransitionParams:i,hideTransitionParams:l}},O=function(i){return{value:"visible",params:i}};function x(i,l){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",6,7),e.\u0275\u0275listener("click",function(s){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onOverlayClick(s))})("@overlayAnimation.start",function(s){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onAnimationStart(s))})("@overlayAnimation.done",function(s){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.onAnimationEnd(s))}),e.\u0275\u0275template(2,T,1,0,"ng-container",8),e.\u0275\u0275template(3,E,2,1,"ng-container",9),e.\u0275\u0275template(4,k,5,8,"ng-template",null,10,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(6,S,1,0,"ng-container",8),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275reference(5),n=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass","p-password-panel p-component")("@overlayAnimation",e.\u0275\u0275pureFunction1(9,O,e.\u0275\u0275pureFunction2(6,D,n.showTransitionOptions,n.hideTransitionOptions))),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngTemplateOutlet",n.headerTemplate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.contentTemplate)("ngIfElse",t),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngTemplateOutlet",n.footerTemplate)}}let I=(()=>{class i{constructor(t,n){this.el=t,this.zone=n,this.promptLabel="Enter a password",this.weakLabel="Weak",this.mediumLabel="Medium",this.strongLabel="Strong",this.feedback=!0}set showPassword(t){this.el.nativeElement.type=t?"text":"password"}ngDoCheck(){this.updateFilledState()}onInput(t){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}createPanel(){this.panel=document.createElement("div"),this.panel.className="p-password-panel p-component p-password-panel-overlay p-connected-overlay",this.meter=document.createElement("div"),this.meter.className="p-password-meter",this.info=document.createElement("div"),this.info.className="p-password-info",this.info.textContent=this.promptLabel,this.panel.appendChild(this.meter),this.panel.appendChild(this.info),this.panel.style.minWidth=r.DomHandler.getOuterWidth(this.el.nativeElement)+"px",document.body.appendChild(this.panel)}showOverlay(){this.feedback&&(this.panel||this.createPanel(),this.panel.style.zIndex=String(++r.DomHandler.zindex),this.panel.style.display="block",this.zone.runOutsideAngular(()=>{setTimeout(()=>{r.DomHandler.addClass(this.panel,"p-connected-overlay-visible"),this.bindScrollListener(),this.bindDocumentResizeListener()},1)}),r.DomHandler.absolutePosition(this.panel,this.el.nativeElement))}hideOverlay(){this.feedback&&this.panel&&(r.DomHandler.addClass(this.panel,"p-connected-overlay-hidden"),r.DomHandler.removeClass(this.panel,"p-connected-overlay-visible"),this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.ngOnDestroy()},150)}))}onFocus(){this.showOverlay()}onBlur(){this.hideOverlay()}onKeyup(t){if(this.feedback){let s=t.target.value,a=null,h=null;if(0===s.length)a=this.promptLabel,h="0px 0px";else{var n=this.testStrength(s);n<30?(a=this.weakLabel,h="0px -10px"):n>=30&&n<80?(a=this.mediumLabel,h="0px -20px"):n>=80&&(a=this.strongLabel,h="0px -30px")}(!this.panel||!r.DomHandler.hasClass(this.panel,"p-connected-overlay-visible"))&&this.showOverlay(),this.meter.style.backgroundPosition=h,this.info.textContent=a}}testStrength(t){let s,n=0;return s=t.match("[0-9]"),n+=25*this.normalize(s?s.length:1/4,1),s=t.match("[a-zA-Z]"),n+=10*this.normalize(s?s.length:.5,3),s=t.match("[!@#$%^&*?_~.,;=]"),n+=35*this.normalize(s?s.length:1/6,1),s=t.match("[A-Z]"),n+=30*this.normalize(s?s.length:1/6,1),n*=t.length/8,n>100?100:n}normalize(t,n){return t-n<=0?t/n:1+t/(t+n/4)*.5}get disabled(){return this.el.nativeElement.disabled}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new r.ConnectedOverlayScrollHandler(this.el.nativeElement,()=>{r.DomHandler.hasClass(this.panel,"p-connected-overlay-visible")&&this.hideOverlay()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentResizeListener(){this.documentResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.documentResizeListener)}unbindDocumentResizeListener(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}onWindowResize(){r.DomHandler.isTouchDevice()||this.hideOverlay()}ngOnDestroy(){this.panel&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindDocumentResizeListener(),document.body.removeChild(this.panel),this.panel=null,this.meter=null,this.info=null)}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone))},i.\u0275dir=e.\u0275\u0275defineDirective({type:i,selectors:[["","pPassword",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:2,hostBindings:function(t,n){1&t&&e.\u0275\u0275listener("input",function(a){return n.onInput(a)})("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()})("keyup",function(a){return n.onKeyup(a)}),2&t&&e.\u0275\u0275classProp("p-filled",n.filled)},inputs:{promptLabel:"promptLabel",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",feedback:"feedback",showPassword:"showPassword"}}),i})(),v=(()=>{class i{transform(t,n,...s){return n(t,...s)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.\u0275\u0275definePipe({name:"mapper",type:i,pure:!0}),i})();const g={provide:y.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>_),multi:!0};let _=(()=>{class i{constructor(t,n,s,a){this.cd=t,this.config=n,this.el=s,this.overlayService=a,this.mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",this.strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",this.feedback=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.showClear=!1,this.onFocus=new e.EventEmitter,this.onBlur=new e.EventEmitter,this.onClear=new e.EventEmitter,this.overlayVisible=!1,this.focused=!1,this.unmasked=!1,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngOnInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,c.ZIndexUtils.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}onAnimationEnd(t){"void"===t.toState&&c.ZIndexUtils.clear(t.element)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=r.DomHandler.getOuterWidth(this.input.nativeElement)+"px",r.DomHandler.absolutePosition(this.overlay,this.input.nativeElement)):r.DomHandler.relativePosition(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value),this.onModelTouched()}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onBlur.emit(t)}onKeyDown(t){"Escape"===t.key&&(this.overlayVisible=!1)}onKeyUp(t){this.feedback&&(this.updateUI(t.target.value),this.overlayVisible||(this.overlayVisible=!0))}updateUI(t){let n=null,s=null;switch(this.testStrength(t)){case 1:n=this.weakText(),s={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText(),s={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText(),s={strength:"strong",width:"100%"};break;default:n=this.promptText(),s=null}this.meter=s,this.infoText=n}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let n=0;return this.strongCheckRegExp.test(t)?n=3:this.mediumCheckRegExp.test(t)?n=2:t.length&&(n=1),n}writeValue(t){this.value=void 0===t?null:t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new r.ConnectedOverlayScrollHandler(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()}bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!r.DomHandler.isTouchDevice()&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}containerClass(t){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":t}}inputFieldClass(t){return{"p-password-input":!0,"p-disabled":t}}toggleIconClass(t){return t?"pi pi-eye-slash":"pi pi-eye"}strengthClass(t){return`p-password-strength ${t?t.strength:""}`}filled(){return null!=this.value&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(d.TranslationKeys.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(d.TranslationKeys.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(d.TranslationKeys.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(d.TranslationKeys.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&("body"===this.appendTo?document.body.removeChild(this.overlay):document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(t){return t?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(c.ZIndexUtils.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(d.PrimeNGConfig),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(d.OverlayService))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["p-password"]],contentQueries:function(t,n,s){if(1&t&&e.\u0275\u0275contentQuery(s,d.PrimeTemplate,4),2&t){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(n.templates=a)}},viewQuery:function(t,n){if(1&t&&e.\u0275\u0275viewQuery(w,5),2&t){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(n.input=s.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:8,hostBindings:function(t,n){2&t&&e.\u0275\u0275classProp("p-inputwrapper-filled",n.filled())("p-inputwrapper-focus",n.focused)("p-password-clearable",n.showClear)("p-password-mask",n.toggleMask)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",panelStyle:"panelStyle",panelStyleClass:"panelStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder",showClear:"showClear"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[e.\u0275\u0275ProvidersFeature([g])],decls:9,vars:27,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup","keydown"],["input",""],["class","p-password-clear-icon pi pi-times",3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],[1,"p-password-clear-icon","pi","pi-times",3,"click"],[3,"ngClass","click"],["overlay",""],[4,"ngTemplateOutlet"],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275pipe(1,"mapper"),e.\u0275\u0275elementStart(2,"input",1,2),e.\u0275\u0275listener("input",function(a){return n.onInput(a)})("focus",function(a){return n.onInputFocus(a)})("blur",function(a){return n.onInputBlur(a)})("keyup",function(a){return n.onKeyUp(a)})("keydown",function(a){return n.onKeyDown(a)}),e.\u0275\u0275pipe(4,"mapper"),e.\u0275\u0275pipe(5,"mapper"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,b,1,0,"i",3),e.\u0275\u0275template(7,C,2,4,"i",4),e.\u0275\u0275template(8,x,7,11,"div",4),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275classMap(n.styleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pipeBind2(1,18,n.toggleMask,n.containerClass))("ngStyle",n.style),e.\u0275\u0275advance(2),e.\u0275\u0275classMap(n.inputStyleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pipeBind2(4,21,n.disabled,n.inputFieldClass))("ngStyle",n.inputStyle)("value",n.value),e.\u0275\u0275attribute("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("type",e.\u0275\u0275pipeBind2(5,24,n.unmasked,n.inputType))("placeholder",n.placeholder),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",n.showClear&&null!=n.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.toggleMask),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.overlayVisible))},dependencies:[u.NgClass,u.NgIf,u.NgTemplateOutlet,u.NgStyle,f.InputText,v],styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password-clearable{position:relative}\n"],encapsulation:2,data:{animation:[(0,p.X$)("overlayAnimation",[(0,p.eR)(":enter",[(0,p.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,p.jt)("{{showTransitionParams}}")]),(0,p.eR)(":leave",[(0,p.jt)("{{hideTransitionParams}}",(0,p.oB)({opacity:0}))])])]},changeDetection:0}),i})(),M=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[u.CommonModule,f.InputTextModule,d.SharedModule]}),i})()}}]);