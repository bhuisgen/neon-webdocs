"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[7492],{1732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(5893),o=t(1151),s=t(3901);const i={displayed_sidebar:"docsSidebar",hide_table_of_contents:!0},d="Request",c={id:"neon/api/objects/Request/index",title:"Request",description:"Overview",source:"@site/docs/neon/api/objects/Request/index.md",sourceDirName:"neon/api/objects/Request",slug:"/neon/api/objects/Request/",permalink:"/neon-webdocs/neon/api/objects/Request/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"docsSidebar",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Handler",permalink:"/neon-webdocs/neon/api/objects/Handler/"},next:{title:"Resource",permalink:"/neon-webdocs/neon/api/objects/Resource/"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Index",id:"index",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>method</code>",id:"method-method",level:3},{value:"<code>proto</code>",id:"method-proto",level:3},{value:"<code>protoMajor</code>",id:"method-protomajor",level:3},{value:"<code>protoMinor</code>",id:"method-protominor",level:3},{value:"<code>remoteAddr</code>",id:"method-remoteaddr",level:3},{value:"<code>host</code>",id:"method-host",level:3},{value:"<code>path</code>",id:"method-path",level:3},{value:"<code>query</code>",id:"method-query",level:3},{value:"<code>headers</code>",id:"method-headers",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"This object represents the server request."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"interface Request {\n  method(): string;\n  proto(): string;\n  protoMajor(): string;\n  protoMinor(): string;\n  remoteAddr(): string;\n  host(): string;\n  path(): string;\n  query(): Record<string, string[]>;\n  headers(): Record<string, string[]>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"index",children:"Index"}),"\n",(0,r.jsx)(s.Z,{toc:a.filter((e=>"overview"!==e.id&&"index"!==e.id))}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"method-method",children:(0,r.jsx)(n.code,{children:"method"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    method(): string;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request method."}),"\n",(0,r.jsx)(n.h3,{id:"method-proto",children:(0,r.jsx)(n.code,{children:"proto"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    proto(): string;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request protocol."}),"\n",(0,r.jsx)(n.h3,{id:"method-protomajor",children:(0,r.jsx)(n.code,{children:"protoMajor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    protoMajor(): string;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request protocol major version."}),"\n",(0,r.jsx)(n.h3,{id:"method-protominor",children:(0,r.jsx)(n.code,{children:"protoMinor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    protoMinor(): string;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request protocol minor version."}),"\n",(0,r.jsx)(n.h3,{id:"method-remoteaddr",children:(0,r.jsx)(n.code,{children:"remoteAddr"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    remoteAddr(): string;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request remote address."}),"\n",(0,r.jsx)(n.h3,{id:"method-host",children:(0,r.jsx)(n.code,{children:"host"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    host(): string;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request host."}),"\n",(0,r.jsx)(n.h3,{id:"method-path",children:(0,r.jsx)(n.code,{children:"path"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    path(): string;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request path."}),"\n",(0,r.jsx)(n.h3,{id:"method-query",children:(0,r.jsx)(n.code,{children:"query"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    query(): Record<string, string[]>;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request query parameters."}),"\n",(0,r.jsx)(n.h3,{id:"method-headers",children:(0,r.jsx)(n.code,{children:"headers"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"    headers(): Record<string, string[]>;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the request headers."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3901:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(3743);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};var s=t(5893);function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,s.jsx)("div",{className:o.tableOfContentsInline,children:(0,s.jsx)(r.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(7294),o=t(6668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):r.push(o)})),r}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function d(e){const n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>d(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function l(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function a(e){const n=(0,r.useRef)(void 0),t=l();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:s,maxHeadingLevel:i}=e;function d(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),d=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let o=n;o<=t;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),l=c(d,{anchorTopOffset:t.current}),a=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===a)}))}return document.addEventListener("scroll",d),document.addEventListener("resize",d),d(),()=>{document.removeEventListener("scroll",d),document.removeEventListener("resize",d)}}),[e,t])}var h=t(3692),u=t(5893);function m(e){let{toc:n,className:t,linkClassName:r,isChild:o}=e;return n.length?(0,u.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.Z,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const p=r.memo(m);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:d="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:h,...m}=e;const v=(0,o.L)(),x=l??v.tableOfContents.minHeadingLevel,g=h??v.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,r.useMemo)((()=>i({toc:s(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return a((0,r.useMemo)((()=>{if(d&&c)return{linkClassName:d,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:g}}),[d,c,x,g])),(0,u.jsx)(p,{toc:j,className:t,linkClassName:d,...m})}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);