import{T as m,z as f,a as n,k as _,w as e,b as i,u as t,Z as g,c as p,n as h,e as s,p as a,y,m as v,g as b}from"./app-af608028.js";import{_ as k}from"./GuestLayout-56b99cc3.js";import{_ as x}from"./PrimaryButton-76370c3c.js";import"./ApplicationLogo-4d97a218.js";const w=s("title",null,"Email Verification",-1),V=s("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},E=["onSubmit"],N={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,o=m({}),l=()=>{o.post(route("verification.send"))},d=f(()=>c.status==="verification-link-sent");return(u,S)=>(n(),_(k,null,{default:e(()=>[i(t(g),null,{default:e(()=>[w]),_:1}),V,d.value?(n(),p("div",B," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),s("form",{onSubmit:b(l,["prevent"])},[s("div",N,[i(x,{class:y({"opacity-25":t(o).processing}),disabled:t(o).processing},{default:e(()=>[a(" Resend Verification Email ")]),_:1},8,["class","disabled"]),i(t(v),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:e(()=>[a("Log Out ")]),_:1},8,["href"])])],40,E)]),_:1}))}};export{L as default};
