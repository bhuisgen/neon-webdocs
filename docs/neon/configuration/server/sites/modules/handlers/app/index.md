---
toc_max_heading_level: 2
---

# app

The `app` handler allows to serve a Javascript application composed of its HTML and bundle files.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`index`](#index)
  - [`bundle`](#bundle)
  - [`bundleCodeCache`](#bundleCodeCache)
  - [`env`](#env)
  - [`container`](#container)
  - [`state`](#state)
  - [`maxVMs`](#maxVMs)
  - [`minSpareVMs`](#minSpareVMs)
  - [`maxSpareVMs`](#maxSpareVMs)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)
  - [`cacheMaxItems`](#cacheMaxItems)
  - [`cacheMinBodySize`](#cacheMinBodySize)
  - [`cacheMaxBodySize`](#cacheMaxBodySize)
  - [`languages`](#languages)
  - [`defaultLanguage`](#defaultLanguage)
  - [`rules`](#rules)
    - [`path`](#rule-path)
    - [`state`](#rule-state)
      - [`key`](#rule-state-key)
      - [`resource`](#rule-state-resource)
      - [`export`](#rule-state-export)
    - [`last`](#rule-last)

## Example configuration

```yaml
sites:
  default:
    routes:
      default:
        middlewares:
          static:
            path: dist/static
        handler:
          # highlight-start
          app:
            index: dist/index.html
            bundle: dist/bundle.js
            rules:
              - path: ^/
                state:
                  - key: config
                    resource: config
              - path: ^/$
                state:
                  - key: posts
                    resource: posts-recent
                last: true
              - path: ^/(?P<slug>[^\/]+)/?$
                state:
                  - key: post-$slug
                    resource: post-$slug
                last: true
            # highlight-end
```

- The index file of the application is `dist/index.html`.
- The bundle file of the application is `dist/bundle.js`.
- The static files located in `dist/static` are served by the middleware `static`.

**First rule**

- The first rule is a default match to any request path.
- It requires to pass _if available_ the state of the resource `config` to the application.
- If the resource `config` has available data, the application can access it from the key `config` of the server
  state object.
- As the `last` flag is not enabled, rules processing will continue to the next rules. This rule is useful way to
  share a common state to all requests.

**Second rule**

- The second rule is a strict match to the request path `/`.
- It requires to pass _if available_ the state of the resource `posts-recent` to the application.
- If the resource `post-recent` has available data, the application can access it from the key `posts` of the server
  state object.
- As the `last` flag is enabled, rules processing will stop if this rule matches, meaning no more state will be added
  for this request path.

**Third rule**

- The third rule is a dynamic match to any first level request path.
- It requires to pass _if available_ the state of a runtime resource `post-$slug` to the application, where `$slug` is
  replaced by the value of the dynamic parameter `slug` extracted from the matched rule.
- In practice for an incoming request path `/hello` the dynamic parameter `slug` will be equals to `hello` and the
  resource key `post-hello`.
- If the targeted resource has available data, the application can access it from the computed key of the server
  state object.

## Directives

### `index` {#index}

```
    Syntax:         index: <file>
    Type:           string
```

The path to the application index file.

### `bundle` {#bundle}

```
    Syntax:         bundle: <file>
    Type:           string
    Default:        -
```

The path to the application bundle file.

:::warning

If no bundle file is specified, the HTML file is rendered as is to clients.

:::

### `bundleCodeCache` {#bundleCodeCache}

```
    Syntax:         bundleCodeCache: <flag>
    Type:           boolean
    Default:        false
```

The flag to enable bundle code cache between execution.

Enable the cache code to improve the execution time of big bundle files.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `env` {#env}

```
    Syntax:         env: <name>
    Type:           string
    Default:        production
```

The environment name passed to the bundle.

:::warning

The environment name may be restricted by the application.

:::

### `container` {#container}

```
    Syntax:         container: <id>
    Type:           string
    Default:        root
```

The HTML identifier of the container to render the application.

:::warning

The value should match to your application.

:::

### `state` {#state}

```
    Syntax:         state: <id>
    Type:           string
    Default:        state
```

The HTML identifier of the JSON script to pass the state to the client application.

Any rule [`state`](#rule-state) entry with [`export`](#rule-state-export) enabled will be stored into the JSON using
the same key.

:::warning

The value should match to your application.

:::

### `timeout` {#timeout}

```
    Syntax:         timeout: <duration>
    Type:           numeric
    Default:        15
    Unit:           seconds
```

The timeout to execute the bundle.

### `maxVMs` {#maxVMs}

```
    Syntax:         maxVMs: <count>
    Type:           numeric
    Default:        number of detected CPUs
    Unit:           seconds
```

The number of Javascript VMs to run simultaneously.

### `minSpareVMs` {#minSpareVMs}

```
    Syntax:         minSpareVMs: <count>
    Type:           numeric
    Default:        0
```

The minimum number of VMs to keep in spare.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `maxSpareVMs` {#maxSpareVMs}

```
    Syntax:         maxSpareVMs: <count>
    Type:           numeric
    Default:        0
```

The maximum number of VMs to keep in spare.

:::note neon-pro

This feature is only available in Neon Pro.

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

When the TTL is expired, a new render is processed.

### `cacheMaxItems` {#cacheMaxItems}

```
    Syntax:         cacheMaxItems: <count>
    Type:           numeric
    Default:        100
    Unit:           item
```

The maximum number of items in the cache.

When this limit is reached, the least resource used is evicted, meaning only the most used resources are kept in the cache.

:::warning

This option limits the memory usage of the server instance.

:::

### `cacheMinBodySize` {#cacheMinBodySize}

```
    Syntax:         cacheMinBodySize: <size>
    Type:           numeric
    Default:        0
    Unit:           bytes
```

The minimum body size of the render to allow caching.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `cacheMaxBodySize` {#cacheMaxBodySize}

```
    Syntax:         cacheMaxBodySize: <size>
    Type:           numeric
    Default:        0
    Unit:           bytes
```

The maximum body size of the render to allow caching.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `languages` {#languages}

```
    Syntax:         languages:
    Type:           list
    Item type:      string
    Default:        -
```

The list of languages supported by the application server-side.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `defaultLanguage` {#defaultLanguage}

```
    Syntax:         defaultLanguage: <lang>
    Type:           string
    Default:        -
```

The default language of the application server-side.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `rules` {#rules}

```
    Syntax:         rules:
    Type:           list
    Item type:      object
```

This list defines all application rules.

**Example:**

```yaml
rules:
  - path: ^/$
    name: sample
    state:
      - name: first
        resource: item-a
      - path: second
        resource: item-b
    last: true
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

If you need to extract dynamic parameters, use capturing groups:

- `^/(.+)/(.+)/?$`: these two groups extract the dynamic parameters `1` and `2` following their positions.

- `^/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})/?$`: the named groups extract the dynamic parameters
  `year`, `month`, `day`.

#### `state` {#rule-state}

```
    Syntax:         state:
    Type:           list
    Item type:      object
```

This section lists all state entries required by the rule.

**Example:**

```yaml
state:
  - key: first
    resource: item-a
  - path: second
    resource: item-b
```

##### `key` {#rule-state-key}

```
    Syntax:         key: <key>
    Type:           string
```

The key in the state object.

Dynamic parameters extracted from the rule [`path`](#rule-path) are replaced.

##### `resource` {#rule-state-resource}

```
    Syntax:         resource: <name>
    Type:           string
```

The name of the resource.

Dynamic parameters extracted from the rule [`path`](#rule-path) are replaced.

:::info

Please refer to the [`loader`](/neon/configuration/loader/overview/) page for more informations about resources.

:::

##### `export` {#rule-state-export}

```
    Syntax:         export: <flag>
    Type:           boolean
    Default:        false
```

Export the state to the client application.

All exported states will be available in the index file as an included JSON object. The client application can read it
during its execution to preload any resources.

#### `last` {#rule-last}

```
    Syntax:         last: <flag>
    Type:           boolean
    Default:        false
```

The flag to prevent execution of other rules if the current rule is processed.
