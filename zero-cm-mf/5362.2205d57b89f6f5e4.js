(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[5362,3934],{85362:(T,_,a)=>{a.r(_),a.d(_,{SELECTBUTTON_VALUE_ACCESSOR:()=>m,SelectButton:()=>f,SelectButtonModule:()=>S});var t=a(45449),r=a(90944),u=a(37524),b=a(61711),g=a(93071);function h(n,l){if(1&n&&t.\u0275\u0275element(0,"span",8),2&n){const e=t.\u0275\u0275nextContext(2).$implicit;t.\u0275\u0275classMap(e.icon),t.\u0275\u0275property("ngClass","p-button-icon p-button-icon-left")}}function C(n,l){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,h,1,3,"span",6),t.\u0275\u0275elementStart(2,"span",7),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()),2&n){const e=t.\u0275\u0275nextContext().$implicit,i=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.icon),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(i.getOptionLabel(e))}}function v(n,l){1&n&&t.\u0275\u0275elementContainer(0)}const O=function(n,l){return{$implicit:n,index:l}};function x(n,l){if(1&n&&t.\u0275\u0275template(0,v,1,0,"ng-container",9),2&n){const e=t.\u0275\u0275nextContext(),i=e.$implicit,o=e.index,s=t.\u0275\u0275nextContext();t.\u0275\u0275property("ngTemplateOutlet",s.itemTemplate)("ngTemplateOutletContext",t.\u0275\u0275pureFunction2(2,O,i,o))}}const y=function(n,l,e){return{"p-highlight":n,"p-disabled":l,"p-button-icon-only":e}};function E(n,l){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",2,3),t.\u0275\u0275listener("click",function(o){const s=t.\u0275\u0275restoreView(e),c=s.$implicit,p=s.index,d=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(d.onItemClick(o,c,p))})("keydown.enter",function(o){const s=t.\u0275\u0275restoreView(e),c=s.$implicit,p=s.index,d=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(d.onItemClick(o,c,p))})("blur",function(){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(o.onBlur())}),t.\u0275\u0275template(2,C,4,2,"ng-container",4),t.\u0275\u0275template(3,x,1,5,"ng-template",null,5,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275elementEnd()}if(2&n){const e=l.$implicit,i=t.\u0275\u0275reference(4),o=t.\u0275\u0275nextContext();t.\u0275\u0275classMap(e.styleClass),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction3(10,y,o.isSelected(e),o.disabled||o.isOptionDisabled(e),e.icon&&!o.getOptionLabel(e))),t.\u0275\u0275attribute("aria-pressed",o.isSelected(e))("title",e.title)("aria-label",e.label)("tabindex",o.disabled?null:o.tabindex)("aria-labelledby",o.getOptionLabel(e)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",!o.itemTemplate)("ngIfElse",i)}}const m={provide:g.NG_VALUE_ACCESSOR,useExisting:(0,t.forwardRef)(()=>f),multi:!0};let f=(()=>{class n{constructor(e){this.cd=e,this.tabindex=0,this.onOptionClick=new t.EventEmitter,this.onChange=new t.EventEmitter,this.onModelChange=()=>{},this.onModelTouched=()=>{}}getOptionLabel(e){return this.optionLabel?u.ObjectUtils.resolveFieldData(e,this.optionLabel):null!=e.label?e.label:e}getOptionValue(e){return this.optionValue?u.ObjectUtils.resolveFieldData(e,this.optionValue):this.optionLabel||void 0===e.value?e:e.value}isOptionDisabled(e){return this.optionDisabled?u.ObjectUtils.resolveFieldData(e,this.optionDisabled):void 0!==e.disabled&&e.disabled}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onItemClick(e,i,o){if(!this.disabled&&!this.isOptionDisabled(i)){if(this.multiple)this.isSelected(i)?this.removeOption(i):this.value=[...this.value||[],this.getOptionValue(i)],this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value});else{let s=this.getOptionValue(i);this.value!==s&&(this.value=this.getOptionValue(i),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}))}this.onOptionClick.emit({originalEvent:e,option:i,index:o})}}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(i=>!u.ObjectUtils.equals(i,this.getOptionValue(e),this.dataKey))}isSelected(e){let i=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value)for(let s of this.value)if(u.ObjectUtils.equals(s,o,this.dataKey)){i=!0;break}}else i=u.ObjectUtils.equals(this.getOptionValue(e),this.value,this.dataKey);return i}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["p-selectButton"]],contentQueries:function(e,i,o){if(1&e&&t.\u0275\u0275contentQuery(o,t.TemplateRef,5),2&e){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(i.itemTemplate=s.first)}},hostAttrs:[1,"p-element"],inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",tabindex:"tabindex",multiple:"multiple",style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",dataKey:"dataKey"},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[t.\u0275\u0275ProvidersFeature([m])],decls:2,vars:5,consts:[["role","group",3,"ngClass","ngStyle"],["class","p-button p-component","role","button","pRipple","",3,"class","ngClass","click","keydown.enter","blur",4,"ngFor","ngForOf"],["role","button","pRipple","",1,"p-button","p-component",3,"ngClass","click","keydown.enter","blur"],["btn",""],[4,"ngIf","ngIfElse"],["customcontent",""],[3,"ngClass","class",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,i){1&e&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275template(1,E,5,14,"div",1),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275classMap(i.styleClass),t.\u0275\u0275property("ngClass","p-selectbutton p-buttonset p-component")("ngStyle",i.style),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",i.options))},dependencies:[r.NgClass,r.NgStyle,r.NgForOf,b.Ripple,r.NgIf,r.NgTemplateOutlet],styles:[".p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0 none}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}\n"],encapsulation:2,changeDetection:0}),n})(),S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[r.CommonModule,b.RippleModule]]}),n})()}}]);