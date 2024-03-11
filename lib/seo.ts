export const seo = {
  title: 'chen yuan | 开发者、learner',
  description: '我是 chenyuan， 一名软件开发工程师， 热爱开发、阅读、探索未知',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://chenyuan.site'
      : 'http://localhost:3000'
  ),
} as const
