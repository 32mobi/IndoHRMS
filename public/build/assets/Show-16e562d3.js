import{h as b,u as h,m as M,t as P,r as t,o as i,k as r,l as e,f as o,e as l,x as S,y as k,d as v,b as y}from"./app-44623493.js";const B=["innerHTML"],w={name:"ConfigMailTemplateShow"},N=Object.assign(w,{setup(x){b();const c=h(),u=M(),m={},p="config/mailTemplate/",a=P({...m}),d=n=>{Object.assign(a,n)};return(n,s)=>{const _=t("PageHeaderAction"),f=t("BaseCard"),g=t("ShowItem"),T=t("ParentTransition"),C=t("ConfigPage");return i(),r(C,{"no-background":""},{action:e(()=>[o(_,{name:"ConfigMailTemplate",title:n.$trans("config.mail.template.template")},null,8,["title"])]),default:e(()=>[o(T,{appear:"",visibility:!0},{default:e(()=>[o(g,{"init-url":p,uuid:l(c).params.uuid,onSetItem:d,onRedirectTo:s[0]||(s[0]=H=>l(u).push({name:"ConfigMailTemplate"}))},{default:e(()=>[a.uuid?(i(),r(f,{key:0},{title:e(()=>[S(k(a.subject),1)]),default:e(()=>[v("div",{innerHTML:a.body},null,8,B)]),_:1})):y("",!0)]),_:1},8,["uuid"])]),_:1})]),_:1})}}});export{N as default};