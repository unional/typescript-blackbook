"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[1452],{369:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var o=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||a;return t?o.createElement(d,l(l({ref:n},p),{},{components:t})):o.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(4055),r=(t(7378),t(369));const a={slug:"comments",title:"Creating rich comments",authors:["unional"],tags:["comment","documentation","DX"]},l="Comments",i={unversionedId:"guidelines/documentations/comments",id:"guidelines/documentations/comments",title:"Creating rich comments",description:"You should add JSDoc comments to your code.",source:"@site/docs/guidelines/documentations/comments.md",sourceDirName:"guidelines/documentations",slug:"/guidelines/documentations/comments",permalink:"/typescript-blackbook/docs/guidelines/documentations/comments",draft:!1,editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/docs/guidelines/documentations/comments.md",tags:[{label:"comment",permalink:"/typescript-blackbook/docs/tags/comment"},{label:"documentation",permalink:"/typescript-blackbook/docs/tags/documentation"},{label:"DX",permalink:"/typescript-blackbook/docs/tags/dx"}],version:"current",frontMatter:{slug:"comments",title:"Creating rich comments",authors:["unional"],tags:["comment","documentation","DX"]},sidebar:"tutorialSidebar",previous:{title:"Guidelines",permalink:"/typescript-blackbook/docs/guidelines/"},next:{title:"Naming Convention",permalink:"/typescript-blackbook/docs/guidelines/files_and_folders/naming-convention"}},s={},c=[],p={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"comments"},"Comments"),(0,r.yg)("p",null,"You ",(0,r.yg)("strong",{parentName:"p"},"should")," add JSDoc comments to your code."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Why?")),(0,r.yg)("p",null,"For a long time, I do not do this.\nMy belief was that the code should be self-explanatory."),(0,r.yg)("p",null,"However, having the comments in the code,\nespecially for public facing code,\nmakes it a lot easier for consumer to use the code."),(0,r.yg)("p",null,"Especially if you can provide examples in the comments."),(0,r.yg)("p",null,"For example, the following is a comment for the ",(0,r.yg)("inlineCode",{parentName:"p"},"IsEqual")," type in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/unional/type-plus"},"type-plus"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"/**\n * Checks `A` and `B` are equal.\n *\n * ```ts\n * type R = IsEqual<1, 1> // true\n * type R = IsEqual<any, any> // true\n * type R = IsEqual<boolean, boolean> // true\n * type R = IsEqual<true, true> // true\n * type R = IsEqual<[1], [1]> // true\n *\n * type R = IsEqual<boolean, true> // false\n * type R = IsEqual<any, 1> // false\n * type R = IsEqual<[any], [1]> // false\n * type R = IsEqual<{ a: 1 }, { a: 1; b: 2 }> // false\n * ```\n *\n * Note that intersection type checks only works at first level.\n * It cannot be check recursively,\n * or else will run into infinite recursion if the type includes recursive types.\n */\nexport type IsEqual<A, B, Then = true, Else = false> = ...\n")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"You ",(0,r.yg)("strong",{parentName:"p"},"should not")," include import statements in the comment examples."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Why?")),(0,r.yg)("p",null,"Your code or type can be reused in different context.\nThe import statement might not be the same in different contexts."),(0,r.yg)("p",null,"For example, your code might be reused in another package.\nSo the import statement will provide the wrong information."),(0,r.yg)("p",null,"\u274c Bad"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"/**\n * Check if the type `T` is exactly `any`.\n *\n * ```ts\n * import type { AnyType } from 'type-plus'\n *\n * type R = AnyType<any> // any\n *\n * type R = AnyType<never> // never\n * type R = AnyType<unknown> // never\n * type R = AnyType<string | boolean> // never\n * ```\n */\nexport type AnyType<T, Then = T, Else = never> = ...\n")),(0,r.yg)("p",null,"\u2705 Good"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"/**\n * Check if the type `T` is exactly `any`.\n *\n * ```ts\n * type R = AnyType<any> // any\n *\n * type R = AnyType<never> // never\n * type R = AnyType<unknown> // never\n * type R = AnyType<string | boolean> // never\n * ```\n */\nexport type AnyType<T, Then = T, Else = never> = ...\n")))}y.isMDXComponent=!0}}]);