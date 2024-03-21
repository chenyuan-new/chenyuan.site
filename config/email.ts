export const emailConfig = {
  from: 'hello@chenyuan.site',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://chenyuan.site`
      : 'http://localhost:3000',
}
