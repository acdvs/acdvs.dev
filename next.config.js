const PROXY_PORT = process.env.PROXY_PORT;

/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/spotify-playlist-sync/:path*',
        destination: `http://localhost:${PROXY_PORT}/spotify-playlist-sync/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/spotify-playlist-sync',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: `http://localhost:${PROXY_PORT}`,
          },
        ],
      },
    ];
  },
};
