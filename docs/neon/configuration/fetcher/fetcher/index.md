---
toc_max_heading_level: 2
---

# Fetcher

The `fetcher` section contains all the configuration settings of the [fetcher](/neon/configuration/fetcher/overview/).

:::info

This section is not required to start the server instance.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`providers`](#providers)

## Example configuration

```yaml
fetcher:
  providers:
    api1:
      rest:
        headers:
          Content-Type: application/json
          Authorization: "Bearer: <token1>"
    api2:
      rest:
        headers:
          Content-Type: application/json
          Authorization: "Bearer: <token2>"
```

- Two providers are defined: **api1** and **api2** both using the `rest` module.
- Each provider defines its own authorization header.

## Directives

### `providers` {#providers}

```
    Syntax:         providers:
    Type:           map
    Map key:        string
    Map value:      string
    Default:        -
```

The providers map.

Each key is a user-defined provider name and the associated value a provider module to use.

```yaml
providers:
  <name>:
    <module>:
      # config
```
