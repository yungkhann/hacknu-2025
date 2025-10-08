/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://hacknu.kz",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin", "/private"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
