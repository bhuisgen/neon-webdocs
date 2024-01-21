---
toc_max_heading_level: 2
---

# raw

The `raw` parser loads a resource.

- [Example configuration](#example-configuration)
  - [`resource`](#resource)

## Example configuration

```yaml
fetcher:
  providers:
    api:
      rest:
        headers:
          Content-Type: application/json

loader:
  rules:
    load-pokemon:
      # highlight-start
      raw:
        resource:
          pokemon-bulbasaur:
            default:
              method: GET
              url: https://pokeapi.co/api/v2/pokemon/1
      # highlight-end
```

- The provider `api` is defined and uses the `rest` provider to fetch a remote JSON API.
- The loader has the rule `load-pokemon` which triggers the fetching of the resource `pokemon-bulbasaur`.
- The parser `raw` triggers the fetching to the provider `api` and store its response into the server state.

## Directives

### `resource` {#resource}

```
    Syntax:         resource:
    Type:           object
    Default:        -
```

The resource to load.

**Example:**

```yaml
resource:
  my-resource:
    my-provider:
      provider-config: value
```
