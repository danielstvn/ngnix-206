(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[1113],{82381:(g,l,_)=>{_.r(l),_.d(l,{BsComponentRef:()=>p,ComponentLoader:()=>m,ComponentLoaderFactory:()=>R,ContentRef:()=>a});var n=_(45449),f=_(41095),d=_(73876);class p{}class a{constructor(e,t,i){this.nodes=e,this.viewRef=t,this.componentRef=i}}class m{constructor(e,t,i,r,o,h,c,u){this._viewContainerRef=e,this._renderer=t,this._elementRef=i,this._injector=r,this._componentFactoryResolver=o,this._ngZone=h,this._applicationRef=c,this._posService=u,this.onBeforeShow=new n.EventEmitter,this.onShown=new n.EventEmitter,this.onBeforeHide=new n.EventEmitter,this.onHidden=new n.EventEmitter,this._providers=[],this._isHiding=!1,this.containerDefaultSelector="body",this._listenOpts={},this._globalListener=Function.prototype}get isShown(){return!this._isHiding&&!!this._componentRef}attach(e){return this._componentFactory=this._componentFactoryResolver.resolveComponentFactory(e),this}to(e){return this.container=e||this.container,this}position(e){return e?(this.attachment=e.attachment||this.attachment,this._elementRef=e.target||this._elementRef,this):this}provide(e){return this._providers.push(e),this}show(e={}){if(this._subscribePositioning(),this._innerComponent=void 0,!this._componentRef){this.onBeforeShow.emit(),this._contentRef=this._getContentRef(e.content,e.context,e.initialState);const t=n.Injector.create({providers:this._providers,parent:this._injector});if(!this._componentFactory)return;if(this._componentRef=this._componentFactory.create(t,this._contentRef.nodes),this._applicationRef.attachView(this._componentRef.hostView),this.instance=this._componentRef.instance,Object.assign(this._componentRef.instance,e),this.container instanceof n.ElementRef&&this.container.nativeElement.appendChild(this._componentRef.location.nativeElement),"string"==typeof this.container&&typeof document<"u"){const i=document.querySelector(this.container)||document.querySelector(this.containerDefaultSelector);if(!i)return;i.appendChild(this._componentRef.location.nativeElement)}!this.container&&this._elementRef&&this._elementRef.nativeElement.parentElement&&this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement),this._contentRef.componentRef&&(this._innerComponent=this._contentRef.componentRef.instance,this._contentRef.componentRef.changeDetectorRef.markForCheck(),this._contentRef.componentRef.changeDetectorRef.detectChanges()),this._componentRef.changeDetectorRef.markForCheck(),this._componentRef.changeDetectorRef.detectChanges(),this.onShown.emit(e.id?{id:e.id}:this._componentRef.instance)}return this._registerOutsideClick(),this._componentRef}hide(e){if(!this._componentRef)return this;this._posService.deletePositionElement(this._componentRef.location),this.onBeforeHide.emit(this._componentRef.instance);const t=this._componentRef.location.nativeElement;return t.parentNode?.removeChild(t),this._contentRef?.componentRef?.destroy(),this._viewContainerRef&&this._contentRef?.viewRef&&this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef)),this._contentRef?.viewRef?.destroy(),this._contentRef=void 0,this._componentRef=void 0,this._removeGlobalListener(),this.onHidden.emit(e?{id:e}:null),this}toggle(){this.isShown?this.hide():this.show()}dispose(){this.isShown&&this.hide(),this._unsubscribePositioning(),this._unregisterListenersFn&&this._unregisterListenersFn()}listen(e){this.triggers=e.triggers||this.triggers,this._listenOpts.outsideClick=e.outsideClick,this._listenOpts.outsideEsc=e.outsideEsc,e.target=e.target||this._elementRef?.nativeElement;const t=this._listenOpts.hide=()=>e.hide?e.hide():void this.hide(),i=this._listenOpts.show=o=>{e.show?e.show(o):this.show(o),o()};return this._renderer&&(this._unregisterListenersFn=(0,f.listenToTriggersV2)(this._renderer,{target:e.target,triggers:e.triggers,show:i,hide:t,toggle:o=>{this.isShown?t():i(o)}})),this}_removeGlobalListener(){this._globalListener&&(this._globalListener(),this._globalListener=Function.prototype)}attachInline(e,t){return e&&t&&(this._inlineViewRef=e.createEmbeddedView(t)),this}_registerOutsideClick(){if(this._componentRef&&this._componentRef.location){if(this._listenOpts.outsideClick){const e=this._componentRef.location.nativeElement;setTimeout(()=>{this._renderer&&this._elementRef&&(this._globalListener=(0,f.registerOutsideClick)(this._renderer,{targets:[e,this._elementRef.nativeElement],outsideClick:this._listenOpts.outsideClick,hide:()=>this._listenOpts.hide&&this._listenOpts.hide()}))})}this._listenOpts.outsideEsc&&this._renderer&&this._elementRef&&(this._globalListener=(0,f.registerEscClick)(this._renderer,{targets:[this._componentRef.location.nativeElement,this._elementRef.nativeElement],outsideEsc:this._listenOpts.outsideEsc,hide:()=>this._listenOpts.hide&&this._listenOpts.hide()}))}}getInnerComponent(){return this._innerComponent}_subscribePositioning(){this._zoneSubscription||!this.attachment||(this.onShown.subscribe(()=>{this._posService.position({element:this._componentRef?.location,target:this._elementRef,attachment:this.attachment,appendToBody:"body"===this.container})}),this._zoneSubscription=this._ngZone.onStable.subscribe(()=>{!this._componentRef||this._posService.calcPosition()}))}_unsubscribePositioning(){!this._zoneSubscription||(this._zoneSubscription.unsubscribe(),this._zoneSubscription=void 0)}_getContentRef(e,t,i){if(!e)return new a([]);if(e instanceof n.TemplateRef){if(this._viewContainerRef){const h=this._viewContainerRef.createEmbeddedView(e,t);return h.markForCheck(),new a([h.rootNodes],h)}const o=e.createEmbeddedView({});return this._applicationRef.attachView(o),new a([o.rootNodes],o)}if("function"==typeof e){const o=this._componentFactoryResolver.resolveComponentFactory(e),h=n.Injector.create({providers:this._providers,parent:this._injector}),c=o.create(h);return Object.assign(c.instance,i),this._applicationRef.attachView(c.hostView),new a([[c.location.nativeElement]],c.hostView,c)}const r=this._renderer?[this._renderer.createText(`${e}`)]:[];return new a([r])}}let R=(()=>{class s{constructor(t,i,r,o,h){this._componentFactoryResolver=t,this._ngZone=i,this._injector=r,this._posService=o,this._applicationRef=h}createLoader(t,i,r){return new m(i,r,t,this._injector,this._componentFactoryResolver,this._ngZone,this._applicationRef,this._posService)}}return s.\u0275fac=function(t){return new(t||s)(n.\u0275\u0275inject(n.ComponentFactoryResolver),n.\u0275\u0275inject(n.NgZone),n.\u0275\u0275inject(n.Injector),n.\u0275\u0275inject(d.PositioningService),n.\u0275\u0275inject(n.ApplicationRef))},s.\u0275prov=n.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);