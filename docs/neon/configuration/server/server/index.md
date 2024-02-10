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
        main:
          middlewares:
            static:
              path: dist/app/static
          handler:
            js:
              index: dist/app/index.html
              bundle: dist/app/bundle.js
```

- The listener **default** is defined.
- The site **main** uses this listener.

## Directives

### `listeners` {#listeners}

```
    Syntax:         listeners:
    Type:           map
    Map key:        string
    Map value:      object
```

This list defines the server listeners.

:::warning

At least one listener is required to start the server instance.

:::

**Example:**

```yaml
listeners:
  default:
    local:
      # listener configuration
```

### `sites` {#sites}

```
    Syntax:         sites:
    Type:           list
    Item type:      object
```

This list defines the server sites.

:::warning

At least one site is required to start the server instance.

:::

**Example:**

```yaml
sites:
  main:
    # site configuration
```
