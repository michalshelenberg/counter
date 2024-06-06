import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */

const nextConfig = { ...withPWA({ dest: "public" }) };

export default nextConfig;
