module.exports = {
  title: 'Vue Protect Form',
  description: 'Vue Component to protect users from leaving a form with changes',
  base: '/vue-protect-form/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/thijsvdanker/vue-protect-form' },
    ],
    sidebar: [
    {
        title: 'Introduction',
        collapsable: false,
        children: [
          '/'
        ]
    },
    {
        title: 'Installation',
        collapsable: false,
        children: [
          '/installation'
        ]
    },
    {
        title: 'Usage',
        collapsable: false,
        children: [
          '/usage/',
          '/usage/properties',
        ]
    },
    ]
  }
}
