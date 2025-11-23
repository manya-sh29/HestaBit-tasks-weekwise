/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: [
      "assets.startbootstrap.com",
      "randomuser.me",
      "images.unsplash.com"  
    ],
  },
};

export default nextConfig;
