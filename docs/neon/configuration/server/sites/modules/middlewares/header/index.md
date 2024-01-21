---
toc_max_heading_level: 2
---

# header

The `header` middleware allows to set the headers of outgoing responses.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`rules`](#rules)
    - [`path`](#rule-path)
    - [`set`](#rule-set)
    - [`add`](#rule-add)
    - [`remove`](#rule-remove)
    - [`last`](#rule-last)

## Example configuration

```yaml
sites:
  default:
    routes:
      default:
        middlewares:
          # highlight-start
          header:
            rules:
              - path: ^/path1/?$
                set:
                  key1: value1
              - path: ^/path2/?$
                set:
                  key2: value2
          # highlight-end
```

- The header middleware will process two rules for requests targeting this server.

**First rule**

- It sets the header `key1` for any request matching the pattern `^/path1/?$`.

**Second rule**

- It sets the header `key2` for any request matching the pattern `^/path2/?$`.

## Directives

### `rules` {#rules}

```
    Syntax:         rules:
    Type:           list
    Item type:      object
```

This list defines all header rules.

**Example:**

```yaml
rules:
  - path: ^/my-content/?$
    add:
      key: value
```

#### `path` {#rule-path}

```
    Syntax:         path: <regex>
    Type:           string
```

The path to match as a regular expression.

:::info

The regular expression should follow the <a href="https://pkg.go.dev/regexp/syntax" target="_blank">golang</a> syntax.

:::

#### `set` {#rule-set}

```
    Syntax:         set:
    Type:           map
    Map key:        string
    Map value:      string
```

The headers to set.

Any existing header will be replaced by the given new value.

#### `add` {#rule-add}

```
    Syntax:         add:
    Type:           map
    Map key:        string
    Map value:      string
```

The headers to add.

:::note neon-pro

This feature is only available in Neon Pro.

:::

#### `remove` {#rule-remove}

```
    Syntax:         remove:
    Type:           list
    Item type:      string
```

The headers to remove.

:::note neon-pro

This feature is only available in Neon Pro.

:::

#### `last` {#rule-last}

```
    Syntax:         last: <flag>
    Type:           boolean
    Default:        false
```

The flag to prevent execution of other rules if the current rule is processed.
