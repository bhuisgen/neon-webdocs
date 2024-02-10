"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[205],{2656:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=r(5893),o=r(1151);const t={toc_max_heading_level:2},c="file",s={id:"neon/configuration/fetcher/modules/providers/file/index",title:"file",description:"The file provider is used to fetch a resource from local file.",source:"@site/docs/neon/configuration/fetcher/modules/providers/file/index.md",sourceDirName:"neon/configuration/fetcher/modules/providers/file",slug:"/neon/configuration/fetcher/modules/providers/file/",permalink:"/neon-webdocs/neon/configuration/fetcher/modules/providers/file/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Fetcher",permalink:"/neon-webdocs/neon/configuration/fetcher/fetcher/"},next:{title:"rest",permalink:"/neon-webdocs/neon/configuration/fetcher/modules/providers/rest/"}},l={},d=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"Resource configuration",id:"resource-configuration",level:2},{value:"<code>path</code>",id:"resource-path",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"file",children:"file"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"file"})," provider is used to fetch a resource from local file."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#resource-configuration",children:"Resource configuration"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#resource-path",children:(0,i.jsx)(n.code,{children:"path"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"fetcher:\n  providers:\n    local:\n      # highlight-start\n      file:\n      # highlight-end\n\nloader:\n  rules:\n    data:\n      raw:\n        local:\n          # highlight-start\n          path: ./dist/data.json\n          # highlight-end\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The provider ",(0,i.jsx)(n.strong,{children:"local"})," uses the provider module ",(0,i.jsx)(n.code,{children:"file"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The loader rules has a rule for the resource ",(0,i.jsx)(n.strong,{children:"data"})," which loads this resource using the provider ",(0,i.jsx)(n.strong,{children:"local"})," with the given configuration."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,i.jsx)(n.h2,{id:"resource-configuration",children:"Resource configuration"}),"\n",(0,i.jsx)(n.h3,{id:"resource-path",children:(0,i.jsx)(n.code,{children:"path"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         path: <file>\n    Type:           string\n"})}),"\n",(0,i.jsx)(n.p,{children:"The file to read."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var i=r(7294);const o={},t=i.createContext(o);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);