"use strict";(self.webpackChunkneon_webdocs=self.webpackChunkneon_webdocs||[]).push([[6630],{6467:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var s=r(5893),i=r(1151);const l={toc_max_heading_level:2},d="rest",c={id:"neon/configuration/fetcher/modules/providers/rest/index",title:"rest",description:"The rest provider is used to fetch REST API resources.",source:"@site/docs/neon/configuration/fetcher/modules/providers/rest/index.md",sourceDirName:"neon/configuration/fetcher/modules/providers/rest",slug:"/neon/configuration/fetcher/modules/providers/rest/",permalink:"/neon-webdocs/neon/configuration/fetcher/modules/providers/rest/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Fetcher",permalink:"/neon-webdocs/neon/configuration/fetcher/fetcher/"},next:{title:"Overview",permalink:"/neon-webdocs/neon/configuration/loader/overview/"}},o={},t=[{value:"Example configuration",id:"example-configuration",level:2},{value:"Directives",id:"directives",level:2},{value:"<code>tlsCAFiles</code>",id:"tlsCAFiles",level:3},{value:"<code>tlsCertFiles</code>",id:"tlsCertFiles",level:3},{value:"<code>tlsKeyFiles</code>",id:"tlsKeyFiles",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>maxConnsPerHost</code>",id:"maxConnsPerHost",level:3},{value:"<code>maxIdleConns</code>",id:"maxIdleConns",level:3},{value:"<code>maxIdleConnsPerHost</code>",id:"maxIdleConnsPerHost",level:3},{value:"<code>idleConnTimeout</code>",id:"idleConnTimeout",level:3},{value:"<code>retry</code>",id:"retry",level:3},{value:"<code>retryDelay</code>",id:"retryDelay",level:3},{value:"<code>headers</code>",id:"headers",level:3},{value:"<code>params</code>",id:"resource-params",level:4},{value:"Resource configuration",id:"resource-config",level:2},{value:"<code>method</code>",id:"resource-method",level:4},{value:"<code>url</code>",id:"resource-url",level:4},{value:"<code>headers</code>",id:"resource-headers",level:4},{value:"<code>params</code>",id:"resource-params",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rest",children:"rest"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"rest"})," provider is used to fetch REST API resources."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#example-configuration",children:"Example configuration"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#directives",children:"Directives"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#tlsCAFiles",children:(0,s.jsx)(n.code,{children:"tlsCAFiles"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#tlsCertFiles",children:(0,s.jsx)(n.code,{children:"tlsCertFiles"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#tlsKeyFiles",children:(0,s.jsx)(n.code,{children:"tlsKeyFile"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#timeout",children:(0,s.jsx)(n.code,{children:"timeout"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#maxConnsPerHost",children:(0,s.jsx)(n.code,{children:"maxConnsPerHost"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#maxIdleConns",children:(0,s.jsx)(n.code,{children:"maxIdleConns"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#maxIdleConnsPerHost",children:(0,s.jsx)(n.code,{children:"maxIdleConnsPerHost"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#idleConnTimeout",children:(0,s.jsx)(n.code,{children:"idleConnTimeout"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#retry",children:(0,s.jsx)(n.code,{children:"retry"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#retryDelay",children:(0,s.jsx)(n.code,{children:"retryDelay"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#headers",children:(0,s.jsx)(n.code,{children:"headers"})})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"#resource-configuration",children:"Resource configuration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#resource-method",children:(0,s.jsx)(n.code,{children:"method"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#resource-url",children:(0,s.jsx)(n.code,{children:"url"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#resource-headers",children:(0,s.jsx)(n.code,{children:"headers"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#resource-params",children:(0,s.jsx)(n.code,{children:"params"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'fetcher:\n  providers:\n    api:\n      # highlight-start\n      rest:\n        headers:\n          Content-Type: application/json\n          Authorization: "Bearer: my_jwt_token"\n      # highlight-end\n\nloader:\n  rules:\n    my-resource:\n      raw:\n        api:\n          # highlight-start\n          method: GET\n          url: https://<backend_url>/api/v1/my-resource\n          params:\n            limit: 10\n          # highlight-end\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The provider ",(0,s.jsx)(n.strong,{children:"api"})," is defined to use the provider module ",(0,s.jsx)(n.code,{children:"rest"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The loader rules defines a rule for the resource ",(0,s.jsx)(n.em,{children:"my-resource"})," and this rule loads this resource using the\nprovider ",(0,s.jsx)(n.strong,{children:"api"})," with the given configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,s.jsx)(n.h3,{id:"tlsCAFiles",children:(0,s.jsx)(n.code,{children:"tlsCAFiles"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         tlsCAFiles:\n    Type:           list\n    List item:      string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The TLS CA file(s) to use for requests."}),"\n",(0,s.jsx)(n.h3,{id:"tlsCertFiles",children:(0,s.jsx)(n.code,{children:"tlsCertFiles"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         tlsCertFiles:\n    Type:           list\n    List item:      string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The TLS client certificate file(s) to use for requests."}),"\n",(0,s.jsx)(n.h3,{id:"tlsKeyFiles",children:(0,s.jsx)(n.code,{children:"tlsKeyFiles"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         tlsKeyFiles:\n    Type:           list\n    List item:      string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The TLS client key file(s) to use for requests."}),"\n",(0,s.jsx)(n.h3,{id:"timeout",children:(0,s.jsx)(n.code,{children:"timeout"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  Syntax:         timeout: <duration>\n  Type:           numeric\n  Unit:           second\n  Default:        30\n"})}),"\n",(0,s.jsx)(n.p,{children:"The timeout to use for all requests."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This timeout is global to all requests."})}),"\n",(0,s.jsx)(n.h3,{id:"maxConnsPerHost",children:(0,s.jsx)(n.code,{children:"maxConnsPerHost"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         maxConnsPerHost: <count>\n    Type:           numeric\n    Unit:           connections\n    Default:        100\n"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of connections per host."}),"\n",(0,s.jsxs)(n.p,{children:["A value of ",(0,s.jsx)(n.code,{children:"0"})," means no limit."]}),"\n",(0,s.jsx)(n.h3,{id:"maxIdleConns",children:(0,s.jsx)(n.code,{children:"maxIdleConns"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         maxIdleConns: <count>\n    Type:           numeric\n    Unit:           connections\n    Default:        100\n"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of idle connections."}),"\n",(0,s.jsxs)(n.p,{children:["A value of ",(0,s.jsx)(n.code,{children:"0"})," means no limit."]}),"\n",(0,s.jsx)(n.h3,{id:"maxIdleConnsPerHost",children:(0,s.jsx)(n.code,{children:"maxIdleConnsPerHost"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         maxIdleConnsPerHost: <count>\n    Type:           numeric\n    Unit:           connections\n    Default:        100\n"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of idle connections per host."}),"\n",(0,s.jsxs)(n.p,{children:["A value of ",(0,s.jsx)(n.code,{children:"0"})," means no limit."]}),"\n",(0,s.jsx)(n.h3,{id:"idleConnTimeout",children:(0,s.jsx)(n.code,{children:"idleConnTimeout"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         idleConnTimeout: <duration>\n    Type:           numeric\n    Unit:           second\n    Default:        60\n"})}),"\n",(0,s.jsx)(n.p,{children:"The timeout of idle connections."}),"\n",(0,s.jsxs)(n.p,{children:["A value of ",(0,s.jsx)(n.code,{children:"0"})," means no limit."]}),"\n",(0,s.jsx)(n.h3,{id:"retry",children:(0,s.jsx)(n.code,{children:"retry"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         retry: <count>\n    Type:           numeric\n    Default:        3\n"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of retries for all requests."}),"\n",(0,s.jsxs)(n.p,{children:["A value of ",(0,s.jsx)(n.code,{children:"0"})," means no retry."]}),"\n",(0,s.jsx)(n.h3,{id:"retryDelay",children:(0,s.jsx)(n.code,{children:"retryDelay"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         retryDelay: <duration>\n    Type:           numeric\n    Unit:           second\n    Default:        1\n"})}),"\n",(0,s.jsx)(n.p,{children:"The delay between a retry."}),"\n",(0,s.jsxs)(n.p,{children:["A value of ",(0,s.jsx)(n.code,{children:"0"})," means no delay."]}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:(0,s.jsx)(n.code,{children:"headers"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         headers:\n    Type:           map\n    Map key:        string\n    Map value:      string\n"})}),"\n",(0,s.jsx)(n.p,{children:"The headers to use for all requests."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"headers:\n  header1: value1\n  header2: value2\n"})}),"\n",(0,s.jsx)(n.h4,{id:"resource-params",children:(0,s.jsx)(n.code,{children:"params"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         params:\n    Type:           map\n    Map key:        string\n    Map value:      string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The parameters to use for all requests."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"params:\n  param1: value1\n  param2: value2\n"})}),"\n",(0,s.jsx)(n.h2,{id:"resource-config",children:"Resource configuration"}),"\n",(0,s.jsx)(n.h4,{id:"resource-method",children:(0,s.jsx)(n.code,{children:"method"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         method: <verb>\n    Type:           string\n    Valid values:   GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The resource request method."}),"\n",(0,s.jsx)(n.h4,{id:"resource-url",children:(0,s.jsx)(n.code,{children:"url"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         url: <url>\n    Type:           string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The resource request URL."}),"\n",(0,s.jsx)(n.h4,{id:"resource-headers",children:(0,s.jsx)(n.code,{children:"headers"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         headers:\n    Type:           map\n    Map key:        string\n    Map value:      string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The headers of the resource request."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"headers:\n  header1: value1\n  header2: value2\n"})}),"\n",(0,s.jsx)(n.h4,{id:"resource-params",children:(0,s.jsx)(n.code,{children:"params"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Syntax:         params:\n    Type:           map\n    Map key:        string\n    Map value:      string\n    Default:        -\n"})}),"\n",(0,s.jsx)(n.p,{children:"The parameters of the resource request."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"params:\n  param1: value1\n  param2: value2\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var s=r(7294);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);