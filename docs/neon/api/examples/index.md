---
displayed_sidebar: docsSidebar
hide_table_of_contents: true
sidebar_position: 3
---

# Examples

## Render page

To render a server-side page:

```typescript showLineNumbers
import { Server } from "./neon";

declare let server: Server;

const root = `
  <main>
    <p>Hello World!</p>
  </main>
`;

server.response.render(root, 200);
```

## Render page with SEO

To render a server-side page with SEO markups:

```typescript showLineNumbers
import { Server } from "./neon";

declare let server: Server;

const root = `
  <main>
    <p>Hello World!</p>
  </main>
`;

server.response.render(root, 200);

server.response.setTitle("My Application");
server.response.setLink("canonical",
 new Map([
    ["rel": "canonical"],
    ["href": `https://${$server.request.host()}/{server.request.requestPath()}`],
  ])
);
server.response.setMeta(
  "description",
  new Map([
    ["name", "description"],
    ["content", "My page description"],
  ])
);
```

## Read the server state

To read the server state of resources from the application:

```typescript showLineNumbers
import { Server } from "./server";
import { State } from "./store";

declare let server: Server;

let state: State = {
  test: {},
};

const serverState = server.handler.state();
if (serverState) {
  for (const [key, resource] of Object.entries<Resource>(serverState)) {
    if (resource.error || !resource.data) {
      continue;
    }
    switch (key) {
      case "test":
        appState.test = JSON.parse(resource.data[0]);
        break;
    }
  }
}

const root = `
  <main>
    <p>Test: ${state.test}</p>
  </main>
`;

server.response.render(root, 200);
```
