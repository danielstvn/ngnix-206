(self.webpackChunkzero_dd_mf=self.webpackChunkzero_dd_mf||[]).push([[3718,2847],{93718:(lt,b,z)=>{z.r(b),z.d(b,{Scroller:()=>nt,ScrollerModule:()=>ot});var I=z(90944),e=z(45449),V=z(60859),S=z(41045);const O=["element"],P=["content"];function D(s,a){1&s&&e.\u0275\u0275elementContainer(0)}const v=function(s,a){return{$implicit:s,options:a}};function F(s,a){if(1&s&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,D,1,0,"ng-container",7),e.\u0275\u0275elementContainerEnd()),2&s){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",e.\u0275\u0275pureFunction2(2,v,t.loadedItems,t.getContentOptions()))}}function R(s,a){1&s&&e.\u0275\u0275elementContainer(0)}function M(s,a){if(1&s&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,R,1,0,"ng-container",7),e.\u0275\u0275elementContainerEnd()),2&s){const t=a.$implicit,i=a.index,n=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",e.\u0275\u0275pureFunction2(2,v,t,n.getOptions(i)))}}const H=function(s){return{"p-scroller-loading":s}};function W(s,a){if(1&s&&(e.\u0275\u0275elementStart(0,"div",8,9),e.\u0275\u0275template(2,M,2,5,"ng-container",10),e.\u0275\u0275elementEnd()),2&s){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,H,t.d_loading))("ngStyle",t.contentStyle),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.loadedItems)("ngForTrackBy",t._trackBy||t.index)}}function A(s,a){if(1&s&&e.\u0275\u0275element(0,"div",11),2&s){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngStyle",t.spacerStyle)}}function B(s,a){1&s&&e.\u0275\u0275elementContainer(0)}const k=function(s){return{numCols:s}},L=function(s){return{options:s}};function N(s,a){if(1&s&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,B,1,0,"ng-container",7),e.\u0275\u0275elementContainerEnd()),2&s){const t=a.index,i=e.\u0275\u0275nextContext(4);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",i.loaderTemplate)("ngTemplateOutletContext",e.\u0275\u0275pureFunction1(4,L,i.getLoaderOptions(t,i.both&&e.\u0275\u0275pureFunction1(2,k,i._numItemsInViewport.cols))))}}function Q(s,a){if(1&s&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,N,2,6,"ng-container",14),e.\u0275\u0275elementContainerEnd()),2&s){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.loaderArr)}}function $(s,a){1&s&&e.\u0275\u0275elementContainer(0)}const j=function(){return{styleClass:"p-scroller-loading-icon"}};function K(s,a){if(1&s&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,$,1,0,"ng-container",7),e.\u0275\u0275elementContainerEnd()),2&s){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t.loaderIconTemplate)("ngTemplateOutletContext",e.\u0275\u0275pureFunction1(3,L,e.\u0275\u0275pureFunction0(2,j)))}}function U(s,a){1&s&&e.\u0275\u0275element(0,"i",16)}function Z(s,a){if(1&s&&(e.\u0275\u0275template(0,K,2,5,"ng-container",0),e.\u0275\u0275template(1,U,1,0,"ng-template",null,15,e.\u0275\u0275templateRefExtractor)),2&s){const t=e.\u0275\u0275reference(2),i=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("ngIf",i.loaderIconTemplate)("ngIfElse",t)}}const G=function(s){return{"p-component-overlay":s}};function J(s,a){if(1&s&&(e.\u0275\u0275elementStart(0,"div",12),e.\u0275\u0275template(1,Q,2,1,"ng-container",0),e.\u0275\u0275template(2,Z,3,2,"ng-template",null,13,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()),2&s){const t=e.\u0275\u0275reference(3),i=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(3,G,!i.loaderTemplate)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.loaderTemplate)("ngIfElse",t)}}const X=function(s,a,t){return{"p-scroller":!0,"p-scroller-inline":s,"p-both-scroll":a,"p-horizontal-scroll":t}};function Y(s,a){if(1&s){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",2,3),e.\u0275\u0275listener("scroll",function(n){e.\u0275\u0275restoreView(t);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.onContainerScroll(n))}),e.\u0275\u0275template(3,F,2,5,"ng-container",0),e.\u0275\u0275template(4,W,3,6,"ng-template",null,4,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(6,A,1,1,"div",5),e.\u0275\u0275template(7,J,4,5,"div",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&s){const t=e.\u0275\u0275reference(5),i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275classMap(i._styleClass),e.\u0275\u0275property("ngStyle",i._style)("ngClass",e.\u0275\u0275pureFunction3(10,X,i.inline,i.both,i.horizontal)),e.\u0275\u0275attribute("id",i._id)("tabindex",i.tabindex),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",i.contentTemplate)("ngIfElse",t),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i._showSpacer),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function q(s,a){1&s&&e.\u0275\u0275elementContainer(0)}const tt=function(s,a){return{rows:s,columns:a}};function et(s,a){if(1&s&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,q,1,0,"ng-container",7),e.\u0275\u0275elementContainerEnd()),2&s){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",e.\u0275\u0275pureFunction2(5,v,t.items,e.\u0275\u0275pureFunction2(2,tt,t._items,t.loadedColumns)))}}function it(s,a){if(1&s&&(e.\u0275\u0275projection(0),e.\u0275\u0275template(1,et,2,8,"ng-container",17)),2&s){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.contentTemplate)}}const st=["*"];let nt=(()=>{class s{constructor(t,i){this.cd=t,this.zone=i,this.onLazyLoad=new e.EventEmitter,this.onScroll=new e.EventEmitter,this.onScrollIndexChange=new e.EventEmitter,this._tabindex=0,this._itemSize=0,this._orientation="vertical",this._step=0,this._delay=0,this._resizeDelay=10,this._appendOnly=!1,this._inline=!1,this._lazy=!1,this._disabled=!1,this._loaderDisabled=!1,this._showSpacer=!0,this._showLoader=!1,this._autoSize=!1,this.d_loading=!1,this.first=0,this.last=0,this.page=0,this.numItemsInViewport=0,this.lastScrollPos=0,this.lazyLoadState={},this.loaderArr=[],this.spacerStyle={},this.contentStyle={},this.initialized=!1}get id(){return this._id}set id(t){this._id=t}get style(){return this._style}set style(t){this._style=t}get styleClass(){return this._styleClass}set styleClass(t){this._styleClass=t}get tabindex(){return this._tabindex}set tabindex(t){this._tabindex=t}get items(){return this._items}set items(t){this._items=t}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t}get scrollHeight(){return this._scrollHeight}set scrollHeight(t){this._scrollHeight=t}get scrollWidth(){return this._scrollWidth}set scrollWidth(t){this._scrollWidth=t}get orientation(){return this._orientation}set orientation(t){this._orientation=t}get step(){return this._step}set step(t){this._step=t}get delay(){return this._delay}set delay(t){this._delay=t}get resizeDelay(){return this._resizeDelay}set resizeDelay(t){this._resizeDelay=t}get appendOnly(){return this._appendOnly}set appendOnly(t){this._appendOnly=t}get inline(){return this._inline}set inline(t){this._inline=t}get lazy(){return this._lazy}set lazy(t){this._lazy=t}get disabled(){return this._disabled}set disabled(t){this._disabled=t}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(t){this._loaderDisabled=t}get columns(){return this._columns}set columns(t){this._columns=t}get showSpacer(){return this._showSpacer}set showSpacer(t){this._showSpacer=t}get showLoader(){return this._showLoader}set showLoader(t){this._showLoader=t}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(t){this._numToleratedItems=t}get loading(){return this._loading}set loading(t){this._loading=t}get autoSize(){return this._autoSize}set autoSize(t){this._autoSize=t}get trackBy(){return this._trackBy}set trackBy(t){this._trackBy=t}get options(){return this._options}set options(t){this._options=t,t&&"object"==typeof t&&Object.entries(t).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get vertical(){return"vertical"===this._orientation}get horizontal(){return"horizontal"===this._orientation}get both(){return"both"===this._orientation}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(t=>this._columns?t:t.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}get isPageChanged(){return!this._step||this.page!==this.getPageByFirst()}ngOnInit(){this.setInitialState()}ngOnChanges(t){let i=!1;if(t.loading){const{previousValue:n,currentValue:o}=t.loading;this.lazy&&n!==o&&o!==this.d_loading&&(this.d_loading=o,i=!0)}if(t.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),t.numToleratedItems){const{previousValue:n,currentValue:o}=t.numToleratedItems;n!==o&&o!==this.d_numToleratedItems&&(this.d_numToleratedItems=o)}if(t.options){const{previousValue:n,currentValue:o}=t.options;this.lazy&&n?.loading!==o?.loading&&o?.loading!==this.d_loading&&(this.d_loading=o.loading,i=!0),n?.numToleratedItems!==o?.numToleratedItems&&o?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=o.numToleratedItems)}this.initialized&&!i&&(t.items?.previousValue?.length!==t.items?.currentValue?.length||t.itemSize||t.scrollHeight||t.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"item":default:this.itemTemplate=t.template;break;case"loader":this.loaderTemplate=t.template;break;case"loadericon":this.loaderIconTemplate=t.template}})}ngAfterViewInit(){this.viewInit()}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){S.DomHandler.isVisible(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=S.DomHandler.getWidth(this.elementViewChild.nativeElement),this.defaultHeight=S.DomHandler.getHeight(this.elementViewChild.nativeElement),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(t){this.contentEl=t||this.contentViewChild?.nativeElement||S.DomHandler.findSingle(this.elementViewChild?.nativeElement,".p-scroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[],this.spacerStyle={},this.contentStyle={}}getElementRef(){return this.elementViewChild}getPageByFirst(){return Math.floor((this.first+4*this.d_numToleratedItems)/(this._step||1))}scrollTo(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.elementViewChild?.nativeElement?.scrollTo(t)}scrollToIndex(t,i="auto"){const{numToleratedItems:n}=this.calculateNumItems(),o=this.getContentPosition(),l=(d=0,c)=>d<=c?0:d,r=(d,c,w)=>d*c+w,_=(d=0,c=0)=>this.scrollTo({left:d,top:c,behavior:i});this.both?(this.first={rows:l(t[0],n[0]),cols:l(t[1],n[1])},_(r(this.first.cols,this._itemSize[1],o.left),r(this.first.rows,this._itemSize[0],o.top))):(this.first=l(t,n),this.horizontal?_(r(this.first,this._itemSize,o.left),0):_(0,r(this.first,this._itemSize,o.top)))}scrollInView(t,i,n="auto"){if(i){const{first:o,viewport:l}=this.getRenderedRange(),r=(c=0,w=0)=>this.scrollTo({left:c,top:w,behavior:n}),d="to-end"===i;if("to-start"===i){if(this.both)l.first.rows-o.rows>t[0]?r(l.first.cols*this._itemSize[1],(l.first.rows-1)*this._itemSize[0]):l.first.cols-o.cols>t[1]&&r((l.first.cols-1)*this._itemSize[1],l.first.rows*this._itemSize[0]);else if(l.first-o>t){const c=(l.first-1)*this._itemSize;this.horizontal?r(c,0):r(0,c)}}else if(d)if(this.both)l.last.rows-o.rows<=t[0]+1?r(l.first.cols*this._itemSize[1],(l.first.rows+1)*this._itemSize[0]):l.last.cols-o.cols<=t[1]+1&&r((l.first.cols+1)*this._itemSize[1],l.first.rows*this._itemSize[0]);else if(l.last-o<=t+1){const c=(l.first+1)*this._itemSize;this.horizontal?r(c,0):r(0,c)}}else this.scrollToIndex(t,n)}getRenderedRange(){const t=(o,l)=>Math.floor(o/(l||o));let i=this.first,n=0;if(this.elementViewChild?.nativeElement){const{scrollTop:o,scrollLeft:l}=this.elementViewChild.nativeElement;this.both?(i={rows:t(o,this._itemSize[0]),cols:t(l,this._itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols}):(i=t(this.horizontal?l:o,this._itemSize),n=i+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:i,last:n}}}calculateNumItems(){const t=this.getContentPosition(),i=this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-t.left:0,n=this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-t.top:0,o=(d,c)=>Math.ceil(d/(c||d)),l=d=>Math.ceil(d/2),r=this.both?{rows:o(n,this._itemSize[0]),cols:o(i,this._itemSize[1])}:o(this.horizontal?i:n,this._itemSize);return{numItemsInViewport:r,numToleratedItems:this.d_numToleratedItems||(this.both?[l(r.rows),l(r.cols)]:l(r))}}calculateOptions(){const{numItemsInViewport:t,numToleratedItems:i}=this.calculateNumItems(),n=(r,_,d,c=!1)=>this.getLast(r+_+(r<d?2:3)*d,c),o=this.first,l=this.both?{rows:n(this.first.rows,t.rows,i[0]),cols:n(this.first.cols,t.cols,i[1],!0)}:n(this.first,t,i);this.last=l,this.numItemsInViewport=t,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:t.rows}).map(()=>Array.from({length:t.cols})):Array.from({length:t})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:o.cols}:0:o,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto";const{offsetWidth:t,offsetHeight:i}=this.contentEl;(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=(t<this.defaultWidth?t:this.defaultWidth)+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=(i<this.defaultHeight?i:this.defaultHeight)+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth=""}})}getLast(t=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,t):0}getContentPosition(){if(this.contentEl){const t=getComputedStyle(this.contentEl),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),n=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),o=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),l=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:n,top:o,bottom:l,x:i+n,y:o+l}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){const t=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||t.offsetWidth}px`,n=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||t.offsetHeight}px`,o=(l,r)=>this.elementViewChild.nativeElement.style[l]=r;this.both||this.horizontal?(o("height",n),o("width",i)):o("height",n)}}setSpacerSize(){if(this._items){const t=this.getContentPosition(),i=(n,o,l,r=0)=>this.spacerStyle={...this.spacerStyle,[`${n}`]:(o||[]).length*l+r+"px"};this.both?(i("height",this._items,this._itemSize[0],t.y),i("width",this._columns||this._items[1],this._itemSize[1],t.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,t.x):i("height",this._items,this._itemSize,t.y)}}setContentPosition(t){if(this.contentEl&&!this._appendOnly){const i=t?t.first:this.first,n=(l,r)=>l*r,o=(l=0,r=0)=>this.contentStyle={...this.contentStyle,transform:`translate3d(${l}px, ${r}px, 0)`};if(this.both)o(n(i.cols,this._itemSize[1]),n(i.rows,this._itemSize[0]));else{const l=n(i,this._itemSize);this.horizontal?o(l,0):o(0,l)}}}onScrollPositionChange(t){const i=t.target,n=this.getContentPosition(),o=(h,m)=>h?h>m?h-m:h:0,l=(h,m)=>Math.floor(h/(m||h)),r=(h,m,p,u,f,y)=>h<=f?f:y?p-u-f:m+f-1,_=(h,m,p,u,f,y,T)=>h<=y?0:Math.max(0,T?h<m?p:h-y:h>m?p:h-2*y),d=(h,m,p,u,f,y=!1)=>{let T=m+u+2*f;return h>=f&&(T+=f+1),this.getLast(T,y)},c=o(i.scrollTop,n.top),w=o(i.scrollLeft,n.left);let g=this.both?{rows:0,cols:0}:0,C=this.last,x=!1,E=this.lastScrollPos;if(this.both){const h=this.lastScrollPos.top<=c,m=this.lastScrollPos.left<=w;if(!this._appendOnly||this._appendOnly&&(h||m)){const p={rows:l(c,this._itemSize[0]),cols:l(w,this._itemSize[1])},u={rows:r(p.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],h),cols:r(p.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};g={rows:_(p.rows,u.rows,this.first.rows,0,0,this.d_numToleratedItems[0],h),cols:_(p.cols,u.cols,this.first.cols,0,0,this.d_numToleratedItems[1],m)},C={rows:d(p.rows,g.rows,0,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:d(p.cols,g.cols,0,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},x=g.rows!==this.first.rows||C.rows!==this.last.rows||g.cols!==this.first.cols||C.cols!==this.last.cols,E={top:c,left:w}}}else{const h=this.horizontal?w:c,m=this.lastScrollPos<=h;if(!this._appendOnly||this._appendOnly&&m){const p=l(h,this._itemSize);g=_(p,r(p,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),this.first,0,0,this.d_numToleratedItems,m),C=d(p,g,0,this.numItemsInViewport,this.d_numToleratedItems),x=g!==this.first||C!==this.last,E=h}}return{first:g,last:C,isRangeChanged:x,scrollPos:E}}onScrollChange(t){const{first:i,last:n,isRangeChanged:o,scrollPos:l}=this.onScrollPositionChange(t);if(o){const r={first:i,last:n};if(this.setContentPosition(r),this.first=i,this.last=n,this.lastScrollPos=l,this.handleEvents("onScrollIndexChange",r),this._lazy&&this.isPageChanged){const _={first:this._step?Math.min(this.getPageByFirst()*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst()+1)*this._step:n,this.items.length)};(this.lazyLoadState.first!==_.first||this.lazyLoadState.last!==_.last)&&this.handleEvents("onLazyLoad",_),this.lazyLoadState=_}}}onContainerScroll(t){if(this.handleEvents("onScroll",{originalEvent:t}),this._delay&&this.isPageChanged){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:i}=this.onScrollPositionChange(t);(i||this._step&&this.isPageChanged)&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this._lazy||void 0===this._loading)&&(this.d_loading=!1,this.page=this.getPageByFirst(),this.cd.detectChanges())},this._delay)}else!this.d_loading&&this.onScrollChange(t)}bindResizeListener(){this.windowResizeListener||this.zone.runOutsideAngular(()=>{this.windowResizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.windowResizeListener),window.addEventListener("orientationchange",this.windowResizeListener)})}unbindResizeListener(){this.windowResizeListener&&(window.removeEventListener("resize",this.windowResizeListener),window.removeEventListener("orientationchange",this.windowResizeListener),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(S.DomHandler.isVisible(this.elementViewChild?.nativeElement)){const[t,i]=[S.DomHandler.getWidth(this.elementViewChild.nativeElement),S.DomHandler.getHeight(this.elementViewChild.nativeElement)],[n,o]=[t!==this.defaultWidth,i!==this.defaultHeight];(this.both?n||o:this.horizontal?n:this.vertical&&o)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=t,this.defaultHeight=i,this.init()})}},this._resizeDelay)}handleEvents(t,i){return this.options&&this.options[t]?this.options[t](i):this[t].emit(i)}getContentOptions(){return{contentStyleClass:"p-scroller-content "+(this.d_loading?"p-scroller-loading":""),items:this.loadedItems,getItemOptions:t=>this.getOptions(t),loading:this.d_loading,getLoaderOptions:(t,i)=>this.getLoaderOptions(t,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(t){const i=(this._items||[]).length,n=this.both?this.first.rows+t:this.first+t;return{index:n,count:i,first:0===n,last:n===i-1,even:n%2==0,odd:n%2!=0}}getLoaderOptions(t,i){const n=this.loaderArr.length;return{index:t,count:n,first:0===t,last:t===n-1,even:t%2==0,odd:t%2!=0,...i}}}return s.\u0275fac=function(t){return new(t||s)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(e.NgZone))},s.\u0275cmp=e.\u0275\u0275defineComponent({type:s,selectors:[["p-scroller"]],contentQueries:function(t,i,n){if(1&t&&e.\u0275\u0275contentQuery(n,V.PrimeTemplate,4),2&t){let o;e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(i.templates=o)}},viewQuery:function(t,i){if(1&t&&(e.\u0275\u0275viewQuery(O,5),e.\u0275\u0275viewQuery(P,5)),2&t){let n;e.\u0275\u0275queryRefresh(n=e.\u0275\u0275loadQuery())&&(i.elementViewChild=n.first),e.\u0275\u0275queryRefresh(n=e.\u0275\u0275loadQuery())&&(i.contentViewChild=n.first)}},hostAttrs:[1,"p-scroller-viewport","p-element"],inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[e.\u0275\u0275NgOnChangesFeature],ngContentSelectors:st,decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["disabledContainer",""],[3,"ngStyle","ngClass","scroll"],["element",""],["buildInContent",""],["class","p-scroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-scroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-scroller-content",3,"ngClass","ngStyle"],["content",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-scroller-spacer",3,"ngStyle"],[1,"p-scroller-loader",3,"ngClass"],["buildInLoader",""],[4,"ngFor","ngForOf"],["buildInLoaderIcon",""],[1,"p-scroller-loading-icon","pi","pi-spinner","pi-spin"],[4,"ngIf"]],template:function(t,i){if(1&t&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,Y,8,14,"ng-container",0),e.\u0275\u0275template(1,it,2,1,"ng-template",null,1,e.\u0275\u0275templateRefExtractor)),2&t){const n=e.\u0275\u0275reference(2);e.\u0275\u0275property("ngIf",!i._disabled)("ngIfElse",n)}},dependencies:[I.NgClass,I.NgForOf,I.NgIf,I.NgTemplateOutlet,I.NgStyle],styles:["p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{font-size:2rem}.p-scroller-inline .p-scroller-content{position:static}\n"],encapsulation:2}),s})(),ot=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=e.\u0275\u0275defineInjector({imports:[I.CommonModule]}),s})()}}]);