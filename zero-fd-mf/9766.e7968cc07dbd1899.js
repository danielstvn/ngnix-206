(self.webpackChunkzero_fd_mf=self.webpackChunkzero_fd_mf||[]).push([[9766,6022],{29766:(M,h,p)=>{p.r(h),p.d(h,{CHIPS_VALUE_ACCESSOR:()=>m,Chips:()=>f,ChipsModule:()=>T});var r=p(90944),e=p(45449),_=p(93071),d=p(60859),c=p(11540);const C=["inputtext"];function v(n,s){1&n&&e.\u0275\u0275elementContainer(0)}function g(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"span",12),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(i.field?i.resolveFieldData(t,i.field):t)}}function w(n,s){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",13),e.\u0275\u0275listener("click",function(l){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext().index,o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.removeItem(l,a))}),e.\u0275\u0275elementEnd()}}const E=function(n){return{$implicit:n}};function y(n,s){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"li",7,8),e.\u0275\u0275listener("click",function(l){const o=e.\u0275\u0275restoreView(t).$implicit,u=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(u.onItemClick(l,o))}),e.\u0275\u0275template(2,v,1,0,"ng-container",9),e.\u0275\u0275template(3,g,2,1,"span",10),e.\u0275\u0275template(4,w,1,0,"span",11),e.\u0275\u0275elementEnd()}if(2&n){const t=s.$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",e.\u0275\u0275pureFunction1(4,E,t)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.itemTemplate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.disabled)}}function b(n,s){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"i",14),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.clear())}),e.\u0275\u0275elementEnd()}}const k=function(n,s){return{"p-inputtext p-chips-multiple-container":!0,"p-focus":n,"p-disabled":s}},I=function(n){return{"p-chips-clearable":n}},m={provide:_.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>f),multi:!0};let f=(()=>{class n{constructor(t,i){this.el=t,this.cd=i,this.allowDuplicate=!0,this.showClear=!1,this.onAdd=new e.EventEmitter,this.onRemove=new e.EventEmitter,this.onFocus=new e.EventEmitter,this.onBlur=new e.EventEmitter,this.onChipClick=new e.EventEmitter,this.onClear=new e.EventEmitter,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.itemTemplate=t.template}),this.updateFilledState()}onClick(){this.inputViewChild.nativeElement.focus()}onInput(){this.updateFilledState()}onPaste(t){this.disabled||(this.separator&&((t.clipboardData||window.clipboardData).getData("Text").split(this.separator).forEach(l=>{this.addItem(t,l,!0)}),this.inputViewChild.nativeElement.value=""),this.updateFilledState())}updateFilledState(){this.filled=!(!this.value||0===this.value.length)||this.inputViewChild&&this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value}onItemClick(t,i){this.onChipClick.emit({originalEvent:t,value:i})}writeValue(t){this.value=t,this.updateMaxedOut(),this.updateFilledState(),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}resolveFieldData(t,i){if(t&&i){if(-1==i.indexOf("."))return t[i];{let o=i.split("."),u=t;for(var l=0,a=o.length;l<a;++l)u=u[o[l]];return u}}return null}onInputFocus(t){this.focus=!0,this.onFocus.emit(t)}onInputBlur(t){this.focus=!1,this.addOnBlur&&this.inputViewChild.nativeElement.value&&this.addItem(t,this.inputViewChild.nativeElement.value,!1),this.onModelTouched(),this.onBlur.emit(t)}removeItem(t,i){if(this.disabled)return;let l=this.value[i];this.value=this.value.filter((a,o)=>o!=i),this.onModelChange(this.value),this.onRemove.emit({originalEvent:t,value:l}),this.updateFilledState(),this.updateMaxedOut()}addItem(t,i,l){this.value=this.value||[],i&&i.trim().length&&(this.allowDuplicate||-1===this.value.indexOf(i))&&(this.value=[...this.value,i],this.onModelChange(this.value),this.onAdd.emit({originalEvent:t,value:i})),this.updateFilledState(),this.updateMaxedOut(),this.inputViewChild.nativeElement.value="",l&&t.preventDefault()}clear(){this.value=null,this.updateFilledState(),this.onModelChange(this.value),this.onClear.emit()}onKeydown(t){switch(t.which){case 8:if(0===this.inputViewChild.nativeElement.value.length&&this.value&&this.value.length>0){this.value=[...this.value];let i=this.value.pop();this.onModelChange(this.value),this.onRemove.emit({originalEvent:t,value:i}),this.updateFilledState()}break;case 13:this.addItem(t,this.inputViewChild.nativeElement.value,!0);break;case 9:this.addOnTab&&""!==this.inputViewChild.nativeElement.value&&this.addItem(t,this.inputViewChild.nativeElement.value,!0);break;default:this.max&&this.value&&this.max===this.value.length?t.preventDefault():this.separator&&(this.separator===t.key||t.key.match(this.separator))&&this.addItem(t,this.inputViewChild.nativeElement.value,!0)}}updateMaxedOut(){this.inputViewChild&&this.inputViewChild.nativeElement&&(this.max&&this.value&&this.max===this.value.length?(this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=!0):(this.disabled&&this.inputViewChild.nativeElement.blur(),this.inputViewChild.nativeElement.disabled=this.disabled||!1))}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["p-chips"]],contentQueries:function(t,i,l){if(1&t&&e.\u0275\u0275contentQuery(l,d.PrimeTemplate,4),2&t){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(i.templates=a)}},viewQuery:function(t,i){if(1&t&&e.\u0275\u0275viewQuery(C,5),2&t){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.inputViewChild=l.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(t,i){2&t&&e.\u0275\u0275classProp("p-inputwrapper-filled",i.filled)("p-inputwrapper-focus",i.focus)("p-chips-clearable",i.showClear)},inputs:{style:"style",styleClass:"styleClass",disabled:"disabled",field:"field",placeholder:"placeholder",max:"max",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",inputId:"inputId",allowDuplicate:"allowDuplicate",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",addOnTab:"addOnTab",addOnBlur:"addOnBlur",separator:"separator",showClear:"showClear"},outputs:{onAdd:"onAdd",onRemove:"onRemove",onFocus:"onFocus",onBlur:"onBlur",onChipClick:"onChipClick",onClear:"onClear"},features:[e.\u0275\u0275ProvidersFeature([m])],decls:8,vars:21,consts:[[3,"ngClass","ngStyle","click"],[3,"ngClass"],["class","p-chips-token",3,"click",4,"ngFor","ngForOf"],[1,"p-chips-input-token",3,"ngClass"],["type","text",3,"disabled","ngStyle","keydown","input","paste","focus","blur"],["inputtext",""],["class","p-chips-clear-icon pi pi-times",3,"click",4,"ngIf"],[1,"p-chips-token",3,"click"],["token",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-chips-token-label",4,"ngIf"],["class","p-chips-token-icon pi pi-times-circle",3,"click",4,"ngIf"],[1,"p-chips-token-label"],[1,"p-chips-token-icon","pi","pi-times-circle",3,"click"],[1,"p-chips-clear-icon","pi","pi-times",3,"click"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275listener("click",function(){return i.onClick()}),e.\u0275\u0275elementStart(1,"ul",1),e.\u0275\u0275template(2,y,5,6,"li",2),e.\u0275\u0275elementStart(3,"li",3)(4,"input",4,5),e.\u0275\u0275listener("keydown",function(a){return i.onKeydown(a)})("input",function(){return i.onInput()})("paste",function(a){return i.onPaste(a)})("focus",function(a){return i.onInputFocus(a)})("blur",function(a){return i.onInputBlur(a)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275template(7,b,1,0,"i",6),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275classMap(i.styleClass),e.\u0275\u0275property("ngClass","p-chips p-component")("ngStyle",i.style),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(16,k,i.focus,i.disabled)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",i.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(19,I,i.showClear&&!i.disabled)),e.\u0275\u0275advance(1),e.\u0275\u0275classMap(i.inputStyleClass),e.\u0275\u0275property("disabled",i.disabled)("ngStyle",i.inputStyle),e.\u0275\u0275attribute("id",i.inputId)("placeholder",i.value&&i.value.length?null:i.placeholder)("tabindex",i.tabindex)("aria-labelledby",i.ariaLabelledBy),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null!=i.value&&i.filled&&!i.disabled&&i.showClear))},dependencies:[r.NgClass,r.NgForOf,r.NgIf,r.NgTemplateOutlet,r.NgStyle],styles:[".p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}\n"],encapsulation:2,changeDetection:0}),n})(),T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[r.CommonModule,c.InputTextModule,d.SharedModule,c.InputTextModule,d.SharedModule]}),n})()}}]);