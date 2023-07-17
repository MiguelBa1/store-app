import{M as L}from"./MainLayout-4ed0b131.js";import{d as E,r as x,T as C,K as V,a as d,c as i,e as t,b as o,u as e,w as v,p as T,n as $,s as M,g as N,i as D,o as K,h,j as k,F as y,f as b,t as g,x as R,Z}from"./app-af608028.js";import{_ as u}from"./InputError-e63fa01d.js";import{_ as m}from"./InputLabel-47059b8e.js";import{_ as I}from"./PrimaryButton-76370c3c.js";import{_}from"./TextInput-836244fa.js";import"./ApplicationLogo-4d97a218.js";import"./Dropdown-6c65a629.js";import"./cart-fd50cb26.js";const z=t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"},"Update Password"),t("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),G=["onSubmit"],H={class:"flex items-center gap-4"},J={key:0,class:"text-sm text-gray-600"},O={__name:"UpdatePasswordForm",setup(P){const c=E.useToast(),l=x(null),n=C({password:"",password_confirmation:""}),U=V().props.user,S=()=>{if(n.data().password!==n.data().password_confirmation){c.error("Passwords do not match.");return}D.patch(route("api.admin.users.password.update",U.id),n.data()).then(s=>{c.success("Password updated successfully."),n.reset()}).catch(s=>{s.response.data.errors.password&&(n.reset("password","password_confirmation"),l.value.focus(),c.error(s.response.data.errors.password[0]))})};return(s,p)=>(d(),i("section",null,[z,t("form",{onSubmit:N(S,["prevent"]),class:"mt-6 space-y-6"},[t("div",null,[o(m,{for:"password",value:"New Password"}),o(_,{id:"password",ref_key:"passwordInput",ref:l,modelValue:e(n).password,"onUpdate:modelValue":p[0]||(p[0]=w=>e(n).password=w),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),o(u,{message:e(n).errors.password,class:"mt-2"},null,8,["message"])]),t("div",null,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(_,{id:"password_confirmation",modelValue:e(n).password_confirmation,"onUpdate:modelValue":p[1]||(p[1]=w=>e(n).password_confirmation=w),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),o(u,{message:e(n).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),t("div",H,[o(I,{disabled:e(n).processing},{default:v(()=>[T("Save")]),_:1},8,["disabled"]),o(M,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:v(()=>[e(n).recentlySuccessful?(d(),i("p",J,"Saved.")):$("",!0)]),_:1})])],40,G)]))}},Q=t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),t("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),W=["onSubmit"],X={class:"sm:grid sm:grid-cols-2 gap-3"},Y={class:"mt-4 sm:mt-0"},ee=["value"],se={class:"mt-4 sm:mt-0"},oe={class:"mt-4 sm:mt-0"},te=["value"],ae={class:"mt-4 sm:mt-0"},re=["value"],le={class:"mt-4 sm:mt-0"},ne={class:"mt-4 sm:mt-0"},de={class:"mt-4 sm:mt-0"},ie={class:"mt-4 sm:mt-0"},me=t("option",{value:"",disabled:"",selected:""},"Select type",-1),ue=["value"],ce={key:0},pe={class:"grid grid-cols-2"},_e={class:"inline-flex items-center"},fe=["value"],ge={class:"ml-2"},ve={class:"flex items-center gap-4"},we={key:0,class:"text-sm text-gray-600"},ye={__name:"UpdateProfileInformationForm",setup(P){const c=E.useToast(),{user:l,departments:n,document_types:U,auth:S}=V().props,s=C({name:l.name,surname:l.surname,email:l.email,role_name:l.roles[0].name,city_id:l.city.id,phone:l.phone.toString(),address:l.address,document:l.document.toString(),document_type:l.document_type,permissions:l.permissions.map(f=>f.name)??[]}),p=x(l.city.department_id),w=x({}),F=x(V().props.roles),A=x(V().props.permissions),q=async()=>{const f=await fetch(route("api.cities.index",p.value));w.value=await f.json()},B=()=>{c.info("Updating profile information..."),s.clearErrors(),D.patch(route("api.admin.users.profile.update",l.id),s.data()).then(f=>{c.success("Profile information updated successfully.")}).catch(f=>{s.setError(f.response.data.errors),c.error("There was an error updating your profile information.")})};return K(async()=>{await q()}),(f,r)=>(d(),i("section",null,[Q,t("form",{onSubmit:N(B,["prevent"]),class:"mt-6 space-y-6"},[t("div",X,[t("div",null,[o(m,{for:"name",value:"Name"}),o(_,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":r[0]||(r[0]=a=>e(s).name=a),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(u,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),t("div",null,[o(m,{for:"surname",value:"Surname"}),o(_,{id:"surname",type:"text",class:"mt-1 block w-full",modelValue:e(s).surname,"onUpdate:modelValue":r[1]||(r[1]=a=>e(s).surname=a),required:"",autocomplete:"surname"},null,8,["modelValue"]),o(u,{class:"mt-2",message:e(s).errors.surname},null,8,["message"])]),t("div",Y,[o(m,{for:"role",value:"Role"}),h(t("select",{id:"role",class:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":r[2]||(r[2]=a=>e(s).role_name=a),required:"",autocomplete:"role"},[(d(!0),i(y,null,b(F.value,a=>(d(),i("option",{value:a},g(a),9,ee))),256))],512),[[k,e(s).role_name]]),o(u,{class:"mt-2",message:e(s).errors.role_name},null,8,["message"])]),t("div",se,[o(m,{for:"email",value:"Email"}),o(_,{id:"email",type:"email",class:"mt-1 block w-full bg-gray-100 cursor-not-allowed",modelValue:e(s).email,"onUpdate:modelValue":r[3]||(r[3]=a=>e(s).email=a),required:"",autocomplete:"username",disabled:!0},null,8,["modelValue"]),o(u,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",oe,[o(m,{for:"departments",value:"Department"}),h(t("select",{id:"departments",class:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":r[4]||(r[4]=a=>p.value=a),required:"",autocomplete:"department_id",onChange:q},[(d(!0),i(y,null,b(e(n),a=>(d(),i("option",{value:a.id,key:a.id},g(a.name),9,te))),128))],544),[[k,p.value]])]),t("div",ae,[o(m,{for:"cities",value:"City"}),h(t("select",{id:"cities",class:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":r[5]||(r[5]=a=>e(s).city_id=a),required:"",autocomplete:"city_id"},[(d(!0),i(y,null,b(w.value,a=>(d(),i("option",{value:a.id,key:a.id},g(a.name),9,re))),128))],512),[[k,e(s).city_id]]),o(u,{class:"mt-2",message:e(s).errors.city_id},null,8,["message"])]),t("div",le,[o(m,{for:"phone",value:"Phone"}),o(_,{id:"phone",type:"number",class:"mt-1 block w-full",modelValue:e(s).phone,"onUpdate:modelValue":r[6]||(r[6]=a=>e(s).phone=a),required:"",autocomplete:"phone",oninput:"this.value = this.value.replace(/[^0-9]/g, '')"},null,8,["modelValue"]),o(u,{class:"mt-2",message:e(s).errors.phone},null,8,["message"])]),t("div",ne,[o(m,{for:"address",value:"Address"}),o(_,{id:"address",type:"text",class:"mt-1 block w-full",modelValue:e(s).address,"onUpdate:modelValue":r[7]||(r[7]=a=>e(s).address=a),required:"",autocomplete:"address"},null,8,["modelValue"]),o(u,{class:"mt-2",message:e(s).errors.address},null,8,["message"])]),t("div",de,[o(m,{for:"document",value:"Document"}),o(_,{id:"document",type:"number",class:"mt-1 block w-full",modelValue:e(s).document,"onUpdate:modelValue":r[8]||(r[8]=a=>e(s).document=a),required:"",autocomplete:"document",oninput:"this.value = this.value.replace(/[^0-9]/g, '')"},null,8,["modelValue"]),o(u,{class:"mt-2",message:e(s).errors.document},null,8,["message"])]),t("div",ie,[o(m,{for:"document_type",value:"Document Type"}),h(t("select",{id:"document_type",class:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":r[9]||(r[9]=a=>e(s).document_type=a),required:"",autocomplete:"document_type"},[me,(d(!0),i(y,null,b(e(U),a=>(d(),i("option",{value:a},g(a),9,ue))),256))],512),[[k,e(s).document_type]]),o(u,{class:"mt-2",message:e(s).errors.document_type},null,8,["message"])])]),e(S).roles.includes("Super Admin")&&e(s).role_name==="Admin"?(d(),i("div",ce,[o(m,{for:"permissions",value:"Permissions"}),t("div",pe,[(d(!0),i(y,null,b(A.value,a=>(d(),i("div",null,[t("label",_e,[h(t("input",{type:"checkbox",class:"cursor-pointer rounded text-blue-600 border-gray-300",value:a,"onUpdate:modelValue":r[10]||(r[10]=j=>e(s).permissions=j)},null,8,fe),[[R,e(s).permissions]]),t("span",ge,g(a),1)])]))),256)),o(u,{class:"mt-2",message:e(s).errors.permissions},null,8,["message"])])])):$("",!0),t("div",ve,[o(I,{disabled:e(s).processing},{default:v(()=>[T("Save")]),_:1},8,["disabled"]),o(M,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:v(()=>[e(s).recentlySuccessful?(d(),i("p",we,"Saved.")):$("",!0)]),_:1})])],40,W)]))}},he={class:"font-semibold text-xl text-gray-800 leading-tight"},be={class:"py-12"},xe={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},Ve={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},ke={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},Ne={__name:"Edit",setup(P){const c=V().props.user;return(l,n)=>(d(),i(y,null,[o(e(Z),null,{default:v(()=>[t("title",null,`
            Edit user: `+g(e(c).name)+`
        `,1)]),_:1}),o(L,null,{header:v(()=>[t("h2",he,"Edit user: "+g(e(c).name),1)]),default:v(()=>[t("div",be,[t("div",xe,[t("div",Ve,[o(ye)]),t("div",ke,[o(O,{class:"max-w-xl"})])])])]),_:1})],64))}};export{Ne as default};
