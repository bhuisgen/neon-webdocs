---
toc_max_heading_level: 2
---

# Site

A **site** is a website hosted by the server instance.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`listeners`](#listeners)
  - [`hosts`](#hosts)
  - [`routes`](#routes)
    - [`middlewares`](#routes-middlewares)
    - [`handler`](#routes-handler)

## Example configuration

```yaml
server:
  listeners:
    # listeners configuration
  sites:
    main:
      listeners:
        - default
      routes:
        default:
          middlewares:
            static:
              path: dist/app/static
          handler:
            js:
              index: dist/app/index.html
              bundle: dist/app/bundle.js
    admin:
      listeners:
        - default
      hosts:
        - admin.example.org
      routes:
        default:
          middlewares:
            static:
              path: dist/admin/static
          handler:
            js:
              index: dist/admin/index.html
              bundle: dist/admin/bundle.js
```

- Two sites are using the same network listener `default`.
- The first site **main** is used by default as the `hosts` option is missing.
- The second site **admin** defines a host to limit its access to the only host `admin.example.org`.

## Directives

### `listeners` {#listeners}

```
    Syntax:         listeners:
    Type:           list
    Item type:      string
```

This list defines the listeners mapped to the site.

:::warning

At least one listener is required.

:::

### `hosts` {#hosts}

```
    Syntax:         hosts:
    Type:           list
    Item type:      string
    Default:        -
```

This list defines the hosts mapped to the site.

Omitting this option defines the site as the default site of the server. The default site will be used for handling requests when their host don't match any other site.

:::warning

Only one default site is allowed. Other sites must have this option defined.

:::

### `routes` {#routes}

```
    Syntax:         routes:
    Type:           map
    Map key:        string
    Map value:      object
    Default:        -
```

This map defines each site routes.

**Example:**

```yaml
routes:
  default:
    middlewares:
      # ...
    handler:
      # ...
  "/route1":
    middlewares:
      # ...
    handler:
      # ...
```

Depending of its name a route can have different types:

- an internal route triggers a specific behavior.

- a regular route processes the request if its request path and the _route path_ are matching.

The route selection order may vary depending on which internal route may or may not have a higher priority.

**Internal routes**

The available internal routes are:

- `default`: the configuration of this route is applied if no regular route matching the request exists. Its priority is
  lower than regular routes.

**Regular routes**

The regular routes have these naming conventions:

- it must start with a `/` character.

- if no trailing `/` is present, the route matches strictly the request path.

- if a trailing `/` is present, the route will match all children of this path, excepted if another regular route is
  already defined.

:::warning

The regular route **/** is used to override the inherited configuration from the internal route `default`. If no other regular route exists, the regular route **/** precedes the `default` internal route.

:::

:::tip

Keep your routing configuration ordered like this:

- first the internal routes starting from the lowest priorities to higher, next the regular routes ordered by names.
- each regular routes names should be delimited by quotes.
- each route should define first its middlewares chain and second its handler.

:::

#### `middlewares` {#routes-middlewares}

```
    Syntax:         middlewares:
    Type:           map
    Map key:        string
    Map value:      object
    Default:        -
```

This map defines the middlewares of the given route.

Each middleware will be executed one after the other composing _the middlewares chain_. The middlewares chain of the default route is commonly called _the default middlewares chain_.

**Example:**

```yaml
routes:
  "/path":
    middlewares:
      middleware1:
        # middleware configuration
      middleware2:
        # middleware configuration
```

:::warning

If a regular route defines no middleware, the default route middlewares chain will be used.

:::

#### `handler` {#routes-handler}

```
    Syntax:         handler:
    Type:           object
    Default:        -
```

This object defines the handler of the given route.

The handler will be executed after the middlewares chain.

**Example:**

```yaml
routes:
  default:
    middlewares:
      # default middlewares chain
    handler:
      # default handler

  "/path":
    middlewares:
      middleware1:
        # middleware configuration
      middleware2:
        # middleware configuration
    handler:
      handler1:
        # handler configuration
```

:::warning

- If a regular route defines no handler, the default route handler will be used.
- If the default route defines no handler, an empty HTTP 404 response will be returned.

:::
