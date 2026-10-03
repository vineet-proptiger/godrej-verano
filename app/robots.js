export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://godrejveranosector63a.co.in/sitemap.xml',
  }
}
