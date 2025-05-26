import { Metadata } from 'next';
import { IMetadataStructure } from '@/interfaces';

export default function metadataStructure({
	url,
	title,
	description,
	image,
	keywords
}: IMetadataStructure): Metadata {
	return {
		metadataBase: new URL(url),
		title: title,
		description: description,
		authors: [
			{
				name: 'Jair Henríquez',
				url: 'https://www.jairhenriquez.com/'
			}
		],
		keywords: keywords,
		applicationName: 'Jair Henríquez',
		generator: 'Next.js',
		referrer: 'origin',
		twitter: {
			card: 'summary_large_image',
			site: url,
			description: description,
			title: title,
			images: {
				url: image,
				alt: title,
				type: 'image/jpeg',
				width: '1200',
				height: '628'
			}
		},
		openGraph: {
			determiner: 'a',
			title: title,
			description: description,
			siteName: 'Jair Henríquez',
			locale: 'es_CO',
			images: {
				url: image,
				alt: title,
				type: 'image/jpeg',
				width: '1200',
				height: '628'
			},
			url: url,
			countryName: 'Colombia',
			ttl: 10
		},
		creator: 'Jair Henríquez',
		publisher: 'Jair Henríquez',
		robots: {
			index: true,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false
			}
		},
		formatDetection: {
			telephone: true,
			date: true,
			address: true,
			email: true,
			url: true
		},
		abstract: description,
		category: 'Desarrollo Web',
		classification: 'Desarrollo web, diseño web',
		alternates: {
			canonical: {
				title: title,
				url: url
			},
			languages: {
				'es-CO': url
			}
		},
		appLinks: {
			web: {
				url: url,
				should_fallback: true
			}
		},
		icons: {
			icon: [
				{
					url: '',
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/icons/favicon/favicon-16x16.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/icons/favicon/favicon-32x32.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'icon',
					type: 'image/png',
					sizes: '192x192',
					href: '/icons/favicon/android-icon-192x192.png',
					fetchPriority: 'low'
				}
			],
			apple: [
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '180x180',
					href: '/icons/favicon/apple-icon-180x180.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '152x152',
					href: '/icons/favicon/apple-icon-152x152.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '120x120',
					href: '/icons/favicon/apple-icon-144x144.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '114x114',
					href: '/icons/favicon/apple-icon-114x114.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '120x120',
					href: '/icons/favicon/apple-icon-120x120.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '114x114',
					href: '/icons/favicon/apple-icon-114x114.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '76x76',
					href: '/icons/favicon/apple-icon-76x76.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '72x72',
					href: '/icons/favicon/apple-icon-72x72.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '60x60',
					href: '/icons/favicon/apple-icon-60x60.png',
					fetchPriority: 'low'
				},
				{
					url: '',
					rel: 'apple-touch-icon',
					type: 'image/png',
					sizes: '57x57',
					href: '/icons/favicon/apple-icon-57x57.png',
					fetchPriority: 'low'
				}
			]
		}
	};
}
