(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[1167,6699],{31167:(C,c,i)=>{i.r(c),i.d(c,{TOGGLEBUTTON_VALUE_ACCESSOR:()=>d,ToggleButton:()=>u,ToggleButtonModule:()=>b});var e=i(45449),s=i(90944),r=i(61711),g=i(93071);const p=function(n,l){return{"p-button-icon":!0,"p-button-icon-left":n,"p-button-icon-right":l}};function h(n,l){if(1&n&&e.\u0275\u0275element(0,"span",3),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275classMap(t.checked?t.onIcon:t.offIcon),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(3,p,"left"===t.iconPos,"right"===t.iconPos))}}const f=function(n,l,t){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":n,"p-highlight":l,"p-disabled":t}},d={provide:g.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>u),multi:!0};let u=(()=>{class n{constructor(t){this.cd=t,this.iconPos="left",this.onChange=new e.EventEmitter,this.checked=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}toggle(t){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-toggleButton"]],hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[e.\u0275\u0275ProvidersFeature([d])],decls:4,vars:12,consts:[["role","checkbox","pRipple","",3,"ngClass","ngStyle","click","keydown.enter"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275listener("click",function(a){return o.toggle(a)})("keydown.enter",function(a){return o.toggle(a)}),e.\u0275\u0275template(1,h,1,6,"span",1),e.\u0275\u0275elementStart(2,"span",2),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275classMap(o.styleClass),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(8,f,o.onIcon&&o.offIcon&&!o.hasOnLabel&&!o.hasOffLabel,o.checked,o.disabled))("ngStyle",o.style),e.\u0275\u0275attribute("tabindex",o.disabled?null:"0")("aria-checked",o.checked),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.onIcon||o.offIcon),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(o.checked?o.hasOnLabel?o.onLabel:"":o.hasOffLabel?o.offLabel:""))},dependencies:[r.Ripple,s.NgClass,s.NgStyle,s.NgIf],styles:[".p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}"],changeDetection:0}),n})(),b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.CommonModule,r.RippleModule]]}),n})()}}]);