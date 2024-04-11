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
  language(): string;
  state(): Record<string, Resource>;
}
```

## Index

<TOCInline toc={toc.filter((node) => node.id !== "overview" && node.id !== "index" )} />

## Methods

### `language` {#method-language}

```typescript
language(): string;
```

Returns the language.

:::note neon-pro

This feature is only available in Neon Pro.

:::

### `state` {#method-state}

```typescript
state(): Record<string, Resource>
```

Returns the state.
