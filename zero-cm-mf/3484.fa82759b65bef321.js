(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[3484],{20674:(A,i,r)=>{r.r(i),r.d(i,{FormlyBootstrapAddonsModule:()=>F});var e=r(45449),d=r(90944),l=r(44443),c=r(93071);const _=["fieldTypeTemplate"];function m(t,o){if(1&t&&e.\u0275\u0275element(0,"i",7),2&t){const n=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("ngClass",n.props.addonLeft.class)}}function f(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.props.addonLeft.text)}}function u(t,o){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",4),e.\u0275\u0275listener("click",function(p){e.\u0275\u0275restoreView(n);const s=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(s.addonLeftClick(p))}),e.\u0275\u0275template(1,m,1,1,"i",5),e.\u0275\u0275template(2,f,2,1,"span",6),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275classProp("input-group-btn",n.props.addonLeft.onClick),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.props.addonLeft.class),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.props.addonLeft.text)}}function g(t,o){if(1&t&&e.\u0275\u0275element(0,"i",7),2&t){const n=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("ngClass",n.props.addonRight.class)}}function x(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.props.addonRight.text)}}function y(t,o){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",4),e.\u0275\u0275listener("click",function(p){e.\u0275\u0275restoreView(n);const s=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(s.addonRightClick(p))}),e.\u0275\u0275template(1,g,1,1,"i",5),e.\u0275\u0275template(2,x,2,1,"span",6),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275classProp("input-group-btn",n.props.addonRight.onClick),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.props.addonRight.class),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.props.addonRight.text)}}function v(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"div",1),e.\u0275\u0275template(1,u,3,4,"div",2),e.\u0275\u0275elementContainer(2,null,3),e.\u0275\u0275template(4,y,3,4,"div",2),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275classProp("has-validation",n.showError),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.props.addonLeft),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",n.props.addonRight)}}let C=(()=>{class t extends l.FieldWrapper{constructor(n){super(),this.hostContainerRef=n}set content(n){n&&this.hostContainerRef&&this.hostContainerRef.createEmbeddedView(n)}addonRightClick(n){this.props.addonRight.onClick?.(this.field,n)}addonLeftClick(n){this.props.addonLeft.onClick?.(this.field,n)}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ViewContainerRef))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["formly-wrapper-addons"]],viewQuery:function(n,a){if(1&n&&e.\u0275\u0275viewQuery(_,7),2&n){let p;e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(a.content=p.first)}},features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["fieldTypeTemplate",""],[1,"input-group"],["class","input-group-text",3,"input-group-btn","click",4,"ngIf"],["fieldComponent",""],[1,"input-group-text",3,"click"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"]],template:function(n,a){1&n&&e.\u0275\u0275template(0,v,5,4,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)},dependencies:[d.NgIf,d.NgClass],styles:["formly-wrapper-form-field .input-group-btn{cursor:pointer}\n"],encapsulation:2}),t})();function h(t){!t.props||t.wrappers&&-1!==t.wrappers.indexOf("addons")||(t.props.addonLeft||t.props.addonRight)&&(t.wrappers=[...t.wrappers||[],"addons"])}let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.CommonModule,c.ReactiveFormsModule,l.FormlyModule.forChild({wrappers:[{name:"addons",component:C}],extensions:[{name:"addons",extension:{postPopulate:h}}]})]]}),t})()}}]);