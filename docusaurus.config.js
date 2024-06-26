// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quad',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/quad-logo.png',

  url: 'https://github.com',
  baseUrl: '/quad-docs/',
  organizationName: 'LieOnLion', 
  projectName: 'quad-docs', 
  deploymentBranch: 'gh-pages',
  

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/LieOnLion/quad-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Quad',
        logo: {
          alt: '<logo>',
          src: 'img/quad-logo.png',
        },
        items: [
          {
            href: 'https://github.com/LieOnLion/Quad',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documents',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
              {
                label: 'Getting Started',
                to: '/category/getting-started',
              },
              {
                label: 'Tags Extended',
                to: '/category/tags-extended',
              },
              {
                label: 'Quad Extra',
                to: '/quad-extra',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@lieonlion?sub_confirmation=1',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/sA42pp6cuX',
              },
              {
                label: 'Modrinth',
                href: 'https://modrinth.com/user/LieOnLion',
              },
              {
                label: 'CurseForge',
                href: 'https://www.curseforge.com/members/lieonlion',
              },
            ],
          },
          {
            title: 'Support Me',
            items: [
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/LieOnLion',
              },
              {
                label: 'Bisect Hosting',
                href: 'https://bisecthosting.com/LieOnLion',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LieOn Studio, Quad.`,
      },
      colorMode:{
        defaultMode: 'dark',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;