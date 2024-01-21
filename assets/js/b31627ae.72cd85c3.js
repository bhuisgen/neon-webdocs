"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[7964],{3449:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=r(5893),s=r(1151);const t={toc_max_heading_level:2},l="rewrite",c={id:"neon/configuration/server/sites/modules/middlewares/rewrite/index",title:"rewrite",description:"The rewrite middleware allows to rewrite and to redirect incoming requests.",source:"@site/docs/neon/configuration/server/sites/modules/middlewares/rewrite/index.md",sourceDirName:"neon/configuration/server/sites/modules/middlewares/rewrite",slug:"/neon/configuration/server/sites/modules/middlewares/rewrite/",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/middlewares/rewrite/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"logger",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/middlewares/logger/"},next:{title:"static",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/middlewares/static/"}},d={},o=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>rules</code>",id:"rules",level:3},{value:"<code>path</code>",id:"rule-path",level:4},{value:"<code>replacement</code>",id:"rule-replacement",level:4},{value:"<code>flag</code>",id:"rule-flag",level:4},{value:"<code>last</code>",id:"rule-last",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"rewrite",children:"rewrite"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"rewrite"})," middleware allows to rewrite and to redirect incoming requests."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#rules",children:(0,i.jsx)(n.code,{children:"rules"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#rule-path",children:(0,i.jsx)(n.code,{children:"path"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#rule-replacement",children:(0,i.jsx)(n.code,{children:"replacement"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#rule-flag",children:(0,i.jsx)(n.code,{children:"flag"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#rule-last",children:(0,i.jsx)(n.code,{children:"last"})})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"sites:\n  default:\n    routes:\n      default:\n        middlewares:\n          # highlight-start\n          rewrite:\n            rules:\n              - path: ^/old-content/?$\n                replacement: /new-content\n                flag: redirect\n                last: true\n              - path: ^/old-slug/?$\n                replacement: /new-slug\n                flag: permanent\n                last: true\n          # highlight-end\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"First rule"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It redirects any request matching the pattern ",(0,i.jsx)(n.code,{children:"^/old-content/?$"})," to the URL ",(0,i.jsx)(n.code,{children:"/new-content"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The option ",(0,i.jsx)(n.code,{children:"flag"})," is set to ",(0,i.jsx)(n.code,{children:"redirect"})," so it is a temporary redirect to clients (HTTP status code 302)."]}),"\n",(0,i.jsxs)(n.li,{children:["The option ",(0,i.jsx)(n.code,{children:"last"})," is enabled, no other rule will be processed if this rule matches."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Second rule"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It redirects any request matching the pattern ",(0,i.jsx)(n.code,{children:"^/wrong-slug/?$"})," to the URL ",(0,i.jsx)(n.code,{children:"/right-slug"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The flag ",(0,i.jsx)(n.code,{children:"permanent"})," so it is a permanent redirect to clients (HTTP status code 301)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,i.jsx)(n.h3,{id:"rules",children:(0,i.jsx)(n.code,{children:"rules"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         rules:\n    Type:           list\n    Item type:      object\n"})}),"\n",(0,i.jsx)(n.p,{children:"This list defines all rewrite rules."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"rules:\n  - path: ^/old-content/?$\n    replacement: /new-content\n    flag: redirect\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rule-path",children:(0,i.jsx)(n.code,{children:"path"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         path: <regex>\n    Type:           string\n"})}),"\n",(0,i.jsx)(n.p,{children:"The path to match as a regular expression."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The regular expression should follow the ",(0,i.jsx)("a",{href:"https://pkg.go.dev/regexp/syntax",target:"_blank",children:"golang"})," syntax."]})}),"\n",(0,i.jsx)(n.h4,{id:"rule-replacement",children:(0,i.jsx)(n.code,{children:"replacement"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         replacement: <url>\n    Type:           string\n"})}),"\n",(0,i.jsx)(n.p,{children:"The new URL replacement."}),"\n",(0,i.jsx)(n.h4,{id:"rule-flag",children:(0,i.jsx)(n.code,{children:"flag"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         flag: <type>\n    Type:           string\n    Valid values:   redirect, permanent\n    Default:        -\n"})}),"\n",(0,i.jsx)(n.p,{children:"The redirect method."}),"\n",(0,i.jsx)(n.p,{children:"This optional flag can be :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"redirect"}),": send a temporary redirect to clients, i.e. with HTTP status code 302."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"permanent"}),": send a permanent redirect to clients, i.e. with HTTP status code 301."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If no flag is given the default behavior is like the ",(0,i.jsx)(n.code,{children:"redirect"})," flag except if the ",(0,i.jsx)(n.code,{children:"replacement"})," is a relative URL. In\nthis case an internal rewrite is done by the server (transparent redirect)."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Permanent redirects are only required if you change your domain(s) or if you merge previous sites into a new one."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Permanent redirects affect search engine results."})}),"\n",(0,i.jsx)(n.h4,{id:"rule-last",children:(0,i.jsx)(n.code,{children:"last"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Syntax:         last: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,i.jsx)(n.p,{children:"The flag to prevent execution of other rules if the current rule is processed."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var i=r(7294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);