"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[2940],{8570:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(5675),i=(n(79),n(8570));const o={slug:"package-json",title:"package.json",authors:["unional"],tags:["project","typescript","tsconfig"]},l=void 0,a={unversionedId:"guidelines/project/package-json",id:"guidelines/project/package-json",title:"package.json",description:"The files field",source:"@site/docs/guidelines/project/package-json.mdx",sourceDirName:"guidelines/project",slug:"/guidelines/project/package-json",permalink:"/typescript-blackbook/docs/guidelines/project/package-json",draft:!1,editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/docs/guidelines/project/package-json.mdx",tags:[{label:"project",permalink:"/typescript-blackbook/docs/tags/project"},{label:"typescript",permalink:"/typescript-blackbook/docs/tags/typescript"},{label:"tsconfig",permalink:"/typescript-blackbook/docs/tags/tsconfig"}],version:"current",frontMatter:{slug:"package-json",title:"package.json",authors:["unional"],tags:["project","typescript","tsconfig"]},sidebar:"tutorialSidebar",previous:{title:".npmignore file",permalink:"/typescript-blackbook/docs/guidelines/project/npmignore"},next:{title:"Declaration Map",permalink:"/typescript-blackbook/docs/tsconfig/declaration_map"}},p={},s=[{value:"The <code>files</code> field",id:"the-files-field",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-files-field"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"files")," field"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," field is used to specify which files and folders to be included in the publish package."),(0,i.kt)("p",null,"You ",(0,i.kt)("strong",{parentName:"p"},"should")," always specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," field."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Why?")),(0,i.kt)("p",null,"By default, files not excluded by ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},".npmignore"),") are included, which is not what you want.\nAlso, files that are excluded by ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," are not included, which is likely also not what you want."),(0,i.kt)("p",null,"So it is always better to be explicit and control them yourself."),(0,i.kt)("p",null,"For example, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," field is removed from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/unional/type-plus"},"type-plus"),","),(0,i.kt)("p",null,"files like ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset/*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".github/*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".vscode/*")," are included,\nwhile ",(0,i.kt)("inlineCode",{parentName:"p"},"cjs/*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"esm/*")," are not."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You ",(0,i.kt)("strong",{parentName:"p"},"should")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," field to exclude test files."),(0,i.kt)("p",null,"For example, add this to your ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "files": [\n    // your package files\n    "cjs",\n    "esm",\n    "testing",\n    "ts",\n    // exclude test files\n    "!**/*.{spec,test,unit,accept,integrate,system}.*"\n  ]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Why?")),(0,i.kt)("p",null,"Doing this allows you to keep your tsconfig setup simple.\nYou will always compile all files, including your test files."),(0,i.kt)("p",null,"This ensures that your test files does not contain any syntax error."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files"},"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files"))))}d.isMDXComponent=!0}}]);