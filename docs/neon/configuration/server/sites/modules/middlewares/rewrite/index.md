---
toc_max_heading_level: 2
---

# rewrite

The `rewrite` middleware allows to rewrite and to redirect incoming requests.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`rules`](#rules)
    - [`path`](#rule-path)
    - [`replacement`](#rule-replacement)
    - [`flag`](#rule-flag)
    - [`last`](#rule-last)

## Example configuration

```yaml
sites:
  default:
    routes:
      default:
        middlewares:
          rewrite:
            rules:
              - path: ^/old-content/?$
                replacement: /new-content
                flag: redirect
                last: true
              - path: ^/old-slug/?$
                replacement: /new-slug
                flag: permanent
                last: true
```

**First rule**

- It redirects any request matching the pattern `^/old-content/?$` to the URL `/new-content`.
- The option `flag` is set to `redirect` so it is a temporary redirect to clients (HTTP status code 302).
- The option `last` is enabled, no other rule will be processed if this rule matches.

**Second rule**

- It redirects any request matching the pattern `^/wrong-slug/?$` to the URL `/right-slug`.
- The flag `permanent` so it is a permanent redirect to clients (HTTP status code 301).

## Directives

### `rules` {#rules}

```
    Syntax:         rules:
    Type:           list
    Item type:      object
```

This list defines all rewrite rules.

**Example:**

```yaml
rules:
  - path: ^/old-content/?$
    replacement: /new-content
    flag: redirect
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

#### `replacement` {#rule-replacement}

```
    Syntax:         replacement: <url>
    Type:           string
```

The new URL replacement.

#### `flag` {#rule-flag}

```
    Syntax:         flag: <type>
    Type:           string
    Valid values:   redirect, permanent
    Default:        -
```

The redirect method.

This optional flag can be :

- `redirect`: send a temporary redirect to clients, i.e. with HTTP status code 302.
- `permanent`: send a permanent redirect to clients, i.e. with HTTP status code 301.

If no flag is given the default behavior is like the `redirect` flag except if the `replacement` is a relative URL. In
this case an internal rewrite is done by the server (transparent redirect).

:::tip

Permanent redirects are only required if you change your domain(s) or if you merge previous sites into a new one.

:::

:::warning

Permanent redirects affect search engine results.

:::

#### `last` {#rule-last}

```
    Syntax:         last: <flag>
    Type:           boolean
    Default:        false
```

The flag to prevent execution of other rules if the current rule is processed.
