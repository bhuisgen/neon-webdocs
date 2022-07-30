---
toc_max_heading_level: 2
---

# template

The `template` handler allows to serve a template and cache its render.

- [Example configuration](./#example-configuration)
- [Directives](./#directives)
  - [`path`](./#path)
  - [`statusCode`](./#statusCode)
  - [`cache`](./#cache)
  - [`cacheTTL`](./#cacheTTL)
  - [`resources`](./#resources)

## Example configuration

```yaml
servers:
  default:
    routes:
      "/file":
        handler:
          # highlight-start
          template:
            path: dist/config.gotmpl
            cache: true
            cacheTTL: 3600
            resources:
              - config
          # highlight-end
```

## Directives

### `path` {#path}

```
    Syntax:         path: <template>
    Type:           string
```

The path of the template to serve.

### `statusCode` {#statusCode}

```
    Syntax:         statusCode: <code>
    Type:           numeric
    Default:        200
```

The status code to return.

:::warning

This status code is returned only if the last render is successful.

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

The TTL of cached renders in seconds.

### `resources` {#resources}

```
    Syntax:         resources: <list>
    Type:           list
    Item type:      string
    Default:        -
```

The list of resources to pass to the template renderer.
