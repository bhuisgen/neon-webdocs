---
toc_max_heading_level: 2
---

# logger

The `logger` middleware allows to writes access logs.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`file`](#file)
  - [`format`](#format)
  - [`bufferSize`](#bufferSize)
  - [`bufferFlush`](#bufferFlush)
  - [`filters`](#filters)

:::warning

This middleware should be the first middleware of the chain to output real request processing timings.

:::

## Example configuration

```yaml
sites:
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

### `format` {#format}

```
    Syntax:         format: <name>
    Type:           string
    Valid values:   common, json
    Default:        -
```

The custom log format.

:::note neon-pro

This feature is only available in Neon Pro.

:::

Available formats:

- `common`: common log format.

```
  <ip> - - [<date>] "<method> <path> <proto>"<status> <bytes> "<referer>" "<user-agent>" <duration>ms
```

- `json`: JSON format.

```json
  {"ip": "<ip>", "date": "<date>", "request": {"method":"<method>","path":"<path>","proto":"<proto>"},"status:<status>,"bytes":<bytes>,"userAgent":"<user-agent>","duration":<duration>}
```

If no format is specified, the logging uses this default format:

```
    <method> <path> <status> <duration>
```

### `bufferSize` {#bufferSize}

```
    Syntax:         bufferSize: <size>
    Type:           numeric
    Unit:           bytes
    Minimum         0
    Default:        -
```

Enable the asynchronous writing of the log file by using a buffer of the given size in bytes.

A value of 0 will set the default buffer size to 4 KB.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `bufferFlush` {#bufferFlush}

```
    Syntax:         bufferFlush: <delay>
    Type:           numeric
    Unit:           seconds
    Minimum         0
    Default:        -
```

Enable the flushing of the log file buffer at each given delay in seconds.

A value of 0 will set the default flushing interval to 10s.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `filters` {#filters}

```
    Syntax:         filters:
    Type:           map
    Item name:      string
    Item value:     list
    Default:        -
```

The list of filters to limit the access logs.

Only the requests validating all filters are logged.

:::note neon-pro

This feature is only available in Neon Pro.

:::

Available filters:

- `statusCode`: limit access logs to the given status code(s) as a value or range.
- `minDuration`: limit access logs to the minimal duration of requests in seconds or as a valid duration format ([time.ParseDuration](https://pkg.go.dev/time#ParseDuration)).

**Example**

```yaml
filters:
  statusCodes:
    - "200"
    - "300-302"
  minDuration: "200ms"
```
