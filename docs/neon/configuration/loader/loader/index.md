---
toc_max_heading_level: 2
---

# Loader

The `loader` section contains all the configuration settings of the [loader](/neon/configuration/loader/overview/).

:::info

This section is not required to start an instance.

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
    load-pokemon-1:
      raw:
        resource:
          pokemon:
            api:
              method: GET
              url: https://pokeapi.co/api/v2/pokemon/1
    load-pokemon-2:
      raw:
        resource:
          pokemon:
            api:
              method: GET
              url: https://pokeapi.co/api/v2/pokemon/2
```

- The loader is executed `15` seconds after the instance startup and then every `900` seconds.
- For each pass all rules are evaluated, triggering the fetch of all resources to refresh them into the server state.
- In case of a fetch error, the previous resource data is kept as is.

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

The failsafe mode is enabled after any loader operation failure. The loader execution will use a shorter execution
interval to recover quickly with valid refreshed data. The failsafe mode will be disabled when all loader operations
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
    Type:           list
    Item type:      object
    Default:        -
```

This list defines all the rules used to load resources.

**Example:**

```yaml
rules:
  - name: first
    type: static
    static:
      resource: item-a
```

```yaml
rules:
  rule1:
    raw:
      resource:
        first:
          api:
            method: GET
            url: https://api/resource/first
```
