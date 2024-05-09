/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/original/**',
            },
            {
                protocol: 'https',
                hostname: 'images5.alphacoders.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
