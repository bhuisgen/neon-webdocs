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
          resource1:
            api:
              method: GET
              url: https://<backend_url>/api/v1/resource/1
    load-resource2:
      raw:
        resource:
          resource2:
            api:
              method: GET
              url: https://<backend_url>/api/v1/resource/2
```

- The loader is executed 15 seconds after the instance startup and then every 900 seconds.
- Each execution will process all defined rules.
- Both rules **load-resource1** and **load-resource2** use the `raw` parser which triggers the provider **api** to fetch the resources **resource1** and **resource2** and to store/refresh them into the server state.

## Directives

### `execStartup` {#execStartup}

```
    Syntax:         execStartup: <delay>
    Type:           numeric
    Unit:           second
    Default:        15
    Minimum:        1
```

The execution startup delay.

### `execInterval` {#execInterval}

```
    Syntax:         execInterval: <delay>
    Type:           numeric
    Unit:           second
    Default:        900
    Minimum:        1
```

The execution interval delay.

### `execFailsafeInterval` {#execFailsafeInterval}

```
    Syntax:         execFailsafeInterval: <delay>
    Type:           numeric
    Unit:           second
    Default:        300
    Minimum:        0 (disabled)
```

The execution interval delay when failsafe mode is enabled.

The failsafe mode is enabled when at least one rule has failed during the last execution. The next execution will use this shorter interval time to execute and to try to recover quickly. The failsafe mode is disabled next to a succeeded execution of all rules.

:::warning

The interval must be lesser than [`execInterval`](#execInterval).

:::

:::tip

To disable the failsafe mode, sets the value to 0.

:::

### `execWorkers` {#execWorkers}

```
    Syntax:         execWorkers: <count>
    Type:           numeric
    Unit:           -
    Default:        1
    Minimum:        1
```

The number of execution workers.

### `execMaxOps` {#execMaxOps}

```
    Syntax:         execMaxOps: <count>
    Type:           numeric
    Unit:           -
    Default:        100
    Minimum:        0 (disabled)
```

The maximum number of operations per execution before delaying.

This setting prevents any excessive CPU usage of the instance as well as to any backend services.

:::tip

To disable this limit, sets the value to 0.

:::

### `execMaxDelay` {#execMaxDelay}

```
    Syntax:         execMaxDelay: <count>
    Type:           numeric
    Unit:           op
    Default:        60
    Minimum:        0 (disabled)
```

The interval delay in seconds between each delayed execution.

This interval is the period of time between each batch of [`execMaxOps`](#execMaxOps) operations.

:::tip

To disable this limit, sets the value to 0.

:::

### `rules` {#rules}

```
    Syntax:         rules:
    Type:           map
    Map key:        string
    Map value:      object
    Default:        -
```

This map defines all the loading rules.

**Example:**

```yaml
rules:
  posts-list:
    json:
      # parser configuration
```
