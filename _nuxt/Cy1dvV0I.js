import{d as h,_ as y,a as C,q as w}from"./DGBphXQH.js";import{d as x,q as A,y as k,z as o,A as q,B,x as R,C as b,D as e,c as D,g as u,f as E,s as I,l as K,K as L,i as M}from"./VBVZWgwv.js";import{u as N}from"./BvYfOUEd.js";const P={key:0},H=x({__name:"[...slug]",async setup(S){let a,n;const t=A(),{locale:r,localeProperties:i,t:p}=k(),_=o(()=>Array.isArray(t.params.slug)?t.params.slug:[t.params.slug]),c=o(()=>I(K(r.value,..._.value))),m=o(()=>`content_${r.value}`),{data:s}=([a,n]=q(async()=>N(c.value,async()=>await w(m.value).path(c.value).first(),"$vHqkxevve1")),a=await a,n(),a);if(!s.value)throw B({statusCode:404,statusMessage:"Page not found"});const{profile:d}=R(),{copy:g}=b();return h({meta_o:{usingInput:!0,handler:()=>{g(d.email),L.success(p("global.email_copied"))}}}),(V,$)=>{var l;const f=y,v=C;return e(s)?(M(),D("div",P,[u(f,{page:e(s),"is-writing":e(t).path.includes("/articles/")},null,8,["page","is-writing"]),u(v,{dir:((l=e(i))==null?void 0:l.dir)??"ltr",value:e(s)},null,8,["dir","value"])])):E("",!0)}}});export{H as default};
