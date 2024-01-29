---
toc_max_heading_level: 2
---

# Listener

A **listener** is a network socket listening for incoming client connections.

- [Example configuration](#example-configuration)

## Example configuration {#example-configuration}

```yaml
server:
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
  sites:
    # sites configuration
```

- The first listener **secured** uses the module `tls`.
- The second listener **unsecured** use the module `redirect`.
