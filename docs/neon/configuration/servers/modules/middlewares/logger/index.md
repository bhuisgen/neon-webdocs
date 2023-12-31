---
toc_max_heading_level: 2
---

# logger

The `logger` middleware allows to writes access logs.

- [Example configuration](./#example-configuration)
- [Directives](./#directives)
  - [`file`](./#file)
  - [`bufferSize`](./#bufferSize)
  - [`bufferFlush`](./#bufferFlush)

:::warning

This middleware should be the first of the chain to produce real request processing timings.

:::

## Example configuration

```yaml
servers:
  default:
    routes:
      default:
        middlewares:
          # highlight-start
          logger:
          # highlight-end
```

- The logging middleware outputs all incoming requests to the standard output i.e. the console.

## Directives

### `file` {#file}

```
    Syntax:         file: <file>
    Type:           string
```

Set the log file name.

:::info

By default the console is used as log output.

:::

### `bufferSize` {#bufferSize}

```
    Syntax:         bufferSize: <size>
    Type:           numeric
    Unit:           bytes
    Default:        -
```

Enable the asynchronous writing of the log file by using a buffer of the given size in bytes.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `bufferFlush` {#bufferFlush}

```
    Syntax:         bufferFlush: <delay>
    Type:           numeric
    Unit:           seconds
    Default:        -
```

Enable the flushing of the log file buffer at each given delay in seconds.

:::note neon-pro

This feature is only available in Neon Pro.

:::
