export const emailConfig = {
  from: 'cy911110@qq.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://chenyuan.site`
      : 'http://localhost:3000',
}
