(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[7042,4684],{47042:(C,a,n)=>{n.r(a),n.d(a,{FormlyBootstrapCheckboxModule:()=>h,FormlyFieldCheckbox:()=>p});var e=n(45449),c=n(90944),i=n(44443),l=n(93071),m=n(48788);function d(o,r){1&o&&(e.\u0275\u0275elementStart(0,"span",6),e.\u0275\u0275text(1,"*"),e.\u0275\u0275elementEnd())}function f(o,r){if(1&o&&(e.\u0275\u0275elementStart(0,"label",4),e.\u0275\u0275text(1),e.\u0275\u0275template(2,d,2,0,"span",5),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("for",t.id),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.props.label," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.props.required&&!0!==t.props.hideRequiredMarker)}}const u=function(o,r){return{"form-check-inline":o,"form-switch":r}};function _(o,r){if(1&o&&(e.\u0275\u0275elementStart(0,"div",1),e.\u0275\u0275element(1,"input",2),e.\u0275\u0275template(2,f,3,3,"label",3),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(9,u,"inline"===t.props.formCheck||"inline-switch"===t.props.formCheck,"switch"===t.props.formCheck||"inline-switch"===t.props.formCheck)),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("is-invalid",t.showError)("position-static","nolabel"===t.props.formCheck),e.\u0275\u0275property("indeterminate",t.props.indeterminate&&null==t.formControl.value)("formControl",t.formControl)("formlyAttributes",t.field),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","nolabel"!==t.props.formCheck)}}let p=(()=>{class o extends m.FieldType{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0,formCheck:"default"}}}}return o.\u0275fac=function(){let r;return function(s){return(r||(r=e.\u0275\u0275getInheritedFactory(o)))(s||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["formly-field-checkbox"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["fieldTypeTemplate",""],[1,"form-check",3,"ngClass"],["type","checkbox",1,"form-check-input",3,"indeterminate","formControl","formlyAttributes"],["class","form-check-label",3,"for",4,"ngIf"],[1,"form-check-label",3,"for"],["aria-hidden","true",4,"ngIf"],["aria-hidden","true"]],template:function(t,s){1&t&&e.\u0275\u0275template(0,_,3,12,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)},dependencies:[c.NgClass,l.CheckboxControlValueAccessor,l.NgControlStatus,l.FormControlDirective,i.\u0275FormlyAttributes,c.NgIf],encapsulation:2,changeDetection:0}),o})(),h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.CommonModule,l.ReactiveFormsModule,m.FormlyBootstrapFormFieldModule,i.FormlyModule.forChild({types:[{name:"checkbox",component:p,wrappers:["form-field"]},{name:"boolean",extends:"checkbox"}]})]]}),o})()}}]);