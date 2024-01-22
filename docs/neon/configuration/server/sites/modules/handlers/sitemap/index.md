---
toc_max_heading_level: 2
---

# sitemap

The `sitemap` handler allows to serve the sitemap files used by bots to crawl your website.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`root`](#root)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)
  - [`kind`](#route-kind)
  - [`sitemapIndex`](#route-sitemapIndex)
    - [`name`](#route-sitemapIndex-name)
    - [`type`](#route-sitemapIndex-type)
    - [`static`](#route-sitemapIndex-static)
      - [`loc`](#route-sitemapIndex-static-loc)
  - [`sitemap`](#route-sitemap)
    - [`name`](#route-sitemap-name)
    - [`type`](#route-sitemap-type)
    - [`static`](#route-sitemap-static)
      - [`loc`](#route-sitemap-static-loc)
      - [`lastmod`](#route-sitemap-static-lastmod)
      - [`changefreq`](#route-sitemap-static-changefreq)
      - [`priority`](#route-sitemap-static-priority)
    - [`list`](#route-sitemap-list)
      - [`resource`](#route-sitemap-list-resource)
      - [`filter`](#route-sitemap-list-filter)
      - [`itemLoc`](#route-sitemap-list-itemLoc)
      - [`itemLastmod`](#route-sitemap-list-itemLastmod)
      - [`itemIgnore`](#route-sitemap-list-itemIgnore)
      - [`changefreq`](#route-sitemap-list-changefreq)
      - [`priority`](#route-sitemap-list-priority)

## Example configuration

```yaml
sites:
  routes:
    "/sitemap.xml":
      handler:
        # highlight-start
        sitemap:
          root: https://example.org
          kind: sitemap
          sitemap:
            - name: home
              type: static
              static:
                loc: /
                lastmod: last
            - name: all-posts
              type: list
              list:
                resource: posts
                filter: $.data
                itemLoc: $.url
                itemLastmod: $.date
        # highlight-end
```

- The root URL of all sitemap items is `https://example.org`.
- A sitemap file is generated for the route `/sitemap.xml`.
- The first sitemap item is for the homepage `home` using a `static` type item with the relative location `/`.
- The next items are for the posts `all-posts` using a `list` type item.
- This `list` item uses the resource `posts` which returns all posts into its response payload items array `data`.
- Each item/post from this payload items array is used to generate a sitemap item with the given informations.

## Directives

### `root` {#root}

```
    Syntax:         root: <url>
    Type:           string
```

The root URL used for any sitemap items.

:::tip

Use HTTPS protocol to improve your SEO ranking.

:::

### `cache` {#cache}

```
    Syntax:         cache: <flag>
    Type:           boolean
    Default:        false
```

Enable the render cache.

### `cacheTTL` {#cacheTTL}

```
    Syntax:         cacheTTL: <duration>
    Type:           numeric
    Default:        60
    Unit:           second
```

The TTL of cached render in seconds.

When the TTL is expired, a new render is processed.

### `kind` {#route-kind}

```
    Syntax:         kind: <kind>
    Type:           string
    Valid values:   sitemap, sitemapIndex
```

The kind of sitemap.

### `sitemapIndex` {#route-sitemapIndex}

```
    Syntax:         sitemapIndex:
    Type:           object
```

A sitemap index object.

**Example:**

```yaml
sitemapIndex:
  - name: home
    type: static
    static:
      loc: /
```

#### `name` {#route-sitemapIndex-name}

```
    Syntax:         name: <item>
    Type:           string
```

The sitemap index item name.

#### `type` {#route-sitemapIndex-type}

```
    Syntax:         type: <type>
    Type:           string
    Valid values:   static
```

The sitemap index item type.

#### `static` {#route-sitemapIndex-static}

```
    Syntax:         static:
    Type:           object
```

A sitemap index static item.

**Example:**

```yaml
static:
  loc: /
```

##### `loc` {#route-sitemapIndex-static-loc}

```
    Syntax:         loc: <url>
    Type:           string
```

The sitemap index static item location.

### `sitemap` {#route-sitemap}

```
    Syntax:         sitemap:
    Type:           object
```

A sitemap object.

**Example:**

```yaml
sitemap:
  - name: home
    type: static
    static:
      loc: /
      lastmod: last
```

#### `name` {#route-sitemap-name}

```
    Syntax:         name: <item>
    Type:           string
```

The sitemap item name.

#### `type` {#route-sitemap-type}

```
    Syntax:         type: <type>
    Type:           type
    Valid values:   static, list
```

The sitemap item type.

#### `static` {#route-sitemap-static}

```
    Syntax:         static:
    Type:           object
```

A sitemap static item.

**Example:**

```yaml
static:
  loc: /
  lastmod: last
```

##### `loc` {#route-sitemap-static-loc}

```
    Syntax:         loc: <url>
    Type:           string
```

The location of the sitemap static item.

##### `lastmod` {#route-sitemap-static-lastmod}

```
    Syntax:         lastmod: <date>
    Type:           string
    Default:        -
```

The last modification date of the sitemap static item

The date value must be in W3C datetime format i.e. ISO 8601

##### `changefreq` {#route-sitemap-static-changefreq}

```
    Syntax:         changefreq: <value>
    Type:           string
    Valid values:   always, hourly, daily, weekly, monthly, yearly, never
    Default:        -
```

The change frequency of this sitemap static item.

##### `priority` {#route-sitemap-static-priority}

```
    Syntax:         priority: <score>
    Type:           numeric
    Valid values:   0.0-1.0
    Default:        -
```

The priority of this sitemap static item.

#### `list` {#route-sitemap-list}

```
    Syntax:         static:
    Type:           object
```

A sitemap list item.

**Example:**

```yaml
list:
  resource: posts
  filter: $.data
  itemLoc: $.url
  itemLastmod: $.date
```

#### `resource` {#route-sitemap-list-resource}

```
    Syntax:         resource: <name>
    Type:           string
```

The resource name of the sitemap list item.

:::warning

To prevent any breaking, please use only a static resource.

:::

#### `filter` {#route-sitemap-list-filter}

```
    Syntax:         filter: <jsonpath>
    Type:           string
```

The json path to the items array in the resource response.

#### `itemLoc` {#route-sitemap-list-itemLoc}

```
    Syntax:         itemLoc: <jsonpath>
    Type:           string
```

The jsonpath to the location attribute of an item.

#### `itemLastmod` {#route-sitemap-list-itemLastmod}

```
    Syntax:         itemLastmod: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the last modification date attribute of an item.

The date value must be in W3C datetime format i.e. ISO 8601

#### `itemIgnore` {#route-sitemap-list-itemIgnore}

```
    Syntax:         itemIgnore: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the ignore flag attribute of an item.

This flag allows to omit an item from the sitemap.

#### `changefreq` {#route-sitemap-list-changefreq}

```
    Syntax:         changefreq: <value>
    Type:           string
    Valid values:   always, hourly, daily, weekly, monthly, yearly, never
    Default:        -
```

The change frequence of each item.

#### `priority` {#route-sitemap-list-priority}

```
    Syntax:         priority: <score>
    Type:           numeric
    Valid values:   0.0-1.0
    Default:        -
```

The priority of each item.
