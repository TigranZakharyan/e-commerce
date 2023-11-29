/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['www.pngmart.com']
	},
	webpack: (config, context) => {
		// Enable polling based on env variable being set
		if(process.env.NEXT_WEBPACK_USEPOLLING) {
			config.watchOptions = {
				poll: 500,
				aggregateTimeout: 300
			}
		}
		return config
	},
}

module.exports = nextConfig
