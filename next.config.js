/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wefit-react-web-test.s3.amazonaws.com'
      }
    ]
  }
};

module.exports = nextConfig;
