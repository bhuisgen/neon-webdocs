---
toc_max_heading_level: 2
---

# rest

The `rest` provider is used to fetch a resource from an API endpoint.

- [Example configuration](#example-configuration)
- [Directives](#directives)

  - [`tlsCAFiles`](#tlsCAFiles)
  - [`tlsCertFiles`](#tlsCertFiles)
  - [`tlsKeyFile`](#tlsKeyFiles)
  - [`timeout`](#timeout)
  - [`maxConnsPerHost`](#maxConnsPerHost)
  - [`maxIdleConns`](#maxIdleConns)
  - [`maxIdleConnsPerHost`](#maxIdleConnsPerHost)
  - [`idleConnTimeout`](#idleConnTimeout)
  - [`retry`](#retry)
  - [`retryDelay`](#retryDelay)
  - [`headers`](#headers)

- [Resource configuration](#resource-configuration)
  - [`method`](#resource-method)
  - [`url`](#resource-url)
  - [`headers`](#resource-headers)
  - [`params`](#resource-params)

## Example configuration {#example-configuration}

```yaml
fetcher:
  providers:
    api:
      # highlight-start
      rest:
        headers:
          Content-Type: application/json
          Authorization: "Bearer: my_jwt_token"
      # highlight-end

loader:
  rules:
    load-resource:
      raw:
        resource:
          # highlight-start
          method: GET
          url: https://<backend_url>/api/v1/resource
          params:
            limit: 10
          # highlight-end
```

- The provider **api** uses the provider module `rest`.
- The loader rules has a rule for the resource _resource_ which loads it using the provider **api** with the given configuration.

## Directives {#directives}

### `tlsCAFiles` {#tlsCAFiles}

```
    Syntax:         tlsCAFiles:
    Type:           list
    List item:      string
    Default:        -
```

The TLS CA file(s) to use for requests.

### `tlsCertFiles` {#tlsCertFiles}

```
    Syntax:         tlsCertFiles:
    Type:           list
    List item:      string
    Default:        -
```

The TLS client certificate file(s) to use for requests.

### `tlsKeyFiles` {#tlsKeyFiles}

```
    Syntax:         tlsKeyFiles:
    Type:           list
    List item:      string
    Default:        -
```

The TLS client key file(s) to use for requests.

### `timeout` {#timeout}

```
  Syntax:         timeout: <duration>
  Type:           numeric
  Unit:           second
  Default:        30
```

The timeout to use for all requests.

:::info

This timeout is global to all requests.

:::

### `maxConnsPerHost` {#maxConnsPerHost}

```
    Syntax:         maxConnsPerHost: <count>
    Type:           numeric
    Unit:           connections
    Default:        100
```

The maximum number of connections per host.

A value of `0` means no limit.

### `maxIdleConns` {#maxIdleConns}

```
    Syntax:         maxIdleConns: <count>
    Type:           numeric
    Unit:           connections
    Default:        100
```

The maximum number of idle connections.

A value of `0` means no limit.

### `maxIdleConnsPerHost` {#maxIdleConnsPerHost}

```
    Syntax:         maxIdleConnsPerHost: <count>
    Type:           numeric
    Unit:           connections
    Default:        100
```

The maximum number of idle connections per host.

A value of `0` means no limit.

### `idleConnTimeout` {#idleConnTimeout}

```
    Syntax:         idleConnTimeout: <duration>
    Type:           numeric
    Unit:           second
    Default:        60
```

The timeout of idle connections.

A value of `0` means no limit.

### `retry` {#retry}

```
    Syntax:         retry: <count>
    Type:           numeric
    Default:        3
```

The maximum number of retries for all requests.

A value of `0` means no retry.

### `retryDelay` {#retryDelay}

```
    Syntax:         retryDelay: <duration>
    Type:           numeric
    Unit:           second
    Default:        1
```

The delay between a retry.

A value of `0` means no delay.

### `headers` {#headers}

```
    Syntax:         headers:
    Type:           map
    Map key:        string
    Map value:      string
```

The headers to use for all requests.

**Example:**

```yaml
headers:
  header1: value1
  header2: value2
```

#### `params` {#resource-params}

```
    Syntax:         params:
    Type:           map
    Map key:        string
    Map value:      string
    Default:        -
```

The parameters to use for all requests.

**Example:**

```yaml
params:
  param1: value1
  param2: value2
```

## Resource configuration {#resource-configuration}

#### `method` {#resource-method}

```
    Syntax:         method: <verb>
    Type:           string
    Valid values:   GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS
    Default:        -
```

The request method.

#### `url` {#resource-url}

```
    Syntax:         url: <url>
    Type:           string
    Default:        -
```

The request URL.

#### `headers` {#resource-headers}

```
    Syntax:         headers:
    Type:           map
    Map key:        string
    Map value:      string
    Default:        -
```

The headers of the request.

**Example:**

```yaml
headers:
  header1: value1
  header2: value2
```

#### `params` {#resource-params}

```
    Syntax:         params:
    Type:           map
    Map key:        string
    Map value:      string
    Default:        -
```

The parameters of the request.

**Example:**

```yaml
params:
  param1: value1
  param2: value2
```
