---
toc_max_heading_level: 2
---

# compress

The `compress` middleware allows to compress the content of outgoing responses to clients.

- [Example configuration](./#example-configuration)
- [Directives](./#directives)
  - [`compress`](./#compress)

## Example configuration

```yaml
servers:
  default:
    routes:
      default:
        middlewares:
          # highlight-start
          compress:
            level: -1
          # highlight-end
```

## Directives

### `level` {#level}

```
    Syntax:         level: <level>
    Type:           numeric
    Default:        0
```

The compression level of HTTP responses.

Accepted values are:

- `0`: no compression
- `1`-`9`: best speed to best compression levels
- `-1`: standard compression
- `-2`: huffmann-only compression
