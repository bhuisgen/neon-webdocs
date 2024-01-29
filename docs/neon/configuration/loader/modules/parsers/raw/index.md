---
toc_max_heading_level: 2
---

# raw

The `raw` parser loads a resource and store its response.

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
    load-post1:
      # highlight-start
      raw:
        resource:
          post1:
            api:
              method: GET
              url: https://<backend_url>/api/v1/posts/1
      # highlight-end
```

- The provider **api** uses the `rest` provider which fetches a remote JSON API.
- The loader has the rule **load-post1** which executes the parser `raw`.
- The parser `raw` triggers the provider **api** to fetch the resource **post1** and to store/refresh the server state.

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
  posts:
    api:
      # resource configuration
```
