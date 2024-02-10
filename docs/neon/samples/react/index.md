---
displayed_sidebar: docsSidebar
---

# React

Serving a [React](https://react.dev/) application have some requisites to support the server state and the full rendering:

- A bundle file must be built for the server.
- The server bundle must not use any browser APIs.
- The client bundle should rehydrate from the server response.
- The client bundle must render initially the same content as the server version to not force a new render (hydration) in the client browser.
- The HTML index must include the script tag to the client bundle, not the server bundle.

For the server configuration, the [`js`](/neon/configuration/server/sites/modules/handlers/js/) handler will execute the server bundle and serve the hydrated HTML content to clients. The [`static`](/neon/configuration/server/sites/modules/middlewares/static) middleware serves the static assets including the client bundle.

:::tip

Serving a client-only application is still possible with the [`static`](/neon/configuration/server/sites/modules/middlewares/static/) middleware only.

:::

## Build

### Client

Build the client:

```shell
$ npm run build
```

Check the generated files:

```shell
$ tree dist
```

```shell
dist
├── client
│   ├── assets
│   │   ├── MyFont-c64f09f2.ttf
│   │   ├── index-b298acb0.js
│   │   ├── index-be009208.css
│   │   └── vendor-5b47ab1a.js
│   ├── favicon.svg
│   ├── index.html
│   └── logo.svg
```

### Server

The server is built with [esbuild](https://esbuild.github.io/) and this script:

```javascript title="build-server.js showLineNumbers
import * as esbuild from "esbuild";

const generateServerBundle = async () => {
  await esbuild.build({
    entryPoints: ["src/server.tsx"],
    inject: ["./src/server-shim.js"],
    outfile: "./dist/server/bundle.js",
    logLevel: "error",
    bundle: true,
    minify: true,
    sourcemap: false,
    loader: {
      ".png": "dataurl",
      ".svg": "dataurl",
    },
    external: ["*.ttf"],
  });
};

generateServerBundle();
```

React requires some code to be executed successfully by the server VM:

```javascript title="src/server-shim.js" showLineNumbers
/* eslint-disable no-undef */
const { TextDecoder, TextEncoder } = require("text-encoding");
globalThis.TextDecoder = TextDecoder;
globalThis.TextEncoder = TextEncoder;

/* eslint-disable no-undef */
const { URL } = require("whatwg-url");
globalThis.URL = URL;
```

Build the bundle:

```shell
$ node build-server.js
```

Check the generated files:

```shell
$ tree dist
```

```shell
dist
├── client
│   ├── assets
│   │   ├── MyFont-c64f09f2.ttf
│   │   ├── index-b298acb0.js
│   │   ├── index-be009208.css
│   │   └── vendor-5b47ab1a.js
│   ├── favicon.svg
│   ├── index.html
│   └── logo.svg
└── server
    ├── bundle.css
    └── bundle.js
```

### Application

The final application contains the client files and the server files:

```shell
$ mkdir dist/app
$ cp -r dist/server/* dist/app/
$ mkdir dist/app/static
$ cp -r dist/client/* dist/app/static/
```

The client HTML index is only used by the instance:

```shell
$ mv dist/app/static/index.html dist/app/index.html
```

Check the final files:

```shell
$ tree dist
```

```shell
dist
├── client
│   ├── assets
│   │   ├── MyFont-c64f09f2.ttf
│   │   ├── index-b298acb0.js
│   │   ├── index-be009208.css
│   │   └── vendor-5b47ab1a.js
│   ├── favicon.svg
│   ├── index.html
│   ├── logo.svg
└── server
│   ├── bundle.css
│   └── bundle.js
└── app
    ├── bundle.css
    ├── bundle.js
    ├── index.html
    └── static
        ├── assets
        │   ├── MyFont-c64f09f2.ttf
        │   ├── index-b298acb0.js
        │   ├── index-be009208.css
        │   └── vendor-5b47ab1a.js
        ├── favicon.svg
        └── logo.svg
```

## Configuration

```yaml title="neon.yaml" showLineNumbers
app:
  server:
    listeners:
      default:
        local:
          listenAddr: 0.0.0.0
          listenPort: 8080
    sites:
      main:
        listeners:
          - default
        routes:
          default:
            middlewares:
              logger:
              compress:
                level: -1
              static:
                path: dist/app/static
            handler:
              js:
                index: dist/app/index.html
                bundle: dist/app/bundle.js
                cache: true
                cacheTTL: 3600
```

## Check the configuration

```shell
$ neon check
```

## Run the instance

```shell
$ neon serve
```
