"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[7200],{8275:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=i(4848),l=i(8453);const r={toc_max_heading_level:2},c="js",d={id:"neon/configuration/server/sites/modules/handlers/js/index",title:"js",description:"The js handler allows to serve a Javascript application.",source:"@site/docs/neon/configuration/server/sites/modules/handlers/js/index.md",sourceDirName:"neon/configuration/server/sites/modules/handlers/js",slug:"/neon/configuration/server/sites/modules/handlers/js/",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/js/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"html",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/html/"},next:{title:"resource",permalink:"/neon-webdocs/neon/configuration/server/sites/modules/handlers/resource/"}},t={},a=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>index</code>",id:"index",level:3},{value:"<code>bundle</code>",id:"bundle",level:3},{value:"<code>bundleCodeCache</code>",id:"bundleCodeCache",level:3},{value:"<code>env</code>",id:"env",level:3},{value:"<code>container</code>",id:"container",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>maxVMs</code>",id:"maxVMs",level:3},{value:"<code>minSpareVMs</code>",id:"minSpareVMs",level:3},{value:"<code>maxSpareVMs</code>",id:"maxSpareVMs",level:3},{value:"<code>cache</code>",id:"cache",level:3},{value:"<code>cacheTTL</code>",id:"cacheTTL",level:3},{value:"<code>cacheMaxItems</code>",id:"cacheMaxItems",level:3},{value:"<code>cacheMinBodySize</code>",id:"cacheMinBodySize",level:3},{value:"<code>cacheMaxBodySize</code>",id:"cacheMaxBodySize",level:3},{value:"<code>languages</code>",id:"languages",level:3},{value:"<code>defaultLanguage</code>",id:"defaultLanguage",level:3},{value:"<code>rules</code>",id:"rules",level:3},{value:"<code>path</code>",id:"rule-path",level:4},{value:"<code>state</code>",id:"rule-state",level:4},{value:"<code>key</code>",id:"rule-state-key",level:5},{value:"<code>resource</code>",id:"rule-state-resource",level:5},{value:"<code>export</code>",id:"rule-state-export",level:5},{value:"<code>last</code>",id:"rule-last",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"js",children:"js"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"js"})," handler allows to serve a Javascript application."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#directives",children:"Directives"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#index",children:(0,s.jsx)(n.code,{children:"index"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#bundle",children:(0,s.jsx)(n.code,{children:"bundle"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#bundleCodeCache",children:(0,s.jsx)(n.code,{children:"bundleCodeCache"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#env",children:(0,s.jsx)(n.code,{children:"env"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#container",children:(0,s.jsx)(n.code,{children:"container"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#state",children:(0,s.jsx)(n.code,{children:"state"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#timeout",children:(0,s.jsx)(n.code,{children:"timeout"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#maxVMs",children:(0,s.jsx)(n.code,{children:"maxVMs"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#minSpareVMs",children:(0,s.jsx)(n.code,{children:"minSpareVMs"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#maxSpareVMs",children:(0,s.jsx)(n.code,{children:"maxSpareVMs"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cache",children:(0,s.jsx)(n.code,{children:"cache"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cacheTTL",children:(0,s.jsx)(n.code,{children:"cacheTTL"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cacheMaxItems",children:(0,s.jsx)(n.code,{children:"cacheMaxItems"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cacheMinBodySize",children:(0,s.jsx)(n.code,{children:"cacheMinBodySize"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cacheMaxBodySize",children:(0,s.jsx)(n.code,{children:"cacheMaxBodySize"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#languages",children:(0,s.jsx)(n.code,{children:"languages"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#defaultLanguage",children:(0,s.jsx)(n.code,{children:"defaultLanguage"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#rules",children:(0,s.jsx)(n.code,{children:"rules"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rule-path",children:(0,s.jsx)(n.code,{children:"path"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#rule-state",children:(0,s.jsx)(n.code,{children:"state"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rule-state-key",children:(0,s.jsx)(n.code,{children:"key"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rule-state-resource",children:(0,s.jsx)(n.code,{children:"resource"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rule-state-export",children:(0,s.jsx)(n.code,{children:"export"})})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rule-last",children:(0,s.jsx)(n.code,{children:"last"})})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sites:\n  default:\n    routes:\n      default:\n        middlewares:\n          static:\n            path: dist/static\n        handler:\n          js:\n            index: dist/index.html\n            bundle: dist/bundle.js\n            rules:\n              - path: ^/\n                state:\n                  - key: config\n                    resource: config\n              - path: ^/$\n                state:\n                  - key: posts\n                    resource: posts-recent\n                last: true\n              - path: ^/(?P<slug>[^\\/]+)/?$\n                state:\n                  - key: post-$slug\n                    resource: post-$slug\n                last: true\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The index file of the application is ",(0,s.jsx)(n.code,{children:"dist/index.html"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The bundle file of the application is ",(0,s.jsx)(n.code,{children:"dist/bundle.js"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The static files located in ",(0,s.jsx)(n.code,{children:"dist/static"})," are served by the middleware ",(0,s.jsx)(n.code,{children:"static"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"First rule"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first rule is a default match to any request path."}),"\n",(0,s.jsxs)(n.li,{children:["It requires to pass ",(0,s.jsx)(n.em,{children:"if available"})," the state of the resource ",(0,s.jsx)(n.code,{children:"config"})," to the application."]}),"\n",(0,s.jsxs)(n.li,{children:["If the resource ",(0,s.jsx)(n.code,{children:"config"})," has available data, the application can access it from the key ",(0,s.jsx)(n.code,{children:"config"})," of the server\nstate object."]}),"\n",(0,s.jsxs)(n.li,{children:["As the ",(0,s.jsx)(n.code,{children:"last"})," flag is not enabled, rules processing will continue to the next rules. This rule is useful way to\nshare a common state to all requests."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Second rule"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The second rule is a strict match to the request path ",(0,s.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["It requires to pass ",(0,s.jsx)(n.em,{children:"if available"})," the state of the resource ",(0,s.jsx)(n.code,{children:"posts-recent"})," to the application."]}),"\n",(0,s.jsxs)(n.li,{children:["If the resource ",(0,s.jsx)(n.code,{children:"post-recent"})," has available data, the application can access it from the key ",(0,s.jsx)(n.code,{children:"posts"})," of the server\nstate object."]}),"\n",(0,s.jsxs)(n.li,{children:["As the ",(0,s.jsx)(n.code,{children:"last"})," flag is enabled, rules processing will stop if this rule matches, meaning no more state will be added\nfor this request path."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Third rule"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The third rule is a dynamic match to any first level request path."}),"\n",(0,s.jsxs)(n.li,{children:["It requires to pass ",(0,s.jsx)(n.em,{children:"if available"})," the state of a runtime resource ",(0,s.jsx)(n.code,{children:"post-$slug"})," to the application, where ",(0,s.jsx)(n.code,{children:"$slug"})," is\nreplaced by the value of the dynamic parameter ",(0,s.jsx)(n.code,{children:"slug"})," extracted from the matched rule."]}),"\n",(0,s.jsxs)(n.li,{children:["In practice for an incoming request path ",(0,s.jsx)(n.code,{children:"/hello"})," the dynamic parameter ",(0,s.jsx)(n.code,{children:"slug"})," will be equals to ",(0,s.jsx)(n.code,{children:"hello"})," and the\nresource key ",(0,s.jsx)(n.code,{children:"post-hello"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If the targeted resource has available data, the application can access it from the computed key of the server\nstate object."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,s.jsx)(n.h3,{id:"index",children:(0,s.jsx)(n.code,{children:"index"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         index: <file>\n    Type:           string\n"})}),"\n",(0,s.jsx)(n.p,{children:"The path to the application index file."}),"\n",(0,s.jsx)(n.h3,{id:"bundle",children:(0,s.jsx)(n.code,{children:"bundle"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         bundle: <file>\n    Type:           string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The path to the application bundle file."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"If no bundle file is specified, the HTML file is rendered as is to clients."})}),"\n",(0,s.jsx)(n.h3,{id:"bundleCodeCache",children:(0,s.jsx)(n.code,{children:"bundleCodeCache"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         bundleCodeCache: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,s.jsx)(n.p,{children:"The flag to enable bundle code cache between execution."}),"\n",(0,s.jsx)(n.p,{children:"Enable the cache code to improve the execution time of big bundle files."}),"\n",(0,s.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,s.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,s.jsx)(n.h3,{id:"env",children:(0,s.jsx)(n.code,{children:"env"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         env: <name>\n    Type:           string\n    Default:        production\n"})}),"\n",(0,s.jsx)(n.p,{children:"The environment name passed to the bundle."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"The environment name may be restricted by the application."})}),"\n",(0,s.jsx)(n.h3,{id:"container",children:(0,s.jsx)(n.code,{children:"container"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         container: <id>\n    Type:           string\n    Default:        root\n"})}),"\n",(0,s.jsx)(n.p,{children:"The HTML identifier of the container to render the application."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"The value should match to your application."})}),"\n",(0,s.jsx)(n.h3,{id:"state",children:(0,s.jsx)(n.code,{children:"state"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         state: <id>\n    Type:           string\n    Default:        state\n"})}),"\n",(0,s.jsx)(n.p,{children:"The HTML identifier of the JSON script to pass the state to the client application."}),"\n",(0,s.jsxs)(n.p,{children:["Any rule ",(0,s.jsx)(n.a,{href:"#rule-state",children:(0,s.jsx)(n.code,{children:"state"})})," entry with ",(0,s.jsx)(n.a,{href:"#rule-state-export",children:(0,s.jsx)(n.code,{children:"export"})})," enabled will be stored into the JSON using\nthe same key."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"The value should match to your application."})}),"\n",(0,s.jsx)(n.h3,{id:"timeout",children:(0,s.jsx)(n.code,{children:"timeout"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         timeout: <duration>\n    Type:           numeric\n    Default:        200\n    Unit:           milliseconds\n"})}),"\n",(0,s.jsx)(n.p,{children:"The timeout to execute the bundle."}),"\n",(0,s.jsx)(n.h3,{id:"maxVMs",children:(0,s.jsx)(n.code,{children:"maxVMs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         maxVMs: <count>\n    Type:           numeric\n    Default:        number of detected CPUs\n    Minimum:        1\n"})}),"\n",(0,s.jsx)(n.p,{children:"The number of Javascript VMs to run simultaneously."}),"\n",(0,s.jsx)(n.h3,{id:"minSpareVMs",children:(0,s.jsx)(n.code,{children:"minSpareVMs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         minSpareVMs: <count>\n    Type:           numeric\n    Minimum:        0\n    Default:        0\n"})}),"\n",(0,s.jsx)(n.p,{children:"The minimum number of VMs to keep in spare."}),"\n",(0,s.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,s.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,s.jsx)(n.h3,{id:"maxSpareVMs",children:(0,s.jsx)(n.code,{children:"maxSpareVMs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         maxSpareVMs: <count>\n    Type:           numeric\n    Minimum:        0\n    Default:        0\n"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of VMs to keep in spare."}),"\n",(0,s.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,s.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,s.jsx)(n.h3,{id:"cache",children:(0,s.jsx)(n.code,{children:"cache"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         cache: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable the render cache."}),"\n",(0,s.jsx)(n.h3,{id:"cacheTTL",children:(0,s.jsx)(n.code,{children:"cacheTTL"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         cacheTTL: <duration>\n    Type:           numeric\n    Default:        60\n    Unit:           second\n"})}),"\n",(0,s.jsx)(n.p,{children:"The TTL of cached renders in seconds."}),"\n",(0,s.jsx)(n.p,{children:"When the TTL is expired, a new render is processed."}),"\n",(0,s.jsx)(n.h3,{id:"cacheMaxItems",children:(0,s.jsx)(n.code,{children:"cacheMaxItems"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         cacheMaxItems: <count>\n    Type:           numeric\n    Default:        100\n    Unit:           item\n"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of items in the cache."}),"\n",(0,s.jsx)(n.p,{children:"When this limit is reached, the least resource used is evicted, meaning only the most used resources are kept in the cache."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This option limits the memory usage of the server instance."})}),"\n",(0,s.jsx)(n.h3,{id:"cacheMinBodySize",children:(0,s.jsx)(n.code,{children:"cacheMinBodySize"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         cacheMinBodySize: <size>\n    Type:           numeric\n    Default:        0\n    Unit:           bytes\n"})}),"\n",(0,s.jsx)(n.p,{children:"The minimum body size of the render to allow caching."}),"\n",(0,s.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,s.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,s.jsx)(n.h3,{id:"cacheMaxBodySize",children:(0,s.jsx)(n.code,{children:"cacheMaxBodySize"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         cacheMaxBodySize: <size>\n    Type:           numeric\n    Default:        0\n    Unit:           bytes\n"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum body size of the render to allow caching."}),"\n",(0,s.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,s.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,s.jsx)(n.h3,{id:"languages",children:(0,s.jsx)(n.code,{children:"languages"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         languages:\n    Type:           list\n    Item type:      string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The list of languages supported by the application server-side."}),"\n",(0,s.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,s.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,s.jsx)(n.h3,{id:"defaultLanguage",children:(0,s.jsx)(n.code,{children:"defaultLanguage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         defaultLanguage: <lang>\n    Type:           string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The default language of the application server-side."}),"\n",(0,s.jsx)(n.admonition,{title:"neon-pro",type:"note",children:(0,s.jsx)(n.p,{children:"This feature is only available in Neon Pro."})}),"\n",(0,s.jsx)(n.h3,{id:"rules",children:(0,s.jsx)(n.code,{children:"rules"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         rules:\n    Type:           list\n    Item type:      object\n"})}),"\n",(0,s.jsx)(n.p,{children:"This list defines all application rules."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"rules:\n  - path: ^/$\n    name: sample\n    state:\n      - name: first\n        resource: item-a\n      - path: second\n        resource: item-b\n    last: true\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rule-path",children:(0,s.jsx)(n.code,{children:"path"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         path: <regex>\n    Type:           string\n"})}),"\n",(0,s.jsx)(n.p,{children:"The path to match as a regular expression."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The regular expression should follow the ",(0,s.jsx)("a",{href:"https://pkg.go.dev/regexp/syntax",target:"_blank",children:"golang"})," syntax."]})}),"\n",(0,s.jsx)(n.p,{children:"If you need to extract dynamic parameters, use capturing groups:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"^/(.+)/(.+)/?$"}),": these two groups extract the dynamic parameters ",(0,s.jsx)(n.code,{children:"1"})," and ",(0,s.jsx)(n.code,{children:"2"})," following their positions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"^/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})/?$"}),": the named groups extract the dynamic parameters\n",(0,s.jsx)(n.code,{children:"year"}),", ",(0,s.jsx)(n.code,{children:"month"}),", ",(0,s.jsx)(n.code,{children:"day"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"rule-state",children:(0,s.jsx)(n.code,{children:"state"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         state:\n    Type:           list\n    Item type:      object\n"})}),"\n",(0,s.jsx)(n.p,{children:"This section lists all state entries required by the rule."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"state:\n  - key: first\n    resource: item-a\n  - path: second\n    resource: item-b\n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-state-key",children:(0,s.jsx)(n.code,{children:"key"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         key: <key>\n    Type:           string\n"})}),"\n",(0,s.jsx)(n.p,{children:"The key in the state object."}),"\n",(0,s.jsxs)(n.p,{children:["Dynamic parameters extracted from the rule ",(0,s.jsx)(n.a,{href:"#rule-path",children:(0,s.jsx)(n.code,{children:"path"})})," are replaced."]}),"\n",(0,s.jsx)(n.h5,{id:"rule-state-resource",children:(0,s.jsx)(n.code,{children:"resource"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         resource: <name>\n    Type:           string\n"})}),"\n",(0,s.jsx)(n.p,{children:"The name of the resource."}),"\n",(0,s.jsxs)(n.p,{children:["Dynamic parameters extracted from the rule ",(0,s.jsx)(n.a,{href:"#rule-path",children:(0,s.jsx)(n.code,{children:"path"})})," are replaced."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please refer to the ",(0,s.jsx)(n.a,{href:"/neon/configuration/loader/overview/",children:(0,s.jsx)(n.code,{children:"loader"})})," page for more information about resources."]})}),"\n",(0,s.jsx)(n.h5,{id:"rule-state-export",children:(0,s.jsx)(n.code,{children:"export"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         export: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,s.jsx)(n.p,{children:"Export the state to the client application."}),"\n",(0,s.jsx)(n.p,{children:"All exported states will be available in the index file as an included JSON object. The client application can read it\nduring its execution to preload any resources."}),"\n",(0,s.jsx)(n.h4,{id:"rule-last",children:(0,s.jsx)(n.code,{children:"last"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         last: <flag>\n    Type:           boolean\n    Default:        false\n"})}),"\n",(0,s.jsx)(n.p,{children:"The flag to prevent execution of other rules if the current rule is processed."})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var s=i(6540);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);