---
toc_max_heading_level: 2
---

# Server

The `server` section contains all the configuration settings of the [server](/neon/configuration/server/overview/).

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`listeners`](#listeners)
  - [`sites`](#sites)

## Example configuration

```yaml
server:
  listeners:
    default:
      local:
        listenAddr: 0.0.0.0
        listenPort: 8080

  sites:
    default:
      listeners:
        - default
      routes:
        default:
          middlewares:
            static:
              path: dist/app/static
          handler:
            app:
              index: dist/app/index.html
              bundle: dist/app/bundle.js
```

- One listener `default` is defined.
- One site `default`is defined and is using the previous listener.

## Directives

### `listeners` {#listeners}

    Syntax:         listeners:
    Type:           list
    Item type:      object

This list defines the server listeners.

### `sites` {#sites}

    Syntax:         sites:
    Type:           list
    Item type:      object

This list defines the server sites.
