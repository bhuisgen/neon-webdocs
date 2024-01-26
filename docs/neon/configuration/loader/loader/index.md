---
toc_max_heading_level: 2
---

# Loader

The `loader` section contains all the configuration settings of the [loader](/neon/configuration/loader/overview/).

:::info

This section is not required to start the server instance.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`execStartup`](#execStartup)
  - [`execInterval`](#execInterval)
  - [`execFailsafeInterval`](#execFailsafeInterval)
  - [`execWorkers`](#execWorkers)
  - [`execMaxOps`](#execMaxOps)
  - [`execMaxDelay`](#execMaxDelay)
  - [`rules`](#rules)

## Example configuration

```yaml
loader:
  execStartup: 15
  execInterval: 900
  rules:
    load-resource1:
      raw:
        resource:
          first:
            api:
              method: GET
              url: https://<backend_url>/api/v1/resource/1
    load-resource2:
      raw:
        resource:
          second:
            api:
              method: GET
              url: https://<backend_url>/api/v1/resource/2
```

- The loader is executed `15` seconds after the instance startup and then every `900` seconds.
- For each pass all rules are evaluated and execute the parser module `raw`.
- The `raw` parser triggers the provider **api** to fetch the resources and store/refresh them into the server state.

## Directives

### `execStartup` {#execStartup}

```
    Syntax:         execStartup: <delay>
    Type:           numeric
    Unit:           second
    Default:        15
```

The execution startup delay.

### `execInterval` {#execInterval}

```
    Syntax:         execInterval: <delay>
    Type:           numeric
    Unit:           second
    Default:        900
```

The execution interval delay.

### `execFailsafeInterval` {#execFailsafeInterval}

```
    Syntax:         execFailsafeInterval: <delay>
    Type:           numeric
    Unit:           second
    Default:        300
```

The execution interval delay when failsafe mode is enabled.

The failsafe mode is enabled after any loader failure. The next execution will use a shorter time interval to recover quickly with valid refreshed data. The failsafe mode will be disabled when all loader operations
have been succeeded.

### `execWorkers` {#execWorkers}

```
    Syntax:         execWorkers: <count>
    Type:           numeric
    Unit:           -
    Default:        1
```

The number of execution workers.

### `execMaxOps` {#execMaxOps}

```
    Syntax:         execMaxOps: <count>
    Type:           numeric
    Unit:           -
    Default:        100
```

The maximum number of operations per execution before delaying.

This setting prevents any excessive CPU usage of the instance as well as any backend services.

### `execMaxDelay` {#execMaxDelay}

```
    Syntax:         execMaxDelay: <count>
    Type:           numeric
    Unit:           -
    Default:        60
```

The interval delay in seconds between each delayed execution.

This interval is the period of time between each batch of [`execMaxOps`](#execMaxOps) operations.

### `rules` {#rules}

```
    Syntax:         rules:
    Type:           map
    Map key:        string
    Map value:      object
    Default:        -
```

This list defines all the loading rules.

**Example:**

```yaml
rules:
  posts-list:
    json:
      # parser configuration
```
