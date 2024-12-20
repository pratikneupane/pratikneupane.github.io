/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons'
      },
    ],
  },
};

module.exports = nextConfig;
