import React from 'react';
import { Raleway } from 'next/font/google';
import { Metadata } from 'next';
import { metadataStructure } from '@/helpers';
import { metadataDashboard } from '@/json';

import '@/styles/globals.css';

const raleway = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900']
});

export const metadata: Metadata = metadataStructure(metadataDashboard);

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body className={raleway.className}>{children}</body>
		</html>
	);
}
