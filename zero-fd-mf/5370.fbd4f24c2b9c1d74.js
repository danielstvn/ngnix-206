(self.webpackChunkzero_fd_mf=self.webpackChunkzero_fd_mf||[]).push([[5370,7983],{55370:(M,s,i)=>{i.r(s),i.d(s,{FormlyBootstrapMultiCheckboxModule:()=>C,FormlyFieldMultiCheckbox:()=>p});var e=i(45449),c=i(90944),f=i(93071),a=i(51270),m=i(88691),d=i(88114);const u=function(t,n){return{"form-check-inline":t,"form-switch":n}};function _(t,n){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2)(1,"input",3),e.\u0275\u0275listener("change",function(l){const y=e.\u0275\u0275restoreView(o).$implicit,F=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(F.onChange(y.value,l.target.checked))}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"label",4),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()()}if(2&t){const o=n.$implicit,r=n.index,l=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(8,u,"inline"===l.props.formCheck||"inline-switch"===l.props.formCheck,"switch"===l.props.formCheck||"inline-switch"===l.props.formCheck)),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",l.id+"_"+r)("value",o.value)("checked",l.isChecked(o))("formlyAttributes",l.field)("disabled",l.formControl.disabled||o.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("for",l.id+"_"+r),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.label," ")}}function h(t,n){if(1&t&&(e.\u0275\u0275template(0,_,4,11,"div",1),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"formlySelectOptions")),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(1,1,e.\u0275\u0275pipeBind2(2,3,o.props.options,o.field)))}}let p=(()=>{class t extends d.FieldType{constructor(){super(...arguments),this.defaultOptions={props:{formCheck:"default"}}}onChange(o,r){this.formControl.markAsDirty(),this.formControl.patchValue("array"===this.props.type?r?[...this.formControl.value||[],o]:[...this.formControl.value||[]].filter(l=>l!==o):{...this.formControl.value,[o]:r}),this.formControl.markAsTouched()}isChecked(o){const r=this.formControl.value;return r&&("array"===this.props.type?-1!==r.indexOf(o.value):r[o.value])}}return t.\u0275fac=function(){let n;return function(r){return(n||(n=e.\u0275\u0275getInheritedFactory(t)))(r||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["formly-field-multicheckbox"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["fieldTypeTemplate",""],["class","form-check",3,"ngClass",4,"ngFor","ngForOf"],[1,"form-check",3,"ngClass"],["type","checkbox",1,"form-check-input",3,"id","value","checked","formlyAttributes","disabled","change"],[1,"form-check-label",3,"for"]],template:function(o,r){1&o&&e.\u0275\u0275template(0,h,3,6,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)},dependencies:[c.NgForOf,c.NgClass,a.\u0275FormlyAttributes,c.AsyncPipe,m.FormlySelectOptionsPipe],encapsulation:2,changeDetection:0}),t})(),C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.CommonModule,f.ReactiveFormsModule,d.FormlyBootstrapFormFieldModule,m.FormlySelectModule,a.FormlyModule.forChild({types:[{name:"multicheckbox",component:p,wrappers:["form-field"]}]})]]}),t})()}}]);