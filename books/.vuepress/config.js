module.exports = {
  title: 'Digital Creationism',
  description: 'Digital Creationism respects, appreciates and celebrates all religions :)',
  locales: {
    '/': {
      lang: 'en',
      title: 'Digital Creationism',
      description: 'A collaborative project to build the Bible in didital context. You can contribute, too!'
    },
    '/ja/': {
      lang: 'ja',
      title: 'デジタル創造論',
      description: 'みんなで作るデジタル時代のバイブル。'
    },
    '/ru/': {
      lang: 'ru',
      title: 'Цифровой креационизм',
      description: 'Совместный проект по созданию Библии в цифровом контексте. Ты тоже можешь внести свой вклад!'
    },
    '/fi/': {
      lang: 'fi',
      title: 'Digitaalinen kreationismi',
      description: ''
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif|Roboto+Condensed|Roboto+Slab&display=swap' }],
  ],
  ga: 'UA-138344651-1',
  markdown: {
    anchor: {
      permalinkSpace: false
    }
  }
}
