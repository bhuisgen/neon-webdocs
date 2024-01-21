"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[5787],{5888:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=s(5893),r=s(1151);const i={toc_max_heading_level:2},c="compress",l={id:"neon/configuration/server/sites/modules/middlewares/compress/index",title:"compress",description:"The compress middleware allows to compress the content of outgoing responses to clients.",source:"@site/docs/neon/configuration/server/sites/modules/middlewares/compress/index.md",sourceDirName:"neon/configuration/server/sites/modules/middlewares/compress",slug:"/neon/configuration/server/sites/modules/middlewares/compress/",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/middlewares/compress/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Site",permalink:"/neon-webdocs/neon/configuration/server/sites/site/"},next:{title:"header",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/middlewares/header/"}},t={},d=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>level</code>",id:"level",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"compress",children:"compress"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"compress"})," middleware allows to compress the content of outgoing responses to clients."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#compress",children:(0,o.jsx)(n.code,{children:"compress"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"sites:\n  default:\n    routes:\n      default:\n        middlewares:\n          # highlight-start\n          compress:\n            level: -1\n          # highlight-end\n"})}),"\n",(0,o.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,o.jsx)(n.h3,{id:"level",children:(0,o.jsx)(n.code,{children:"level"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    Syntax:         level: <level>\n    Type:           numeric\n    Default:        0\n"})}),"\n",(0,o.jsx)(n.p,{children:"The compression level of HTTP responses."}),"\n",(0,o.jsx)(n.p,{children:"Accepted values are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"0"}),": no compression"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"1"}),"-",(0,o.jsx)(n.code,{children:"9"}),": best speed to best compression levels"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-1"}),": standard compression"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-2"}),": huffmann-only compression"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var o=s(7294);const r={},i=o.createContext(r);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);