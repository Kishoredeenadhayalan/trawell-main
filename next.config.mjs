 /** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "media.istockphoto.com", "utfs.io", "k6e1njmrbw.ufs.sh"]
  },
};

export default nextConfig;*/

/** @type {import('next').NextConfig}*/
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    {
      protocol: "https",
      hostname: "*.ufs.sh",
    },
    ],
  },
};

export default nextConfig;

