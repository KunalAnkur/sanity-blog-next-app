/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["graphicriver.img.customer.envatousercontent.com", "cdn.sanity.io"],
  },
};
