import{A as w}from"./ApplicationLogo-4d97a218.js";import{_ as $}from"./Dropdown-6c65a629.js";import{a as l,k as x,w as o,l as g,u as i,m as h,z as M,y as m,c as d,b as s,e,t as p,r as C,K as v,p as r,n as b,F as y,o as L}from"./app-af608028.js";import{u as k}from"./cart-fd50cb26.js";const c={__name:"DropdownLink",setup(f){return(a,n)=>(l(),x(i(h),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[g(a.$slots,"default")]),_:3}))}},u={__name:"ResponsiveNavLink",props:["href","active"],setup(f){const a=f,n=M(()=>a.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(t,_)=>(l(),x(i(h),{href:f.href,class:m(n.value)},{default:o(()=>[g(t.$slots,"default")]),_:3},8,["href","class"]))}},A={class:"flex items-center"},B=e("svg",{class:"h-6 w-6 text-black",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),e("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e("path",{d:"M16 10a4 4 0 0 1-8 0"})],-1),j={class:"absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"},N={__name:"CartIcon",setup(f){const a=k();return(n,t)=>(l(),d("div",A,[s(i(h),{href:n.route("cart.index"),class:"relative"},{default:o(()=>[B,e("span",j,p(i(a).cartItemsCount),1)]),_:1},8,["href"])]))}},R={class:"bg-white border-b border-gray-100"},S={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},V={class:"flex justify-between h-16"},z={class:"flex items-center"},P={class:"flex items-center"},D={class:"hidden sm:flex sm:items-center sm:ml-6"},I={key:0,class:"ml-3 relative"},O={class:"inline-flex rounded-md"},T={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},F=e("svg",{class:"h-6 w-6 text-black",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r(),e("circle",{cx:"12",cy:"7",r:"4"})],-1),U=e("svg",{class:"-mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),E={key:0},H=e("div",{class:"border border-indigo-100 mr-3"},null,-1),K=e("div",{class:"border border-indigo-100 mr-3"},null,-1),q=e("div",{class:"border border-indigo-100 mr-3"},null,-1),G=e("div",{class:"border border-indigo-100 mr-3"},null,-1),J={key:1},Q={class:"-mr-2 flex items-center sm:hidden ml-6"},W={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},X={key:0,class:"pt-4 pb-1 border-t border-gray-200"},Y={class:"px-4"},Z={class:"font-medium text-base text-gray-800"},ee={class:"font-medium text-sm text-gray-500"},te={class:"mt-3 space-y-1"},se=e("span",{class:"border-l-4 pl-2"},"Users",-1),oe=e("span",{class:"border-l-4 pl-2"},"Products",-1),re=e("span",{class:"border-l-4 pl-2"},"Auxiliary Tables",-1),ne=e("span",{class:"border-l-4 pl-2"},"Reports",-1),ae={key:1,class:"pt-4 pb-1 border-t border-gray-200"},ie={class:"mt-3 space-y-1"},le={__name:"NavBar",setup(f){const a=C(!1),{auth:n}=v().props;return(t,_)=>(l(),d("nav",R,[e("div",S,[e("div",V,[e("div",z,[s(i(h),{href:t.route("home")},{default:o(()=>[s(w)]),_:1},8,["href"])]),e("div",P,[s(N),e("div",D,[i(n).user?(l(),d("div",I,[s($,{align:"right",width:"48"},{trigger:o(()=>[e("span",O,[e("button",T,[r(p(i(n).user.name)+" ",1),F,U])])]),content:o(()=>[i(n).roles.includes("Admin")||i(n).roles.includes("Super Admin")?(l(),d("div",E,[s(c,{href:t.route("admin.dashboard.index")},{default:o(()=>[r(" Administrator ")]),_:1},8,["href"]),s(c,{href:t.route("admin.users.index"),class:"pl-8 flex"},{default:o(()=>[H,r(" Users ")]),_:1},8,["href"]),s(c,{href:t.route("admin.products.index"),class:"pl-8 flex"},{default:o(()=>[K,r(" Products ")]),_:1},8,["href"]),s(c,{href:t.route("admin.auxiliary.tables.index"),class:"pl-8 flex"},{default:o(()=>[q,r(" Auxiliary Tables ")]),_:1},8,["href"]),s(c,{href:t.route("admin.reports.index"),class:"pl-8 flex"},{default:o(()=>[G,r(" Reports ")]),_:1},8,["href"])])):b("",!0),s(c,{href:t.route("profile.edit")},{default:o(()=>[r(" Profile")]),_:1},8,["href"]),s(c,{href:t.route("order.index")},{default:o(()=>[r(" My orders")]),_:1},8,["href"]),s(c,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[r(" Log Out ")]),_:1},8,["href"])]),_:1})])):(l(),d("div",J,[s(i(h),{href:t.route("login"),class:"font-semibold text-gray-400 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:o(()=>[r("Log in ")]),_:1},8,["href"]),s(i(h),{href:t.route("register"),class:"ml-4 font-semibold text-gray-400 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:o(()=>[r("Register ")]),_:1},8,["href"])]))]),e("div",Q,[e("button",{onClick:_[0]||(_[0]=fe=>a.value=!a.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(l(),d("svg",W,[e("path",{class:m({hidden:a.value,"inline-flex":!a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:m({hidden:!a.value,"inline-flex":a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])])]),e("div",{class:m([{block:a.value,hidden:!a.value},"sm:hidden"])},[i(n).user?(l(),d("div",X,[e("div",Y,[e("div",Z,p(i(n).user.name),1),e("div",ee,p(i(n).user.email),1)]),e("div",te,[i(n).roles.includes("Admin")||i(n).roles.includes("Super Admin")?(l(),d(y,{key:0},[s(u,{href:t.route("admin.dashboard.index")},{default:o(()=>[r(" Administrator ")]),_:1},8,["href"]),s(u,{href:t.route("admin.users.index")},{default:o(()=>[se]),_:1},8,["href"]),s(u,{href:t.route("admin.products.index")},{default:o(()=>[oe]),_:1},8,["href"]),s(u,{href:t.route("admin.auxiliary.tables.index")},{default:o(()=>[re]),_:1},8,["href"]),s(u,{href:t.route("admin.reports.index")},{default:o(()=>[ne]),_:1},8,["href"])],64)):b("",!0),s(u,{href:t.route("profile.edit"),as:"button"},{default:o(()=>[r(" Profile ")]),_:1},8,["href"]),s(u,{href:t.route("order.index"),as:"button"},{default:o(()=>[r(" My Orders ")]),_:1},8,["href"]),s(u,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[r(" Log Out ")]),_:1},8,["href"])])])):(l(),d("div",ae,[e("div",ie,[s(u,{href:t.route("register")},{default:o(()=>[r(" Register")]),_:1},8,["href"]),s(u,{href:t.route("login")},{default:o(()=>[r(" Log In")]),_:1},8,["href"])])]))],2)]))}},de={key:0,class:"bg-white shadow"},ue={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ce={__name:"MainLayout",setup(f){const a=k(),{user:n}=v().props.auth;return L(async()=>{n&&n.email_verified_at!==null&&await a.syncCart()}),(t,_)=>(l(),d(y,null,[s(le),t.$slots.header?(l(),d("header",de,[e("div",ue,[g(t.$slots,"header")])])):b("",!0),e("main",null,[g(t.$slots,"default")])],64))}},ge=ce;export{ge as M};