"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[376],{6936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(5893),i=t(1151);const r={displayed_sidebar:"docsSidebar",title:"Documentation",slug:"/"},o="Neon",a={id:"neon/index",title:"Documentation",description:"Neon is an web server dedicated to serve your Javascript web applications. Like any other web servers, websites are served to clients but with three major features:",source:"@site/docs/neon/index.md",sourceDirName:"neon",slug:"/",permalink:"/neon-webdocs/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"docsSidebar",title:"Documentation",slug:"/"},sidebar:"docsSidebar",next:{title:"Quick Start",permalink:"/neon-webdocs/neon/getting-started/quick-start/"}},c={},d=[{value:"How does it work ?",id:"how-does-it-work-",level:2}];function l(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"neon",children:"Neon"}),"\n",(0,s.jsx)(n.p,{children:"Neon is an web server dedicated to serve your Javascript web applications. Like any other web servers, websites are served to clients but with three major features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"it can fetch content from external services"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"it can render pages with its Javascript VM"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"it can cache pages"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These capabilities allow to serve contentful web pages with minimal loading time to clients."}),"\n",(0,s.jsx)(n.h2,{id:"how-does-it-work-",children:"How does it work ?"}),"\n",(0,s.jsx)(n.p,{children:"The workflow of Neon can be resumed by this schema:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Neon workflow",src:t(3042).Z+"",title:"Neon workflow",width:"1219",height:"175"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Load"})}),"\n",(0,s.jsxs)(n.p,{children:["The first step is to fetch all content resources required for a website. This step is independent from the client requests processing i.e. everything is done in background periodically by the server. All these data are the ",(0,s.jsx)(n.em,{children:"server state"})," which is never removed but only refreshed following the configuration rules defined by the user."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Render"})}),"\n",(0,s.jsx)(n.p,{children:"The second step is to render the application pages i.e. the HTML body with content from the server state. In the case of a Javascript application, this is done by executing its bundle file with the server Javascript VM. The final render is ready to serve to any clients including SEO bots."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Store"})}),"\n",(0,s.jsx)(n.p,{children:"The third step is to store in a memory cache all the renders for a given time-to-live period. It will prevent useless rendering and allow to send directly responses to clients for a minimal loading time."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Neon is an early project. This section above tends to focus on the main ideas of this project but new features and improvements are coming."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3042:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/workflow-light-0e3c6bc0bb13b8e21e3a1a089c2a03fc.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);