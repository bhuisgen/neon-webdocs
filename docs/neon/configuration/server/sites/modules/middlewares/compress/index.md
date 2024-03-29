---
toc_max_heading_level: 2
---

# compress

The `compress` middleware allows to compress the content of outgoing responses to clients.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`level`](#level)

## Example configuration {#example-configuration}

```yaml
sites:
  default:
    routes:
      default:
        middlewares:
          compress:
            level: -1
```

## Directives {#directives}

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
