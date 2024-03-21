/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/register",
          destination: "https://hack-nu-2024-registration.vercel.app/",
        },
      ],
    };
  },
};

export default nextConfig;
