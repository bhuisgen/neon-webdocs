"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[9630],{739:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=i(5893),l=i(1151);const t={toc_max_heading_level:2},s="tls",d={id:"neon/configuration/server/listeners/modules/tls/index",title:"tls",description:"The tls listener is a TLS secured network listener.",source:"@site/docs/neon/configuration/server/listeners/modules/tls/index.md",sourceDirName:"neon/configuration/server/listeners/modules/tls",slug:"/neon/configuration/server/listeners/modules/tls/",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/tls/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"redirect",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/redirect/"},next:{title:"Overview",permalink:"/neon-webdocs/neon/configuration/server/sites/overview/"}},c={},o=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>listenAddr</code>",id:"listenAddr",level:3},{value:"<code>listenPort</code>",id:"listenPort",level:3},{value:"<code>caFiles</code>",id:"caFiles",level:3},{value:"<code>certFiles</code>",id:"certFiles",level:3},{value:"<code>keys_files</code>",id:"keyFiles",level:3},{value:"<code>clientAuth</code>",id:"clientAuth",level:3},{value:"<code>readTimeout</code>",id:"readTimeout",level:3},{value:"<code>readHeaderTimeout</code>",id:"readHeaderTimeout",level:3},{value:"<code>writeTimeout</code>",id:"writeTimeout",level:3},{value:"<code>idleTimeout</code>",id:"idleTimeout",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tls",children:"tls"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"tls"})," listener is a TLS secured network listener."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#listenAddr",children:(0,r.jsx)(n.code,{children:"listenAddr"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#listenPort",children:(0,r.jsx)(n.code,{children:"listenPort"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#caFiles",children:(0,r.jsx)(n.code,{children:"caFiles"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#certFiles",children:(0,r.jsx)(n.code,{children:"certFiles"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#keyFiles",children:(0,r.jsx)(n.code,{children:"keyFiles"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clientAuth",children:(0,r.jsx)(n.code,{children:"clientAuth"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#readTimeout",children:(0,r.jsx)(n.code,{children:"readTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#readHeaderTimeout",children:(0,r.jsx)(n.code,{children:"readHeaderTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#writeTimeout",children:(0,r.jsx)(n.code,{children:"writeTimeout"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#idleTimeout",children:(0,r.jsx)(n.code,{children:"idleTimeout"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"listeners:\n  default:\n    # highlight-start\n    tls:\n      listenAddr: 0.0.0.0\n      listenPort: 443\n      caFiles:\n        - ca.pem\n      certFiles:\n        - cert.pem\n      keyFiles:\n        - key.pem\n    # highlight-end\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The instance listens on all network interfaces with port 443."}),"\n",(0,r.jsx)(n.li,{children:"TLS is enabled with a CA certificate, a server certificate and its private key."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,r.jsx)(n.h3,{id:"listenAddr",children:(0,r.jsx)(n.code,{children:"listenAddr"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         listenAddr: <address>\n    Type:           string\n    Default:        -\n"})}),"\n",(0,r.jsx)(n.p,{children:"The network address (host or IP) to listen to."}),"\n",(0,r.jsx)(n.p,{children:"By default, the listening is on all available interfaces."}),"\n",(0,r.jsx)(n.h3,{id:"listenPort",children:(0,r.jsx)(n.code,{children:"listenPort"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         listenPort: <port>\n    Type:           numeric\n    Default:        443\n"})}),"\n",(0,r.jsx)(n.p,{children:"The network port to listen to."}),"\n",(0,r.jsx)(n.h3,{id:"caFiles",children:(0,r.jsx)(n.code,{children:"caFiles"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         caFiles:\n    Type:           list\n    List item:      string\n    Default:        -\n"})}),"\n",(0,r.jsx)(n.p,{children:"The TLS CA file(s)."}),"\n",(0,r.jsx)(n.h3,{id:"certFiles",children:(0,r.jsx)(n.code,{children:"certFiles"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         certFiles:\n    Type:           list\n    List item:      string\n"})}),"\n",(0,r.jsx)(n.p,{children:"The TLS server certificate file(s)."}),"\n",(0,r.jsx)(n.h3,{id:"keyFiles",children:(0,r.jsx)(n.code,{children:"keys_files"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         keyFiles:\n    Type:           list\n    List item:      string\n"})}),"\n",(0,r.jsx)(n.p,{children:"The TLS server key file(s)."}),"\n",(0,r.jsx)(n.h3,{id:"clientAuth",children:(0,r.jsx)(n.code,{children:"clientAuth"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         clientAuth: <mode>\n    Type:           string\n    Valid values:   none, require, verify, requireAndVerify\n    Default:        none\n"})}),"\n",(0,r.jsx)(n.p,{children:"The TLS client authentication mode."}),"\n",(0,r.jsx)(n.p,{children:"Valid values are"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"none"}),": no client authentication required."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"require"}),": requires a client certificate, but without verifying it."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"verify"}),": verify the client certificate, but only if the client sends it to the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"requireAndVerify"}),": require and verify the client certificate."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"If your websites must be publicly available, keep the default value to not require TLS client authentication."})}),"\n",(0,r.jsx)(n.h3,{id:"readTimeout",children:(0,r.jsx)(n.code,{children:"readTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         readTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to read a request in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"readHeaderTimeout",children:(0,r.jsx)(n.code,{children:"readHeaderTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         readHeaderTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        10\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to read the headers of a request in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"writeTimeout",children:(0,r.jsx)(n.code,{children:"writeTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         writeTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout to write a response in seconds."}),"\n",(0,r.jsx)(n.h3,{id:"idleTimeout",children:(0,r.jsx)(n.code,{children:"idleTimeout"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         idleTimeout: <delay>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,r.jsx)(n.p,{children:"The timeout of idle connections in seconds."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>s});var r=i(7294);const l={},t=r.createContext(l);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);