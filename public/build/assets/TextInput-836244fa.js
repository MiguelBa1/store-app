import{r as s,o as d,a as n,c as r}from"./app-af608028.js";const i=["value","disabled"],p={__name:"TextInput",props:{modelValue:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(u,{expose:a}){const e=s(null);return d(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),a({focus:()=>e.value.focus()}),(t,o)=>(n(),r("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:u.modelValue,onInput:o[0]||(o[0]=l=>t.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:e,disabled:u.disabled},null,40,i))}};export{p as _};