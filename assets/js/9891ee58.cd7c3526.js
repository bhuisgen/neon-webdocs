"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[9922],{5217:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(5893),t=i(1151);const r={toc_max_heading_level:2},d="static",l={id:"neon/configuration/server/sites/modules/middlewares/static/index",title:"static",description:"The static middleware allows to serve static files like resource and media files.",source:"@site/docs/neon/configuration/server/sites/modules/middlewares/static/index.md",sourceDirName:"neon/configuration/server/sites/modules/middlewares/static",slug:"/neon/configuration/server/sites/modules/middlewares/static/",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/middlewares/static/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"rewrite",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/middlewares/rewrite/"},next:{title:"empty",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/empty/"}},c={},o=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>path</code>",id:"path",level:3},{value:"<code>index</code>",id:"index",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"static",children:"static"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"static"})," middleware allows to serve static files like resource and media files."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#path",children:(0,s.jsx)(n.code,{children:"path"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#index",children:(0,s.jsx)(n.code,{children:"index"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sites:\n  default:\n    routes:\n      default:\n        middlewares:\n          # highlight-start\n          static:\n            path: dist/static\n          # highlight-end\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Static files are served from the local directory ",(0,s.jsx)(n.code,{children:"dist/static"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A request with URL ",(0,s.jsx)(n.code,{children:"/css/style.css"})," will serve the file ",(0,s.jsx)(n.code,{children:"dist/static/css/style.css"})," if found on the filesystem."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,s.jsx)(n.h3,{id:"path",children:(0,s.jsx)(n.code,{children:"path"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         path: <dir>\n    Type:           string\n"})}),"\n",(0,s.jsx)(n.p,{children:"The path of the static files directory."}),"\n",(0,s.jsx)(n.h3,{id:"index",children:(0,s.jsx)(n.code,{children:"index"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         index: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable index files serving."}),"\n",(0,s.jsxs)(n.p,{children:["Only ",(0,s.jsx)(n.code,{children:"index.html"})," files are served if found."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Enabling this flag can bypass other middlewares and handlers."})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var s=i(7294);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);