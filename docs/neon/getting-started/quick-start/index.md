---
displayed_sidebar: docsSidebar
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

This quick start will introduce you to Neon.

## Downloading

Grab the latest binary from the [release](https://github.com/bhuisgen/neon-oss/releases) page.

## Installing

Extract the downloaded archive to get the `neon` binary:

<Tabs groupId="os">

<TabItem value="linux" label="Linux" default>

```shell
$ tar -xzf neon-oss_linux.tar.gz -C /usr/local
```

</TabItem>

<TabItem value="darwin" label="macOS">

```shell
$ tar -xzf neon-oss_darwin.tar.gz -C /usr/local
```

</TabItem>

<TabItem value="freebsd" label="FreeBSD">

```shell
$ tar -xzf neon-oss_freebsd.tar.gz -C /usr/local
```

</TabItem>

<TabItem value="netbsd" label="NetBSD">

```shell
$ tar -xzf neon-oss_netbsd.tar.gz -C /usr/local
```

</TabItem>

<TabItem value="openbsd" label="OpenBSD">

```shell
$ tar -xzf neon-oss_openbsd.tar.gz -C /usr/local
```

</TabItem>

</Tabs>

Verify that your installation is ready using the following command:

```shell
$ neon -v
```

It should output the `neon` binary version.

## Setting up

For this quick start, we will download a sample application and host it with Neon on your localhost.

Clone the git repository:

```shell
$ git clone github.com/bhuisgen/neon-sample-app
```

A default configuration file `neon.yaml` and a `data` directory are present in the project directory. The `data` directory contains the HTML file, the JS bundle and all static resources required to host the application.

Start the Neon instance:

```shell
$ neon serve
```

Neon should be listening on your local port 8080. Open your browser and go to this address:

- [http://localhost:8080](http://localhost:8080)

The app will showing up.

Quick start completed!

:::info what's next?

- Read the [Installation](/neon/installation/overview) documentation to know other installation flavors.
- Read the [Configuration](/neon/configuration/overview) documentation to discover all settings and capabilities.

:::
