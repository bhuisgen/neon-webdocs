---
toc_max_heading_level: 2
---

# Fetcher

The `fetcher` section contains all the configuration settings of the [fetcher](/neon/configuration/fetcher/overview/).

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`providers`](#providers)

## Example configuration

```yaml
fetcher:
  providers:
    api:
      rest:
        headers:
          Content-Type: application/json
          Authorization: "Bearer: <token>"
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

Each key is a user-defined provider name and the associated value a provider module to use.

**Example:**

```yaml
providers:
  api1:
    rest:
      # provider configuration
  api2:
    rest:
      # provider configuration
```
