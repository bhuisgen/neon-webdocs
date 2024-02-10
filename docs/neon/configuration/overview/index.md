---
toc_max_heading_level: 2
---

# Overview

The configuration of Neon is done by its configuration file.

## Configuration file

### Location

By default, the configuration file must be located in the current working directory and must be named `neon.yaml`.

:::tip

You can specify a different configuration file by setting the environment variable [`CONFIG_FILE`](#config_file).

:::

### Syntax

The syntax of the configuration is in [YAML](https://yaml.org/spec/1.2.2/).

The file is composed of different sections composed of options and other sections.

A section is defined by its own name.

An option can have one value (single value) or multiple values (multi-value list) from these types:

- string: for textual content
- number: for numeric content
- boolean: for flag to enable/disable
- an object: a group of options

### Sample configuration file

```yaml title="neon.yaml" showLineNumbers
app:
  store:
    storage:
      memory:

  server:
    listeners:
      default:
        local:
          listenAddr: 0.0.0.0
          listenPort: 8080
    sites:
      main:
        listeners:
          - default
        routes:
          default:
            middlewares:
            handler:
```

The main section of the configuration is `app` and is mandatory. Sub-sections can be optional depending of their role and the features enabled.

## Environment variables

You can override some configuration settings with environment variables.

### `CONFIG_FILE`

```
    Type:           string
    Default:        neon.yaml
```

The path used for the configuration file.

### `DEBUG`

```
    Type:           boolean
    Default:        0
```

The flag to enable debug mode.

### `CHILD_SOCKET`

```
    Type:           string
    Default:        neon.sock
```

The socket file used to reload the instance.
