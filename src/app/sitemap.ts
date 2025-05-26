import { MetadataRoute } from 'next';
import { BASE_URL } from '@/constants';

const pages: Array<string> = ['/home'];

export default function sitemap(): MetadataRoute.Sitemap {
	const currentDate: Date = new Date();

	return pages.map((path: string) => ({
		url: `${BASE_URL}/${path}`,
		lastModified: currentDate,
		changeFrequency: 'weekly',
		priority: 0.8
	}));
}
