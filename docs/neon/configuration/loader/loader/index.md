---
toc_max_heading_level: 2
---

# Loader

The `loader` section contains all the configuration settings of the [loader](/neon/configuration/loader/overview/).

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
    Minimum:        0 (disabled)
    Default:        15
```

The time interval in seconds between the instance startup and the first execution.

This option allows to set a minimal time interval to execute rules at startup.

If this option is enabled and the [`execInterval`](#execInterval) option is disabled, the instance will run in _one-off_ execution: only one execution will be processed. If this single execution is not successful, the failsafe execution if enabled will still recover the state before stopping any other execution.

:::tip

To disable the startup execution, sets the value to 0.

:::

### `execInterval` {#execInterval}

```
    Syntax:         execInterval: <delay>
    Type:           numeric
    Unit:           second
    Minimum:        0 (disabled)
    Default:        900
```

The time interval in seconds between each execution after the first startup execution.

If this option is enabled, the rules will be periodically executed to refresh the server state.

:::tip

To disable periodic execution, sets the value to 0.

:::

:::warning

If this option and the [`execStartup`](#execStartup) option are both set to 0, no execution will be processed.

:::

### `execFailsafeInterval` {#execFailsafeInterval}

```
    Syntax:         execFailsafeInterval: <delay>
    Type:           numeric
    Unit:           second
    Minimum:        0 (disabled)
    Default:        300
```

The time interval in seconds between a failed execution and a new execution.

The failsafe execution is activated when at least one rule has failed. The next execution will use this specific time interval to try to recover quickly (shorter interval) or to stay safe from external issues (longer interval). The failsafe execution only disables when all rules pass.

:::tip

To disable the failsafe execution, sets the value to 0.

:::

### `execWorkers` {#execWorkers}

```
    Syntax:         execWorkers: <count>
    Type:           numeric
    Minimum:        1
    Default:        1
```

The number of execution workers.

### `execMaxOps` {#execMaxOps}

```
    Syntax:         execMaxOps: <count>
    Type:           numeric
    Minimum:        0 (disabled)
    Default:        100
```

The maximum number of operations per execution before delaying.

This setting prevents any excessive CPU usage of the instance as well as to any backend services.

:::tip

To disable this limit, sets the value to 0.

:::

### `execMaxDelay` {#execMaxDelay}

```
    Syntax:         execMaxDelay: <delay>
    Type:           numeric
    Unit:           second
    Minimum:        0 (disabled)
    Default:        60
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
  loads-posts:
    json:
      # parser configuration
```
