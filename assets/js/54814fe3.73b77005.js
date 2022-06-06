"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[784],{3482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(2685),o=n(1244),r=(n(7378),n(5318)),i=["components"],s={slug:"2022-typescript-is-abstraction",title:"TypeScript is ... an abstraction",authors:["unional"],tags:["typescript"]},p=void 0,l={permalink:"/typescript-guidelines/blog/2022-typescript-is-abstraction",editUrl:"https://github.com/unional/typescript-guidelines/tree/main/github-page/blog/blog/2022-05-14-typescript-is-abstraction.mdx",source:"@site/blog/2022-05-14-typescript-is-abstraction.mdx",title:"TypeScript is ... an abstraction",description:"[TypeScript 4.7] is just around the corner.",date:"2022-05-14T00:00:00.000Z",formattedDate:"May 14, 2022",tags:[{label:"typescript",permalink:"/typescript-guidelines/blog/tags/typescript"}],readingTime:3.395,truncated:!1,authors:[{name:"Homa Wong (unional)",title:"Clean Architect",url:"https://github.com/unional",imageURL:"https://github.com/unional.png",key:"unional"}],frontMatter:{slug:"2022-typescript-is-abstraction",title:"TypeScript is ... an abstraction",authors:["unional"],tags:["typescript"]},prevItem:{title:"@typescript-eslint/eslint-plugin should be a peer dependency",permalink:"/typescript-guidelines/blog/2022-eslint-plugin-peer-deps"}},u={authorsImageUrls:[void 0]},c=[{value:"TypeScript is an abstraction",id:"typescript-is-an-abstraction",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-rc/"},"TypeScript 4.7")," is just around the corner."),(0,r.kt)("p",null,"I feel like it is a good time for me to update this TypeScript guidelines\nwith what I have learn over the years and how am I using it nowadays."),(0,r.kt)("p",null,"As you can see,\nI've reorganized the repository and added this GitHub page\nto make it easier to share the knowledge."),(0,r.kt)("p",null,"In these blog posts,\nI'm going to share the bits and tips that I learned every day.\nEventually this information will be incorporated into the guidelines."),(0,r.kt)("p",null,"To kick things off, I'm going to talk about what TypeScript is in 2022?"),(0,r.kt)("p",null,"No no, not about the history of TypeScript."),(0,r.kt)("p",null,"It's about how I look at TypeScript and how I use it."),(0,r.kt)("p",null,"It's about when I follow the rules and when I break them."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I know all the rules, and then I know how to break 'em")),(0,r.kt)("h2",{id:"typescript-is-an-abstraction"},"TypeScript is an abstraction"),(0,r.kt)("p",null,"Programming language is an abstraction."),(0,r.kt)("p",null,"The abstraction I'm talking about is not the abstraction of defining an interface or class or inheritance."),(0,r.kt)("p",null,"It's about the code you wrote, the text you typed in the ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".tsx")," file."),(0,r.kt)("p",null,"It is an abstraction over the actual binary code executed by the JavaScript engine."),(0,r.kt)("p",null,"A good abstraction emphasizes the important but sometimes has a cost of skipping over some details."),(0,r.kt)("p",null,"For example, the digital zeros and ones are an abstraction over the analog electrical currents."),(0,r.kt)("p",null,"Most of the time, at least in the sense of modern computing,\nmissing the details on the different levels of electrical currents is a good thing.\nAnd we as a programmer don't ever need to think about it."),(0,r.kt)("p",null,"But to the eye of hardware engineer,\nit is not something they can ignore because there are physical rules they have to follow,\nand there are actual consequences when putting two wires too close to each other."),(0,r.kt)("p",null,"The abstraction of programming language is the same.\nIt is good for most cases, but at some point it will start to breakdown."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"rust")," is a good example of this.\nIts ownership model guarantee memory-safety and thread-safety.\nBut there are rare cases you need to break the rules thus there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafe")," keyword for it."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),', it is not designed to be a 100% sounded language.\nThat means you will run into those "rare" cases a lot more often.'),(0,r.kt)("p",null,"You can learn more about soundness ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/type-compatibility.html#a-note-on-soundness"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?strictFunctionTypes=false#example/soundness"},"here"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"So what should you do? Embrace it."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafe")," keyword in ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),".\nWhile you should avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," in most cases,\nit is often enough that your tool chain should not prevent or punish you from using it."),(0,r.kt)("p",null,"You might think,"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\"hey, I'm working in a team and I don't want my team members who are less familiar with TypeScript to abuse the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),'."')),(0,r.kt)("p",null,"Yes, that is a legit concern,\nand you can make your own judgement for your circumstances."),(0,r.kt)("p",null,"My personal experience is that the number of times I have to break the rules are common enough that making exceptions for the tools (e.g. adding ",(0,r.kt)("inlineCode",{parentName:"p"},"// eslint ignore")," comments) clutter the code and make the code harder to read."),(0,r.kt)("p",null,"My approach is to rely on unit tests and code reviews to make sure the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," are in check."),(0,r.kt)("p",null,"Also, defining the correct type is not always easy and can take significant amount of time.\nIf you are working under a schedule, you might not have time to do that."),(0,r.kt)("p",null,"Another point to make is that since ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is constantly improving,\nif you build some complex types, it might work in one version and break in another version."),(0,r.kt)("p",null,"ASK ME HOW I KNOW IT."),(0,r.kt)("p",null,"Of course, I'm not saying allowing your code litters with ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," and call it a day.\nYou should keep track on those usages and clean it up when you get a chance to."),(0,r.kt)("p",null,"Converting ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," back to a proper type improves efficiency.\nAs that is why we use ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"."),(0,r.kt)("p",null,"And you may discover some bugs along the way."))}m.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);