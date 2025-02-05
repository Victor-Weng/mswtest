import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // needed to fix ./msw/browser issues
    webpack: (config, { isServer }) => {
        if (isServer) {
            // Next.js server build => ignore msw/browser
            if (Array.isArray(config.resolve.alias)) {
                config.resolve.alias.push({
                    name: "msw/browser",
                    alias: false,
                });
            } else {
                config.resolve.alias["msw/browser"] = false;
            }
        } else {
            // Browser build => ignore msw/node
            if (Array.isArray(config.resolve.alias)) {
                config.resolve.alias.push({ name: "msw/node", alias: false });
            } else {
                config.resolve.alias["msw/node"] = false;
            }
        }
        return config;
    },
};

export default nextConfig;
