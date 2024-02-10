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
              label: "Store",
              items: [
                "neon/configuration/store/overview/index",
                "neon/configuration/store/store/index",
                {
                  type: "category",
                  label: "Modules",
                  items: [
                    {
                      type: "category",
                      label: "Storage",
                      items: [
                        "neon/configuration/store/modules/storage/memory/index",
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
                      label: "Provider",
                      items: [
                        "neon/configuration/fetcher/modules/providers/file/index",
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
                      label: "Parser",
                      items: [
                        "neon/configuration/loader/modules/parsers/raw/index",
                        "neon/configuration/loader/modules/parsers/json/index",
                      ],
                    },
                  ],
                },
              ],
            },

            {
              type: "category",
              label: "Server",
              items: [
                "neon/configuration/server/overview/index",
                "neon/configuration/server/server/index",
                {
                  type: "category",
                  label: "Listeners",
                  items: [
                    "neon/configuration/server/listeners/overview/index",
                    "neon/configuration/server/listeners/listener/index",
                    {
                      type: "category",
                      label: "Modules",
                      items: [
                        "neon/configuration/server/listeners/modules/acme/index",
                        "neon/configuration/server/listeners/modules/local/index",
                        "neon/configuration/server/listeners/modules/redirect/index",
                        "neon/configuration/server/listeners/modules/tls/index",
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Sites",
                  items: [
                    "neon/configuration/server/sites/overview/index",
                    "neon/configuration/server/sites/site/index",
                    {
                      type: "category",
                      label: "Modules",
                      items: [
                        {
                          type: "category",
                          label: "Middleware",
                          items: [
                            "neon/configuration/server/sites/modules/middlewares/compress/index",
                            "neon/configuration/server/sites/modules/middlewares/header/index",
                            "neon/configuration/server/sites/modules/middlewares/logger/index",
                            "neon/configuration/server/sites/modules/middlewares/rewrite/index",
                            "neon/configuration/server/sites/modules/middlewares/static/index",
                          ],
                        },
                        {
                          type: "category",
                          label: "Handler",
                          items: [
                            "neon/configuration/server/sites/modules/handlers/empty/index",
                            "neon/configuration/server/sites/modules/handlers/feed/index",
                            "neon/configuration/server/sites/modules/handlers/file/index",
                            "neon/configuration/server/sites/modules/handlers/js/index",
                            "neon/configuration/server/sites/modules/handlers/resource/index",
                            "neon/configuration/server/sites/modules/handlers/robots/index",
                            "neon/configuration/server/sites/modules/handlers/sitemap/index",
                            "neon/configuration/server/sites/modules/handlers/template/index",
                          ],
                        },
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
