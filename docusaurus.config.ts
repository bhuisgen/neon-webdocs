import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Neon Documentation",
  tagline: "Neon Documentation",
  favicon: "img/favicon.ico",
  url: "https://bhuisgen.github.io",
  baseUrl: "/neon-webdocs",
  organizationName: "bhuisgen",
  projectName: "neon-webdocs",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        sitemap: {
          ignorePatterns: ["/search"],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        gtag: {
          trackingID: "G-4M4927PRN5",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Neon",
      logo: {
        alt: "Neon Logo",
        src: "img/logo.png",
      },
      hideOnScroll: true,
      items: [
        {
          type: "doc",
          docId: "neon/index",
          position: "left",
          label: "Documentation",
        },
        {
          type: "search",
          position: "right",
        },
        {
          to: "https://github.com/bhuisgen/neon-oss",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright ${new Date().getFullYear()} Neon Project`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo512.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(255, 255, 255)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/logo512.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/logo512.svg",
            color: "rgb(0, 0, 0)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/logo512.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        docsRouteBasePath: "/",
        hashed: true,
      },
    ],
  ],
};

export default config;
