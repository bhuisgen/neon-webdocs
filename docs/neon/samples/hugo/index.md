---
displayed_sidebar: docsSidebar
---

# Hugo

Serving a [Hugo](https://gohugo.io/) website is easy as no server state is required.

The files are served by the [`static`](/neon/configuration/server/sites/modules/middlewares/static/) middleware - including the index page - and the 404 error page by the [`file`](/neon/configuration/server/sites/modules/handlers/file) handler.

## Build

Build your website to generate the `public/` directory:

```shell
$ hugo
```

## Configure

```yaml title="neon.yaml" showLineNumbers
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
              path: public/
              index: true
          handler:
            file:
              path: public/404/index.html
              statusCode: 404
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
