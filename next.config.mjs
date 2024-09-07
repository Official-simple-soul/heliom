/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/image-loader/static-img-loader.ts',
  },
};

export default nextConfig;
