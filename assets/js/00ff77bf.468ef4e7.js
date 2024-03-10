"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[5037],{351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),s=t(8453),i=t(4252);const o={displayed_sidebar:"docsSidebar",hide_table_of_contents:!0},l="Server",c={id:"neon/api/objects/Server/index",title:"Server",description:"Overview",source:"@site/docs/neon/api/objects/Server/index.md",sourceDirName:"neon/api/objects/Server",slug:"/neon/api/objects/Server/",permalink:"/neon-webdocs/neon/api/objects/Server/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"docsSidebar",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Response",permalink:"/neon-webdocs/neon/api/objects/Response/"},next:{title:"Examples",permalink:"/neon-webdocs/neon/api/examples/"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Index",id:"index",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>handler</code>",id:"property-handler",level:3},{value:"<code>request</code>",id:"property-request",level:3},{value:"<code>response</code>",id:"property-response",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"server",children:"Server"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"This object represents the server instance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"interface Server {\n  handler: Handler;\n  request: Request;\n  response: Response;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"index",children:"Index"}),"\n",(0,r.jsx)(i.A,{toc:d.filter((e=>"overview"!==e.id&&"index"!==e.id))}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"property-handler",children:(0,r.jsx)(n.code,{children:"handler"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"handler: Handler;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The handler object."}),"\n",(0,r.jsx)(n.h3,{id:"property-request",children:(0,r.jsx)(n.code,{children:"request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"request: Request;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The request object."}),"\n",(0,r.jsx)(n.h3,{id:"property-response",children:(0,r.jsx)(n.code,{children:"response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"response: Response;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The response object."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4252:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(5195);const s={tableOfContentsInline:"tableOfContentsInline_prmo"};var i=t(4848);function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,i.jsx)("div",{className:s.tableOfContentsInline,children:(0,i.jsx)(r.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},5195:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(6540),s=t(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):r.push(s)})),r}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>l(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function a(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,r.useRef)(void 0),t=a();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let s=n;s<=t;s+=1)r.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),a=c(l,{anchorTopOffset:t.current}),d=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(8774),p=t(4848);function v(e){let{toc:n,className:t,linkClassName:r,isChild:s}=e;return n.length?(0,p.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,p.jsxs)("li",{children:[(0,p.jsx)(u.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,p.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const m=r.memo(v);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:a,maxHeadingLevel:u,...v}=e;const h=(0,s.p)(),f=a??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,r.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:f,maxHeadingLevel:x});return d((0,r.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:x}}),[l,c,f,x])),(0,p.jsx)(m,{toc:g,className:t,linkClassName:l,...v})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);