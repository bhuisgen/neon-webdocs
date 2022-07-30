---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

# Hugo

Serving a Hugo blog is easy as no server features are required.

## Build

Build your hugo to generate the `public/` directory:

    $ hugo

## Configuration

```yaml
listeners:
  default:
    tls:
      listenAddr: 0.0.0.0
      listenPort: 443
      caFiles:
        - ca.pem
      certFiles:
        - cert.pem
      keyFiles:
        - key.pem

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
          file:
            path: public/404/index.html
            statusCode: 404
            cache: true
            cacheTTL: 3600
```
