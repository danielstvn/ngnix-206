(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[6254],{93793:(_,c,r)=>{r.r(c),r.d(c,{FormlySelectModule:()=>P,FormlySelectOptionsPipe:()=>f});var p=r(45449),a=r(77311),u=r(14928);let f=(()=>{class s{transform(e,o){return e instanceof a.Observable?this.dispose():e=this.observableOf(e,o),e.pipe((0,u.map)(l=>this.toOptions(l,o||{})))}ngOnDestroy(){this.dispose()}toOptions(e,o){const l=[],i={},t=o.templateOptions||{};return t._flatOptions=!0,e.map(n=>{this.getGroupProp(n,t)?(t._flatOptions=!1,i[this.getGroupProp(n,t)]||(i[this.getGroupProp(n,t)]=[],l.push({label:this.getGroupProp(n,t),group:i[this.getGroupProp(n,t)]})),i[this.getGroupProp(n,t)].push(this.toOption(n,t))):l.push(this.toOption(n,t))}),l}toOption(e,o){return{label:this.getLabelProp(e,o),value:this.getValueProp(e,o),disabled:this.getDisabledProp(e,o)||!1}}getLabelProp(e,o){return"function"==typeof o.labelProp?o.labelProp(e):this.shouldUseLegacyOption(e,o)?(console.warn("NgxFormly: legacy select option '{key, value}' is deprecated since v5.5, use '{value, label}' instead."),e.value):e[o.labelProp||"label"]}getValueProp(e,o){return"function"==typeof o.valueProp?o.valueProp(e):this.shouldUseLegacyOption(e,o)?e.key:e[o.valueProp||"value"]}getDisabledProp(e,o){return"function"==typeof o.disabledProp?o.disabledProp(e):e[o.disabledProp||"disabled"]}getGroupProp(e,o){return"function"==typeof o.groupProp?o.groupProp(e):e[o.groupProp||"group"]}shouldUseLegacyOption(e,o){return!o.valueProp&&!o.labelProp&&null!=e&&"object"==typeof e&&"key"in e&&"value"in e}dispose(){this._options&&(this._options.complete(),this._options=null),this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)}observableOf(e,o){return this.dispose(),o&&o.options&&o.options.fieldChanges&&(this._subscription=o.options.fieldChanges.pipe((0,u.filter)(({property:l,type:i,field:t})=>"expressionChanges"===i&&0===l.indexOf("templateOptions.options")&&t===o&&Array.isArray(t.templateOptions.options)&&!!this._options),(0,u.tap)(()=>this._options.next(o.templateOptions.options))).subscribe()),this._options=new a.BehaviorSubject(e),this._options.asObservable()}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275pipe=p.\u0275\u0275definePipe({name:"formlySelectOptions",type:s,pure:!0}),s})(),P=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=p.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=p.\u0275\u0275defineInjector({}),s})()}}]);