---
toc_max_heading_level: 2
---

# resource

The `resource` handler allows to render a resource.

:::note neon-pro

This feature is only available in Neon Pro.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`name`](#name)
  - [`statusCode`](#statusCode)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)

## Example configuration

```yaml
sites:
  default:
    routes:
      "/sample":
        handler:
          # highlight-start
          resource:
            name: sample
          # highlight-end
```

## Directives

### `name` {#name}

```
    Syntax:         name: <resource>
    Type:           string
```

The resource name.

:::info

Runtime resource is allowed.

:::

### `statusCode` {#statusCode}

```
    Syntax:         statusCode: <code>
    Type:           numeric
    Default:        200
```

The status code to return.

:::warning

This status code is only returned if the last render is successful.

:::

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
