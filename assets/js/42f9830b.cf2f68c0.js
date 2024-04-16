"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[5839],{8525:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(8318);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,d=u["".concat(p,".").concat(y)]||u[y]||g[y]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(1778),a=(r(8318),r(8525));const o={slug:"declaration_map",title:"Declaration Map",authors:["unional"],tags:["typescript","tsconfig"]},i="Declaration Map",c={unversionedId:"tsconfig/declaration_map",id:"tsconfig/declaration_map",title:"Declaration Map",description:"Video",source:"@site/docs/tsconfig/declaration_map.mdx",sourceDirName:"tsconfig",slug:"/tsconfig/declaration_map",permalink:"/typescript-blackbook/docs/tsconfig/declaration_map",draft:!1,editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/docs/tsconfig/declaration_map.mdx",tags:[{label:"typescript",permalink:"/typescript-blackbook/docs/tags/typescript"},{label:"tsconfig",permalink:"/typescript-blackbook/docs/tags/tsconfig"}],version:"current",frontMatter:{slug:"declaration_map",title:"Declaration Map",authors:["unional"],tags:["typescript","tsconfig"]},sidebar:"tutorialSidebar",previous:{title:"Naming your package",permalink:"/typescript-blackbook/docs/guidelines/project/package_name"},next:{title:"Assertion Function",permalink:"/typescript-blackbook/docs/typescript_features/assertion_funtion"}},p={},l=[],s={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"declaration-map"},"Declaration Map"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IRvy_4xgPLQ"},(0,a.yg)("img",{parentName:"a",src:"https://img.youtube.com/vi/IRvy_4xgPLQ/0.jpg",alt:"Video"}))),(0,a.yg)("p",null,"You ",(0,a.yg)("strong",{parentName:"p"},"should")," set ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#declarationMap"},"declarationMap")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Why?")),(0,a.yg)("p",null,"The tells ",(0,a.yg)("inlineCode",{parentName:"p"},"tsc")," to generate sourcemap for your declaration files."),(0,a.yg)("p",null,'This enables "Go to Source Definition" features in supporting editors like VS Code.'),(0,a.yg)("p",null,"It makes your code easier to read and understand."),(0,a.yg)("p",null,"Remember to include your TypeScript source code into the package distribution so that\nuser of your library can navigate to the included source code."),(0,a.yg)("p",null,"For example, add this in your ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "files": [\n    // ...\n    "src"\n  ]\n}\n')))}g.isMDXComponent=!0}}]);