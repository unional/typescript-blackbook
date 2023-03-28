"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[2349],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(79);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(5675),o=(n(79),n(8570));const a={slug:"declaration_map",title:"Declaration Map",authors:["unional"],tags:["typescript","tsconfig"]},i="Declaration Map",c={unversionedId:"tsconfig/declaration_map",id:"tsconfig/declaration_map",title:"Declaration Map",description:"Video",source:"@site/docs/tsconfig/declaration_map.mdx",sourceDirName:"tsconfig",slug:"/tsconfig/declaration_map",permalink:"/typescript-blackbook/docs/tsconfig/declaration_map",draft:!1,editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/docs/tsconfig/declaration_map.mdx",tags:[{label:"typescript",permalink:"/typescript-blackbook/docs/tags/typescript"},{label:"tsconfig",permalink:"/typescript-blackbook/docs/tags/tsconfig"}],version:"current",frontMatter:{slug:"declaration_map",title:"Declaration Map",authors:["unional"],tags:["typescript","tsconfig"]},sidebar:"tutorialSidebar",previous:{title:"Naming Convention",permalink:"/typescript-blackbook/docs/guidelines/files_and_folders/naming-convention"},next:{title:"Module Resolution",permalink:"/typescript-blackbook/docs/tsconfig/module_resolution"}},l={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"declaration-map"},"Declaration Map"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IRvy_4xgPLQ"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/IRvy_4xgPLQ/0.jpg",alt:"Video"}))),(0,o.kt)("p",null,"You ",(0,o.kt)("strong",{parentName:"p"},"should")," set ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#declarationMap"},"declarationMap")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Why?")),(0,o.kt)("p",null,"The tells ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," to generate sourcemap for your declaration files."),(0,o.kt)("p",null,'This enables "Go to Source Definition" features in supporting editors like VS Code.'),(0,o.kt)("p",null,"It makes your code easier to read and understand."),(0,o.kt)("p",null,"Remember to include your TypeScript source code into the package distribution so that\nuser of your library can navigate to the included source code."),(0,o.kt)("p",null,"For example, add this in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "files": [\n    // ...\n    "src"\n  ]\n}\n')))}d.isMDXComponent=!0}}]);