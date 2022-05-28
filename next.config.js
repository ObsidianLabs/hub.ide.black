/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Origin", value: "cross-origin"
          }
        ],
      },
    ]
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}
