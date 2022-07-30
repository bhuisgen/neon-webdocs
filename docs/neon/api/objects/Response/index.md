---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

import TOCInline from '@theme/TOCInline';

# Response

## Overview

This object represents the server response.

```typescript
interface ServerResponse {
  render(content: string, status: number): void;
  redirect(url: string, status: number): void;
  setHeader(key: string, value: string): void;
  setTitle(title: string): void;
  setMeta(id: string, attributes: Map<string, string>): void;
  setLink(id: string, attributes: Map<string, string>): void;
  setScript(id: string, attributes: Map<string, string>): void;
}
```

## Index

<TOCInline toc={toc.filter((node) => node.id !== "overview" && node.id !== "index" )} />

## Methods

### `render` {#method-render}

```typescript
    render(content: string, status: number): void
```

Renders the response to the client with the given content and status code as response.

### `redirect` {#method-redirect}

```typescript
    redirect(url: string, status: number): void
```

Redirects the client to the given URL with the given status code.

### `setHeader` {#method-setheader}

```typescript
    setHeader(key: string, value: string): void
```

Sets a response header.

### `setTitle` {#method-settitle}

```typescript
    setTitle(title: string): void
```

Sets the `title` markup of the render.

### `setMeta` {#method-setmeta}

```typescript
    setMeta(name: string, attributes: Map<string, string>): void
```

Sets a `meta` markup of the render.

### `setLink` {#method-setlink}

```typescript
    setLink(id: string, attributes: Map<string, string>): void
```

Sets a `link` markup of the render.

### `setScript` {#method-setscript}

```typescript
    setScript(id: string, attributes: Map<string, string>): void
```

Set a `script` markup of the render.
