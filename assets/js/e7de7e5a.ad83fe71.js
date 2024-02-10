"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[5767],{631:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(5893),r=s(1151);const t={toc_max_heading_level:2},l="Server",o={id:"neon/configuration/server/server/index",title:"Server",description:"The server section contains all the configuration settings of the server.",source:"@site/docs/neon/configuration/server/server/index.md",sourceDirName:"neon/configuration/server/server",slug:"/neon/configuration/server/server/",permalink:"/neon-webdocs/neon/configuration/server/server/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/neon-webdocs/neon/configuration/server/overview/"},next:{title:"Overview",permalink:"/neon-webdocs/neon/configuration/server/listeners/overview/"}},c={},d=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>listeners</code>",id:"listeners",level:3},{value:"<code>sites</code>",id:"sites",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"server",children:"Server"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"server"})," section contains all the configuration settings of the ",(0,i.jsx)(n.a,{href:"/neon/configuration/server/overview/",children:"server"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#listeners",children:(0,i.jsx)(n.code,{children:"listeners"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#sites",children:(0,i.jsx)(n.code,{children:"sites"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"server:\n  listeners:\n    default:\n      local:\n        listenAddr: 0.0.0.0\n        listenPort: 8080\n  sites:\n    default:\n      listeners:\n        - default\n      routes:\n        main:\n          middlewares:\n            static:\n              path: dist/app/static\n          handler:\n            js:\n              index: dist/app/index.html\n              bundle: dist/app/bundle.js\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The listener ",(0,i.jsx)(n.strong,{children:"default"})," is defined."]}),"\n",(0,i.jsxs)(n.li,{children:["The site ",(0,i.jsx)(n.strong,{children:"main"})," uses this listener."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,i.jsx)(n.h3,{id:"listeners",children:(0,i.jsx)(n.code,{children:"listeners"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         listeners:\n    Type:           map\n    Map key:        string\n    Map value:      object\n"})}),"\n",(0,i.jsx)(n.p,{children:"This list defines the server listeners."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"At least one listener is required to start the server instance."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"listeners:\n  default:\n    local:\n      # listener configuration\n"})}),"\n",(0,i.jsx)(n.h3,{id:"sites",children:(0,i.jsx)(n.code,{children:"sites"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         sites:\n    Type:           list\n    Item type:      object\n"})}),"\n",(0,i.jsx)(n.p,{children:"This list defines the server sites."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"At least one site is required to start the server instance."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"sites:\n  main:\n    # site configuration\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(7294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);