/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Ensures Next.js uses static export mode for Netlify
    images: {
       unoptimized: true, // Fixes potential image optimization issues on Netlify
    },
    devIndicators: false, // Disables Next.js development indicators
 };
 
 export default nextConfig;
 