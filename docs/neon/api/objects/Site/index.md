---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

import TOCInline from '@theme/TOCInline';

# Site

## Overview

This object represents the server site.

```typescript
interface Site {
  name(): string;
  listeners(): string[];
  hosts(): string[];
  isDefault(): boolean;
}
```

## Index

<TOCInline toc={toc.filter((node) => node.id !== "overview" && node.id !== "index" )} />

## Methods

### `name` {#method-name}

```typescript
name(): string;
```

Return the site name.

### `listeners` {#method-listeners}

```typescript
listeners(): string[];
```

Returns the site listeners.

### `hosts` {#method-hosts}

```typescript
hosts(): string[];
```

Returns the site hosts.

### `isDefault` {#method-isdefault}

```typescript
isDefault(): boolean;
```

Return <code>true</code> if the site is the default site of the server.
