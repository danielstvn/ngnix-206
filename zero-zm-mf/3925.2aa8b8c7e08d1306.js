(self.webpackChunkzero_zm_mf=self.webpackChunkzero_zm_mf||[]).push([[3925],{83930:(H,v,r)=>{r.r(v),r.d(v,{ScrollPanel:()=>b,ScrollPanelModule:()=>x});var t=r(45449),d=r(90944),s=r(41045),f=r(60859);const w=["container"],y=["content"],B=["xBar"],M=["yBar"];function E(l,a){1&l&&t.\u0275\u0275elementContainer(0)}const D=["*"];let b=(()=>{class l{constructor(e,n,o){this.el=e,this.zone=n,this.cd=o,this.timeoutFrame=i=>setTimeout(i,0)}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),window.addEventListener("resize",this.moveBar),this.contentViewChild.nativeElement.addEventListener("scroll",this.moveBar),this.contentViewChild.nativeElement.addEventListener("mouseenter",this.moveBar),this.xBarViewChild.nativeElement.addEventListener("mousedown",this.onXBarMouseDown),this.yBarViewChild.nativeElement.addEventListener("mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(e=>{e.getType(),this.contentTemplate=e.template})}calculateContainerHeight(){let e=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement,i=getComputedStyle(e),c=getComputedStyle(o),p=s.DomHandler.getHeight(e)-parseInt(c.height,10);"none"!=i["max-height"]&&0==p&&(e.style.height=n.offsetHeight+parseInt(c.height,10)>parseInt(i["max-height"],10)?i["max-height"]:n.offsetHeight+parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth)+"px")}moveBar(){let e=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement,i=n.scrollWidth,c=n.clientWidth,p=-1*(e.clientHeight-o.clientHeight);this.scrollXRatio=c/i;let m=this.yBarViewChild.nativeElement,g=n.scrollHeight,C=n.clientHeight,_=-1*(e.clientWidth-m.clientWidth);this.scrollYRatio=C/g,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)s.DomHandler.addClass(o,"p-scrollpanel-hidden");else{s.DomHandler.removeClass(o,"p-scrollpanel-hidden");const h=Math.max(100*this.scrollXRatio,10);o.style.cssText="width:"+h+"%; left:"+n.scrollLeft*(100-h)/(i-c)+"%;bottom:"+p+"px;"}if(this.scrollYRatio>=1)s.DomHandler.addClass(m,"p-scrollpanel-hidden");else{s.DomHandler.removeClass(m,"p-scrollpanel-hidden");const h=Math.max(100*this.scrollYRatio,10);m.style.cssText="height:"+h+"%; top: calc("+n.scrollTop*(100-h)/(g-C)+"% - "+o.clientHeight+"px);right:"+_+"px;"}}),this.cd.markForCheck()}onYBarMouseDown(e){this.isYBarClicked=!0,this.lastPageY=e.pageY,s.DomHandler.addClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),s.DomHandler.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",this.onDocumentMouseMove),document.addEventListener("mouseup",this.onDocumentMouseUp),e.preventDefault()}onXBarMouseDown(e){this.isXBarClicked=!0,this.lastPageX=e.pageX,s.DomHandler.addClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),s.DomHandler.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",this.onDocumentMouseMove),document.addEventListener("mouseup",this.onDocumentMouseUp),e.preventDefault()}onDocumentMouseMove(e){this.isXBarClicked?this.onMouseMoveForXBar(e):(this.isYBarClicked||this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))}onMouseMoveForXBar(e){let n=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=n/this.scrollXRatio})}onMouseMoveForYBar(e){let n=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=n/this.scrollYRatio})}scrollTop(e){let n=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;this.contentViewChild.nativeElement.scrollTop=e=e>n?n:e>0?e:0}onDocumentMouseUp(e){s.DomHandler.removeClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),s.DomHandler.removeClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),s.DomHandler.removeClass(document.body,"p-scrollpanel-grabbed"),document.removeEventListener("mousemove",this.onDocumentMouseMove),document.removeEventListener("mouseup",this.onDocumentMouseUp),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(e){(window.requestAnimationFrame||this.timeoutFrame)(e)}ngOnDestroy(){this.initialized&&(window.removeEventListener("resize",this.moveBar),this.contentViewChild.nativeElement.removeEventListener("scroll",this.moveBar),this.contentViewChild.nativeElement.removeEventListener("mouseenter",this.moveBar),this.xBarViewChild.nativeElement.removeEventListener("mousedown",this.onXBarMouseDown),this.yBarViewChild.nativeElement.removeEventListener("mousedown",this.onYBarMouseDown))}refresh(){this.moveBar()}}return l.\u0275fac=function(e){return new(e||l)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},l.\u0275cmp=t.\u0275\u0275defineComponent({type:l,selectors:[["p-scrollPanel"]],contentQueries:function(e,n,o){if(1&e&&t.\u0275\u0275contentQuery(o,f.PrimeTemplate,4),2&e){let i;t.\u0275\u0275queryRefresh(i=t.\u0275\u0275loadQuery())&&(n.templates=i)}},viewQuery:function(e,n){if(1&e&&(t.\u0275\u0275viewQuery(w,5),t.\u0275\u0275viewQuery(y,5),t.\u0275\u0275viewQuery(B,5),t.\u0275\u0275viewQuery(M,5)),2&e){let o;t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(n.containerViewChild=o.first),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(n.contentViewChild=o.first),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(n.xBarViewChild=o.first),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(n.yBarViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:D,decls:11,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[1,"p-scrollpanel-wrapper"],[1,"p-scrollpanel-content"],["content",""],[4,"ngTemplateOutlet"],[1,"p-scrollpanel-bar","p-scrollpanel-bar-x"],["xBar",""],[1,"p-scrollpanel-bar","p-scrollpanel-bar-y"],["yBar",""]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0,1)(2,"div",2)(3,"div",3,4),t.\u0275\u0275projection(5),t.\u0275\u0275template(6,E,1,0,"ng-container",5),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(7,"div",6,7)(9,"div",8,9),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275classMap(n.styleClass),t.\u0275\u0275property("ngClass","p-scrollpanel p-component")("ngStyle",n.style),t.\u0275\u0275advance(6),t.\u0275\u0275property("ngTemplateOutlet",n.contentTemplate))},dependencies:[d.NgClass,d.NgTemplateOutlet,d.NgStyle],styles:[".p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;z-index:1;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;z-index:2;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}\n"],encapsulation:2,changeDetection:0}),l})(),x=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.CommonModule]}),l})()}}]);