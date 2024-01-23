---
displayed_sidebar: docsSidebar
title: Documentation
slug: /
---

# Neon

Neon is an web server dedicated to serve your Javascript web applications. Like any other web servers, websites are served to clients but with three major features:

- it can fetch content from external services

- it can render pages with its Javascript VM

- it can cache pages

These capabilities allow to serve contentful web pages with minimal loading time to clients.

## How does it work ?

The workflow of Neon can be resumed by this schema:

![Neon workflow](./workflow-light.png "Neon workflow")

**Load**

The first step is to fetch all content resources required for a website. This step is independent from the client requests processing i.e. everything is done in background periodically by the server. All these data are the _server state_ which is never removed but only refreshed following the configuration rules defined by the user.

**Render**

The second step is to render the application pages i.e. the HTML body with content from the server state. In the case of a Javascript application, this is done by executing its bundle file with the server Javascript VM. The final render is ready to serve to any clients including SEO bots.

**Store**

The third step is to store in a memory cache all the renders for a given time-to-live period. It will prevent useless rendering and allow to send directly responses to clients for a minimal loading time.

:::info

Neon is an early project. This section above tends to focus on the main ideas of this project but new features and improvements are coming.

:::
