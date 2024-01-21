import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Neon Project",
  tagline: "A web server ready for serving your application",
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

  plugins: [],

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
