---
toc_max_heading_level: 2
---

# json

The `json` parser loads a resource and iterate over its results to load other resources.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`resource`](#resource)
  - [`filter`](#filter)
  - [`itemParams`](#itemParams)
  - [`itemResource`](#itemResource)

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
    load-pokemons:
      # highlight-start
      json:
        resource:
          pokemons: # resource name
            default: # provider name
              method: GET
              url: https://pokeapi.co/api/v2/pokemon
              next: true
              nextParser: body
              nextFilter: $.next
        filter: $.results
        itemParams:
          name: $.name
          url: $.url
        itemResource:
          pokemon-$name:
            default:
              method: GET
              url: $url
      # highlight-end
```

- The provider `api` is defined and uses the `rest` provider to fetch a remote JSON API.
- The loader has the rule `load-pokemons` which triggers the fetching of the resource `load-pokemons`.
- The parser `json` triggers the fetching to the provider `api` and parses the response to extract the items list
  following the JSON path of the option `filter`. For each item, the attribute `name` and `url` are extracted given
  their respective JSON path in `itemParams`. Each parameter will be available as a dynamic parameter (its key
  prefixed by `$`) to the item resource defined by `itemResource`. Finally, each item resources are loaded and stored
  in the server state.

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

The map defining the attributes extract of each result item.

The value of each entry is a JSON path to extract the given attribute.

Each extracted item will be available as a dynamic parameter to the item resource.

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

The resource to load an item extracted.

**Example:**

```yaml
itemResource:
  item-$id:
    my-provider:
      params:
        id: $id # dynamic parameter
        language: en
```

Dynamic parameters are replaced following the defined `itemsParams`.
