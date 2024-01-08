import{u as C,t as w,r as s,o as v,k as y,l as e,d as I,f as a,e as o,m as N,q as S,z as k,x as p,y as f,a as B,A as j,ac as O,b as q,F as z}from"./app-44623493.js";const E={class:"grid grid-cols-3 gap-6"},K={class:"col-span-3 sm:col-span-1"},U={__name:"Filter",emits:["hide"],setup(T,{emit:l}){const $=C(),m={name:""},c=w({...m});return(u,r)=>{const d=s("BaseInput"),g=s("FilterForm");return v(),y(g,{"init-form":m,form:c,onHide:r[1]||(r[1]=i=>l("hide"))},{default:e(()=>[I("div",E,[I("div",K,[a(d,{type:"text",modelValue:c.name,"onUpdate:modelValue":r[0]||(r[0]=i=>c.name=i),name:"name",label:u.$trans(`${o($).meta.transKey}.props.name`)},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},h={class:"inline-block w-6"},G={name:"OptionList"},Q=Object.assign(G,{setup(T){const l=C(),$=N(),m=S("emitter"),c="option/",u=k(!1),r=k(!1),d=w({}),g=i=>{Object.assign(d,i)};return(i,t)=>{const D=s("PageHeaderAction"),H=s("PageHeader"),V=s("BaseImport"),b=s("ParentTransition"),_=s("DataCell"),F=s("FloatingMenuItem"),P=s("FloatingMenu"),R=s("DataRow"),A=s("BaseButton"),x=s("DataTable"),L=s("ListItem");return v(),y(L,{"init-url":c,onSetItems:g},{header:e(()=>[a(H,{title:i.$trans(o(l).meta.label),navs:o(l).meta.navs},{default:e(()=>[a(D,{url:"options/",name:o(l).meta.prefix,title:i.$trans(o(l).meta.label),actions:["create","filter"],"dropdown-actions":["import","print","pdf","excel"],onToggleFilter:t[0]||(t[0]=n=>u.value=!u.value),onToggleImport:t[1]||(t[1]=n=>r.value=!r.value)},null,8,["name","title"])]),_:1},8,["title","navs"])]),import:e(()=>[a(b,{appear:"",visibility:r.value},{default:e(()=>[a(V,{path:`options/import?type=${o(l).meta.queryType}`,onCancelled:t[2]||(t[2]=n=>r.value=!1),onHide:t[3]||(t[3]=n=>r.value=!1),onCompleted:t[4]||(t[4]=n=>o(m).emit("listItems"))},null,8,["path"])]),_:1},8,["visibility"])]),filter:e(()=>[a(b,{appear:"",visibility:u.value},{default:e(()=>[a(U,{onRefresh:t[5]||(t[5]=n=>o(m).emit("listItems")),onHide:t[6]||(t[6]=n=>u.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[a(b,{appear:"",visibility:!0},{default:e(()=>[a(x,{header:d.headers,meta:d.meta,module:o(l).meta.transKey,onRefresh:t[8]||(t[8]=n=>o(m).emit("listItems"))},{actionButton:e(()=>[a(A,{onClick:t[7]||(t[7]=n=>o($).push({name:`${o(l).meta.prefix}Create`}))},{default:e(()=>[p(f(i.$trans("global.add",{attribute:i.$trans(o(l).meta.label)})),1)]),_:1})]),default:e(()=>[(v(!0),B(z,null,j(d.data,n=>(v(),y(R,{key:n.uuid},{default:e(()=>[a(_,{name:"name"},{default:e(()=>[I("div",h,[n.color?(v(),B("div",{key:0,class:"h-5 w-5 rounded-full",style:O(`background-color: ${n.color};`)},"   ",4)):q("",!0)]),p(" "+f(n.name),1)]),_:2},1024),a(_),a(_,{name:"description"},{default:e(()=>[p(f(n.descriptionSummary),1)]),_:2},1024),a(_,{name:"createdAt"},{default:e(()=>[p(f(n.createdAt.formatted),1)]),_:2},1024),a(_,{name:"action"},{default:e(()=>[a(P,null,{default:e(()=>[a(F,{icon:"fas fa-edit",onClick:M=>o($).push({name:`${o(l).meta.prefix}Edit`,params:{uuid:n.uuid}})},{default:e(()=>[p(f(i.$trans("general.edit")),1)]),_:2},1032,["onClick"]),a(F,{icon:"fas fa-trash",onClick:M=>o(m).emit("deleteItem",{uuid:n.uuid})},{default:e(()=>[p(f(i.$trans("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta","module"])]),_:1})]),_:1})}}});export{Q as default};