(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[7498],{97498:(J,w,i)=>{i.r(w),i.d(w,{CmModule:()=>A});var g=i(90944),U=i(10730),C=i(92340);const $=[{path:"usage-case",loadChildren:()=>i.e(8817).then(i.bind(i,88817)).then(_=>_.UsageCaseModule)},{path:"task",loadChildren:()=>i.e(2391).then(i.bind(i,62391)).then(_=>_.TaskModule)},{path:"feature",loadChildren:()=>i.e(9239).then(i.bind(i,79239)).then(_=>_.FeatureModule)},{path:"content",loadChildren:()=>i.e(145).then(i.bind(i,60145)).then(_=>_.ContentModule)},{path:"timeline",loadChildren:()=>i.e(7220).then(i.bind(i,47220)).then(_=>_.TimelineModule)}];var M=i(45449),D=i(87602),R=i(21998),j=i(40171);let A=(()=>{class _{constructor(b,a,f){this._contextSevice=b,this._i18n=a,this._i18n_update=f,""==C.N.ORGANIZATION_ID&&""==C.N.USER_ID&&""==C.N.PERSON_ID&&this._contextSevice.getContext().subscribe(E=>{C.N.ORGANIZATION_ID=E.account.organizationId,C.N.USER_ID=E.account.id,C.N.PERSON_ID=E.account.personId,C.N.GROUP_ID=E.account.activeProfile.id}),this._i18n.setI18InSessionStorage(),this._i18n_update.setI18InSessionStorage()}}return _.\u0275fac=function(b){return new(b||_)(M.\u0275\u0275inject(D.Q),M.\u0275\u0275inject(R.D),M.\u0275\u0275inject(j.E))},_.\u0275mod=M.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=M.\u0275\u0275defineInjector({imports:[g.CommonModule,U.RouterModule.forChild($)]}),_})()},40171:(J,w,i)=>{i.d(w,{E:()=>j});var g=i(15861),U=i(59584),$=i(92340),M=i(89570),D=i(45449);let j=(()=>{class A{constructor(h){this.http=h,this.contextSystem=`/${$.N.CONTEXT_SYSTEM_KEY}/`,this.paramResource="@.ir.resources",this.urlCache=`${$.N.apiGateway}zero-cache/api/cache`}getI18nResource(h){const[b,a,f]=h.split(".");let E=sessionStorage.getItem("i18n");if(E){let F=JSON.parse(E),P=(0,M.j)({path:`$.${b}.${a}`,json:F});return null!=P[0]?P[0][f]:`${b}.${a}`}}setI18InSessionStorage(){var h=this;return(0,g.Z)(function*(){if(!sessionStorage.getItem("i18n")){let b=encodeURI(`${h.paramResource}`),a=yield h.getCache(b),f=Object.assign(a.response.GLC[$.N.LANGUAGE],a.response.GUI[$.N.LANGUAGE],a.response.FUN[$.N.LANGUAGE]);sessionStorage.setItem("i18n",JSON.stringify(f))}})()}getCache(h){return new Promise(b=>{this.http.get(`${this.urlCache}${this.contextSystem}${h}`).subscribe({next:f=>{b(f)},error:f=>{console.error(f)}})})}}return A.\u0275fac=function(h){return new(h||A)(D.\u0275\u0275inject(U.HttpClient))},A.\u0275prov=D.\u0275\u0275defineInjectable({token:A,factory:A.\u0275fac,providedIn:"root"}),A})()},21998:(J,w,i)=>{i.d(w,{D:()=>_});var g=i(15861),U=i(59584),$=i(92340),M=i(77311),R=i(89570),j=i(45449);let _=(()=>{class h{constructor(a){this.http=a,this.contextSystem=`/${$.N.CONTEXT_SYSTEM_KEY}/`,this.paramResource="@.ir.resources",this.urlCache=$.N.apiUrlMc}getI18nGallery(a,f,E="ES"){let T,P=sessionStorage.getItem("i18n-GLC");if(P){let B=JSON.parse(P);T=(0,R.j)({path:`$..response.${E}.${a}.[?(@property === '${f}')]`,json:B})}return T&&T[0]?T[0]:{message:`${a}.${f}-${E}`}}getI18nResource(a,f,E="ES"){let T,P=sessionStorage.getItem("i18n-GUI");if(P){let B=JSON.parse(P);T=(0,R.j)({path:`$..response.${E}.${a}.[?(@property === '${f}')]`,json:B})}return T&&T[0]?T[0]:{message:`${a}.${f}-${E}`}}setI18InSessionStorage(a="ALL"){var f=this;return(0,g.Z)(function*(){const E=function(){var T=(0,g.Z)(function*(B,K,z){if(!B){let O=encodeURI(`${f.paramResource}.${K}`),L=yield(0,M.firstValueFrom)(f.getCache(O));sessionStorage.setItem(z,JSON.stringify(L))}});return function(K,z,O){return T.apply(this,arguments)}}();let F,P;"ALL"==a?(F="i18n-GLC",P=sessionStorage.getItem(F),yield E(P,"GLC",F),F="i18n-GUI",P=sessionStorage.getItem(F),yield E(P,"GUI",F)):(F=`i18n-${a}`,P=sessionStorage.getItem(F),yield E(P,a,F))})()}getCache(a){return this.http.get(`${this.urlCache}${this.contextSystem}${a}`)}}return h.\u0275fac=function(a){return new(a||h)(j.\u0275\u0275inject(U.HttpClient))},h.\u0275prov=j.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},87602:(J,w,i)=>{i.d(w,{Q:()=>_});var g=i(59584),C=i(77311),M=i(92340),D=i(45449),j=i(72489);let _=(()=>{class h{constructor(a,f){this.http=a,this._keycloakService=f,this.api=`${M.N.apiCache}`,this._url=`${M.N.apiCache}`}getCache(a){return this.http.get(this.api+"/"+a).pipe((0,C.catchError)(f=>this.errorHandler(f)))}getContext(){return this.http.get(this._url+"/usr_"+this._keycloakService.getKeycloakInstance().tokenParsed?.sub)}errorHandler(a){let f;return a instanceof g.HttpErrorResponse&&ErrorEvent,f=a,(0,C.throwError)(()=>a)}save(a){this.http.post(this.api,a).subscribe(f=>{})}update(a){this.http.put(this.api,a).subscribe({next:f=>{},error:f=>{}})}delete(a){return this.http.delete(`${this._url}/${a}`)}}return h.\u0275fac=function(a){return new(a||h)(D.\u0275\u0275inject(g.HttpClient),D.\u0275\u0275inject(j.KeycloakService))},h.\u0275prov=D.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},89570:(J,w,i)=>{function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function U(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function $(t,e,r){return e&&C(t.prototype,e),r&&C(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)})(t)}function R(t,e){return(R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n})(t,e)}function j(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A(t,e,r){return(A=j()?Reflect.construct.bind():function(o,u,c){var p=[null];p.push.apply(p,u);var m=new(Function.bind.apply(o,p));return c&&R(m,c.prototype),m}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return h=function(n){if(null===n||!function _(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,o)}function o(){return A(n,arguments,D(this).constructor)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),R(o,n)},h(t)}function a(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function T(t,e){if(t){if("string"==typeof t)return B(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(t,e)}}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}i.d(w,{j:()=>y});var O=Object.prototype.hasOwnProperty;function L(t,e){return(t=t.slice()).push(e),t}function Q(t,e){return(e=e.slice()).unshift(t),e}var q=function(t){!function M(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(r,t);var e=function f(t){var e=j();return function(){var o,n=D(t);if(e){var u=D(this).constructor;o=Reflect.construct(n,arguments,u)}else o=n.apply(this,arguments);return a(this,o)}}(r);function r(n){var o;return U(this,r),(o=e.call(this,'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)')).avoidNew=!0,o.value=n,o.name="NewError",o}return $(r)}(h(Error));function y(t,e,r,n,o){if(!(this instanceof y))try{return new y(t,e,r,n,o)}catch(l){if(!l.avoidNew)throw l;return l.value}"string"==typeof t&&(o=n,n=r,r=e,e=t,t=null);var u=t&&"object"===g(t);if(this.json=(t=t||{}).json||r,this.path=t.path||e,this.resultType=t.resultType||"value",this.flatten=t.flatten||!1,this.wrap=!O.call(t,"wrap")||t.wrap,this.sandbox=t.sandbox||{},this.preventEval=t.preventEval||!1,this.parent=t.parent||null,this.parentProperty=t.parentProperty||null,this.callback=t.callback||n||null,this.otherTypeCallback=t.otherTypeCallback||o||function(){throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.")},!1!==t.autostart){var c={path:u?t.path:e};u?"json"in t&&(c.json=t.json):c.json=r;var p=this.evaluate(c);if(!p||"object"!==g(p))throw new q(p);return p}}y.prototype.evaluate=function(t,e,r,n){var o=this,u=this.parent,c=this.parentProperty,p=this.flatten,l=this.wrap;if(this.currResultType=this.resultType,this.currPreventEval=this.preventEval,this.currSandbox=this.sandbox,r=r||this.callback,this.currOtherTypeCallback=n||this.otherTypeCallback,e=e||this.json,(t=t||this.path)&&"object"===g(t)&&!Array.isArray(t)){if(!t.path&&""!==t.path)throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');if(!O.call(t,"json"))throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');e=t.json,p=O.call(t,"flatten")?t.flatten:p,this.currResultType=O.call(t,"resultType")?t.resultType:this.currResultType,this.currSandbox=O.call(t,"sandbox")?t.sandbox:this.currSandbox,l=O.call(t,"wrap")?t.wrap:l,this.currPreventEval=O.call(t,"preventEval")?t.preventEval:this.currPreventEval,r=O.call(t,"callback")?t.callback:r,this.currOtherTypeCallback=O.call(t,"otherTypeCallback")?t.otherTypeCallback:this.currOtherTypeCallback,u=O.call(t,"parent")?t.parent:u,c=O.call(t,"parentProperty")?t.parentProperty:c,t=t.path}if(u=u||null,c=c||null,Array.isArray(t)&&(t=y.toPathString(t)),(t||""===t)&&e){var s=y.toPathArray(t);"$"===s[0]&&s.length>1&&s.shift(),this._hasParentSelector=null;var v=this._trace(s,e,["$"],u,c,r).filter(function(d){return d&&!d.isParentSelector});return v.length?l||1!==v.length||v[0].hasArrExpr?v.reduce(function(d,I){var W=o._getPreferredOutput(I);return p&&Array.isArray(W)?d=d.concat(W):d.push(W),d},[]):this._getPreferredOutput(v[0]):l?[]:void 0}},y.prototype._getPreferredOutput=function(t){var e=this.currResultType;switch(e){case"all":var r=Array.isArray(t.path)?t.path:y.toPathArray(t.path);return t.pointer=y.toPointer(r),t.path="string"==typeof t.path?t.path:y.toPathString(t.path),t;case"value":case"parent":case"parentProperty":return t[e];case"path":return y.toPathString(t[e]);case"pointer":return y.toPointer(t.path);default:throw new TypeError("Unknown result type")}},y.prototype._handleCallback=function(t,e,r){if(e){var n=this._getPreferredOutput(t);t.path="string"==typeof t.path?t.path:y.toPathString(t.path),e(n,r,t)}},y.prototype._trace=function(t,e,r,n,o,u,c,p){var m,l=this;if(!t.length)return this._handleCallback(m={path:r,value:e,parent:n,parentProperty:o,hasArrExpr:c},u,"value"),m;var s=t[0],v=t.slice(1),d=[];function I(S){Array.isArray(S)?S.forEach(function(it){d.push(it)}):d.push(S)}if(("string"!=typeof s||p)&&e&&O.call(e,s))I(this._trace(v,e[s],L(r,s),e,s,u,c));else if("*"===s)this._walk(e,function(S){I(l._trace(v,e[S],L(r,S),e,S,u,!0,!0))});else if(".."===s)I(this._trace(v,e,r,n,o,u,c)),this._walk(e,function(S){"object"===g(e[S])&&I(l._trace(t.slice(),e[S],L(r,S),e,S,u,!0))});else{if("^"===s)return this._hasParentSelector=!0,{path:r.slice(0,-1),expr:v,isParentSelector:!0};if("~"===s)return m={path:L(r,s),value:o,parent:n,parentProperty:null},this._handleCallback(m,u,"property"),m;if("$"===s)I(this._trace(v,e,r,null,null,u,c));else if(/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(s))I(this._slice(s,v,e,r,n,o,u));else if(0===s.indexOf("?(")){if(this.currPreventEval)throw new Error("Eval [?(expr)] prevented in JSONPath expression.");var W=s.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/,"$1");this._walk(e,function(S){l._eval(W,e[S],S,r,n,o)&&I(l._trace(v,e[S],L(r,S),e,S,u,!0))})}else if("("===s[0]){if(this.currPreventEval)throw new Error("Eval [(expr)] prevented in JSONPath expression.");I(this._trace(Q(this._eval(s,e,r[r.length-1],r.slice(0,-1),n,o),v),e,r,n,o,u,c))}else if("@"===s[0]){var N=!1,H=s.slice(1,-2);switch(H){case"scalar":(!e||!["object","function"].includes(g(e)))&&(N=!0);break;case"boolean":case"string":case"undefined":case"function":g(e)===H&&(N=!0);break;case"integer":Number.isFinite(e)&&!(e%1)&&(N=!0);break;case"number":Number.isFinite(e)&&(N=!0);break;case"nonFinite":"number"==typeof e&&!Number.isFinite(e)&&(N=!0);break;case"object":e&&g(e)===H&&(N=!0);break;case"array":Array.isArray(e)&&(N=!0);break;case"other":N=this.currOtherTypeCallback(e,r,n,o);break;case"null":null===e&&(N=!0);break;default:throw new TypeError("Unknown value type "+H)}if(N)return this._handleCallback(m={path:r,value:e,parent:n,parentProperty:o},u,"value"),m}else if("`"===s[0]&&e&&O.call(e,s.slice(1))){var X=s.slice(1);I(this._trace(v,e[X],L(r,X),e,X,u,c,!0))}else if(s.includes(",")){var k,Y=function z(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=T(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(l){throw l},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var p,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var l=r.next();return u=l.done,l},e:function(l){c=!0,p=l},f:function(){try{!u&&null!=r.return&&r.return()}finally{if(c)throw p}}}}(s.split(","));try{for(Y.s();!(k=Y.n()).done;)I(this._trace(Q(k.value,v),e,r,n,o,u,!0))}catch(S){Y.e(S)}finally{Y.f()}}else!p&&e&&O.call(e,s)&&I(this._trace(v,e[s],L(r,s),e,s,u,c,!0))}if(this._hasParentSelector)for(var G=0;G<d.length;G++){var Z=d[G];if(Z&&Z.isParentSelector){var x=this._trace(Z.expr,e,Z.path,n,o,u,c);if(Array.isArray(x)){d[G]=x[0];for(var ot=x.length,V=1;V<ot;V++)G++,d.splice(G,0,x[V])}else d[G]=x}}return d},y.prototype._walk=function(t,e){if(Array.isArray(t))for(var r=t.length,n=0;n<r;n++)e(n);else t&&"object"===g(t)&&Object.keys(t).forEach(function(o){e(o)})},y.prototype._slice=function(t,e,r,n,o,u,c){if(Array.isArray(r)){var p=r.length,l=t.split(":"),m=l[2]&&Number.parseInt(l[2])||1,s=l[0]&&Number.parseInt(l[0])||0,v=l[1]&&Number.parseInt(l[1])||p;s=s<0?Math.max(0,s+p):Math.min(p,s),v=v<0?Math.max(0,v+p):Math.min(p,v);for(var d=[],I=s;I<v;I+=m)this._trace(Q(I,e),r,n,o,u,c,!0).forEach(function(N){d.push(N)});return d}},y.prototype._eval=function(t,e,r,n,o,u){this.currSandbox._$_parentProperty=u,this.currSandbox._$_parent=o,this.currSandbox._$_property=r,this.currSandbox._$_root=this.json,this.currSandbox._$_v=e;var c=t.includes("@path");c&&(this.currSandbox._$_path=y.toPathString(n.concat([r])));var p="script:"+t;if(!y.cache[p]){var l=t.replace(/@parentProperty/g,"_$_parentProperty").replace(/@parent/g,"_$_parent").replace(/@property/g,"_$_property").replace(/@root/g,"_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g,"_$_v$1");c&&(l=l.replace(/@path/g,"_$_path")),y.cache[p]=new this.vm.Script(l)}try{return y.cache[p].runInNewContext(this.currSandbox)}catch(m){throw new Error("jsonPath: "+m.message+": "+t)}},y.cache={},y.toPathString=function(t){for(var e=t,r=e.length,n="$",o=1;o<r;o++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[o])||(n+=/^[\*0-9]+$/.test(e[o])?"["+e[o]+"]":"['"+e[o]+"']");return n},y.toPointer=function(t){for(var e=t,r=e.length,n="",o=1;o<r;o++)/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[o])||(n+="/"+e[o].toString().replace(/~/g,"~0").replace(/\//g,"~1"));return n},y.toPathArray=function(t){var e=y.cache;if(e[t])return e[t].concat();var r=[],o=t.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g,";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g,function(u,c){return"[#"+(r.push(c)-1)+"]"}).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g,function(u,c){return"['"+c.replace(/\./g,"%@%").replace(/~/g,"%%@@%%")+"']"}).replace(/~/g,";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g,";").replace(/%@%/g,".").replace(/%%@@%%/g,"~").replace(/(?:;)?(\^+)(?:;)?/g,function(u,c){return";"+c.split("").join(";")+";"}).replace(/;;;|;;/g,";..;").replace(/;$|'?\]|'$/g,"").split(";").map(function(u){var c=u.match(/#([0-9]+)/);return c&&c[1]?r[c[1]]:u});return e[t]=o,e[t].concat()},y.prototype.vm={Script:function(){function t(e){U(this,t),this.code=e}return $(t,[{key:"runInNewContext",value:function(r){var n=this.code,o=Object.keys(r),u=[];!function(e,r,n){for(var o=e.length,u=0;u<o;u++)n(e[u])&&r.push(e.splice(u--,1)[0])}(o,u,function(s){return"function"==typeof r[s]});var c=o.map(function(s,v){return r[s]}),p=u.reduce(function(s,v){var d=r[v].toString();return/function/.test(d)||(d="function "+d),"var "+v+"="+d+";"+s},"");!/(["'])use strict\1/.test(n=p+n)&&!o.includes("arguments")&&(n="var arguments = undefined;"+n);var l=(n=n.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/,"")).lastIndexOf(";"),m=l>-1?n.slice(0,l+1)+" return "+n.slice(l+1):" return "+n;return A(Function,o.concat([m])).apply(void 0,function E(t){return function F(t){if(Array.isArray(t))return B(t)}(t)||function P(t){if(typeof Symbol<"u"&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||T(t)||function K(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(c))}}]),t}()}}}]);