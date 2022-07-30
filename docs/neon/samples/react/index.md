---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

# React

Serving a React application have some prerequisites to support Neon features like full rendering and server state.

Here are the requisites:

- Your application must be ready for server-side execution
- A specific server bundle of your application must be build with a tool like `esbuild`.
- Both the server and the client bundle must be used: the server bundle is executed by the `app` handler and the
  client bundle is served to clients by the `static` middleware.
- Verify that the server bundle doesn't execute any browser APIs as the server VM is only able to execute vanilla JS. In
  practice, any code parts requiring browser APIs/objects must be removed.
- The index HTML must include the script tag of the client bundle and it should match to the vallue of option
  `container`.

:::tip

Serving a React client rendered application is still possible like any alternate web servers.

:::

## Build

TODO

## Configuration

```yaml title="neon.yaml"
listeners:
  default:
    tls:
      listenAddr: 0.0.0.0
      listenPort: 443
      caFile: ca.pem
      certFile: cert.pem
      keyFile: key.pem

servers:
  default:
    listeners:
      - default

    routes:
      default:
        middlewares:
          logger:

          compress:
            level: -1

          static:
            path: public/
            index: true

      handler:
        app:
          index: dist/index.html
          bundle: dist/bundle.js
          cache: true
          cacheTTL: 3600
```

## Improve

- Define the static resources for your static content

- Define the dynamic resources for your dynamic content

- Define the resource loading rules

- Define all the application routes

- Test the application rendering

- Add the robots handler to generate your robots.txt

- Add the sitemap handler to generate your sitemap

- Test the robots.txt and sitemap rendering

- Improve the cache settings

- Define the rendering rules to prerender your application

- Test your application rendering performance with lighthouse

- Test your application after server restart

- Move to production!
