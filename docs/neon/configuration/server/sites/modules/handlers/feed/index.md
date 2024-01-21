---
toc_max_heading_level: 2
---

# feed

The `feed` handler allows to serve RSS and Atom feeds.

:::note neon-pro

This feature is only available in Neon Pro.

:::

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`root`](#root)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)
  - [`kind`](#route-kind)
  - [`rss`](#route-rss)
    - [`title`](#route-rss-title)
    - [`link`](#route-rss-link)
    - [`description`](#route-rss-description)
    - [`language`](#route-rss-language)
    - [`copyright`](#route-rss-copyright)
    - [`managingEditor`](#route-rss-managingEditor)
    - [`webmaster`](#route-rss-webmaster)
    - [`categories`](#route-rss-categories)
    - [`generator`](#route-rss-generator)
    - [`ttl`](#route-rss-ttl)
    - [`imageURL`](#route-rss-imageURL)
    - [`imageTitle`](#route-rss-imageTitle)
    - [`imageLink`](#route-rss-imageLink)
    - [`imageWidth`](#route-rss-imageWidth)
    - [`imageHeight`](#route-rss-imageHeight)
    - [`imageDescription`](#route-rss-imageDescription)
    - [`rating`](#route-rss-rating)
    - [`skipHours`](#route-rss-skipHours)
    - [`skipDays`](#route-rss-skipDays)
    - [`resource`](#route-rss-resource)
    - [`filter`](#route-rss-filter)
    - [`itemTitle`](#route-rss-itemTitle)
    - [`itemLink`](#route-rss-itemLink)
    - [`itemPubdate`](#route-rss-itemPubdate)
    - [`itemAuthor`](#route-rss-itemAuthor)
    - [`itemCategory`](#route-rss-itemCategory)
    - [`itemDescription`](#route-rss-itemDescription)
    - [`itemContent`](#route-rss-itemContent)
    - [`itemIgnore`](#route-rss-itemIgnore)
  - [`atom`](#route-atom)
    - [`id`](#route-atom-id)
    - [`lang`](#route-atom-lang)
    - [`title`](#route-atom-title)
    - [`authors`](#route-atom-authors)
      - [`name`](#route-atom-authors-name)
      - [`uri`](#route-atom-authors-uri)
      - [`email`](#route-atom-authors-email)
    - [`contributors`](#route-atom-contributors)
      - [`name`](#route-atom-contributors-name)
      - [`uri`](#route-atom-contributors-uri)
      - [`email`](#route-atom-contributors-email)
    - [`rights`](#route-atom-rights)
    - [`generator`](#route-atom-generator)
    - [`categories`](#route-atom-categories)
    - [`subtitle`](#route-atom-subtitle)
    - [`icon`](#route-atom-icon)
    - [`logo`](#route-atom-logo)
    - [`resource`](#route-atom-resource)
    - [`filter`](#route-atom-filter)
    - [`itemTitle`](#route-atom-itemTitle)
    - [`itemAuthor`](#route-atom-itemAuthor)
    - [`itemID`](#route-atom-itemID)
    - [`itemUpdated`](#route-atom-itemUpdated)
    - [`itemPublished`](#route-atom-itemPublished)
    - [`itemSummary`](#route-atom-itemSummary)
    - [`itemContent`](#route-atom-itemContent)
    - [`itemIgnore`](#route-atom-itemIgnore)

## Example configuration

```yaml
sites:
  default:
    routes:
      "/index.xml":
        handler:
          # highlight-start
          feed:
            root: https://example.org
            kind: rss
            rss:
              - title: My site
                link: /
                description: Recent posts on my site
                resource: latest-posts
                filter: $.data
                itemTitle: $.title
                itemLink: $.link
                itemContent: $.content
          # highlight-end
```

- The root URL of the website is `https://example.org`.
- A RSS feed is generated for the route `/index.xml`.
- The feed uses the resource `latest-posts` which returns all latest posts into its response payload items array `data`.
- Each item/post from this payload items array is used to generate the feed items with the given informations.

## Directives

### `root` {#root}

```
    Syntax:         root: <url>
    Type:           string
```

The root URL used for any sitemap items.

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

The TTL of cached renders in seconds.

### `kind` {#route-kind}

```
    Syntax:         kind: <kind>
    Type:           string
    Valid values:   rss, atom
```

The kind of feed.

### `rss` {#route-rss}

```
    Syntax:         rss:
    Type:           object
```

A RSS feed object.

#### `title` {#route-rss-title}

```
    Syntax:         title: <text>
    Type:           string
```

The feed name.

#### `link` {#route-rss-link}

```
    Syntax:         link: <text>
    Type:           string
```

The URL to the website of this feed.

#### `description` {#route-rss-description}

```
    Syntax:         description: <text>
    Type:           string
```

The feed description.

#### `language` {#route-rss-language}

```
    Syntax:         language: <code>
    Type:           string
    Default:        -
```

The feed content language.

**Example:**

```yaml
language: en-us
```

#### `copyright` {#route-rss-copyright}

```
    Syntax:         copyright: <text>
    Type:           string
    Default:        -
```

The copyright notice.

**Example:**

```yaml
copyright: Copyright 2022, Acme Corporation
```

#### `managingEditor` {#route-rss-managingEditor}

```
    Syntax:         managingEditor: <email>
    Type:           string
    Default:        -
```

The email address of the website manager.

**Example:**

```yaml
managingEditor: john@doe (John DOE)
```

#### `webmaster` {#route-rss-webmaster}

```
    Syntax:         webmaster: <email>
    Type:           string
    Default:        -
```

The email address of the webmaster.

**Example:**

```yaml
webmaster: john@doe (John DOE)
```

#### `categories` {#route-rss-categories}

```
    Syntax:         categories:
    Type:           list
    Item type:      string
    Default:        -
```

The categories of content.

**Example:**

```yaml
categories:
  - marketing
  - advertisement
```

#### `generator` {#route-rss-generator}

```
    Syntax:         generator: <text>
    Type:           string
    Default:        -
```

The generator of this channel.

**Example:**

```yaml
generator: Acme Software v1.0
```

#### `ttl` {#route-rss-ttl}

```
    Syntax:         ttl: <delay>
    Type:           numeric
    Unit:           hour
    Default:        -
```

The TTL in minutes of this channel.

The channel content should be refreshed after this delay.

#### `imageURL` {#route-rss-imageURL}

```
    Syntax:         imageURL: <url>
    Type:           string
    Default:        -
```

The URL of the image to display with this channel.

#### `imageTitle` {#route-rss-imageTitle}

```
    Syntax:         imageTitle: <text>
    Type:           string
    Default:        -
```

The title of the image to display with this channel.

#### `imageLink` {#route-rss-imageLink}

```
    Syntax:         imageLink: <url>
    Type:           string
    Default:        -
```

The link of the image to display with this channel.

#### `imageWidth` {#route-rss-imageWidth}

```
    Syntax:         imageWidth: <size>
    Type:           numeric
    Unit:           pixel
    Default:        -
```

The width of the image to display with this channel.

Maximum value for width is 144, default value is 88.

#### `imageHeight` {#route-rss-imageHeight}

```
    Syntax:         imageHeight: <size>
    Type:           numeric
    Unit:           pixel
    Default:        -
```

The height of the image to display with this channel.

Maximum value for height is 400, default value is 31.

#### `imageDescription` {#route-rss-imageDescription}

```
    Syntax:         imageDescription: <text>
    Type:           string
    Default:        -
```

The description of the image to display with this channel.

#### `rating` {#route-rss-rating}

```
    Syntax:         rating: <text>
    Type:           string
    Default:        -
```

The PICS rating of this channel.

#### `skipHours` {#route-rss-skipHours}

```
    Syntax:         skipHours:
    Type:           list
    Item type:      numeric
    Valid values:   0-23
    Default:        -
```

The hours of a day to notice aggregators to skip reading of this channel.

Each hour should be between 0 and 23.

**Example:**

```yaml
skipHours:
  - 0
  - 6
  - 22
```

#### `skipDays` {#route-rss-skipDays}

```
    Syntax:         skipDays:
    Type:           list
    Item type:      string
    Valid values:   Monday, Thuesday, Wednesday, Thursday, Friday, Saturday, Sunday
    Default:        -
```

The name of the days to notice aggregators to skip reading of this channel.

**Example:**

```yaml
skipDays:
  - Saturday
  - Sunday
```

#### `resource` {#route-rss-resource}

```
    Syntax:         resource: <name>
    Type:           string
```

The resource name for the feed items.

:::warning

To prevent any breaking, only use a static resource to generate your feed.

:::

#### `filter` {#route-rss-filter}

```
    Syntax:         filter: <jsonpath>
    Type:           string
```

The json path to the items array in the resource response.

#### `itemTitle` {#route-rss-itemTitle}

```
    Syntax:         itemTitle: <jsonpath>
    Type:           string
```

The jsonpath to the title attribute of an item.

#### `itemLink` {#route-rss-itemLink}

```
    Syntax:         itemLink: <jsonpath>
    Type:           string
```

The jsonpath to the link attribute of an item.

#### `itemPubdate` {#route-rss-itemPubdate}

```
    Syntax:         itemPubdate: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the publish date attribute of an item.

The date value must be in W3C datetime format i.e. ISO 8601

#### `itemAuthor` {#route-rss-itemAuthor}

```
    Syntax:         itemAuthor: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the author attribute of an item.

#### `itemCategory` {#route-rss-itemCategory}

```
    Syntax:         itemCategory: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the category attribute of an item.

#### `itemDescription` {#route-rss-itemDescription}

```
    Syntax:         itemDescription: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the description attribute of an item.

#### `itemContent` {#route-rss-itemContent}

```
    Syntax:         itemPubdate: <jsonpath>
    Type:           string
```

The jsonpath to the content attribute of an item.

#### `itemIgnore` {#route-rss-itemIgnore}

```
    Syntax:         itemIgnore: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the ignore flag attribute of an item.

This flag allows to omit an item from the feed.

### `atom` {#route-atom}

```
    Syntax:         atom:
    Type:           object
```

An Atom feed object.

#### `id` {#route-atom-id}

```
    Syntax:         id: <url>
    Type:           string
```

The website URL of this feed.

#### `lang` {#route-atom-lang}

```
    Syntax:         lang: <code>
    Type:           string
```

The content language of this feed.

**Example:**

```yaml
lang: en
```

#### `title` {#route-atom-title}

```
    Syntax:         lang: <code>
    Type:           string
```

The title of this feed.

#### `authors` {#route-atom-authors}

```
    Syntax:         authors:
    Type:           object
```

The authors.

**Example:**

```yaml
authors:
  - name: John Doe
    email: john@doe
```

##### `name` {#route-atom-authors-name}

```
    Syntax:         name: <name>
    Type:           string
```

The author name.

##### `uri` {#route-atom-authors-uri}

```
    Syntax:         uri: <uri>
    Type:           string
```

The author URI.

##### `email` {#route-atom-authors-email}

```
    Syntax:         email: <email>
    Type:           string
```

The author email.

#### `contributors` {#route-atom-contributors}

```
    Syntax:         authors:
    Type:           object
```

The contributors.

**Example:**

```yaml
contributors:
  - name: John Doe
    email: john@doe
```

##### `name` {#route-atom-contributors-name}

```
    Syntax:         name: <name>
    Type:           string
```

The contributor name.

##### `uri` {#route-atom-contributors-uri}

```
    Syntax:         uri: <uri>
    Type:           string
```

The contributor URI.

##### `email` {#route-atom-contributors-email}

```
    Syntax:         email: <email>
    Type:           string
```

The contributor email.

#### `rights` {#route-atom-rights}

```
    Syntax:         rights: <text>
    Type:           string
```

The content rights.

#### `generator` {#route-atom-generator}

```
    Syntax:         generator: <text>
    Type:           string
```

The generator.

#### `categories` {#route-atom-categories}

```
    Syntax:         categories:
    Type:           list
    Item type:      string
    Default:        -
```

The content categories.

**Example:**

```yaml
categories:
  - marketing
  - advertisement
```

#### `subtitle` {#route-atom-subtitle}

The feed subtitle.

```
    Syntax:         subtitle: <text>
    Type:           string
    Default:        -
```

#### `icon` {#route-atom-icon}

```
    Syntax:         icon: <url>
    Type:           string
    Default:        -
```

The URL of the feed icon.

#### `logo` {#route-atom-logo}

```
    Syntax:         logo: <url>
    Type:           string
    Default:        -
```

The URL of the feed logo.

#### `resource` {#route-atom-resource}

```
    Syntax:         resource: <name>
    Type:           string
```

The resource name for the feed items.

:::warning

To prevent any breaking, only use a static resource to generate your feed.

:::

#### `filter` {#route-atom-filter}

```
    Syntax:         filter: <jsonpath>
    Type:           string
```

The json path to the items array in the resource response.

#### `itemTitle` {#route-atom-itemTitle}

```
    Syntax:         itemTitle: <jsonpath>
    Type:           string
```

The jsonpath to the title attribute of an item.

#### `itemAuthor` {#route-atom-itemAuthor}

```
    Syntax:         itemAuthor: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the author attribute of an item.

#### `itemID` {#route-atom-itemID}

```
    Syntax:         itemID: <jsonpath>
    Type:           string
```

The jsonpath to the ID attribute of an item.

The ID is the URL of the item.

#### `itemUpdated` {#route-atom-itemUpdated}

```
    Syntax:         itemUpdated: <jsonpath>
    Type:           string
```

The jsonpath to the update date attribute of an item.

The date value must be in W3C datetime format i.e. ISO 8601

#### `itemPublished` {#route-atom-itemPublished}

```
    Syntax:         itemPublished: <jsonpath>
    Type:           string
```

The jsonpath to the publish date attribute of an item.

The date value must be in W3C datetime format i.e. ISO 8601

#### `itemSummary` {#route-atom-itemSummary}

```
    Syntax:         itemSummary: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the summary attribute of an item.

#### `itemContent` {#route-atom-itemContent}

```
    Syntax:         itemContent: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the content attribute of an item.

#### `itemIgnore` {#route-atom-itemIgnore}

```
    Syntax:         itemIgnore: <jsonpath>
    Type:           string
    Default:        -
```

The jsonpath to the ignore flag attribute of an item.

This flag allows to omit an item from the feed.
