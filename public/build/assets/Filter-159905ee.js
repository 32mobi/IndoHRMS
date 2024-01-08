import{u as B,q,t as v,s as F,v as N,r as i,o as l,k as m,l as L,d,a as V,f as y,e as b,b as r}from"./app-44623493.js";const W={class:"grid grid-cols-3 gap-6"},w={key:0,class:"col-span-3 sm:col-span-1"},A={key:1,class:"col-span-3 sm:col-span-1"},C={class:"col-span-3 sm:col-span-1"},D={class:"col-span-3 sm:col-span-1"},E={class:"col-span-3 sm:col-span-1"},I={class:"col-span-3 sm:col-span-1"},P={class:"col-span-3 sm:col-span-1"},j={key:2,class:"col-span-3 sm:col-span-1"},M={__name:"Filter",props:{initUrl:{type:String,default:""},dateAs:{type:String,default:"date"},dayWiseFilter:{type:Boolean,default:!1}},emits:["hide"],setup(u,{emit:f}){const S=u,s=B();q("moment");const g={date:"",codeNumber:"",department:"",designation:"",branch:"",employmentStatus:"",dayWise:!1},t=v({...g}),p=F(S.initUrl),n=v({department:"",designation:"",branch:"",employmentStatus:"",isLoaded:!(s.query.department||s.query.designation||s.query.branch||s.query.employmentStatus)});return N(async()=>{n.department=s.query.department,n.designation=s.query.designation,n.branch=s.query.branch,n.employmentStatus=s.query.employmentStatus,n.isLoaded=!0}),(o,e)=>{const h=i("DatePicker"),$=i("BaseInput"),c=i("BaseSelectSearch"),k=i("BaseSwitch"),U=i("FilterForm");return l(),m(U,{"init-form":g,form:t,onHide:e[10]||(e[10]=a=>f("hide"))},{default:L(()=>[d("div",W,[u.dateAs=="date"?(l(),V("div",w,[y(h,{modelValue:t.date,"onUpdate:modelValue":e[0]||(e[0]=a=>t.date=a),name:"date",label:o.$trans("attendance.props.date"),"no-clear":"",error:b(p).date,"onUpdate:error":e[1]||(e[1]=a=>b(p).date=a)},null,8,["modelValue","label","error"])])):r("",!0),u.dateAs=="month"?(l(),V("div",A,[y(h,{as:"month",modelValue:t.date,"onUpdate:modelValue":e[2]||(e[2]=a=>t.date=a),name:"date",label:o.$trans("attendance.props.date"),"no-clear":"",error:b(p).date,"onUpdate:error":e[3]||(e[3]=a=>b(p).date=a)},null,8,["modelValue","label","error"])])):r("",!0),d("div",C,[y($,{type:"text",modelValue:t.codeNumber,"onUpdate:modelValue":e[4]||(e[4]=a=>t.codeNumber=a),name:"codeNumber",label:o.$trans("employee.props.code_number")},null,8,["modelValue","label"])]),d("div",D,[n.isLoaded?(l(),m(c,{key:0,name:"department",label:o.$trans("global.select",{attribute:o.$trans("company.department.department")}),modelValue:t.department,"onUpdate:modelValue":e[5]||(e[5]=a=>t.department=a),"value-prop":"uuid","init-search":n.department,"search-action":"company/department/list"},null,8,["label","modelValue","init-search"])):r("",!0)]),d("div",E,[n.isLoaded?(l(),m(c,{key:0,name:"designation",label:o.$trans("global.select",{attribute:o.$trans("company.designation.designation")}),modelValue:t.designation,"onUpdate:modelValue":e[6]||(e[6]=a=>t.designation=a),"value-prop":"uuid","init-search":n.designation,"search-action":"company/designation/list"},null,8,["label","modelValue","init-search"])):r("",!0)]),d("div",I,[n.isLoaded?(l(),m(c,{key:0,name:"branch",label:o.$trans("global.select",{attribute:o.$trans("company.branch.branch")}),modelValue:t.branch,"onUpdate:modelValue":e[7]||(e[7]=a=>t.branch=a),"value-prop":"uuid","init-search":n.branch,"search-action":"company/branch/list"},null,8,["label","modelValue","init-search"])):r("",!0)]),d("div",P,[n.isLoaded?(l(),m(c,{key:0,name:"employmentStatus",label:o.$trans("global.select",{attribute:o.$trans("employee.employment_status.employment_status")}),modelValue:t.employmentStatus,"onUpdate:modelValue":e[8]||(e[8]=a=>t.employmentStatus=a),"value-prop":"uuid","init-search":n.employmentStatus,"search-action":"option/list","additional-search-query":{type:"employment_status"}},null,8,["label","modelValue","init-search"])):r("",!0)]),u.dayWiseFilter?(l(),V("div",j,[y(k,{vertical:"",modelValue:t.dayWise,"onUpdate:modelValue":e[9]||(e[9]=a=>t.dayWise=a),name:"dayWise",label:o.$trans("global.report",{attribute:o.$trans("attendance.day_wise")})},null,8,["modelValue","label"])])):r("",!0)])]),_:1},8,["form"])}}};export{M as _};
