---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
---

import TOCInline from '@theme/TOCInline';

# Request

## Overview

This object represents the server request.

```typescript
interface Request {
  method(): string;
  proto(): string;
  protoMajor(): string;
  protoMinor(): string;
  remoteAddr(): string;
  host(): string;
  path(): string;
  query(): Record<string, string[]>;
  headers(): Record<string, string[]>;
}
```

## Index

<TOCInline toc={toc.filter((node) => node.id !== "overview" && node.id !== "index" )} />

## Methods

### `method` {#method-method}

```typescript
method(): string;
```

Returns the request method.

### `proto` {#method-proto}

```typescript
proto(): string;
```

Returns the request protocol.

### `protoMajor` {#method-protomajor}

```typescript
protoMajor(): string;
```

Returns the request protocol major version.

### `protoMinor` {#method-protominor}

```typescript
protoMinor(): string;
```

Returns the request protocol minor version.

### `remoteAddr` {#method-remoteaddr}

```typescript
remoteAddr(): string;
```

Returns the request remote address.

### `host` {#method-host}

```typescript
host(): string;
```

Returns the request host.

### `path` {#method-path}

```typescript
path(): string;
```

Returns the request path.

### `query` {#method-query}

```typescript
query(): Record<string, string[]>;
```

Returns the request query parameters.

### `headers` {#method-headers}

```typescript
headers(): Record<string, string[]>;
```

Returns the request headers.
