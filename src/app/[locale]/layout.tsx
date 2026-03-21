import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import { Raleway } from 'next/font/google';
import { metadataDashboard, metadataDashboardUS } from '@/json';
import { metadataStructure } from '@/helpers';

import '@/styles/globals.css';

const raleway = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	preload: true
});

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params: { locale }
}: Omit<Props, 'children'>) {
	const dataMetadata =
		locale === 'es' ? metadataDashboard : metadataDashboardUS;

	return metadataStructure(dataMetadata);
}

export default async function LocaleLayout({
	children,
	params: { locale }
}: Props) {
	// Enable static rendering
	setRequestLocale(locale);

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages({ locale });

	return (
		<html lang={locale}>
			<body className={raleway.className}>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
