---
toc_max_heading_level: 2
---

# file

The `file` handler allows to serve a file.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`path`](#path)
  - [`contentType`](#contentType)
  - [`statusCode`](#statusCode)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)

## Example configuration

```yaml
sites:
  default:
    routes:
      "/file":
        handler:
          file:
            path: dist/first.html
      "/path/":
        handler:
          file:
            path: dist/second.html
```

- The first handler renders the file `dist/file1.html` for the URL `/single`.
- The second handler renders the file `dist/file2.html` for any URLs starting with the path `/path/`.

## Directives

### `path` {#path}

```
    Syntax:         path: <file>
    Type:           string
```

The path of the file.

### `contentType` {#contentType}

```
    Syntax:         contentType: <media-type>
    Type:           string
```

The content type to return.

If this option is missing, the content type will be automatically detected from the file extension otherwise from the render content body.

### `statusCode` {#statusCode}

```
    Syntax:         statusCode: <code>
    Type:           numeric
    Default:        200
```

The status code to return.

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
