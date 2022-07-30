---
toc_max_heading_level: 2
---

# rest

The `rest` provider is used to fetch REST API resources.

- [Example configuration](./#example-configuration)
- [Directives](./#directives)

  - [`tlsCAFiles`](./#tlsCAFiles)
  - [`tlsCertFiles`](./#tlsCertFiles)
  - [`tlsKeyFile`](./#tlsKeyFiles)
  - [`timeout`](./#timeout)
  - [`maxConnsPerHost`](./#maxConnsPerHost)
  - [`maxIdleConns`](./#maxIdleConns)
  - [`maxIdleConnsPerHost`](./#maxIdleConnsPerHost)
  - [`idleConnTimeout`](./#idleConnTimeout)
  - [`retry`](./#retry)
  - [`retryDelay`](./#retryDelay)
  - [`headers`](./#headers)

- [Resource configuration](./#resource-configuration)
  - [`method`](./#resource-method)
  - [`url`](./#resource-url)
  - [`headers`](./#resource-headers)
  - [`params`](./#resource-params)

## Example configuration

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
    my-resource:
      raw:
        api:
          method: GET
          url: https://backend/v1/my-resource
          params:
            limit: 10
```

- The provider `api` is defined to use the provider module `rest`.
- The loader rules defines a rule for the resource `my-resource` and this rule loads this resource using the provider
  `api` with the given configuration.

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

## Resource configuration {#resource-config}

#### `method` {#resource-method}

```
    Syntax:         method: <verb>
    Type:           string
    Valid values:   GET, POST, PATCH, PUT, DELETE, HEAD, OPTIONS
    Default:        -
```

The resource request method.

#### `url` {#resource-url}

```
    Syntax:         url: <url>
    Type:           string
    Default:        -
```

The resource request URL.

#### `headers` {#resoure-headers}

```
    Syntax:         headers:
    Type:           map
    Map key:        string
    Map value:      string
    Default:        -
```

The headers of the resource request.

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

The parameters of the resource request.

**Example:**

```yaml
params:
  param1: value1
  param2: value2
```
