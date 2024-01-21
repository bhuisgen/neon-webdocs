"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[3633],{6744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=i(5893),t=i(1151);const d={toc_max_heading_level:2},s="acme",o={id:"neon/configuration/server/listeners/modules/acme/index",title:"acme",description:"The acme listener is a TLS secured network listener with automatic certificates generation from Let's Encrypt and any",source:"@site/docs/neon/configuration/server/listeners/modules/acme/index.md",sourceDirName:"neon/configuration/server/listeners/modules/acme",slug:"/neon/configuration/server/listeners/modules/acme/",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/acme/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Listener",permalink:"/neon-webdocs/neon/configuration/server/listeners/listener/"},next:{title:"local",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/local/"}},c={},l=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>domains</code>",id:"domains",level:3},{value:"<code>cacheDir</code>",id:"cacheDir",level:3},{value:"<code>listenAddr</code>",id:"listenAddr",level:3},{value:"<code>listenPort</code>",id:"listenPort",level:3},{value:"<code>readTimeout</code>",id:"readTimeout",level:3},{value:"<code>readHeaderTimeout</code>",id:"readHeaderTimeout",level:3},{value:"<code>writeTimeout</code>",id:"writeTimeout",level:3},{value:"<code>idleTimeout</code>",id:"idleTimeout",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"acme",children:"acme"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"acme"})," listener is a TLS secured network listener with automatic certificates generation from Let's Encrypt and any\nother ACME-based CA."]}),"\n",(0,r.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,r.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This listener requires a public facing server with its HTTP network port 80 available to issue TLS certificates."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#domains",children:(0,r.jsx)(n.code,{children:"domains"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#cache-dir",children:(0,r.jsx)(n.code,{children:"cacheDir"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#listenAddr",children:(0,r.jsx)(n.code,{children:"listenAddr"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#listenPort",children:(0,r.jsx)(n.code,{children:"listenPort"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#readTimeout",children:(0,r.jsx)(n.code,{children:"readTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#readHeaderTimeout",children:(0,r.jsx)(n.code,{children:"readHeaderTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#writeTimeout",children:(0,r.jsx)(n.code,{children:"writeTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#idleTimeout",children:(0,r.jsx)(n.code,{children:"idleTimeout"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"listeners:\n  default:\n    # highlight-start\n    acme:\n      domains:\n        - my.domain.org\n      cacheDir: acme/\n      listenAddr: 0.0.0.0\n      listenPort: 443\n    # highlight-end\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The instance listens on all network interfaces with port 443."}),"\n",(0,r.jsxs)(n.li,{children:["The acme manager will be listening on port 80 to respond to the ACME challenges. All other requests will be\nredirected to the secured port i.e. ",(0,r.jsx)(n.code,{children:"https://<host>:<listenPort>"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,r.jsx)(n.h3,{id:"domains",children:(0,r.jsx)(n.code,{children:"domains"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         domains:\n    Type:           list\n    Item type:      string\n"})}),"\n",(0,r.jsx)(n.p,{children:"The list of domains to generate certificates and to listen to."}),"\n",(0,r.jsx)(n.p,{children:"Each of this domain should resolved from DNS to one of the public IP address of the web server."}),"\n",(0,r.jsx)(n.h3,{id:"cacheDir",children:(0,r.jsx)(n.code,{children:"cacheDir"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         cacheDir: <path>\n    Type:           string\n"})}),"\n",(0,r.jsx)(n.p,{children:"The cache directory to store issued certificates, avoiding issues rate limits."}),"\n",(0,r.jsx)(n.h3,{id:"listenAddr",children:(0,r.jsx)(n.code,{children:"listenAddr"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         listenAddr: <address>\n    Type:           string\n    Default:        -\n"})}),"\n",(0,r.jsx)(n.p,{children:"The network address (host or IP) to listen to."}),"\n",(0,r.jsx)(n.p,{children:"By default, the listening is on all available interfaces."}),"\n",(0,r.jsx)(n.h3,{id:"listenPort",children:(0,r.jsx)(n.code,{children:"listenPort"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         listenPort: <port>\n    Type:           numeric\n    Default:        443\n"})}),"\n",(0,r.jsx)(n.p,{children:"The network port to listen to."}),"\n",(0,r.jsx)(n.h3,{id:"readTimeout",children:(0,r.jsx)(n.code,{children:"readTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         readTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to read a request in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"readHeaderTimeout",children:(0,r.jsx)(n.code,{children:"readHeaderTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         readHeaderTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        10\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to read the headers of a request in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"writeTimeout",children:(0,r.jsx)(n.code,{children:"writeTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         writeTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to write a response in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"idleTimeout",children:(0,r.jsx)(n.code,{children:"idleTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         idleTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout of idle connections in seconds."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var r=i(7294);const t={},d=r.createContext(t);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);