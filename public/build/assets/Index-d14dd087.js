import{t as F,r as l,o as $,k,l as e,d as v,f as t,m as P,q as R,z as L,e as m,x as i,y as r,a as M,A as T,F as U}from"./app-44623493.js";const j={class:"grid grid-cols-3 gap-6"},N={class:"col-span-3 sm:col-span-1"},S={class:"col-span-3 sm:col-span-1"},E={class:"col-span-3 sm:col-span-1"},O={__name:"Filter",emits:["hide"],setup(A,{emit:p}){const c={name:"",alias:""},d=F({...c});return(_,o)=>{const u=l("BaseInput"),y=l("FilterForm");return $(),k(y,{"init-form":c,form:d,onHide:o[3]||(o[3]=a=>p("hide"))},{default:e(()=>[v("div",j,[v("div",N,[t(u,{type:"text",modelValue:d.name,"onUpdate:modelValue":o[0]||(o[0]=a=>d.name=a),name:"name",label:_.$trans("attendance.type.props.name")},null,8,["modelValue","label"])]),v("div",S,[t(u,{type:"text",modelValue:d.code,"onUpdate:modelValue":o[1]||(o[1]=a=>d.code=a),name:"code",label:_.$trans("attendance.type.props.code")},null,8,["modelValue","label"])]),v("div",E,[t(u,{type:"text",modelValue:d.alias,"onUpdate:modelValue":o[2]||(o[2]=a=>d.alias=a),name:"alias",label:_.$trans("attendance.type.props.alias")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},q={name:"AttendanceTypeList"},G=Object.assign(q,{setup(A){const p=P(),c=R("emitter");let d=["create","filter"];const _="attendance/type/",o=L(!1),u=F({}),y=a=>{Object.assign(u,a)};return(a,s)=>{const V=l("PageHeaderAction"),B=l("PageHeader"),C=l("ParentTransition"),f=l("DataCell"),g=l("FloatingMenuItem"),I=l("FloatingMenu"),w=l("DataRow"),D=l("BaseButton"),h=l("DataTable"),H=l("ListItem");return $(),k(H,{"init-url":_,onSetItems:y},{header:e(()=>[t(B,{title:a.$trans("attendance.type.type"),navs:[{label:a.$trans("attendance.attendance"),path:"Attendance"}]},{default:e(()=>[t(V,{url:"attendance/types/",name:"AttendanceType",title:a.$trans("attendance.type.type"),actions:m(d),"dropdown-actions":["print","pdf","excel"],onToggleFilter:s[0]||(s[0]=n=>o.value=!o.value)},null,8,["title","actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[t(C,{appear:"",visibility:o.value},{default:e(()=>[t(O,{onRefresh:s[1]||(s[1]=n=>m(c).emit("listItems")),onHide:s[2]||(s[2]=n=>o.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(C,{appear:"",visibility:!0},{default:e(()=>[t(h,{header:u.headers,meta:u.meta,module:"attendance.type",onRefresh:s[4]||(s[4]=n=>m(c).emit("listItems"))},{actionButton:e(()=>[t(D,{onClick:s[3]||(s[3]=n=>m(p).push({name:"AttendanceTypeCreate"}))},{default:e(()=>[i(r(a.$trans("global.add",{attribute:a.$trans("attendance.type.type")})),1)]),_:1})]),default:e(()=>[($(!0),M(U,null,T(u.data,n=>($(),k(w,{key:n.uuid},{default:e(()=>[t(f,{name:"name"},{default:e(()=>[i(r(n.name),1)]),_:2},1024),t(f,{name:"code"},{default:e(()=>[i(r(n.code),1)]),_:2},1024),t(f,{name:"category"},{default:e(()=>[i(r(n.category.label),1)]),_:2},1024),t(f,{name:"alias"},{default:e(()=>[i(r(n.alias),1)]),_:2},1024),t(f,{name:"createdAt"},{default:e(()=>[i(r(n.createdAt.formatted),1)]),_:2},1024),t(f,{name:"action"},{default:e(()=>[t(I,null,{default:e(()=>[t(g,{icon:"fas fa-arrow-circle-right",onClick:b=>m(p).push({name:"AttendanceTypeShow",params:{uuid:n.uuid}})},{default:e(()=>[i(r(a.$trans("general.show")),1)]),_:2},1032,["onClick"]),t(g,{icon:"fas fa-edit",onClick:b=>m(p).push({name:"AttendanceTypeEdit",params:{uuid:n.uuid}})},{default:e(()=>[i(r(a.$trans("general.edit")),1)]),_:2},1032,["onClick"]),t(g,{icon:"fas fa-copy",onClick:b=>m(p).push({name:"AttendanceTypeDuplicate",params:{uuid:n.uuid}})},{default:e(()=>[i(r(a.$trans("general.duplicate")),1)]),_:2},1032,["onClick"]),t(g,{icon:"fas fa-trash",onClick:b=>m(c).emit("deleteItem",{uuid:n.uuid})},{default:e(()=>[i(r(a.$trans("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{G as default};