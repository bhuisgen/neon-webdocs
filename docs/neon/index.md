---
displayed_sidebar: docsSidebar
title: Documentation
slug: /
---

# Neon

Neon is a web server dedicated to serve Javascript web applications. Like any other web servers, the hosted websites are served to clients but with two distinct features:

- It can fetch content from external services.

- It can render full pages with content.

These capabilities coupled to its cache allow to serve fully rendered pages to clients with a minimal loading time.

## How does it work ?

The workflow of Neon can be resumed by the diagram below:

![Neon workflow](./workflow-light.png "Neon workflow")

**Load**

The first step is to fetch all content required for a website. This step is independent from any client requests processing i.e. everything is done in background and periodically by the server. All these data are the _server state_ which is never removed but only refreshed through the rules defined by the user in the configuration file.

**Render**

The second step is to render the web pages i.e. render the HTML body content from the server state. In the case of a Javascript application, this is done by executing its bundle file with the server Javascript VM. The final render is ready to serve to any clients including SEO bots.

**Store**

The third step is to store in a memory cache all the renders for a given time-to-live period. It will prevent useless renders and allow to send direct responses to clients.

:::info

Neon is an early project. This section above tends to focus on the main ideas of this project but new features and improvements are coming.

:::
