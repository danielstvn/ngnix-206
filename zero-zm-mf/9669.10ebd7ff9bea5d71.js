(self.webpackChunkzero_zm_mf=self.webpackChunkzero_zm_mf||[]).push([[9669],{17913:(g,d,a)=>{a.r(d),a.d(d,{INPUTSWITCH_VALUE_ACCESSOR:()=>r,InputSwitch:()=>c,InputSwitchModule:()=>f});var t=a(45449),o=a(90944),h=a(93071);const p=function(i,l,e){return{"p-inputswitch p-component":!0,"p-inputswitch-checked":i,"p-disabled":l,"p-focus":e}},r={provide:h.NG_VALUE_ACCESSOR,useExisting:(0,t.forwardRef)(()=>c),multi:!0};let c=(()=>{class i{constructor(e){this.cd=e,this.trueValue=!0,this.falseValue=!1,this.onChange=new t.EventEmitter,this.modelValue=!1,this.focused=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}onClick(e,n){!this.disabled&&!this.readonly&&(e.preventDefault(),this.toggle(e),n.focus())}onInputChange(e){this.readonly||this.updateModel(e,e.target.checked)}toggle(e){this.updateModel(e,!this.checked())}updateModel(e,n){this.modelValue=n?this.trueValue:this.falseValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:e,checked:this.modelValue})}onFocus(e){this.focused=!0}onBlur(e){this.focused=!1,this.onModelTouched()}writeValue(e){this.modelValue=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}}return i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["p-inputSwitch"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",tabindex:"tabindex",inputId:"inputId",name:"name",disabled:"disabled",readonly:"readonly",trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onChange:"onChange"},features:[t.\u0275\u0275ProvidersFeature([r])],decls:5,vars:16,consts:[[3,"ngClass","ngStyle","click"],[1,"p-hidden-accessible"],["type","checkbox","role","switch",3,"checked","disabled","change","focus","blur"],["cb",""],[1,"p-inputswitch-slider"]],template:function(e,n){if(1&e){const _=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275listener("click",function(s){t.\u0275\u0275restoreView(_);const m=t.\u0275\u0275reference(3);return t.\u0275\u0275resetView(n.onClick(s,m))}),t.\u0275\u0275elementStart(1,"div",1)(2,"input",2,3),t.\u0275\u0275listener("change",function(s){return n.onInputChange(s)})("focus",function(s){return n.onFocus(s)})("blur",function(s){return n.onBlur(s)}),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(4,"span",4),t.\u0275\u0275elementEnd()}2&e&&(t.\u0275\u0275classMap(n.styleClass),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction3(12,p,n.checked(),n.disabled,n.focused))("ngStyle",n.style),t.\u0275\u0275advance(2),t.\u0275\u0275property("checked",n.checked())("disabled",n.disabled),t.\u0275\u0275attribute("aria-label",n.ariaLabel)("id",n.inputId)("name",n.name)("tabindex",n.tabindex)("aria-checked",n.checked())("aria-labelledby",n.ariaLabelledBy))},dependencies:[o.NgClass,o.NgStyle],styles:['.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}\n'],encapsulation:2,changeDetection:0}),i})(),f=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=t.\u0275\u0275defineInjector({imports:[o.CommonModule]}),i})()}}]);