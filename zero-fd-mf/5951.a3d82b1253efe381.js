(self.webpackChunkzero_fd_mf=self.webpackChunkzero_fd_mf||[]).push([[5951,882],{45951:(O,c,l)=>{l.r(c),l.d(c,{FormlySelectModule:()=>h,FormlySelectOptionsPipe:()=>b});var p=l(45449),d=l(13406),a=l(60097);let b=(()=>{class t{transform(e,o){return e instanceof d.Observable?this.dispose():e=this.observableOf(e,o),e.pipe((0,a.map)(s=>this.transformOptions(s,o)))}ngOnDestroy(){this.dispose()}transformOptions(e,o){const s=this.transformSelectProps(o),r=[],n={};return e?.forEach(m=>{const i=this.transformOption(m,s);if(i.group){const f=n[i.label];void 0===f?n[i.label]=r.push(i)-1:i.group.forEach(P=>r[f].group.push(P))}else r.push(i)}),r}transformOption(e,o){const s=o.groupProp(e);return Array.isArray(s)?{label:o.labelProp(e),group:s.map(r=>this.transformOption(r,o))}:(e={label:o.labelProp(e),value:o.valueProp(e),disabled:!!o.disabledProp(e)},s?{label:s,group:[e]}:e)}transformSelectProps(e){const o=e?.props||e?.templateOptions||{},s=r=>"function"==typeof r?r:n=>n[r];return{groupProp:s(o.groupProp||"group"),labelProp:s(o.labelProp||"label"),valueProp:s(o.valueProp||"value"),disabledProp:s(o.disabledProp||"disabled")}}dispose(){this._options&&(this._options.complete(),this._options=null),this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)}observableOf(e,o){return this.dispose(),o&&o.options&&o.options.fieldChanges&&(this._subscription=o.options.fieldChanges.pipe((0,a.filter)(({property:s,type:r,field:n})=>"expressionChanges"===r&&(0===s.indexOf("templateOptions.options")||0===s.indexOf("props.options"))&&n===o&&Array.isArray(n.props.options)&&!!this._options),(0,a.tap)(()=>this._options.next(o.props.options))).subscribe()),this._options=new d.BehaviorSubject(e),this._options.asObservable()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=p.\u0275\u0275definePipe({name:"formlySelectOptions",type:t,pure:!0}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=p.\u0275\u0275defineInjector({}),t})()}}]);