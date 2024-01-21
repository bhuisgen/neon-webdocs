---
toc_max_heading_level: 2
---

# robots

The `robots` handler allows to serve the robots.txt file used by bots to crawl your website.

- [Example configuration](#example-configuration)
- [Directives](#directives)
  - [`hosts`](#hosts)
  - [`cache`](#cache)
  - [`cacheTTL`](#cacheTTL)
  - [`rules`](#rules)
    - [`userAgent`](#rule-userAgent)
    - [`allow`](#rule-allow)
    - [`disallow`](#rule-disallow)
    - [`crawlDelay`](#rule-crawlDelay)
    - [`host`](#rule-host)
  - [`sitemaps`](#sitemaps)

## Example configuration

```yaml
sites:
  default:
    routes:
      "/robots.txt":
        handler:
          # highlight-start
          robots:
            hosts:
              - example.org
            sitemaps:
              - https://example.org/sitemap.xml
          # highlight-end
```

- The robots.txt file is rendered for the URL path `/robots.txt`.
- If the request HTTP host is `example.org`, the robots.txt file will allow the website crawling.
- The robots.txt lists the existing sitemap at `https://example.org/sitemap.xml`.

## Directives

### `hosts` {#hosts}

```
    Syntax:         hosts:
    Type:           list
    Item type:      string
```

The list of hosts allowed to serve the robots.txt.

:::info

Keeping this list empty or removing all hosts prevents any crawling. An alternative solution is to list only the hosts
or domains used for production.

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

The TTL of cached renders in seconds.

### `rules` {#rules}

```
    Syntax:         rules:
    Type:           list
    Item type:      object
    Default:        -
```

This list defines all robots rules.

:::note neon-pro

This feature is only available in Neon Pro.

:::

**Example:**

```yaml
rules:
  - userAgent: ["agent1"]
    allow: ["/"]
  - userAgent: ["agent2"]
    allow: ["/path"]
```

#### `userAgent` {#rule-userAgent}

```
    Syntax:         userAgent:
    Type:           list
    Item type:      string
```

The user agent(s) to match for this rule.

#### `allow` {#rule-allow}

```
    Syntax:         allow:
    Type:           list
    Item type:      string
```

The path(s) to allow.

#### `disallow` {#rule-disallow}

```
    Syntax:         disallow:
    Type:           list
    Item type:      string
```

The path(s) to disallow.

#### `crawlDelay` {#rule-crawlDelay}

```
    Syntax:         crawlDelay: <delay>
    Type:           numeric
    Default:        -
```

The delay between each page crawling in seconds.

:::warning

This option is specific to some user agents.

:::

#### `host` {#rule-host}

```
    Syntax:         host: <name>
    Type:           string
    Default:        -
```

The host mirror to prefer for crawling pages.

:::warning

This option is specific to some user agents.

:::

### `sitemaps` {#sitemaps}

```
    Syntax:         sitemaps:
    Type:           list
    Item type:      string
    Default:        -
```

The list of sitemap URLs.
