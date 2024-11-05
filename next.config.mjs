import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.usercontent.google.com'],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);