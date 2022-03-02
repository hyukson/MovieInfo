/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "themoviedb.org"],
  },
  env: {
    NEXT_PUBLIC_MOVIE_KEY: process.env.NEXT_PUBLIC_MOVIE_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_IMG_URL: process.env.NEXT_PUBLIC_IMG_URL,
  },
};

module.exports = nextConfig;
