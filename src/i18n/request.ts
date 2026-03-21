import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
	// Obtener el locale de la request o usar el default
	let locale = await requestLocale;

	// Validar que el locale entrante es válido
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../json/dictionaries/${locale}.json`)).default
	};
});
