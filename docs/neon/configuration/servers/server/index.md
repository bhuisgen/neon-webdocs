---
toc_max_heading_level: 2
---

# Server

A server is the configuration block required to serve a site by the instance.

- [Example configuration](./#example-configuration)
- [Directives](./#directives)
  - [`listeners`](./#listeners)
  - [`hosts`](./#hosts)
  - [`routes`](./#routes)
    - [`middlewares`](./#routes-middlewares)
    - [`handler`](./#routes-handler)

## Example configuration

```yaml
servers:
  default:
    listeners:
      - default
    routes:
      default:
        middlewares:
          static:
            path: dist/app/static
        handler:
          app:
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
          app:
            index: dist/admin/index.html
            bundle: dist/admin/bundle.js
```

- Two servers are defined using the same network listener `default`.
- The first server is used by default as no host is specified.
- The second server defines a host to limit its access from the host `admin.example.org`.

## Directives

### `listeners` {#listeners}

    Syntax:         listeners:
    Type:           list
    Item type:      string

This list defines the names of listeners to map from.

:::warning

At least one listener is required to start an instance.

:::

### `routes` {#routes}

```
    Syntax:         routes:
    Type:           map
    Map key:        string
    Map value:      object
    Default:        -
```

This map defines each server routes.

Depending of its name a route can have different types:

- an internal route triggers a specific behavior of the server.

- a regular route matches the request path i.e. the _route path_ is matching.

The route selection order may vary depending on which internal route may or may not have a higher priority.

:::tip

Keep your configuration ordered like this:

- first the internal routes starting from the lowest priorities to higher (i.e. `default`)
- next the regular routes with names delimited by quotes (excluding the trailing colon as map key).
- each route must define first the middlewares chain and next the handlers chain.

:::

**Example:**

```yaml
routes:
  default:
    middlewares:
      middleware1:
        # ...
      middleware2:
        # ...

    handler:
      defaultHandler:
        # ...

  "/route1":
    # ...

  "/route2":
    # ...

  "/route3":
    # ...
```

**Internal routes**

The available internal routes are:

- `default`: the configuration of this route is applied if no regular route matches the request. Its priority is lower
  than regular routes.

**Regular routes**

The regular routes have these naming conventions:

- it must start with a `/` character.

- if no trailing `/` is present, the route matches strictly the request path.

- if a trailing `/` is present, the route will match all children of this path, excepted if another regular route is
  already defined.

:::info

The `default` internal route is different from the regular route `/` as the former allows to reuse its configuration by
_default_ to other defined regular routes but without configuration.

:::

:::warning

Regular expressions or glob patterns are not supported for routes names.

:::

#### `middlewares` {#routes-middlewares}

```
    Syntax:         middlewares:
    Type:           map
    Map key:        string
    Map value:      object
    Default:        -
```

This map defines the server middlewares of the given route.

Each middleware will be executed one after another composing _the middlewares chain_. The middlewares chain of the
default route is commonly called _the default middlewares chain_.

**Example**

```yaml
routes:
  "/path":
    middlewares:
      logger: # first middleware executed

      compress: # second middleware executed
        level: -1
```

:::tip

To prevent the execution of the internal `default` route middlewares chain, specify an empty chain:

```yaml
routes:
  default:
    middlewares:
      logger:

  "/path1":
    # this route will inherit of the middlewares chain from the default policy

  "/path2":
    middlewares:
      # an empty chain will prevent inheriting
```

:::

#### `handler` {#routes-handler}

```
    Syntax:         handler:
    Type:           object
    Default:        -
```

This object define the server handler of the given route.

The handler will be executed after the middlewares chain.

**Example**

```yaml
routes:
  "/path":
    middlewares:
      logger: # first middleware
        file: access.log
      compress: # second middleware
        level: -1
    handler:
      app:# handler
      # ...
```

:::warning

If no handler is defined, an HTTP 503 error is returned.

:::
