---
toc_max_heading_level: 2
---

# static

The `static` middleware allows to serve static files like resource and media files.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`path`](#path)
  - [`index`](#index)

## Example configuration

```yaml
sites:
  default:
    routes:
      default:
        middlewares:
          static:
            path: dist/static
```

- Static files are served from the local directory `dist/static`.
- A request with URL `/css/style.css` will serve the file `dist/static/css/style.css` if found on the filesystem.

## Directives

### `path` {#path}

```
    Syntax:         path: <dir>
    Type:           string
```

The path of the static files directory.

### `index` {#index}

```
    Syntax:         index: <flag>
    Type:           boolean
    Default:        false
```

Enable index files serving.

Only `index.html` files are served if found.

:::warning

Enabling this flag can bypass other middlewares and handlers.

:::
