---
toc_max_heading_level: 2
---

# text

The `text` handler allows to serve a [text template](https://pkg.go.dev/text/template).

:::note neon-pro

This feature is only available in Neon Pro.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`path`](#path)
  - [`contentType`](#contentType)
  - [`statusCode`](#statusCode)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)
  - [`resources`](#resources)

## Example configuration

```yaml
sites:
  default:
    routes:
      "/file":
        handler:
          text:
            path: dist/template.gotmpl
            cache: true
            cacheTTL: 3600
            resources:
              - content
```

```go title="template.gotmpl" showLineNumbers
{{ with .Resources.content }}
  {{ range $index, $result := .Data }}
    {{ $result | printf "%s" }}
    {{ break }}
  {{ end }}
{{ end }}
```

## Directives

### `path` {#path}

```
    Syntax:         path: <file>
    Type:           string
```

The path of the Go template.

### `contentType` {#contentType}

```
    Syntax:         contentType: <media-type>
    Type:           string
```

The content type to return.

If this option is missing, the content type will be automatically detected from the render content body.

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

### `resources` {#resources}

```
    Syntax:         resources: <list>
    Type:           list
    Item type:      string
    Default:        -
```

The list of resources to pass to the template renderer.
