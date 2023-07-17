import{D as l,a as r,c as a,e as t,y as i,t as s,F as n,f as m}from"./app-af608028.js";const _={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},g=t("dt",{class:"text-sm font-medium text-gray-500"}," Status ",-1),u={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},x={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},p=t("dt",{class:"text-sm font-medium text-gray-500"}," Total ",-1),h={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},y={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},f=t("dt",{class:"text-sm font-medium text-gray-500"}," Products ",-1),w={class:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},v={class:"border border-gray-200 rounded-md divide-y divide-gray-200"},b={class:"w-0 flex-1 flex items-center"},k=t("svg",{class:"h-6 w-6","aria-hidden":"true",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9","stroke-linecap":"round","stroke-linejoin":"round"})],-1),E={class:"ml-2 flex-1 w-0 truncate"},C={class:"ml-4 flex-shrink-0"},B={class:"font-medium text-gray-900"},M={class:"ml-4 text-gray-700"},L=l({__name:"OrderDetailItem",props:{order:Object},setup(e){const c=d=>{switch(d){case"PENDING":return"bg-yellow-500";case"REJECTED":return"bg-red-600";case"COMPLETED":return"bg-green-600";default:return""}};return(d,j)=>(r(),a(n,null,[t("div",_,[g,t("dd",u,[t("span",{class:i(["text-white font-extrabold p-2 rounded",c(e.order.status)])},s(e.order.status),3)])]),t("div",x,[p,t("dd",h," $ "+s(e.order.total),1)]),t("div",y,[f,t("dd",w,[t("ul",v,[(r(!0),a(n,null,m(e.order.order_details,o=>(r(),a("li",{key:o.id,class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm"},[t("div",b,[k,t("span",E,s(o.product_name),1)]),t("div",C,[t("span",B," $ "+s(o.product_price),1),t("span",M," Quantity: "+s(o.quantity),1)])]))),128))])])])],64))}});export{L as _};