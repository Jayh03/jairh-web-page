import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: '**.firebasestorage.googleapis.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'umiqvfzaykwktvrpgvmt.supabase.co'
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true
			}
		];
	},
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	experimental: {
		scrollRestoration: true,
		webVitalsAttribution: ['CLS', 'LCP']
	},
	webpack: (config, { isServer }) => {
		// Suprimir advertencias específicas de next-intl
		config.infrastructureLogging = {
			level: 'error'
		};
		return config;
	}
};

export default withNextIntl(nextConfig);
