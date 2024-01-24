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

The syntax of the configuration is in YAML.

The file is composed of different sections. Each section can have options or other sections. A section is defined by
its own name. An option can have one value (single value) or multiple values (multi-value list) from these types:

- string: for textual content
- number: for numeric content
- boolean: to enable/disable the option
- an object: a group of settings

## Environment variables

You can override some configuration settings with environment variables.

### `CONFIG_FILE`

The path used for the configuration file.

It overrides the default configuration path.

### `DEBUG`

The flag to enable debug mode.

:::warning

Do not enable debug mode in production as sensitive data may be logged.

:::
