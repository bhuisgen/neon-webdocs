---
toc_max_heading_level: 2
---

# tls

The `tls` listener is a TLS secured network listener.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`listenAddr`](#listenAddr)
  - [`listenPort`](#listenPort)
  - [`caFiles`](#caFiles)
  - [`certFiles`](#certFiles)
  - [`keyFiles`](#keyFiles)
  - [`clientAuth`](#clientAuth)
  - [`readTimeout`](#readTimeout)
  - [`readHeaderTimeout`](#readHeaderTimeout)
  - [`writeTimeout`](#writeTimeout)
  - [`idleTimeout`](#idleTimeout)

## Example configuration

```yaml
listeners:
  default:
    # highlight-start
    tls:
      listenAddr: 0.0.0.0
      listenPort: 443
      caFiles:
        - ca.pem
      certFiles:
        - cert.pem
      keyFiles:
        - key.pem
    # highlight-end
```

- The **default** listener listens on all network interfaces with port 443.
- TLS is enabled with a CA certificate, a server certificate and its private key.

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
    Default:        443
```

The network port to listen to.

### `caFiles` {#caFiles}

```
    Syntax:         caFiles:
    Type:           list
    List item:      string
    Default:        -
```

The TLS CA file(s).

### `certFiles` {#certFiles}

```
    Syntax:         certFiles:
    Type:           list
    List item:      string
```

The TLS server certificate file(s).

### `keys_files` {#keyFiles}

```
    Syntax:         keyFiles:
    Type:           list
    List item:      string
```

The TLS server key file(s).

### `clientAuth` {#clientAuth}

```
    Syntax:         clientAuth: <mode>
    Type:           string
    Valid values:   none, require, verify, requireAndVerify
    Default:        none
```

The TLS client authentication mode.

Valid values are

- `none`: no client authentication required.
- `require`: requires a client certificate, but without verifying it.
- `verify`: verify the client certificate, but only if the client sends it to the server.
- `requireAndVerify`: require and verify the client certificate.

:::warning

If your websites must be publicly available, keep the default value to not require TLS client authentication.

:::

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
