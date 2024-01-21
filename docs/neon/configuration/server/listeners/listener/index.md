---
toc_max_heading_level: 2
---

# Listener

A listener is the configuration block required to create a network socket listening for incoming client connections.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`listeners`](#listeners)

## Example configuration

```yaml
listeners:
  secured:
    tls:
      listenAddr: 0.0.0.0
      listenPort: 443
      caFiles: ["ca.pem"]
      certFiles: ["cert.pem"]
      keyFiles: ["key.pem"]
  unsecured:
    redirect:
      listenAddr: 0.0.0.0
      listenPort: 80
```

- Two listeners are defined: the first listener is named _secured_ and the second _unsecured_.
- The first listener uses the module `tls` and the second `redirect`.

## Directives

### `listeners` {#listeners}

```
    Syntax:         listeners:
    Type:           map
    Item key:       string
    Item value:     object
```

This list defines all listeners.

Each listener has a user-defined name and a listener module configuration.

:::warning

At least one listener is required to start an instance.

:::
