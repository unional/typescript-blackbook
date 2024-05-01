"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[2777],{369:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var o=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||r;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(1501),a=(t(7378),t(369));const r={slug:"naming-convention",title:"Naming Convention",authors:["unional"],tags:["file","folder","project","naming"]},i="Naming Convention",l={unversionedId:"guidelines/files_and_folders/naming_conventions",id:"guidelines/files_and_folders/naming_conventions",title:"Naming Convention",description:"You should name your file and folder in snake_case instead of camelCase or PascalCase.",source:"@site/docs/guidelines/files_and_folders/naming_conventions.mdx",sourceDirName:"guidelines/files_and_folders",slug:"/guidelines/files_and_folders/naming-convention",permalink:"/typescript-blackbook/docs/guidelines/files_and_folders/naming-convention",draft:!1,editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/docs/guidelines/files_and_folders/naming_conventions.mdx",tags:[{label:"file",permalink:"/typescript-blackbook/docs/tags/file"},{label:"folder",permalink:"/typescript-blackbook/docs/tags/folder"},{label:"project",permalink:"/typescript-blackbook/docs/tags/project"},{label:"naming",permalink:"/typescript-blackbook/docs/tags/naming"}],version:"current",frontMatter:{slug:"naming-convention",title:"Naming Convention",authors:["unional"],tags:["file","folder","project","naming"]},sidebar:"tutorialSidebar",previous:{title:"Creating rich comments",permalink:"/typescript-blackbook/docs/guidelines/documentations/comments"},next:{title:".npmignore file",permalink:"/typescript-blackbook/docs/guidelines/project/npmignore"}},s={},c=[{value:"References",id:"references",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"naming-convention"},"Naming Convention"),(0,a.yg)("p",null,"You ",(0,a.yg)("strong",{parentName:"p"},"should")," name your file and folder in ",(0,a.yg)("inlineCode",{parentName:"p"},"snake_case")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"camelCase")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"PascalCase"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Why?")),(0,a.yg)("p",null,"Some file systems are case insensitive (yes, I'm tooking at you, Windows).\nThat means ",(0,a.yg)("inlineCode",{parentName:"p"},"ApiSpec == apispec == APISpec"),"."),(0,a.yg)("p",null,"To avoid confusion, ",(0,a.yg)("inlineCode",{parentName:"p"},"camelCase")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"PascalCase")," should be avoided.\nThat leave us with ",(0,a.yg)("inlineCode",{parentName:"p"},"snake_case")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"kebab-case"),"."),(0,a.yg)("p",null,"The benefits of ",(0,a.yg)("inlineCode",{parentName:"p"},"snake_case")," over ",(0,a.yg)("inlineCode",{parentName:"p"},"kebab-case")," is that,\nin most cases, operating system treats ",(0,a.yg)("inlineCode",{parentName:"p"},"snake_case")," as a single word,\nand treats ",(0,a.yg)("inlineCode",{parentName:"p"},"kebab-case")," as a composed word."),(0,a.yg)("p",null,"For example, when you double click on a ",(0,a.yg)("inlineCode",{parentName:"p"},"kebab-case")," string,\na single word will be selected (i.e. either ",(0,a.yg)("inlineCode",{parentName:"p"},"kebab")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"case")," will be selected)."),(0,a.yg)("p",null,"On the other hand, double click on a ",(0,a.yg)("inlineCode",{parentName:"p"},"snake_case")," string will select the whole string."),(0,a.yg)("p",null,"The same goes to renaming."),(0,a.yg)("p",null,"That is why I'm now recommend ",(0,a.yg)("inlineCode",{parentName:"p"},"snake_case")," over ",(0,a.yg)("inlineCode",{parentName:"p"},"kebab-case"),",\neventhough ",(0,a.yg)("inlineCode",{parentName:"p"},"_")," takes an additional pinky press to type."),(0,a.yg)("hr",null),(0,a.yg)("p",null,"You ",(0,a.yg)("strong",{parentName:"p"},"should")," name your file in nouns. i.e. ",(0,a.yg)("inlineCode",{parentName:"p"},"customer_order.ts")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"create_customer_order.ts"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Why?")),(0,a.yg)("p",null,"You might have heard of Single Responsibility Principle and think that you should have one function per file."),(0,a.yg)("p",null,"That is utterly wrong and not what SRP means."),(0,a.yg)("p",null,"Putting related code together where they have the same reason to change is SRP."),(0,a.yg)("p",null,"Naming (and thus organizing) the file with nouns will significantly make your file and folder a lot more stable."),(0,a.yg)("p",null,"Meaning there will be less import path changes."),(0,a.yg)("hr",null),(0,a.yg)("p",null,"You ",(0,a.yg)("strong",{parentName:"p"},"can")," use ",(0,a.yg)("inlineCode",{parentName:"p"},".")," to create sub-category on filenames."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Why")),(0,a.yg)("p",null,"The name of the file should describe WHAT the file is about,\nin terms of its context or business value."),(0,a.yg)("p",null,"For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"customer_order.ts"),"."),(0,a.yg)("p",null,"However, there are situations that you want to further organize the code into addition categories,\nso that it is easy to visualize as well as controlling the exposed api."),(0,a.yg)("p",null,"For example, you can do this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"customer_order.ts\ncustomer_order.ctx.ts # context code for dependency injection\ncustomer_order.internal.ts # code that you use internally, but exported for your tests\ncustomer_order.mock.ts # helper code for mocking the data during tests\ncustomer_order.spec.ts # specification tests\ncustomer_order.unit.ts # unit tests\ncustomer_order.unit.electron.ts # unit tests only for electron\n")),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("p",null,"Another interesting take from ",(0,a.yg)("a",{parentName:"p",href:"https://straw-hat-team.github.io/adr/3122196229/README.html"},"Straw Hat's ADRs"),"."))}g.isMDXComponent=!0}}]);