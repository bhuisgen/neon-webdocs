---
displayed_sidebar: docsSidebar
sidebar_position: 2
---

# Concepts

This page regroups everything you need to know before starting with Neon.

## Javascript application

A Javascript application is composed of a HTML file and a bundle file. The HTML file contains only a link to the bundle
file and the bundle file contains the sources of the application.

When a client browse the HTML page, it triggers the bundle downloading and its execution. The application starts and
renders its content into the browser by updating the current view. If additional resources and content are required, the
application can fetches them.

## Client Side Rendering

A client side rendering (CSR) application follows strictly the behavior previously explained:

- a bundle execute some Javascript code
- the Javascript code render and refresh all the browser view

Javascript is required. As a drawback the SEO content cannot be delivered to search bots.

## Server Side Rendering

On the contrary to CSR, a server-side rendering (SSR) application respects the classical way of serving websites:

- the content is already present in the HTML file
- the user interaction is required to refresh content

Javascript is not required but more requests are required between the client and the server. The SEO content is
available to search bots.

## Hybrid Rendering

Hybrid rendering is the combination of both modes: CSR and SSR. CSR is still used to have the best interactivity and
user experience, excepted for some parts of the application where SSR must used instead:

- its initial rendering to reduce the application startup time
- the SEO content is rendered by the server

These concepts are the basis required to understand the interest and the usage of Neon compared to other web servers.
