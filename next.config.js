const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: !process.env.ENABLE_PWA && process.env.NODE_ENV === 'development',
})

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
});