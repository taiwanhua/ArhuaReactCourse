module.exports = {
  title: '歡迎來到阿華的React課程',
  tagline: '',
  url: 'https://taiwanhua.github.io/ArhuaReactCourse',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'taiwanhua', // Usually your GitHub org/user name.
  projectName: 'ArhuaReactCourse', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '首頁',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/home', label: '課程說明文件', position: 'left'},
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/taiwanhua/fdtm',
          label: '課程專案程式碼',
          position: 'left',
        },
        {
          href: 'https://github.com/taiwanhua/fdtm/issues',
          label: 'GitHub問題討論區',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/doc1',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Social',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Arhua React Course,保留一切權利 Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
