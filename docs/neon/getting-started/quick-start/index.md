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
$ tar -xvzf neon-oss_linux.tar.gz
```

</TabItem>

<TabItem value="darwin" label="macOS">

```shell
$ tar -xvzf neon-oss_darwin.tar.gz
```

</TabItem>

</Tabs>

Copy the binary where you want like in your project directory or in your `PATH` but make sure that the file has the
execute permission.

<Tabs groupId="os">

<TabItem value="linux" label="Linux" default>

```shell
$ cp neon /usr/local/bin/neon
$ chmod +x /usr/local/bin/neon
```

</TabItem>

<TabItem value="darwin" label="macOS">

```shell
$ cp neon /usr/local/bin/neon
$ chmod +x /usr/local/bin/neon
```

</TabItem>

</Tabs>

Verify that your installation is ready using the following command:

```shell
$ neon -v
```

It should output the `neon` binary version.

## Setting up

For this quick start, we will serve a default application already packaged into Neon: the status application.

First initialize your instance:

```shell
$ neon init -template status
```

A default configuration file `neon.yaml` and a `data` directory should have been generated into your current directory. The `data` directory contains the HTML file, the bundle file and all static resources of the application.

Start your instance:

```shell
$ neon serve
```

Neon should be running on your local port 8080. Open your browser and go to this address:

- [http://localhost:8080](http://localhost:8080)

The status app will showing up.

Quick start completed!

:::info what's next?

- Read the [Installation](/neon/installation/overview) documentation to know other installation flavors.
- Read the [Configuration](/neon/configuration/overview) documentation to discover all settings and capabilities.

:::
