import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bcc.binaricbyte.com',
      },

      {
        protocol: 'https',
        hostname: 'images.grnconnect.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  eslint: {
    dirs: ['app', 'lib', 'src'],
  },
  reactStrictMode: false,

  async headers() {
    return [
      {
        source: '/flights/search',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/hotels/search',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/search',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
