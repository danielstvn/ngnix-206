(self.webpackChunkzero_cm_mf=self.webpackChunkzero_cm_mf||[]).push([[4168],{62552:(p,r,u)=>{u.r(r),u.d(r,{FocusTrap:()=>a,FocusTrapModule:()=>f});var s=u(45449),d=u(90944),l=u(41045);let a=(()=>{class n{constructor(o){this.el=o}onkeydown(o){if(!0!==this.pFocusTrapDisabled){o.preventDefault();let e=l.DomHandler.getFocusableElements(this.el.nativeElement);if(e&&e.length>0)if(e[0].ownerDocument.activeElement){let t=e.indexOf(e[0].ownerDocument.activeElement);o.shiftKey?-1==t||0===t?e[e.length-1].focus():e[t-1].focus():-1==t||t===e.length-1?e[0].focus():e[t+1].focus()}else e[0].focus()}}}return n.\u0275fac=function(o){return new(o||n)(s.\u0275\u0275directiveInject(s.ElementRef))},n.\u0275dir=s.\u0275\u0275defineDirective({type:n,selectors:[["","pFocusTrap",""]],hostAttrs:[1,"p-element"],hostBindings:function(o,e){1&o&&s.\u0275\u0275listener("keydown.tab",function(i){return e.onkeydown(i)})("keydown.shift.tab",function(i){return e.onkeydown(i)})},inputs:{pFocusTrapDisabled:"pFocusTrapDisabled"}}),n})(),f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=s.\u0275\u0275defineInjector({imports:[[d.CommonModule]]}),n})()}}]);