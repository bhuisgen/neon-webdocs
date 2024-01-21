---
toc_max_heading_level: 2
---

# Store

The `store` section contains all the configuration settings of the [store](/neon/configuration/store/overview/).

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`storage`](#storage)

## Example configuration

```yaml
store:
  storage:
    memory:
```

- The store uses the storage module `memory` to store its state.

## Directives

### `storage` {#storage}

    Syntax:         storage:
    Type:           object
    Default:        memory

This object defines the storage module of the store.
