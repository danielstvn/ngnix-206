(self.webpackChunkzero_dd_mf=self.webpackChunkzero_dd_mf||[]).push([[1989,6884],{61989:(v,d,a)=>{a.r(d),a.d(d,{CHECKBOX_VALUE_ACCESSOR:()=>h,Checkbox:()=>b,CheckboxModule:()=>g});var e=a(45449),r=a(90944),p=a(93071),u=a(37524);const f=["cb"],C=function(l,o,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":l,"p-disabled":o,"p-checkbox-label-focus":t}};function _(l,o){if(1&l){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"label",7),e.\u0275\u0275listener("click",function(i){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(),c=e.\u0275\u0275reference(3);return e.\u0275\u0275resetView(s.onClick(i,c,!0))}),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()}if(2&l){const t=e.\u0275\u0275nextContext();e.\u0275\u0275classMap(t.labelStyleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(5,C,t.checked(),t.disabled,t.focused)),e.\u0275\u0275attribute("for",t.inputId),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.label)}}const k=function(l,o,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":l,"p-checkbox-disabled":o,"p-checkbox-focused":t}},m=function(l,o,t){return{"p-highlight":l,"p-disabled":o,"p-focus":t}},h={provide:p.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>b),multi:!0};let b=(()=>{class l{constructor(t){this.cd=t,this.checkboxIcon="pi pi-check",this.trueValue=!0,this.falseValue=!1,this.onChange=new e.EventEmitter,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1}onClick(t,n,i){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),i&&n.focus())}updateModel(t){let n;this.binary?(n=this.checked()?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(n=this.checked()?this.model.filter(i=>!u.ObjectUtils.equals(i,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:u.ObjectUtils.contains(this.value,this.model)}}return l.\u0275fac=function(t){return new(t||l)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["p-checkbox"]],viewQuery:function(t,n){if(1&t&&e.\u0275\u0275viewQuery(f,5),2&t){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(n.inputViewChild=i.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e.\u0275\u0275ProvidersFeature([h])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(t,n){if(1&t){const i=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"input",2,3),e.\u0275\u0275listener("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()})("change",function(c){return n.handleChange(c)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",4),e.\u0275\u0275listener("click",function(c){e.\u0275\u0275restoreView(i);const y=e.\u0275\u0275reference(3);return e.\u0275\u0275resetView(n.onClick(c,y,!0))}),e.\u0275\u0275element(5,"span",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(6,_,2,9,"label",6)}2&t&&(e.\u0275\u0275classMap(n.styleClass),e.\u0275\u0275property("ngStyle",n.style)("ngClass",e.\u0275\u0275pureFunction3(18,k,n.checked(),n.disabled,n.focused)),e.\u0275\u0275advance(2),e.\u0275\u0275property("readonly",n.readonly)("value",n.value)("checked",n.checked())("disabled",n.disabled),e.\u0275\u0275attribute("id",n.inputId)("name",n.name)("tabindex",n.tabindex)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-checked",n.checked())("required",n.required),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(22,m,n.checked(),n.disabled,n.focused)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",n.checked()?n.checkboxIcon:null),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.label))},dependencies:[r.NgClass,r.NgIf,r.NgStyle],styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0}),l})(),g=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=e.\u0275\u0275defineInjector({imports:[r.CommonModule]}),l})()}}]);