/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    EMAILSERVICEDATA: process.env.EMAILSERVICEDATA,
    EMAILTEMPLATEDATA: process.env.EMAILTEMPLATEDATA,
    EMAILACCOUNT: process.env.EMAILACCOUNT,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
