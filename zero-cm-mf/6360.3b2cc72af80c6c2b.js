(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[6360],{27963:(A,_,c)=>{c.r(_),c.d(_,{SpeedDial:()=>R,SpeedDialModule:()=>$});var e=c(45449),m=c(90944),g=c(60859),u=c(463),C=c(61711),h=c(46785),y=c(41045),f=c(10730);const b=["container"],k=["list"];function x(n,a){1&n&&e.\u0275\u0275elementContainer(0)}function D(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,x,1,0,"ng-container",8),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t.buttonTemplate)}}function S(n,a){if(1&n&&e.\u0275\u0275element(0,"span",14),2&n){const t=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("ngClass",t.icon)}}const v=function(n){return{"p-disabled":n}},E=function(){return{exact:!1}};function I(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",12),e.\u0275\u0275listener("click",function(l){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext().$implicit,o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.onItemClick(l,s))})("keydown.enter",function(l){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(),o=s.$implicit,d=s.index,r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.onItemClick(l,o,d))}),e.\u0275\u0275template(1,S,1,1,"span",13),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext().$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("routerLink",t.routerLink)("queryParams",t.queryParams)("ngClass",e.\u0275\u0275pureFunction1(14,v,t.disabled))("routerLinkActiveOptions",t.routerLinkActiveOptions||e.\u0275\u0275pureFunction0(16,E))("target",t.target)("fragment",t.fragment)("queryParamsHandling",t.queryParamsHandling)("preserveFragment",t.preserveFragment)("skipLocationChange",t.skipLocationChange)("replaceUrl",t.replaceUrl)("state",t.state),e.\u0275\u0275attribute("id",t.id)("tabindex",t.disabled||i.readonly?null:t.tabindex?t.tabindex:"0"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.icon)}}function w(n,a){if(1&n&&e.\u0275\u0275element(0,"span",14),2&n){const t=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275property("ngClass",t.icon)}}function M(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",15),e.\u0275\u0275listener("click",function(l){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext().$implicit,o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.onItemClick(l,s))})("keydown.enter",function(l){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(),o=s.$implicit,d=s.index,r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.onItemClick(l,o,d))}),e.\u0275\u0275template(1,w,1,1,"span",13),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(),i=t.$implicit,l=t.index,s=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(6,v,i.disabled))("target",i.target),e.\u0275\u0275attribute("href",i.url||null,e.\u0275\u0275sanitizeUrl)("id",i.id)("tabindex",i.disabled||l!==s.activeIndex&&s.readonly?null:i.tabindex?i.tabindex:"0"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.icon)}}const O=function(n){return{"p-hidden":n}};function L(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"li",9),e.\u0275\u0275template(1,I,2,17,"a",10),e.\u0275\u0275template(2,M,2,8,"ng-template",null,11,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()),2&n){const t=a.$implicit,i=a.index,l=e.\u0275\u0275reference(3),s=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngStyle",s.getItemStyle(i))("tooltipOptions",t.tooltipOptions)("ngClass",e.\u0275\u0275pureFunction1(5,O,!1===t.visible)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",s.isClickableRouterLink(t))("ngIfElse",l)}}const T=function(n){return{"p-speeddial-mask":!0,"p-speeddial-mask-visible":n}};function P(n,a){if(1&n&&e.\u0275\u0275element(0,"div",0),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275classMap(t.maskClassName),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,T,t.visible))("ngStyle",t.maskStyle)}}let R=(()=>{class n{constructor(t,i){this.el=t,this.cd=i,this.model=null,this.direction="up",this.transitionDelay=30,this.type="linear",this.radius=0,this.mask=!1,this.disabled=!1,this.hideOnClickOutside=!0,this.showIcon="pi pi-plus",this.rotateAnimation=!0,this.onVisibleChange=new e.EventEmitter,this.visibleChange=new e.EventEmitter,this.onClick=new e.EventEmitter,this.onShow=new e.EventEmitter,this.onHide=new e.EventEmitter,this.isItemClicked=!1,this._visible=!1}get visible(){return this._visible}set visible(t){this._visible=t,this._visible?this.bindDocumentClickListener():this.unbindDocumentClickListener()}ngAfterViewInit(){if("linear"!==this.type){const t=y.DomHandler.findSingle(this.container.nativeElement,".p-speeddial-button"),i=y.DomHandler.findSingle(this.list.nativeElement,".p-speeddial-item");if(t&&i){const l=Math.abs(t.offsetWidth-i.offsetWidth),s=Math.abs(t.offsetHeight-i.offsetHeight);this.list.nativeElement.style.setProperty("--item-diff-x",l/2+"px"),this.list.nativeElement.style.setProperty("--item-diff-y",s/2+"px")}}}ngAfterContentInit(){this.templates.forEach(t=>{"button"===t.getType()&&(this.buttonTemplate=t.template)})}show(){this.onVisibleChange.emit(!0),this.visibleChange.emit(!0),this._visible=!0,this.onShow.emit(),this.bindDocumentClickListener(),this.cd.markForCheck()}hide(){this.onVisibleChange.emit(!1),this.visibleChange.emit(!1),this._visible=!1,this.onHide.emit(),this.unbindDocumentClickListener(),this.cd.markForCheck()}onButtonClick(t){this.visible?this.hide():this.show(),this.onClick.emit(t),this.isItemClicked=!0}onItemClick(t,i){i.command&&i.command({originalEvent:t,item:i}),this.hide(),this.isItemClicked=!0}calculatePointStyle(t){const i=this.type;if("linear"!==i){const l=this.model.length,s=this.radius||20*l;if("circle"===i){const o=2*Math.PI/l;return{left:`calc(${s*Math.cos(o*t)}px + var(--item-diff-x, 0px))`,top:`calc(${s*Math.sin(o*t)}px + var(--item-diff-y, 0px))`}}if("semi-circle"===i){const o=this.direction,d=Math.PI/(l-1),r=`calc(${s*Math.cos(d*t)}px + var(--item-diff-x, 0px))`,p=`calc(${s*Math.sin(d*t)}px + var(--item-diff-y, 0px))`;if("up"===o)return{left:r,bottom:p};if("down"===o)return{left:r,top:p};if("left"===o)return{right:p,top:r};if("right"===o)return{left:p,top:r}}else if("quarter-circle"===i){const o=this.direction,d=Math.PI/(2*(l-1)),r=`calc(${s*Math.cos(d*t)}px + var(--item-diff-x, 0px))`,p=`calc(${s*Math.sin(d*t)}px + var(--item-diff-y, 0px))`;if("up-left"===o)return{right:r,bottom:p};if("up-right"===o)return{left:r,bottom:p};if("down-left"===o)return{right:p,top:r};if("down-right"===o)return{left:p,top:r}}}return{}}calculateTransitionDelay(t){return(this.visible?t:this.model.length-t-1)*this.transitionDelay}containerClass(){return{[`p-speeddial p-component p-speeddial-${this.type}`]:!0,[`p-speeddial-direction-${this.direction}`]:"circle"!==this.type,"p-speeddial-opened":this.visible,"p-disabled":this.disabled}}buttonClass(){return{"p-speeddial-button p-button-rounded":!0,"p-speeddial-rotate":this.rotateAnimation&&!this.hideIcon,[this.buttonClassName]:!0}}get buttonIconClass(){return!this.visible&&this.showIcon||!this.hideIcon?this.showIcon:this.hideIcon}getItemStyle(t){return{transitionDelay:`${this.calculateTransitionDelay(t)}ms`,...this.calculatePointStyle(t)}}isClickableRouterLink(t){return t.routerLink&&!this.disabled&&!t.disabled}isOutsideClicked(t){return this.container&&!(this.container.nativeElement.isSameNode(t.target)||this.container.nativeElement.contains(t.target)||this.isItemClicked)}bindDocumentClickListener(){!this.documentClickListener&&this.hideOnClickOutside&&(this.documentClickListener=t=>{this.visible&&this.isOutsideClicked(t)&&this.hide(),this.isItemClicked=!1},document.addEventListener("click",this.documentClickListener))}unbindDocumentClickListener(){this.documentClickListener&&(document.removeEventListener("click",this.documentClickListener),this.documentClickListener=null)}ngOnDestroy(){this.unbindDocumentClickListener()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-speedDial"]],contentQueries:function(t,i,l){if(1&t&&e.\u0275\u0275contentQuery(l,g.PrimeTemplate,4),2&t){let s;e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(i.templates=s)}},viewQuery:function(t,i){if(1&t&&(e.\u0275\u0275viewQuery(b,5),e.\u0275\u0275viewQuery(k,5)),2&t){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.container=l.first),e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.list=l.first)}},hostAttrs:[1,"p-element"],inputs:{id:"id",model:"model",visible:"visible",style:"style",className:"className",direction:"direction",transitionDelay:"transitionDelay",type:"type",radius:"radius",mask:"mask",disabled:"disabled",hideOnClickOutside:"hideOnClickOutside",buttonStyle:"buttonStyle",buttonClassName:"buttonClassName",maskStyle:"maskStyle",maskClassName:"maskClassName",showIcon:"showIcon",hideIcon:"hideIcon",rotateAnimation:"rotateAnimation"},outputs:{onVisibleChange:"onVisibleChange",visibleChange:"visibleChange",onClick:"onClick",onShow:"onShow",onHide:"onHide"},decls:8,vars:12,consts:[[3,"ngClass","ngStyle"],["container",""],["pRipple","","pButton","",3,"icon","ngClass","click"],[4,"ngIf"],["role","menu",1,"p-speeddial-list"],["list",""],["class","p-speeddial-item","pTooltip","",3,"ngStyle","tooltipOptions","ngClass",4,"ngFor","ngForOf"],[3,"ngClass","class","ngStyle",4,"ngIf"],[4,"ngTemplateOutlet"],["pTooltip","",1,"p-speeddial-item",3,"ngStyle","tooltipOptions","ngClass"],["pRipple","","class","p-speeddial-action","role","menuitem",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter",4,"ngIf","ngIfElse"],["elseBlock",""],["pRipple","","role","menuitem",1,"p-speeddial-action",3,"routerLink","queryParams","ngClass","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter"],["class","p-speeddial-action-icon",3,"ngClass",4,"ngIf"],[1,"p-speeddial-action-icon",3,"ngClass"],["role","menuitem","pRipple","",1,"p-speeddial-action",3,"ngClass","target","click","keydown.enter"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",0,1)(2,"button",2),e.\u0275\u0275listener("click",function(s){return i.onButtonClick(s)}),e.\u0275\u0275template(3,D,2,1,"ng-container",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"ul",4,5),e.\u0275\u0275template(6,L,4,7,"li",6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(7,P,1,6,"div",7)),2&t&&(e.\u0275\u0275classMap(i.className),e.\u0275\u0275property("ngClass",i.containerClass())("ngStyle",i.style),e.\u0275\u0275attribute("id",i.id),e.\u0275\u0275advance(2),e.\u0275\u0275styleMap(i.buttonStyle),e.\u0275\u0275property("icon",i.buttonIconClass)("ngClass",i.buttonClass()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.buttonTemplate),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",i.model),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.mask&&i.visible))},dependencies:[m.NgClass,m.NgStyle,C.Ripple,u.ButtonDirective,m.NgIf,m.NgTemplateOutlet,m.NgForOf,h.Tooltip,f.RouterLinkWithHref],styles:[".p-speeddial{position:absolute;display:flex;z-index:1}.p-speeddial-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center;transition:top 0s linear .2s;pointer-events:none}.p-speeddial-item{transform:scale(0);opacity:0;transition:transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;will-change:transform}.p-speeddial-action{display:flex;align-items:center;justify-content:center;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.p-speeddial-circle .p-speeddial-item,.p-speeddial-semi-circle .p-speeddial-item,.p-speeddial-quarter-circle .p-speeddial-item{position:absolute}.p-speeddial-rotate{transition:transform .25s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform}.p-speeddial-mask{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .25s cubic-bezier(.25,.8,.25,1)}.p-speeddial-mask-visible{pointer-events:none;opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.p-speeddial-opened .p-speeddial-list{pointer-events:auto}.p-speeddial-opened .p-speeddial-item{transform:scale(1);opacity:1}.p-speeddial-opened .p-speeddial-rotate{transform:rotate(45deg)}.p-speeddial-direction-up{align-items:center;flex-direction:column-reverse}.p-speeddial-direction-up .p-speeddial-list{flex-direction:column-reverse}.p-speeddial-direction-down{align-items:center;flex-direction:column}.p-speeddial-direction-down .p-speeddial-list{flex-direction:column}.p-speeddial-direction-left{justify-content:center;flex-direction:row-reverse}.p-speeddial-direction-left .p-speeddial-list{flex-direction:row-reverse}.p-speeddial-direction-right{justify-content:center;flex-direction:row}.p-speeddial-direction-right .p-speeddial-list{flex-direction:row}\n"],encapsulation:2,changeDetection:0}),n})(),$=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.CommonModule,u.ButtonModule,C.RippleModule,h.TooltipModule,f.RouterModule],g.SharedModule,u.ButtonModule,h.TooltipModule,f.RouterModule]}),n})()}}]);