"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[3179],{257:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(5893),l=i(1151);const t={toc_max_heading_level:2},d="local",o={id:"neon/configuration/server/listeners/modules/local/index",title:"local",description:"The local listener is a network listener for local networks.",source:"@site/docs/neon/configuration/server/listeners/modules/local/index.md",sourceDirName:"neon/configuration/server/listeners/modules/local",slug:"/neon/configuration/server/listeners/modules/local/",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/local/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"acme",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/acme/"},next:{title:"redirect",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/redirect/"}},s={},c=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>listenAddr</code>",id:"listenAddr",level:3},{value:"<code>listenPort</code>",id:"listenPort",level:3},{value:"<code>readTimeout</code>",id:"readTimeout",level:3},{value:"<code>readHeaderTimeout</code>",id:"readHeaderTimeout",level:3},{value:"<code>writeTimeout</code>",id:"writeTimeout",level:3},{value:"<code>idleTimeout</code>",id:"idleTimeout",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"local",children:"local"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"local"})," listener is a network listener for local networks."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This listener doesn't use secured connections."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#listenAddr",children:(0,r.jsx)(n.code,{children:"listenAddr"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#listenPort",children:(0,r.jsx)(n.code,{children:"listenPort"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#readTimeout",children:(0,r.jsx)(n.code,{children:"readTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#readHeaderTimeout",children:(0,r.jsx)(n.code,{children:"readHeaderTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#writeTimeout",children:(0,r.jsx)(n.code,{children:"writeTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#idleTimeout",children:(0,r.jsx)(n.code,{children:"idleTimeout"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"listeners:\n  default:\n    # highlight-start\n    local:\n      listenAddr: 0.0.0.0\n      listenPort: 80\n    # highlight-end\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"default"})," listener is listening on all network interfaces with port 80."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,r.jsx)(n.h3,{id:"listenAddr",children:(0,r.jsx)(n.code,{children:"listenAddr"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         listenAddr: <address>\n    Type:           string\n    Default:        -\n"})}),"\n",(0,r.jsx)(n.p,{children:"The network address (host or IP) to listen to."}),"\n",(0,r.jsx)(n.p,{children:"By default, the listening is on all available interfaces."}),"\n",(0,r.jsx)(n.h3,{id:"listenPort",children:(0,r.jsx)(n.code,{children:"listenPort"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         listenPort: <port>\n    Type:           numeric\n    Default:        80\n"})}),"\n",(0,r.jsx)(n.p,{children:"The network port to listen to."}),"\n",(0,r.jsx)(n.h3,{id:"readTimeout",children:(0,r.jsx)(n.code,{children:"readTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         readTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to read a request in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"readHeaderTimeout",children:(0,r.jsx)(n.code,{children:"readHeaderTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         readHeaderTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        10\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to read the headers of a request in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"writeTimeout",children:(0,r.jsx)(n.code,{children:"writeTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         writeTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to write a response in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"idleTimeout",children:(0,r.jsx)(n.code,{children:"idleTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         idleTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout of idle connections in seconds."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var r=i(7294);const l={},t=r.createContext(l);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);