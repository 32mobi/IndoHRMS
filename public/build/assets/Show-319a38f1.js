import{q as H,h as N,u as T,m as j,t as D,r as l,o as u,a as f,f as s,l as t,e as d,F as v,k as _,x as r,y as o,p as k,b as c,d as R,A as h}from"./app-44623493.js";const E={key:0,class:"flex space-x-4"},F={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},O={name:"UserShow"},G=Object.assign(O,{setup(q){const y=H("emitter");N();const b=T(),$=j(),C={},w="user/",a=D({...C}),S=e=>{Object.assign(a,e)},g=async e=>{y.emit("showActionItem",{uuid:a.uuid,action:"status",data:{status:e},confirmation:!0})};return(e,n)=>{const U=l("PageHeaderAction"),A=l("PageHeader"),B=l("BaseBadge"),p=l("BaseButton"),m=l("BaseDataView"),P=l("ShowButton"),V=l("BaseCard"),I=l("ShowItem"),z=l("ParentTransition");return u(),f(v,null,[s(A,{title:e.$trans(d(b).meta.trans,{attribute:e.$trans(d(b).meta.label)}),navs:[{label:e.$trans("user.user"),path:"User"}]},{default:t(()=>[s(U,{name:"User",title:e.$trans("user.user"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),s(z,{appear:"",visibility:!0},{default:t(()=>[s(I,{"init-url":w,uuid:d(b).params.uuid,onSetItem:S,onRedirectTo:n[5]||(n[5]=i=>d($).push({name:"User"}))},{default:t(()=>[a.uuid?(u(),_(V,{key:0},{title:t(()=>[r(o(a.profile.name)+" ",1),s(B,{label:a.status.label,design:a.status.color},null,8,["label","design"])]),action:t(()=>[d(k)("user:edit")?(u(),f("div",E,[a.status.value=="pending_approval"?(u(),f(v,{key:0},[s(p,{size:"xs",design:"success",onClick:n[0]||(n[0]=i=>g("activated"))},{default:t(()=>[r(o(e.$trans("user.status_action.activate")),1)]),_:1}),s(p,{size:"xs",design:"danger",onClick:n[1]||(n[1]=i=>g("disapproved"))},{default:t(()=>[r(o(e.$trans("user.status_action.disapprove")),1)]),_:1})],64)):c("",!0),a.status.value=="activated"?(u(),_(p,{key:1,size:"xs",design:"danger",onClick:n[2]||(n[2]=i=>g("banned"))},{default:t(()=>[r(o(e.$trans("user.status_action.ban")),1)]),_:1})):c("",!0),a.status.value=="banned"?(u(),_(p,{key:2,size:"xs",design:"success",onClick:n[3]||(n[3]=i=>g("activated"))},{default:t(()=>[r(o(e.$trans("user.status_action.activate")),1)]),_:1})):c("",!0)])):c("",!0)]),footer:t(()=>[s(P,null,{default:t(()=>[d(k)("user:edit")?(u(),_(p,{key:0,design:"primary",onClick:n[4]||(n[4]=i=>d($).push({name:"UserEdit",params:{uuid:a.uuid}}))},{default:t(()=>[r(o(e.$trans("general.edit")),1)]),_:1})):c("",!0)]),_:1})]),default:t(()=>[R("dl",F,[s(m,{label:e.$trans("user.props.email")},{default:t(()=>[r(o(a.email),1)]),_:1},8,["label"]),s(m,{label:e.$trans("user.props.username")},{default:t(()=>[r(o(a.username),1)]),_:1},8,["label"]),s(m,{label:e.$trans("config.role.role"),class:"col-span-1 sm:col-span-2"},{default:t(()=>[(u(!0),f(v,null,h(a.roles,i=>(u(),f("div",null,[s(B,{label:i.label},null,8,["label"])]))),256))]),_:1},8,["label"]),s(m,{label:e.$trans("general.created_at")},{default:t(()=>[r(o(a.createdAt.formatted),1)]),_:1},8,["label"]),s(m,{label:e.$trans("general.updated_at")},{default:t(()=>[r(o(a.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):c("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{G as default};
