/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"cdn.pixabay.com"
      },
      {
        protocol:"https",
        hostname:"media.istockphoto.com"
      },
      {
        protocol:"https",
        hostname:"images.pexels.com"
      }
    ]
  }
};

export default nextConfig;
