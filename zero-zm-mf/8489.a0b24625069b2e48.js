(self.webpackChunkzero_zm_mf=self.webpackChunkzero_zm_mf||[]).push([[8489],{86467:(k,d,s)=>{s.r(d),s.d(d,{OrganizationChart:()=>u,OrganizationChartModule:()=>D,OrganizationChartNode:()=>g});var e=s(45449),l=s(37340),c=s(90944),p=s(60859),_=s(13406);const f=["pOrganizationChartNode",""];function C(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.node.label)}}function v(n,i){1&n&&e.\u0275\u0275elementContainer(0)}const y=function(n){return{$implicit:n}};function z(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,v,1,0,"ng-container",7),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t.chart.getTemplateForNode(t.node))("ngTemplateOutletContext",e.\u0275\u0275pureFunction1(2,y,t.node))}}const x=function(n,i){return{"pi-chevron-down":n,"pi-chevron-up":i}};function N(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"a",8),e.\u0275\u0275listener("click",function(a){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(r.toggleNode(a,r.node))})("keydown.enter",function(a){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(r.toggleNode(a,r.node))}),e.\u0275\u0275element(1,"i",9),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(1,x,t.node.expanded,!t.node.expanded))}}function O(n,i){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"td"),e.\u0275\u0275element(2,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275attribute("colspan",t.colspan)}}const h=function(n){return{"p-organizationchart-line-top":n}};function b(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"td",11),e.\u0275\u0275text(1,"\xa0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"td",12),e.\u0275\u0275text(3,"\xa0"),e.\u0275\u0275elementEnd()),2&n){const o=i.last;e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,h,!i.first)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,h,!o))}}function E(n,i){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,b,4,6,"ng-template",10),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.node.children)}}function S(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"td",13),e.\u0275\u0275element(1,"table",14),e.\u0275\u0275elementEnd()),2&n){const t=i.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("node",t)}}const M=function(n,i){return{"p-organizationchart-node-content":!0,"p-organizationchart-selectable-node":n,"p-highlight":i}};function T(n,i){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tbody")(1,"tr")(2,"td")(3,"div",1),e.\u0275\u0275listener("click",function(a){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.onNodeClick(a,r.node))}),e.\u0275\u0275template(4,C,2,1,"div",0),e.\u0275\u0275template(5,z,2,4,"div",0),e.\u0275\u0275template(6,N,2,4,"a",2),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"tr",3)(8,"td"),e.\u0275\u0275element(9,"div",4),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"tr",3),e.\u0275\u0275template(11,O,3,1,"ng-container",0),e.\u0275\u0275template(12,E,2,1,"ng-container",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"tr",5),e.\u0275\u0275template(14,S,2,1,"td",6),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275attribute("colspan",t.colspan),e.\u0275\u0275advance(1),e.\u0275\u0275classMap(t.node.styleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(17,M,t.chart.selectionMode&&!1!==t.node.selectable,t.isSelected())),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.chart.getTemplateForNode(t.node)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.chart.getTemplateForNode(t.node)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.leaf),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",!t.leaf&&t.node.expanded?"p-organizationchart-node-visible":"p-organizationchart-node-hidden")("@childState","in"),e.\u0275\u0275advance(1),e.\u0275\u0275attribute("colspan",t.colspan),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",!t.leaf&&t.node.expanded?"p-organizationchart-node-visible":"p-organizationchart-node-hidden")("@childState","in"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.node.children&&1===t.node.children.length),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.node.children&&t.node.children.length>1),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",!t.leaf&&t.node.expanded?"p-organizationchart-node-visible":"p-organizationchart-node-hidden")("@childState","in"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.node.children)}}function I(n,i){if(1&n&&e.\u0275\u0275element(0,"table",2),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("node",t.root)}}const w=function(n){return{"p-organizationchart p-component":!0,"p-organizationchart-preservespace":n}};let g=(()=>{class n{constructor(t,o){this.cd=o,this.chart=t,this.subscription=this.chart.selectionSource$.subscribe(()=>{this.cd.markForCheck()})}get leaf(){return 0!=this.node.leaf&&!(this.node.children&&this.node.children.length)}get colspan(){return this.node.children&&this.node.children.length?2*this.node.children.length:null}onNodeClick(t,o){this.chart.onNodeClick(t,o)}toggleNode(t,o){o.expanded=!o.expanded,o.expanded?this.chart.onNodeExpand.emit({originalEvent:t,node:this.node}):this.chart.onNodeCollapse.emit({originalEvent:t,node:this.node}),t.preventDefault()}isSelected(){return this.chart.isSelected(this.node)}ngOnDestroy(){this.subscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject((0,e.forwardRef)(()=>u)),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["","pOrganizationChartNode",""]],hostAttrs:[1,"p-element"],inputs:{node:"node",root:"root",first:"first",last:"last"},attrs:f,decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngClass","click"],["tabindex","0","class","p-node-toggler",3,"click","keydown.enter",4,"ngIf"],[1,"p-organizationchart-lines",3,"ngClass"],[1,"p-organizationchart-line-down"],[1,"p-organizationchart-nodes",3,"ngClass"],["colspan","2",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["tabindex","0",1,"p-node-toggler",3,"click","keydown.enter"],[1,"p-node-toggler-icon","pi",3,"ngClass"],["ngFor","",3,"ngForOf"],[1,"p-organizationchart-line-left",3,"ngClass"],[1,"p-organizationchart-line-right",3,"ngClass"],["colspan","2"],["pOrganizationChartNode","",1,"p-organizationchart-table",3,"node"]],template:function(t,o){1&t&&e.\u0275\u0275template(0,T,15,20,"tbody",0),2&t&&e.\u0275\u0275property("ngIf",o.node)},dependencies:[c.NgClass,c.NgForOf,c.NgIf,c.NgTemplateOutlet,n],styles:[".p-organizationchart-table{border-spacing:0;border-collapse:separate;margin:0 auto}.p-organizationchart-table>tbody>tr>td{text-align:center;vertical-align:top;padding:0 .75rem}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{position:absolute;bottom:-.75rem;margin-left:-.75rem;z-index:2;left:50%;-webkit-user-select:none;user-select:none;cursor:pointer;width:1.5rem;height:1.5rem}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{margin:0 auto;height:20px;width:1px}.p-organizationchart-line-right,.p-organizationchart-line-left{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{visibility:hidden;display:inherit}\n"],encapsulation:2,data:{animation:[(0,l.X$)("childState",[(0,l.SB)("in",(0,l.oB)({opacity:1})),(0,l.eR)("void => *",[(0,l.oB)({opacity:0}),(0,l.jt)(150)]),(0,l.eR)("* => void",[(0,l.jt)(150,(0,l.oB)({opacity:0}))])])]},changeDetection:0}),n})(),u=(()=>{class n{constructor(t,o){this.el=t,this.cd=o,this.preserveSpace=!0,this.selectionChange=new e.EventEmitter,this.onNodeSelect=new e.EventEmitter,this.onNodeUnselect=new e.EventEmitter,this.onNodeExpand=new e.EventEmitter,this.onNodeCollapse=new e.EventEmitter,this.selectionSource=new _.Subject,this.selectionSource$=this.selectionSource.asObservable()}get selection(){return this._selection}set selection(t){this._selection=t,this.initialized&&this.selectionSource.next(null)}get root(){return this.value&&this.value.length?this.value[0]:null}ngAfterContentInit(){this.templates.length&&(this.templateMap={}),this.templates.forEach(t=>{this.templateMap[t.getType()]=t.template}),this.initialized=!0}getTemplateForNode(t){return this.templateMap?t.type?this.templateMap[t.type]:this.templateMap.default:null}onNodeClick(t,o){let a=t.target;if((!a.className||-1===a.className.indexOf("p-node-toggler")&&-1===a.className.indexOf("p-node-toggler-icon"))&&this.selectionMode){if(!1===o.selectable)return;let r=this.findIndexInSelection(o),m=r>=0;"single"===this.selectionMode?m?(this.selection=null,this.onNodeUnselect.emit({originalEvent:t,node:o})):(this.selection=o,this.onNodeSelect.emit({originalEvent:t,node:o})):"multiple"===this.selectionMode&&(m?(this.selection=this.selection.filter((R,F)=>F!=r),this.onNodeUnselect.emit({originalEvent:t,node:o})):(this.selection=[...this.selection||[],o],this.onNodeSelect.emit({originalEvent:t,node:o}))),this.selectionChange.emit(this.selection),this.selectionSource.next(null)}}findIndexInSelection(t){let o=-1;if(this.selectionMode&&this.selection)if("single"===this.selectionMode)o=this.selection==t?0:-1;else if("multiple"===this.selectionMode)for(let a=0;a<this.selection.length;a++)if(this.selection[a]==t){o=a;break}return o}isSelected(t){return-1!=this.findIndexInSelection(t)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-organizationChart"]],contentQueries:function(t,o,a){if(1&t&&e.\u0275\u0275contentQuery(a,p.PrimeTemplate,4),2&t){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(o.templates=r)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",selectionMode:"selectionMode",preserveSpace:"preserveSpace",selection:"selection"},outputs:{selectionChange:"selectionChange",onNodeSelect:"onNodeSelect",onNodeUnselect:"onNodeUnselect",onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse"},decls:2,vars:7,consts:[[3,"ngStyle","ngClass"],["class","p-organizationchart-table","pOrganizationChartNode","",3,"node",4,"ngIf"],["pOrganizationChartNode","",1,"p-organizationchart-table",3,"node"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,I,1,1,"table",1),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275classMap(o.styleClass),e.\u0275\u0275property("ngStyle",o.style)("ngClass",e.\u0275\u0275pureFunction1(5,w,o.preserveSpace)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.root))},dependencies:[c.NgClass,c.NgIf,c.NgStyle,g],encapsulation:2,changeDetection:0}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,p.SharedModule]}),n})()}}]);