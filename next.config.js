/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "bistritabusiness.ro"],
  },
  ssg: false
};

module.exports = nextConfig;
