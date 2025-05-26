'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import Link from 'next/link';

import styles from './navigation-link.module.scss';

export default function NavigationLink({
	href,
	...rest
}: ComponentProps<typeof Link>) {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
	const isActive = pathname === href;

	return (
		<Link
			aria-current={isActive ? 'page' : undefined}
			role='link'
			className={styles.link}
			href={href}
			{...rest}
		/>
	);
}
