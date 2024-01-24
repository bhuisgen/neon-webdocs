---
toc_max_heading_level: 2
---

# Listener

A **listener** is a network socket listening for incoming client connections.

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

- Two listeners are defined: the first listener is named **secured** and the second **unsecured**.
- The first listener uses the module `tls` and the second `redirect`.
