---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

import TOCInline from '@theme/TOCInline';

# Server

## Overview

This object represents the server instance.

```typescript
interface Server {
  site: Site;
  handler: Handler;
  request: Request;
  response: Response;
}
```

## Index

<TOCInline toc={toc.filter((node) => node.id !== "overview" && node.id !== "index" )} />

## Properties

### `site` {#property-site}

```typescript
site: Site;
```

The site object.

### `handler` {#property-handler}

```typescript
handler: Handler;
```

The handler object.

### `request` {#property-request}

```typescript
request: Request;
```

The request object.

### `response` {#property-response}

```typescript
response: Response;
```

The response object.
