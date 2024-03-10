---
toc_max_heading_level: 2
---

# redirect

The `redirect` listener is a network listener which force all incoming connections to use TLS by returning an HTTP
redirect to the HTTPS URL equivalent of the original request.

:::warning

A [`tls`](/neon/configuration/server/listeners/modules/tls/) listener is required to complete the usage of this listener.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`listenAddr`](#listenAddr)
  - [`listenPort`](#listenPort)
  - [`readTimeout`](#readTimeout)
  - [`readHeaderTimeout`](#readHeaderTimeout)
  - [`writeTimeout`](#writeTimeout)
  - [`idleTimeout`](#idleTimeout)
  - [`redirectPort`](#redirectPort)

## Example configuration

```yaml
server:
  listeners:
    secured:
      tls:
        listenAddr: 0.0.0.0
        listenPort: 443
        caFiles:
          - ca.pem
        certFiles:
          - cert.pem
        keyFiles:
          - key.pem
    unsecured:
      redirect:
        listenAddr: 0.0.0.0
        listenPort: 80
  sites:
    default:
      listeners:
        - secured
      # ...
```

- The **unsecured** listener is listening on all interfaces with port 80.
- If a request `http://example.org/` forwards to it, the listener will return a HTTP redirect with the target URL
  `https://example.org` i.e. replacing the scheme http by https.

## Directives

### `listenAddr` {#listenAddr}

```
    Syntax:         listenAddr: <address>
    Type:           string
    Default:        -
```

The network address (host or IP) to listen to.

By default, the listening is on all available interfaces.

### `listenPort` {#listenPort}

```
    Syntax:         listenPort: <port>
    Type:           numeric
    Default:        80
```

The network port to listen to.

### `readTimeout` {#readTimeout}

```
    Syntax:         readTimeout: <delay>
    Type:           numeric
    Unit:           second
    Default:        60
```

The timeout to read a request in seconds.

### `readHeaderTimeout` {#readHeaderTimeout}

```
    Syntax:         readHeaderTimeout: <delay>
    Type:           numeric
    Unit:           second
    Default:        10
```

The timeout to read the headers of a request in seconds.

### `writeTimeout` {#writeTimeout}

```
    Syntax:         writeTimeout: <delay>
    Type:           numeric
    Unit:           second
    Default:        60
```

The timeout to write a response in seconds.

### `idleTimeout` {#idleTimeout}

```
    Syntax:         idleTimeout: <delay>
    Type:           numeric
    Unit:           second
    Default:        60
```

The timeout of idle connections in seconds.

### `redirectPort` {#redirectPort}

```
    Syntax:         redirectPort: <port>
    Type:           numeric
    Default:        -
```

The network port to use in the HTTP redirect.

:::info

The `https://` part of the redirect is unaffected.

:::
