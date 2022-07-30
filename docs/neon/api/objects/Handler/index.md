---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

import TOCInline from '@theme/TOCInline';

# Handler

## Overview

This object represents the server handler.

```typescript
interface Handler {
  state(): Record<string, Resource>;
}
```

## Index

<TOCInline toc={toc.filter((node) => node.id !== "overview" && node.id !== "index" )} />

## Methods

### `state` {#method-state}

```typescript
    state(): Record<string, Resource>
```

Returns the state.
