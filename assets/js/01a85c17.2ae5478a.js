"use strict";(self.webpackChunkgithub_page=self.webpackChunkgithub_page||[]).push([[13],{9135:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(79),n=a(9841),r=a(1089),s=a(8295),c=a(1496),i=a(4923);const m="sidebar__wwS",o="sidebarItemTitle_sB5U",u="sidebarItemList_N5oi",g="sidebarItem_v1pm",b="sidebarItemLink_Xb0R",d="sidebarItemLinkActive_c_xa";function p(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:d},e.title)))))))}var E=a(6265);function h(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function _(e){return l.createElement(E.Zo,{component:h,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(_,{sidebar:t}):l.createElement(p,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},5601:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(79),n=a(9841),r=a(4284),s=a(2244),c=a(4144),i=a(9135),m=a(6101),o=a(1997);function u(e){let{tags:t,sidebar:a}=e;const u=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:u}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(i.Z,{sidebar:a},l.createElement("h1",null,u),l.createElement(m.Z,{tags:t})))}},2726:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(79),n=a(9841),r=a(1496);const s="tag_D710",c="tagRegular_dVzt",i="tagWithCount_FZym";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?i:c)},a,m&&l.createElement("span",null,m))}},6101:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(79),n=a(4284),r=a(2726);const s="tag_y7sH";function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s},l.createElement(r.Z,e))))),l.createElement("hr",null))}function i(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))}},4284:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(4923);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);