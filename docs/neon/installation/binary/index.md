---
displayed_sidebar: docsSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Binary

## Downloading

First, grab the latest binary from the [release](https://github.com/bhuisgen/neon-oss/releases) page.

## Extracting

Extract the downloaded archive to get the `neon` binary.

<Tabs groupId="os">

<TabItem value="linux" label="Linux" default>

```shell
$ tar -xvzf neon_linux_amd64.tar.gz
```

</TabItem>

<TabItem value="darwin" label="macOS">

```shell
$ tar -xvzf neon_darwin_amd64.tar.gz
```

</TabItem>

</Tabs>

## Installing

Copy the binary where you want like your project directory or your `PATH` but make sure that the file has the execute permission.

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
$ neon --version
```

It should output the `neon` binary version.
