---
toc_max_heading_level: 2
---

# Fetcher

The `fetcher` section contains all the configuration settings of the [fetcher](/neon/configuration/fetcher/overview/).

:::info

This section is not required to start an instance.

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
          Authorization: "Bearer: auth_token1"
    api2:
      rest:
        headers:
          Content-Type: application/json
          Authorization: "Bearer: auth_token2"
```

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

Each key is a user defined provider name and its values is the provider module to use.

**Example:**

```yaml
providers:
  # provider name
  api:
    # provider module
    rest:
      # provider configuration
      headers:
        Content-Type: application/json
```
