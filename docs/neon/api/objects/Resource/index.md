---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

import TOCInline from '@theme/TOCInline';

# Resource

## Overview

This object represents a resource fetched by the server.

```typescript
interface Resource {
  response: string[] | null;
  error: string | null;
}
```

## Index

<TOCInline toc={toc.filter((node) => node.id !== "overview" && node.id !== "index" )} />

## Properties

### `response` {#property-response}

```typescript
response: string[] | null
```

The resource response as a `string[]` or `null` if there is no content response.

### `error` {#property-error}

```typescript
error: string | null;
```

The error state of the resource as a `string` or `null` if there is no error.
