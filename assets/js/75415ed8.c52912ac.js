"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[2997],{2355:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=i(5893),r=i(1151);const c={toc_max_heading_level:2},d="file",l={id:"neon/configuration/server/sites/modules/handlers/file/index",title:"file",description:"The file handler allows to serve a file and cache its render.",source:"@site/docs/neon/configuration/server/sites/modules/handlers/file/index.md",sourceDirName:"neon/configuration/server/sites/modules/handlers/file",slug:"/neon/configuration/server/sites/modules/handlers/file/",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/file/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"feed",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/feed/"},next:{title:"empty",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/empty/"}},t={},h=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>path</code>",id:"path",level:3},{value:"<code>statusCode</code>",id:"statusCode",level:3},{value:"<code>cache</code>",id:"cache",level:3},{value:"<code>cacheTTL</code>",id:"cacheTTL",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"file",children:"file"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"file"})," handler allows to serve a file and cache its render."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#path",children:(0,s.jsx)(n.code,{children:"path"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#statusCode",children:(0,s.jsx)(n.code,{children:"statusCode"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cache",children:(0,s.jsx)(n.code,{children:"cache"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cacheTTL",children:(0,s.jsx)(n.code,{children:"cacheTTL"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'sites:\n  default:\n    routes:\n      "/file":\n        handler:\n          # highlight-start\n          file:\n            path: dist/first.html\n          # highlight-end\n      "/path/":\n        handler:\n          # highlight-start\n          file:\n            path: dist/second.html\n          # highlight-end\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The first handler renders the file ",(0,s.jsx)(n.code,{children:"dist/file1.html"})," for the URL ",(0,s.jsx)(n.code,{children:"/single"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The second handler renders the file ",(0,s.jsx)(n.code,{children:"dist/file2.html"})," for any URLs starting with the path ",(0,s.jsx)(n.code,{children:"/path/"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,s.jsx)(n.h3,{id:"path",children:(0,s.jsx)(n.code,{children:"path"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         path: <file>\n    Type:           string\n"})}),"\n",(0,s.jsx)(n.p,{children:"The path of the file to serve."}),"\n",(0,s.jsx)(n.h3,{id:"statusCode",children:(0,s.jsx)(n.code,{children:"statusCode"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         statusCode: <code>\n    Type:           numeric\n    Default:        200\n"})}),"\n",(0,s.jsx)(n.p,{children:"The status code to return."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This status code is only returned if the last render is successful."})}),"\n",(0,s.jsx)(n.h3,{id:"cache",children:(0,s.jsx)(n.code,{children:"cache"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         cache: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable the render cache."}),"\n",(0,s.jsx)(n.h3,{id:"cacheTTL",children:(0,s.jsx)(n.code,{children:"cacheTTL"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         cacheTTL: <duration>\n    Type:           numeric\n    Default:        60\n    Unit:           second\n"})}),"\n",(0,s.jsx)(n.p,{children:"The TTL of cached render in seconds."}),"\n",(0,s.jsx)(n.p,{children:"When the TTL is expired, a new render is processed."})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var s=i(7294);const r={},c=s.createContext(r);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);