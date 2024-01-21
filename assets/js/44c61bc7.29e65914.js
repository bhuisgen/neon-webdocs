"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[8175],{3113:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=i(5893),s=i(1151);const t={toc_max_heading_level:2},o="Listener",l={id:"neon/configuration/server/listeners/listener/index",title:"Listener",description:"A listener is the configuration block required to create a network socket listening for incoming client connections.",source:"@site/docs/neon/configuration/server/listeners/listener/index.md",sourceDirName:"neon/configuration/server/listeners/listener",slug:"/neon/configuration/server/listeners/listener/",permalink:"/neon-webdocs/neon/configuration/server/listeners/listener/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/neon-webdocs/neon/configuration/server/listeners/overview/"},next:{title:"acme",permalink:"/neon-webdocs/neon/configuration/server/listeners/modules/acme/"}},c={},d=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>listeners</code>",id:"listeners",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"listener",children:"Listener"}),"\n",(0,r.jsx)(n.p,{children:"A listener is the configuration block required to create a network socket listening for incoming client connections."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#listeners",children:(0,r.jsx)(n.code,{children:"listeners"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'listeners:\n  secured:\n    tls:\n      listenAddr: 0.0.0.0\n      listenPort: 443\n      caFiles: ["ca.pem"]\n      certFiles: ["cert.pem"]\n      keyFiles: ["key.pem"]\n  unsecured:\n    redirect:\n      listenAddr: 0.0.0.0\n      listenPort: 80\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Two listeners are defined: the first listener is named ",(0,r.jsx)(n.em,{children:"secured"})," and the second ",(0,r.jsx)(n.em,{children:"unsecured"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The first listener uses the module ",(0,r.jsx)(n.code,{children:"tls"})," and the second ",(0,r.jsx)(n.code,{children:"redirect"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,r.jsx)(n.h3,{id:"listeners",children:(0,r.jsx)(n.code,{children:"listeners"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Syntax:         listeners:\n    Type:           map\n    Item key:       string\n    Item value:     object\n"})}),"\n",(0,r.jsx)(n.p,{children:"This list defines all listeners."}),"\n",(0,r.jsx)(n.p,{children:"Each listener has a user-defined name and a listener module configuration."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"At least one listener is required to start an instance."})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var r=i(7294);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);