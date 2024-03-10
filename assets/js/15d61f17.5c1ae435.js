"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[6462],{9733:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var l=s(4848),r=s(8453);const i={toc_max_heading_level:2},o="robots",t={id:"neon/configuration/server/sites/modules/handlers/robots/index",title:"robots",description:"The robots handler allows to serve the robots.txt file used by bots to crawl your website.",source:"@site/docs/neon/configuration/server/sites/modules/handlers/robots/index.md",sourceDirName:"neon/configuration/server/sites/modules/handlers/robots",slug:"/neon/configuration/server/sites/modules/handlers/robots/",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/robots/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"resource",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/resource/"},next:{title:"sitemap",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/sitemap/"}},c={},d=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>hosts</code>",id:"hosts",level:3},{value:"<code>cache</code>",id:"cache",level:3},{value:"<code>cacheTTL</code>",id:"cacheTTL",level:3},{value:"<code>rules</code>",id:"rules",level:3},{value:"<code>userAgent</code>",id:"rule-userAgent",level:4},{value:"<code>allow</code>",id:"rule-allow",level:4},{value:"<code>disallow</code>",id:"rule-disallow",level:4},{value:"<code>crawlDelay</code>",id:"rule-crawlDelay",level:4},{value:"<code>host</code>",id:"rule-host",level:4},{value:"<code>sitemaps</code>",id:"sitemaps",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"robots",children:"robots"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"robots"})," handler allows to serve the robots.txt file used by bots to crawl your website."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#hosts",children:(0,l.jsx)(n.code,{children:"hosts"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#cache",children:(0,l.jsx)(n.code,{children:"cache"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#cacheTTL",children:(0,l.jsx)(n.code,{children:"cacheTTL"})})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#rules",children:(0,l.jsx)(n.code,{children:"rules"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#rule-userAgent",children:(0,l.jsx)(n.code,{children:"userAgent"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#rule-allow",children:(0,l.jsx)(n.code,{children:"allow"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#rule-disallow",children:(0,l.jsx)(n.code,{children:"disallow"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#rule-crawlDelay",children:(0,l.jsx)(n.code,{children:"crawlDelay"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#rule-host",children:(0,l.jsx)(n.code,{children:"host"})})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#sitemaps",children:(0,l.jsx)(n.code,{children:"sitemaps"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'sites:\n  default:\n    routes:\n      "/robots.txt":\n        handler:\n          robots:\n            hosts:\n              - example.org\n            sitemaps:\n              - https://example.org/sitemap.xml\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The robots.txt file is rendered for the URL path ",(0,l.jsx)(n.code,{children:"/robots.txt"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["If the request HTTP host is ",(0,l.jsx)(n.code,{children:"example.org"}),", the robots.txt file will allow the website crawling."]}),"\n",(0,l.jsxs)(n.li,{children:["The robots.txt lists the existing sitemap at ",(0,l.jsx)(n.code,{children:"https://example.org/sitemap.xml"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,l.jsx)(n.h3,{id:"hosts",children:(0,l.jsx)(n.code,{children:"hosts"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         hosts:\n    Type:           list\n    Item type:      string\n"})}),"\n",(0,l.jsx)(n.p,{children:"The list of hosts allowed to serve the robots.txt."}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"Keeping this list empty or removing all hosts prevents any crawling. An alternative solution is to list only the hosts\nor domains used for production."})}),"\n",(0,l.jsx)(n.h3,{id:"cache",children:(0,l.jsx)(n.code,{children:"cache"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         cache: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,l.jsx)(n.p,{children:"Enable the render cache."}),"\n",(0,l.jsx)(n.h3,{id:"cacheTTL",children:(0,l.jsx)(n.code,{children:"cacheTTL"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         cacheTTL: <duration>\n    Type:           numeric\n    Default:        60\n    Unit:           second\n"})}),"\n",(0,l.jsx)(n.p,{children:"The TTL of cached render in seconds."}),"\n",(0,l.jsx)(n.p,{children:"When the TTL is expired, a new render is processed."}),"\n",(0,l.jsx)(n.h3,{id:"rules",children:(0,l.jsx)(n.code,{children:"rules"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         rules:\n    Type:           list\n    Item type:      object\n    Default:        -\n"})}),"\n",(0,l.jsx)(n.p,{children:"This list defines all robots rules."}),"\n",(0,l.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,l.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'rules:\n  - userAgent: ["agent1"]\n    allow: ["/"]\n  - userAgent: ["agent2"]\n    allow: ["/path"]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"rule-userAgent",children:(0,l.jsx)(n.code,{children:"userAgent"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         userAgent:\n    Type:           list\n    Item type:      string\n"})}),"\n",(0,l.jsx)(n.p,{children:"The user agent(s) to match for this rule."}),"\n",(0,l.jsx)(n.h4,{id:"rule-allow",children:(0,l.jsx)(n.code,{children:"allow"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         allow:\n    Type:           list\n    Item type:      string\n"})}),"\n",(0,l.jsx)(n.p,{children:"The path(s) to allow."}),"\n",(0,l.jsx)(n.h4,{id:"rule-disallow",children:(0,l.jsx)(n.code,{children:"disallow"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         disallow:\n    Type:           list\n    Item type:      string\n"})}),"\n",(0,l.jsx)(n.p,{children:"The path(s) to disallow."}),"\n",(0,l.jsx)(n.h4,{id:"rule-crawlDelay",children:(0,l.jsx)(n.code,{children:"crawlDelay"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         crawlDelay: <delay>\n    Type:           numeric\n    Default:        -\n"})}),"\n",(0,l.jsx)(n.p,{children:"The delay between each page crawling in seconds."}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"This option is specific to some user agents."})}),"\n",(0,l.jsx)(n.h4,{id:"rule-host",children:(0,l.jsx)(n.code,{children:"host"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         host: <name>\n    Type:           string\n    Default:        -\n"})}),"\n",(0,l.jsx)(n.p,{children:"The host mirror to prefer for crawling pages."}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"This option is specific to some user agents."})}),"\n",(0,l.jsx)(n.h3,{id:"sitemaps",children:(0,l.jsx)(n.code,{children:"sitemaps"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Syntax:         sitemaps:\n    Type:           list\n    Item type:      string\n    Default:        -\n"})}),"\n",(0,l.jsx)(n.p,{children:"The list of sitemap URLs."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var l=s(6540);const r={},i=l.createContext(r);function o(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);