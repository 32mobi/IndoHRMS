import{u as V,q as w,s as k,c as C,t as _,r as s,o as E,a as U,f as n,e as a,l as g,F as I,d as i}from"./app-44623493.js";const O={class:"grid grid-cols-3 gap-4"},h={class:"col-span-3 sm:col-span-1"},B={class:"col-span-3 sm:col-span-1"},x={class:"col-span-3 sm:col-span-1"},F={class:"col-span-3 sm:col-span-1"},L={name:"AttendanceConfigGeneral"},j=Object.assign(L,{setup(q){const P=V(),t=w("$trans"),c="config/",l=k(c);C(()=>t("global.placeholder_info",{attribute:p.datePlaceholders}));const p=_({datePlaceholders:""}),m={allowEmployeeClockInOut:!1,lateGracePeriod:"",earlyLeavingGracePeriod:"",presentGracePeriod:"",type:"attendance"},r=_({...m}),f=u=>{Object.assign(p,{datePlaceholders:u.datePlaceholders.map(e=>e.value).join(", ")})};return(u,e)=>{const b=s("PageHeader"),y=s("BaseSwitch"),d=s("BaseInput"),v=s("FormAction"),G=s("ParentTransition");return E(),U(I,null,[n(b,{title:a(t)(a(P).meta.label),navs:[{label:a(t)("attendance.attendance"),path:"Attendance"}]},null,8,["title","navs"]),n(G,{appear:"",visibility:!0},{default:g(()=>[n(v,{"pre-requisites":{data:["datePlaceholders"]},onSetPreRequisites:f,"init-url":c,"data-fetch":"attendance",action:"store","init-form":m,form:r,"stay-on":"",redirect:"Attendance"},{default:g(()=>[i("div",O,[i("div",h,[n(y,{vertical:"",modelValue:r.allowEmployeeClockInOut,"onUpdate:modelValue":e[0]||(e[0]=o=>r.allowEmployeeClockInOut=o),name:"allowEmployeeClockInOut",label:a(t)("attendance.config.props.allow_employee_clock_in_out"),error:a(l).allowEmployeeClockInOut,"onUpdate:error":e[1]||(e[1]=o=>a(l).allowEmployeeClockInOut=o)},null,8,["modelValue","label","error"])]),i("div",B,[n(d,{type:"text",modelValue:r.lateGracePeriod,"onUpdate:modelValue":e[2]||(e[2]=o=>r.lateGracePeriod=o),name:"lateGracePeriod",label:a(t)("attendance.config.props.late_grace_period"),"label-hint":a(t)("attendance.config.props.late_grace_period_tip"),error:a(l).lateGracePeriod,"onUpdate:error":e[3]||(e[3]=o=>a(l).lateGracePeriod=o)},null,8,["modelValue","label","label-hint","error"])]),i("div",x,[n(d,{type:"text",modelValue:r.earlyLeavingGracePeriod,"onUpdate:modelValue":e[4]||(e[4]=o=>r.earlyLeavingGracePeriod=o),name:"earlyLeavingGracePeriod",label:a(t)("attendance.config.props.early_leaving_grace_period"),"label-hint":a(t)("attendance.config.props.early_leaving_grace_period_tip"),error:a(l).earlyLeavingGracePeriod,"onUpdate:error":e[5]||(e[5]=o=>a(l).earlyLeavingGracePeriod=o)},null,8,["modelValue","label","label-hint","error"])]),i("div",F,[n(d,{type:"text",modelValue:r.presentGracePeriod,"onUpdate:modelValue":e[6]||(e[6]=o=>r.presentGracePeriod=o),name:"presentGracePeriod",label:a(t)("attendance.config.props.present_grace_period"),"label-hint":a(t)("attendance.config.props.present_grace_period_tip"),error:a(l).presentGracePeriod,"onUpdate:error":e[7]||(e[7]=o=>a(l).presentGracePeriod=o)},null,8,["modelValue","label","label-hint","error"])])])]),_:1},8,["form"])]),_:1})],64)}}});export{j as default};