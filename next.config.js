/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'private-user-images.githubusercontent.com',
            },
        ],
    },
}

module.exports = nextConfig
