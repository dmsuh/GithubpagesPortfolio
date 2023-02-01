import{_ as E}from"./photoM.d7fcf4ee.js";import{u as B}from"./siteStore.a79e08ce.js";import{I as O,L as q,K as F,M as H,y as W,b as K,m as x,l as M,u as C,f as N,z as w,e as P,A as Q,v as D,p as G,o as J,s as X,d as Y,n as Z}from"./VCard.7f95b452.js";import{P as y,W as ee,Q as u,R as m,S as d,v as t,a4 as R,ag as I,aj as f,V as T,ak as U,O as p,al as L,U as te,l as g,z as ie,B as le,F as j,t as r,c as $,b as _,I as A,r as z,A as ne}from"./index.fe37fb70.js";import{V as se,a as b}from"./VRow.0aa6afc2.js";import{V as ae}from"./VBtn.4530d544.js";import{V as oe}from"./VContainer.7d2625c1.js";const de=y({__name:"TimeLineComponent",props:["id","title","description","modules","imageName"],setup(e){const l=e,s=B();return(c,i)=>{const a=ee("router-link");return u(),m(W,{class:"h-25",variant:"tonal"},{default:d(()=>[t(O,null,{default:d(()=>[t(a,{onClick:i[0]||(i[0]=o=>R(s).currentId=l.id),to:{name:"SiteInfo",params:{name:l.id}}},{default:d(()=>[I(f(l.title),1)]),_:1},8,["to"])]),_:1}),t(q,null,{default:d(()=>[t(se,null,{default:d(()=>[t(b,{cols:"7"},{default:d(()=>[T("p",null,f(l.description),1)]),_:1}),t(b,null,{default:d(()=>[t(F,{"min-width":"200px","max-width":"300px",src:E}),T("p",null,f(l.imageName),1)]),_:1})]),_:1})]),_:1}),l.modules?(u(),m(H,{key:0},{default:d(()=>[(u(!0),U(p,null,L(l.modules,o=>(u(),m(ae,{href:o.information,key:o},{default:d(()=>[I(f(o.name),1)]),_:2},1032,["href"]))),128))]),_:1})):te("",!0)]),_:1})}}});const re=g({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...K(),...x(),...ie()},setup(e,l){let{slots:s}=l;const{themeClasses:c}=le(e),{densityClasses:i}=M(e);j({VTimelineDivider:{lineColor:r(e,"lineColor")},VTimelineItem:{density:r(e,"density"),lineInset:r(e,"lineInset")}});const a=$(()=>{const n=e.side?e.side:e.density!=="default"?"end":null;return n&&`v-timeline--side-${n}`}),o=$(()=>{const n=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return n;case"start":return n[0];case"end":return n[1];default:return null}});return C(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},c.value,i.value,a.value],style:{"--v-timeline-line-thickness":_(e.lineThickness)}},s)),{}}}),ue=g({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:A,iconColor:String,lineColor:String,...N(),...w(),...P()},setup(e,l){let{slots:s}=l;const{sizeClasses:c,sizeStyles:i}=Q(e,"v-timeline-divider__dot"),{backgroundColorStyles:a,backgroundColorClasses:o}=D(r(e,"dotColor")),{roundedClasses:n}=G(e,"v-timeline-divider__dot"),{elevationClasses:v}=J(e),{backgroundColorClasses:S,backgroundColorStyles:V}=D(r(e,"lineColor"));return j({VIcon:{color:r(e,"iconColor"),icon:r(e,"icon"),size:r(e,"size")}}),C(()=>{var k;var h;return t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[t("div",{class:["v-timeline-divider__before",S.value],style:V.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",v.value,n.value,c.value],style:i.value},[t("div",{class:["v-timeline-divider__inner-dot",o.value,n.value],style:a.value},[(k=(h=s.default)==null?void 0:h.call(s))!=null?k:e.icon?t(X,null,null):void 0])]),t("div",{class:["v-timeline-divider__after",S.value],style:V.value},null)])}),{}}}),ce=g({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:A,iconColor:String,lineInset:[Number,String],...N(),...P(),...w(),...x(),...Y()},setup(e,l){let{slots:s}=l;const{dimensionStyles:c}=Z(e),i=z(0),a=z();return ne(a,o=>{var v;var n;!o||(i.value=(v=(n=o.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:n.getBoundingClientRect().width)!=null?v:0)},{flush:"post"}),C(()=>{var o,n;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":_(i.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${_(e.lineInset)})`:_(0)}},[t("div",{class:"v-timeline-item__body",style:c.value},[(o=s.default)==null?void 0:o.call(s)]),t(ue,{ref:a,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:s.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((n=s.opposite)==null?void 0:n.call(s))])])}),{}}}),me=y({__name:"HelloWorld",setup(e){const l=B();return(s,c)=>(u(),m(oe,{class:"fill-height"},{default:d(()=>[t(re,{side:"end"},{default:d(()=>[(u(!0),U(p,null,L(R(l).sites,i=>(u(),m(ce,{elevation:"5",key:i.id},{default:d(()=>[t(de,{id:i.id,"onUpdate:id":a=>i.id=a,title:i.title,"onUpdate:title":a=>i.title=a,modules:i.modules,"onUpdate:modules":a=>i.modules=a},null,8,["id","onUpdate:id","title","onUpdate:title","modules","onUpdate:modules"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),Ve=y({__name:"HomeView",setup(e){return(l,s)=>(u(),m(me))}});export{Ve as default};
