---
toc_max_heading_level: 2
---

# acme

The `acme` listener is a TLS secured network listener with automatic certificates generation from Let's Encrypt and any
other ACME-based CA.

:::note neon-pro

This feature is only available in Neon Pro.

:::

:::warning

This listener requires a public facing server with its HTTP network port 80 available to issue TLS certificates.

:::

- [Example configuration](./#example-configuration)
- [Directives](./#directives)
  - [`domains`](./#domains)
  - [`cacheDir`](./#cache-dir)
  - [`listenAddr`](./#listenAddr)
  - [`listenPort`](./#listenPort)
  - [`readTimeout`](./#readTimeout)
  - [`readHeaderTimeout`](./#readHeaderTimeout)
  - [`writeTimeout`](./#writeTimeout)
  - [`idleTimeout`](./#idleTimeout)

## Example configuration

```yaml
listeners:
  default:
    # highlight-start
    acme:
      domains:
        - my.domain.org
      cacheDir: acme/
      listenAddr: 0.0.0.0
      listenPort: 443
    # highlight-end
```

- The instance listens on all network interfaces with port 443.
- The acme manager will be listening on port 80 to respond to the ACME challenges. All other requests will be
  redirected to the secured port i.e. `https://<host>:<listenPort>`.

## Directives

### `domains` {#domains}

```
    Syntax:         domains:
    Type:           list
    Item type:      string
```

The list of domains to generate certificates and to listen to.

Each of this domain should resolved from DNS to one of the public IP address of the web server.

### `cacheDir` {#cacheDir}

```
    Syntax:         cacheDir: <path>
    Type:           string
```

The cache directory to store issued certificates, avoiding issues rate limits.

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
