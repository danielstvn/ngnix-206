(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[5846],{80630:(m,u,s)=>{s.r(u),s.d(u,{TRISTATECHECKBOX_VALUE_ACCESSOR:()=>d,TriStateCheckbox:()=>h,TriStateCheckboxModule:()=>k});var e=s(45449),r=s(90944),p=s(93071);const b=function(o,l,t){return{"p-checkbox-label-active":o,"p-disabled":l,"p-checkbox-label-focus":t}};function _(o,l){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"label",7),e.\u0275\u0275listener("click",function(c){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(),a=e.\u0275\u0275reference(3);return e.\u0275\u0275resetView(i.onClick(c,a))}),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(3,b,null!=t.value,t.disabled,t.focused)),e.\u0275\u0275attribute("for",t.inputId),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.label)}}const f=function(o,l){return{"p-checkbox p-component":!0,"p-checkbox-disabled":o,"p-checkbox-focused":l}},C=function(o,l,t){return{"p-highlight":o,"p-disabled":l,"p-focus":t}},d={provide:p.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>h),multi:!0};let h=(()=>{class o{constructor(t){this.cd=t,this.checkboxTrueIcon="pi pi-check",this.checkboxFalseIcon="pi pi-times",this.onChange=new e.EventEmitter,this.onModelChange=()=>{},this.onModelTouched=()=>{}}onClick(t,n){!this.disabled&&!this.readonly&&(this.toggle(t),this.focused=!0,n.focus())}onKeydown(t){32==t.keyCode&&t.preventDefault()}onKeyup(t){32==t.keyCode&&!this.readonly&&(this.toggle(t),t.preventDefault())}toggle(t){null==this.value||null==this.value?this.value=!0:1==this.value?this.value=!1:0==this.value&&(this.value=null),this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value})}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}writeValue(t){this.value=t,this.cd.markForCheck()}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["p-triStateCheckbox"]],hostAttrs:[1,"p-element"],inputs:{disabled:"disabled",name:"name",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",label:"label",readonly:"readonly",checkboxTrueIcon:"checkboxTrueIcon",checkboxFalseIcon:"checkboxFalseIcon"},outputs:{onChange:"onChange"},features:[e.\u0275\u0275ProvidersFeature([d])],decls:7,vars:21,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","text","inputmode","none",3,"name","readonly","disabled","keyup","keydown","focus","blur"],["input",""],["role","checkbox",1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],["class","p-checkbox-label",3,"ngClass","click",4,"ngIf"],[1,"p-checkbox-label",3,"ngClass","click"]],template:function(t,n){if(1&t){const c=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"input",2,3),e.\u0275\u0275listener("keyup",function(a){return n.onKeyup(a)})("keydown",function(a){return n.onKeydown(a)})("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",4),e.\u0275\u0275listener("click",function(a){e.\u0275\u0275restoreView(c);const g=e.\u0275\u0275reference(3);return e.\u0275\u0275resetView(n.onClick(a,g))}),e.\u0275\u0275element(5,"span",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(6,_,2,7,"label",6)}2&t&&(e.\u0275\u0275classMap(n.styleClass),e.\u0275\u0275property("ngStyle",n.style)("ngClass",e.\u0275\u0275pureFunction2(14,f,n.disabled,n.focused)),e.\u0275\u0275advance(2),e.\u0275\u0275property("name",n.name)("readonly",n.readonly)("disabled",n.disabled),e.\u0275\u0275attribute("id",n.inputId)("tabindex",n.tabindex)("aria-labelledby",n.ariaLabelledBy),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(17,C,null!=n.value,n.disabled,n.focused)),e.\u0275\u0275attribute("aria-checked",!0===n.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",!0===n.value?n.checkboxTrueIcon:!1===n.value?n.checkboxFalseIcon:""),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.label))},dependencies:[r.NgStyle,r.NgClass,r.NgIf],encapsulation:2,changeDetection:0}),o})(),k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[r.CommonModule]]}),o})()}}]);