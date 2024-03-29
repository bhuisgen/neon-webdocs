---
toc_max_heading_level: 2
---

# empty

The `empty` handler allows to render an empty response with a custom status code.

:::note neon-pro

This feature is only available in Neon Pro.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`statusCode`](#statusCode)

## Example configuration

```yaml
sites:
  default:
    routes:
      default:
        handler:
          empty:
            statusCode: 200
```

- The server serves by default for any URL an empty response with the status code 200.

## Directives

### `statusCode` {#statusCode}

```
    Syntax:         statusCode: <code>
    Type:           numeric
    Default:        200
```

The status code to return.
