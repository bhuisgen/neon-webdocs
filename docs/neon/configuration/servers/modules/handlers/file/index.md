---
toc_max_heading_level: 2
---

# file

The `file` handler allows to serve a file and cache its render.

- [Example configuration](./#example-configuration)
- [Directives](./#directives)
  - [`path`](./#path)
  - [`statusCode`](./#statusCode)
  - [`cache`](./#cache)
  - [`cacheTTL`](./#cacheTTL)

## Example configuration

```yaml
servers:
  default:
    routes:
      "/file":
        handler:
          # highlight-start
          file:
            path: dist/first.html
          # highlight-end
      "/path/":
        handler:
          # highlight-start
          file:
            path: dist/second.html
          # highlight-end
```

- The first handler renders the file `dist/file1.html` for the URL `/single`.
- The second handler renders the file `dist/file2.html` for any URLs starting with the path `/path/`.

## Directives

### `path` {#path}

```
    Syntax:         path: <file>
    Type:           string
```

The path of the file to serve.

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
