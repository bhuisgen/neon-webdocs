---
toc_max_heading_level: 2
---

# json

The `json` parser fetches a resource and iterate over its result to load sub-resources.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`resource`](#resource)
  - [`filter`](#filter)
  - [`itemParams`](#itemParams)
  - [`itemResource`](#itemResource)
  - [`store`](#store)

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
    load-posts:
      json:
        resource:
          posts:
            api:
              method: GET
              url: https://<backend_url>/api/v1/posts
              next: true
              nextParser: body
              nextFilter: $.next
        store: true
        filter: $.results
        itemParams:
          name: $.name
          url: $.url
        itemResource:
          post-$name:
            api:
              method: GET
              url: $url
```

- The provider **api** uses the `rest` provider which fetches a remote JSON API.
- The loader has the rule **load-posts** which executes the parser `json`.
- The parser `json` triggers the provider **api** to fetch the resource **posts** and parses its response to extract an items list following the JSON path `filter`. For each item, the attributes **name** and **url** are extracted given their respective JSON path in `itemParams`. Each parameter will be available as a dynamic parameter to a new sub-resource **post-$name** which will be fetched and stored/refreshed in the server state.
- As the option `store` is enabled, the resource `posts` is stored/refreshed too in the server state.

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

### `filter` {#filter}

```
    Syntax:         filter: <jsonpath>
    Type:           string
    Default:        -
```

The JSON path to filter to extract the resource items list.

### `itemParams` {#itemParams}

```
    Syntax:         itemParams: <map>
    Type:           map
    Map key:        string
    Map value:      string
    Default:        -
```

The map defines the parameters to extract from each result item.

The value of each entry is a JSON path to extract the given attribute from the resource.

Extracted parameters will be available as dynamic parameters for each item resource.

**Example:**

```yaml
itemParams:
  id: $.data.id
  type: $.data.attributes.type
```

### `itemResource` {#itemResource}

```
    Syntax:         itemResource:
    Type:           object
    Default:        -
```

The sub-resource to load when an item is extracted from the main resource.

**Example:**

```yaml
itemResource:
  item-$id:
    api:
      params:
        id: $id # dynamic parameter
        language: en
```

Dynamic parameters are replaced following the defined `itemsParams`.

### `store` {#store}

```
    Syntax:         store:
    Type:           boolean
    Default:        false
```

Store the main resource in the server state.

:::info

The sub-resources are always stored in the server state.

:::
