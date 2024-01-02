"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[7838],{5859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(5893),r=t(1151),s=t(3901);const o={displayed_sidebar:"docsSidebar",hide_table_of_contents:!0},a="Handler",l={id:"neon/api/objects/Handler/index",title:"Handler",description:"Overview",source:"@site/docs/neon/api/objects/Handler/index.md",sourceDirName:"neon/api/objects/Handler",slug:"/neon/api/objects/Handler/",permalink:"/neon-webdocs/neon/api/objects/Handler/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"docsSidebar",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/neon-webdocs/neon/api/overview/"},next:{title:"Request",permalink:"/neon-webdocs/neon/api/objects/Request/"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Index",id:"index",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>state</code>",id:"method-state",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"handler",children:"Handler"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This object represents the server handler."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface Handler {\n  state(): Record<string, Resource>;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"index",children:"Index"}),"\n",(0,i.jsx)(s.Z,{toc:d.filter((e=>"overview"!==e.id&&"index"!==e.id))}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"method-state",children:(0,i.jsx)(n.code,{children:"state"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"    state(): Record<string, Resource>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the state."})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3901:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var i=t(3743);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var s=t(5893);function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,s.jsx)("div",{className:r.tableOfContentsInline,children:(0,s.jsx)(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>h});var i=t(7294),r=t(6668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):i.push(r)})),i}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>a(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:o}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let r=n;r<=t;r+=1)i.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),c=l(a,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(9960),m=t(5893);function v(e){let{toc:n,className:t,linkClassName:i,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(v);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...v}=e;const h=(0,r.L)(),p=c??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>o({toc:s(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:p,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:x}}),[a,l,p,x])),(0,m.jsx)(f,{toc:g,className:t,linkClassName:a,...v})}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);