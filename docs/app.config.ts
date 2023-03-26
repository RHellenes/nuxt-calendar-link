
export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'The best place to start your documentation.',
    image: 'http://localhost:3003/api/favicon',
    socials: {
      twitter: 'nuxtstudio',
      github: 'nuxt-themes/docus'
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})
