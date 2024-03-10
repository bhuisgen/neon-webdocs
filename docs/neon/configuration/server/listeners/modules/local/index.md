---
toc_max_heading_level: 2
---

# local

The `local` listener is a network listener for local networks.

:::warning

This listener doesn't use secured connections.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`listenAddr`](#listenAddr)
  - [`listenPort`](#listenPort)
  - [`readTimeout`](#readTimeout)
  - [`readHeaderTimeout`](#readHeaderTimeout)
  - [`writeTimeout`](#writeTimeout)
  - [`idleTimeout`](#idleTimeout)

## Example configuration

```yaml
listeners:
  default:
    local:
      listenAddr: 0.0.0.0
      listenPort: 80
```

- The **default** listener is listening on all network interfaces with port 80.

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
