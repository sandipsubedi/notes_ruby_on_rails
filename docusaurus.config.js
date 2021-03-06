module.exports = {
  title: 'Sandip Subedi',
  tagline: 'Ruby on Rails Notes',
  url: 'https://rubyonrails-notes.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sandipsubedi', // Usually your GitHub org/user name.
  projectName: 'notes-rubyonrails', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sandip Subedi',
      logo: {
        alt: 'Sandip Subedi logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Ruby on Rails Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sandipsubedi/notes_ruby_on_rails',
          label: 'On GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Github',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Stack Overflow',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'LinkedIn',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sandip Subedi. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['ruby'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sandipsubedi/notes_ruby_on_rails/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sandipsubedi/notes_ruby_on_rails/tree/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
