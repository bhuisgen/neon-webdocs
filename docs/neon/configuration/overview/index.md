---
toc_max_heading_level: 2
---

# Overview

The configuration of Neon is done through a generic configuration file.

## Configuration file

### Location

By default, the configuration file must be located in the current working directory and must be named `neon.yaml`.

:::tip

You can override the default configuration file by setting the environment variable [`CONFIG_FILE`](./#config_file).

:::

### Syntax

The syntax of the configuration is YAML.

The file is composed of different sections. Each section can have settings or other sections. A section is defined by
its own name (a string). A setting can have one value (single value) or multiple values (multi value list) from these
types:

- a string: for textual content
- a number: for numeric content following the given unit
- a boolean: to enable/disable the given setting
- an object: a group of settings

Some settings accept free values other not. But as a design choice, any invalid values are skipped and default values
are used in fallback to prevent any instance startup failure.

## Environment variables

You can override some configuration through the use of environment variables:

### `CONFIG_FILE`

The path used for the configuration file.

It overrides the default configuration path.

### `DEBUG`

The flag to enable debug mode.

:::warning

Do not enable debug mode in production as sensitive data may be logged.

:::
