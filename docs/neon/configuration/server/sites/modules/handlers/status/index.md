---
toc_max_heading_level: 2
---

# status

The `status` handler allows to return a status code to check availability of the server instance from external systems.

:::note neon-pro

This feature is only available in Neon Pro.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`resources`](#resources)
  - [`statusCode`](#statusCode)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)

## Example configuration

```yaml
sites:
  default:
    routes:
      "/status":
        handler:
          status:
            resources:
              - config
```

## Directives

### `resources` {#resources}

```
    Syntax:         resources: <list>
    Type:           list
    Item type:      string
```

The list of resources to check availability to return a successful status.

### `statusCode` {#statusCode}

```
    Syntax:         statusCode: <code>
    Type:           numeric
    Default:        200
```

The status code to return if all resources are available.

### `cache` {#cache}

```
    Syntax:         cache: <flag>
    Type:           boolean
    Default:        false
```

Enable the render cache.

### `cacheTTL` {#cacheTTL}

```
    Syntax:         cacheTTL: <duration>
    Type:           numeric
    Default:        60
    Unit:           second
```

The TTL of cached render in seconds.

When the TTL is expired, a new render is processed.
