/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ['example.com', 'www.thehighereducationreview.com', "www1.grc.nasa.gov", "encrypted-tbn0.gstatic.com", "utfs.io"],
    },
}

module.exports = nextConfig
