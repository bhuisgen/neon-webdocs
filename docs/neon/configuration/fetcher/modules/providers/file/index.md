---
toc_max_heading_level: 2
---

# file

The `file` provider is used to fetch a resource from local file.

- [Example configuration](#example-configuration)

- [Resource configuration](#resource-configuration)
  - [`path`](#resource-path)

## Example configuration {#example-configuration}

```yaml
fetcher:
  providers:
    local:
      # highlight-start
      file:
      # highlight-end

loader:
  rules:
    load-data:
      raw:
        data:
          # highlight-start
          path: ./dist/data.json
          # highlight-end
```

- The provider **local** uses the provider module `file`.
- The loader rules has a rule for the resource **data** which loads it using the provider **local** with the given configuration.

## Directives {#directives}

## Resource configuration {#resource-configuration}

### `path` {#resource-path}

```
    Syntax:         path: <file>
    Type:           string
```

The file to read.
