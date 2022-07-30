import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "category",
      label: "Neon",
      link: {
        type: "doc",
        id: "neon/index",
      },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Getting started",
          collapsed: false,
          items: ["neon/getting-started/quick-start/index"],
        },
        {
          type: "category",
          label: "Installation",
          items: [
            "neon/installation/overview/index",
            "neon/installation/binary/index",
            "neon/installation/sources/index",
          ],
        },
        {
          type: "category",
          label: "Configuration",
          items: [
            "neon/configuration/overview/index",
            {
              type: "category",
              label: "Listeners",
              items: [
                "neon/configuration/listeners/overview/index",
                "neon/configuration/listeners/listener/index",
                {
                  type: "category",
                  label: "Modules",
                  items: [
                    "neon/configuration/listeners/modules/acme/index",
                    "neon/configuration/listeners/modules/local/index",
                    "neon/configuration/listeners/modules/redirect/index",
                    "neon/configuration/listeners/modules/tls/index",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Servers",
              items: [
                "neon/configuration/servers/overview/index",
                "neon/configuration/servers/server/index",
                {
                  type: "category",
                  label: "Modules",
                  items: [
                    {
                      type: "category",
                      label: "Middlewares",
                      items: [
                        "neon/configuration/servers/modules/middlewares/compress/index",
                        "neon/configuration/servers/modules/middlewares/header/index",
                        "neon/configuration/servers/modules/middlewares/logger/index",
                        "neon/configuration/servers/modules/middlewares/rewrite/index",
                        "neon/configuration/servers/modules/middlewares/static/index",
                      ],
                    },
                    {
                      type: "category",
                      label: "Handlers",
                      items: [
                        "neon/configuration/servers/modules/handlers/app/index",
                        "neon/configuration/servers/modules/handlers/feed/index",
                        "neon/configuration/servers/modules/handlers/file/index",
                        "neon/configuration/servers/modules/handlers/empty/index",
                        "neon/configuration/servers/modules/handlers/resource/index",
                        "neon/configuration/servers/modules/handlers/robots/index",
                        "neon/configuration/servers/modules/handlers/sitemap/index",
                        "neon/configuration/servers/modules/handlers/template/index",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Fetcher",
              items: [
                "neon/configuration/fetcher/overview/index",
                "neon/configuration/fetcher/fetcher/index",
                {
                  type: "category",
                  label: "Modules",
                  items: [
                    {
                      type: "category",
                      label: "Providers",
                      items: [
                        "neon/configuration/fetcher/modules/providers/rest/index",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Loader",
              items: [
                "neon/configuration/loader/overview/index",
                "neon/configuration/loader/loader/index",
                {
                  type: "category",
                  label: "Modules",
                  items: [
                    {
                      type: "category",
                      label: "Parsers",
                      items: [
                        "neon/configuration/loader/modules/parsers/raw/index",
                        "neon/configuration/loader/modules/parsers/json/index",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "CLI",
          items: [
            "neon/cli/overview/index",
            "neon/cli/neon init/index",
            "neon/cli/neon check/index",
            "neon/cli/neon serve/index",
            "neon/cli/neon register/index",
          ],
        },
        {
          type: "category",
          label: "API",
          items: [
            "neon/api/overview/index",
            {
              type: "category",
              label: "Objects",
              items: [
                "neon/api/objects/Handler/index",
                "neon/api/objects/Request/index",
                "neon/api/objects/Resource/index",
                "neon/api/objects/Response/index",
                "neon/api/objects/Server/index",
              ],
            },
            "neon/api/examples/index",
          ],
        },
        {
          type: "category",
          label: "Samples",
          items: [
            "neon/samples/overview/index",
            "neon/samples/hugo/index",
            "neon/samples/react/index",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
