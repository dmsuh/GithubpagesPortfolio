import{X as G,l as x,Y as Ue,q as Ge,n as _e,g as ye,p,Z as B,_ as pe,b as h,c as v,$ as j,a0 as re,I as O,z as Y,a1 as Je,B as q,a2 as Ze,t as be,v as r,a3 as te,D as Qe,m as Ce,r as V,A as M,N as et,M as tt,w as J,C as Se,O as ke,x as nt,a4 as oe,P as at,a5 as lt,F as $e,j as st,a6 as it,a7 as ue,K as we,u as rt,a8 as ot,a9 as ce}from"./index.fe37fb70.js";const ut=["top","bottom"],ct=["start","end","left","right"];function dt(e,t){let[a,n]=e.split(" ");return n||(n=G(ut,a)?"start":G(ct,a)?"top":"center"),{side:de(a,t),align:de(n,t)}}function de(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return x({name:a!=null?a:Ue(Ge(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(n,s){let{slots:l}=s;return()=>{var i;return _e(n.tag,{class:e},(i=l.default)==null?void 0:i.call(l))}}})}function E(e){const t=ye("useRender");t.render=e}const vt=["x-small","small","default","large","x-large"],xe=p({size:{type:[String,Number],default:"default"}},"size");function Ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return pe(()=>{let a,n;return G(vt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:h(e.size),height:h(e.size)}),{sizeClasses:a,sizeStyles:n}})}const K=p({tag:{type:String,default:"div"}},"tag");function ae(e){return pe(()=>{const t=[],a={};return e.value.background&&(re(e.value.background)?a.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(re(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function Te(e,t){const a=v(()=>({text:j(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=ae(a);return{textColorClasses:n,textColorStyles:s}}function ve(e,t){const a=v(()=>({background:j(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=ae(a);return{backgroundColorClasses:n,backgroundColorStyles:s}}const mt=p({color:String,start:Boolean,end:Boolean,icon:O,...xe(),...K({tag:"i"}),...Y()},"v-icon"),ft=x({name:"VIcon",props:mt(),setup(e,t){let{attrs:a,slots:n}=t,s;n.default&&(s=v(()=>{var f,g;const m=(f=n.default)==null?void 0:f.call(n);if(!!m)return(g=m.filter(y=>y.type===Je&&y.children&&typeof y.children=="string")[0])==null?void 0:g.children}));const{themeClasses:l}=q(e),{iconData:i}=Ze(s||e),{sizeClasses:o}=Ie(e),{textColorClasses:u,textColorStyles:d}=Te(be(e,"color"));return E(()=>{var f;return r(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,o.value,u.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},d.value],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[(f=n.default)==null?void 0:f.call(n)]})}),{}}});const Le=p({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ve(e){return{dimensionStyles:v(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function gt(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ht=x({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Le()},setup(e,t){let{slots:a}=t;const{aspectStyles:n}=gt(e),{dimensionStyles:s}=Ve(e);return E(()=>{var l;return r("div",{class:"v-responsive",style:s.value},[r("div",{class:"v-responsive__sizer",style:n.value},null),(l=a.additional)==null?void 0:l.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function _t(e,t){if(!te)return;const a=t.modifiers||{},n=t.value,{handler:s,options:l}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var o;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const f=(o=e._observe)==null?void 0:o[t.instance.$.uid];if(!f)return;const g=u.some(m=>m.isIntersecting);s&&(!a.quiet||f.init)&&(!a.once||g||f.init)&&s(g,u,d),g&&a.once?Ee(e,t):f.init=!0},l);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ee(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const yt={mounted:_t,unmounted:Ee},pt=yt,bt=p({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),F=(e,t)=>{let{slots:a}=t;const{transition:n,...s}=e,{component:l=Ce,...i}=typeof n=="object"?n:{};return _e(l,Qe(typeof n=="string"?{name:n}:i,s),a)},Be=x({name:"VImg",directives:{intersect:pt},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...bt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const s=V(""),l=V(),i=V(e.eager?"loading":"idle"),o=V(),u=V(),d=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=v(()=>d.value.aspect||o.value/u.value||0);M(()=>e.src,()=>{g(i.value!=="idle")}),M(f,(c,_)=>{!c&&_&&l.value&&b(l.value)}),et(()=>g());function g(c){if(!(e.eager&&c)&&!(te&&!c&&!e.eager)){if(i.value="loading",d.value.lazySrc){const _=new Image;_.src=d.value.lazySrc,b(_,null)}!d.value.src||tt(()=>{var _,S;if(a("loadstart",((_=l.value)==null?void 0:_.currentSrc)||d.value.src),(S=l.value)!=null&&S.complete){if(l.value.naturalWidth||y(),i.value==="error")return;f.value||b(l.value,null),m()}else f.value||b(l.value),I()})}}function m(){var c;I(),i.value="loaded",a("load",((c=l.value)==null?void 0:c.currentSrc)||d.value.src)}function y(){var c;i.value="error",a("error",((c=l.value)==null?void 0:c.currentSrc)||d.value.src)}function I(){const c=l.value;c&&(s.value=c.currentSrc||c.src)}let z=-1;function b(c){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(z);const{naturalHeight:L,naturalWidth:A}=c;L||A?(o.value=A,u.value=L):!c.complete&&i.value==="loading"&&_!=null?z=window.setTimeout(S,_):(c.currentSrc.endsWith(".svg")||c.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};S()}const k=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),$=()=>{var c;if(!d.value.src||i.value==="idle")return null;const _=r("img",{class:["v-img__img",k.value],src:d.value.src,srcset:d.value.srcset,alt:"",sizes:e.sizes,ref:l,onLoad:m,onError:y},null),S=(c=n.sources)==null?void 0:c.call(n);return r(F,{transition:e.transition,appear:!0},{default:()=>[J(S?r("picture",{class:"v-img__picture"},[S,_]):_,[[nt,i.value==="loaded"]])]})},T=()=>r(F,{transition:e.transition},{default:()=>[d.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",k.value],src:d.value.lazySrc,alt:""},null)]}),w=()=>n.placeholder?r(F,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,R=()=>n.error?r(F,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,N=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,P=V(!1);{const c=M(f,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{P.value=!0})}),c())})}return E(()=>J(r(ht,{class:["v-img",{"v-img--booting":!P.value}],style:{width:h(e.width==="auto"?o.value:e.width)},aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(ke,null,[r($,null,null),r(T,null,null),r(N,null,null),r(w,null,null),r(R,null,null)]),default:n.default}),[[Se("intersect"),{handler:g,options:e.options},null,{once:!0}]])),{currentSrc:s,image:l,state:i,naturalWidth:o,naturalHeight:u}}}),Ct=["elevated","flat","tonal","outlined","text","plain"];function ze(e,t){return r(ke,null,[e&&r("span",{key:"overlay",class:`${t}__overlay`},null),r("span",{key:"underlay",class:`${t}__underlay`},null)])}const Re=p({color:String,variant:{type:String,default:"elevated",validator:e=>Ct.includes(e)}},"variant");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();const a=v(()=>{const{variant:l}=oe(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:s}=ae(v(()=>{const{variant:l,color:i}=oe(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const St=[null,"default","comfortable","compact"],le=p({density:{type:String,default:"default",validator:e=>St.includes(e)}},"density");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const se=p({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{roundedClasses:v(()=>{const n=j(e)?e.value:e.rounded,s=[];if(n===!0||n==="")s.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))s.push(`rounded-${l}`);return s})}}const kt=p({start:Boolean,end:Boolean,icon:O,image:String,...le(),...se(),...xe(),...K(),...Y(),...Re({variant:"flat"})},"v-avatar"),me=x({name:"VAvatar",props:kt(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=q(e),{colorClasses:s,colorStyles:l,variantClasses:i}=Ne(e),{densityClasses:o}=Pe(e),{roundedClasses:u}=ie(e),{sizeClasses:d,sizeStyles:f}=Ie(e);return E(()=>{var g;return r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,s.value,o.value,u.value,d.value,i.value],style:[l.value,f.value]},{default:()=>[e.image?r(Be,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(ft,{key:"icon",icon:e.icon},null):(g=a.default)==null?void 0:g.call(a),ze(!1,"v-avatar")]})}),{}}}),$t=p({border:[Boolean,Number,String]},"border");function wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{borderClasses:v(()=>{const n=j(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))s.push(`border-${l}`);return s})}}const xt=p({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function It(e){return{elevationClasses:v(()=>{const a=j(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const Z=at({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:a}=t;const{defaults:n,reset:s,root:l,scoped:i}=lt(e);return $e(n,{reset:s,root:l,scoped:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}});function Tt(e){const t=V(),a=V(!1);if(te){const n=new IntersectionObserver(s=>{e==null||e(s,n),a.value=!!s.find(l=>l.isIntersecting)});st(()=>{n.disconnect()}),M(t,(s,l)=>{l&&(n.unobserve(l),a.value=!1),s&&n.observe(s)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const Q=Symbol("rippleStop"),Lt=80;function fe(e,t){e.style.transform=t,e.style.webkitTransform=t}function U(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function ee(e){return e.constructor.name==="TouchEvent"}function Ae(e){return e.constructor.name==="KeyboardEvent"}const Vt=function(e,t){var a;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,l=0;if(!Ae(e)){const m=t.getBoundingClientRect(),y=ee(e)?e.touches[e.touches.length-1]:e;s=y.clientX-m.left,l=y.clientY-m.top}let i=0,o=.3;(a=t._ripple)!=null&&a.circle?(o=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((s-i)**2+(l-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-i*2)/2}px`,d=`${(t.clientHeight-i*2)/2}px`,f=n.center?u:`${s-i}px`,g=n.center?d:`${l-i}px`;return{radius:i,scale:o,x:f,y:g,centerX:u,centerY:d}},X={show(e,t){var a;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(a=t._ripple)!=null&&a.enabled))return;const s=document.createElement("span"),l=document.createElement("span");s.appendChild(l),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:i,scale:o,x:u,y:d,centerX:f,centerY:g}=Vt(e,t,n),m=`${i*2}px`;l.className="v-ripple__animation",l.style.width=m,l.style.height=m,t.appendChild(s);const y=window.getComputedStyle(t);y&&y.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),fe(l,`translate(${u}, ${d}) scale3d(${o},${o},${o})`),U(l,0),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),fe(l,`translate(${f}, ${g}) scale3d(1,1,1)`),U(l,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),l=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),U(n,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)},300)},l)}};function Oe(e){return typeof e>"u"||!!e}function D(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[Q])){if(e[Q]=!0,ee(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Ae(e),a._ripple.class&&(t.class=a._ripple.class),ee(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{X.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;a!=null&&(n=a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Lt)}else X.show(e,a,t)}}function ge(e){e[Q]=!0}function C(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{C(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function He(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let W=!1;function De(e){!W&&(e.keyCode===ue.enter||e.keyCode===ue.space)&&(W=!0,D(e))}function We(e){W=!1,C(e)}function je(e){W&&(W=!1,C(e))}function Fe(e,t,a){var i;const{value:n,modifiers:s}=t,l=Oe(n);if(l||X.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,it(n)&&n.class&&(e._ripple.class=n.class),l&&!a){if(s.stop){e.addEventListener("touchstart",ge,{passive:!0}),e.addEventListener("mousedown",ge);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",C,{passive:!0}),e.addEventListener("touchmove",He,{passive:!0}),e.addEventListener("touchcancel",C),e.addEventListener("mousedown",D),e.addEventListener("mouseup",C),e.addEventListener("mouseleave",C),e.addEventListener("keydown",De),e.addEventListener("keyup",We),e.addEventListener("blur",je),e.addEventListener("dragstart",C,{passive:!0})}else!l&&a&&Me(e)}function Me(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",C),e.removeEventListener("touchmove",He),e.removeEventListener("touchcancel",C),e.removeEventListener("mouseup",C),e.removeEventListener("mouseleave",C),e.removeEventListener("keydown",De),e.removeEventListener("keyup",We),e.removeEventListener("dragstart",C),e.removeEventListener("blur",je)}function Et(e,t){Fe(e,t,!1)}function Bt(e){delete e._ripple,Me(e)}function zt(e,t){if(t.value===t.oldValue)return;const a=Oe(t.oldValue);Fe(e,t,a)}const Rt={mounted:Et,unmounted:Bt,updated:zt};const he={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Xe=p({location:String},"location");function Ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=we();return{locationStyles:v(()=>{if(!e.location)return{};const{side:l,align:i}=dt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function o(d){return a?a(d):0}const u={};return l!=="center"&&(t?u[he[l]]=`calc(100% - ${o(l)}px)`:u[l]=0),i!=="center"?t?u[he[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(l==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),u})}}const Nt=x({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Xe({location:"top"}),...se(),...K(),...Y()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=rt(e,"modelValue"),{isRtl:s}=we(),{themeClasses:l}=q(e),{locationStyles:i}=Ye(e),{textColorClasses:o,textColorStyles:u}=Te(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:f}=ve(v(()=>e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:m}=ve(e,"color"),{roundedClasses:y}=ie(e),{intersectionRef:I,isIntersecting:z}=Tt(),b=v(()=>parseInt(e.max,10)),k=v(()=>parseInt(e.height,10)),$=v(()=>parseFloat(e.bufferValue)/b.value*100),T=v(()=>parseFloat(n.value)/b.value*100),w=v(()=>s.value!==e.reverse),R=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),N=v(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function P(c){if(!I.value)return;const{left:_,right:S,width:L}=I.value.getBoundingClientRect(),A=w.value?L-c.clientX+(S-L):c.clientX-_;n.value=Math.round(A/L*b.value)}return E(()=>r(e.tag,{ref:I,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&z.value,"v-progress-linear--reverse":w.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},y.value,l.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(k.value):0,"--v-progress-linear-height":h(k.value),...i.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:T.value,onClick:e.clickable&&P},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...u.value,[w.value?"left":"right"]:h(-k.value),borderTop:`${h(k.value/2)} dotted`,opacity:N.value,top:`calc(50% - ${h(k.value/4)})`,width:h(100-$.value,"%"),"--v-progress-linear-stream-to":h(k.value*(w.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",d.value],style:[f.value,{opacity:N.value,width:h(e.stream?$.value:100,"%")}]},null),r(Ce,{name:R.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(c=>r("div",{key:c,class:["v-progress-linear__indeterminate",c,g.value],style:m.value},null))]):r("div",{class:["v-progress-linear__determinate",g.value],style:[m.value,{width:h(T.value,"%")}]},null)]}),a.default&&r("div",{class:"v-progress-linear__content"},[a.default({value:T.value,buffer:$.value})])]})),{}}}),Pt=p({loading:[Boolean,String]},"loader");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function Ot(e,t){var a;let{slots:n}=t;return r("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||r(Nt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Ht=["static","relative","fixed","absolute","sticky"],Dt=p({position:{type:String,validator:e=>Ht.includes(e)}},"position");function Wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function Gt(){var e,t;return(e=ye("useRouter"))==null||(t=e.proxy)==null?void 0:t.$router}function jt(e,t){const a=ot("RouterLink"),n=v(()=>!!(e.href||e.to)),s=v(()=>(n==null?void 0:n.value)||ce(t,"click")||ce(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:s,href:be(e,"href")};const l=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:s,route:l==null?void 0:l.route,navigate:l==null?void 0:l.navigate,isActive:l&&v(()=>{var i,o;return e.exact?(i=l.isExactActive)==null?void 0:i.value:(o=l.isActive)==null?void 0:o.value}),href:v(()=>e.to?l==null?void 0:l.route.value.href:e.href)}}const Ft=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const Mt=x({name:"VCardActions",setup(e,t){let{slots:a}=t;return $e({VBtn:{variant:"text"}}),E(()=>{var n;return r("div",{class:"v-card-actions"},[(n=a.default)==null?void 0:n.call(a)])}),{}}}),Xt=ne("v-card-subtitle"),Yt=ne("v-card-title"),qt=x({name:"VCardItem",props:{appendAvatar:String,appendIcon:O,prependAvatar:String,prependIcon:O,subtitle:String,title:String,...le()},setup(e,t){let{slots:a}=t;return E(()=>{var n,s,l,i,o;const u=!!(e.prependAvatar||e.prependIcon||a.prepend),d=!!(e.appendAvatar||e.appendIcon||a.append),f=!!(e.title||a.title),g=!!(e.subtitle||a.subtitle);return r("div",{class:"v-card-item"},[u&&r(Z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var m;return[r("div",{class:"v-card-item__prepend"},[(m=(n=a.prepend)==null?void 0:n.call(a))!=null?m:r(me,null,null)])]}}),r("div",{class:"v-card-item__content"},[f&&r(Yt,{key:"title"},{default:()=>{var m;return[(m=(s=a.title)==null?void 0:s.call(a))!=null?m:e.title]}}),g&&r(Xt,{key:"subtitle"},{default:()=>{var m;return[(m=(l=a.subtitle)==null?void 0:l.call(a))!=null?m:e.subtitle]}}),(i=a.default)==null?void 0:i.call(a)]),d&&r(Z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var m;return[r("div",{class:"v-card-item__append"},[(m=(o=a.append)==null?void 0:o.call(a))!=null?m:r(me,null,null)])]}})])}),{}}}),Kt=ne("v-card-text"),Jt=x({name:"VCard",directives:{Ripple:Rt},props:{appendAvatar:String,appendIcon:O,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:O,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Y(),...$t(),...le(),...Le(),...xt(),...Pt(),...Xe(),...Dt(),...se(),...Ft(),...K(),...Re({variant:"elevated"})},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=q(e),{borderClasses:l}=wt(e),{colorClasses:i,colorStyles:o,variantClasses:u}=Ne(e),{densityClasses:d}=Pe(e),{dimensionStyles:f}=Ve(e),{elevationClasses:g}=It(e),{loaderClasses:m}=At(e),{locationStyles:y}=Ye(e),{positionClasses:I}=Wt(e),{roundedClasses:z}=ie(e),b=jt(e,a),k=v(()=>e.link!==!1&&b.isLink.value),$=v(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return E(()=>{var T,w,R;const N=k.value?"a":e.tag,P=!!(n.title||e.title),c=!!(n.subtitle||e.subtitle),_=P||c,S=!!(n.append||e.appendAvatar||e.appendIcon),L=!!(n.prepend||e.prependAvatar||e.prependIcon),A=!!(n.image||e.image),qe=_||L||S,Ke=!!(n.text||e.text);return J(r(N,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":$.value},s.value,l.value,i.value,d.value,g.value,m.value,I.value,z.value,u.value],style:[o.value,f.value,y.value],href:b.href.value,onClick:$.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[A&&r(Z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var H;return[r("div",{class:"v-card__image"},[(H=(T=n.image)==null?void 0:T.call(n))!=null?H:r(Be,null,null)])]}}),r(Ot,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),qe&&r(qt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),Ke&&r(Kt,{key:"text"},{default:()=>{var H;return[(H=(w=n.text)==null?void 0:w.call(n))!=null?H:e.text]}}),(R=n.default)==null?void 0:R.call(n),n.actions&&r(Mt,null,{default:n.actions}),ze($.value,"v-card")]}),[[Se("ripple"),$.value&&e.ripple]])}),{}}});export{Ie as A,Tt as B,Pt as C,Xe as D,Dt as E,At as F,Ye as G,Wt as H,Yt as I,Kt as J,Be as K,qt as L,Mt as M,Xt as N,Rt as R,Z as V,$t as a,le as b,ne as c,Le as d,xt as e,se as f,Ft as g,Re as h,jt as i,wt as j,Ne as k,Pe as l,K as m,Ve as n,It as o,ie as p,ze as q,me as r,ft as s,Te as t,E as u,ve as v,Gt as w,de as x,Jt as y,xe as z};
