'use client';
import { ComponentProps } from 'react';
import Link from 'next/link';

import styles from './navigation-link.module.scss';
import { useNavigation } from './NavigationContext';

export default function NavigationLink({
	href,
	...rest
}: ComponentProps<typeof Link>) {
	const { activeLink, setActiveLink } = useNavigation();
	const isActive = activeLink === href;

	const handleClick = () => {
		if (typeof href === 'string') {
			setActiveLink(href);
		}
	};

	return (
		<Link
			aria-current={isActive ? 'page' : undefined}
			role='link'
			className={`${styles.link} ${isActive ? styles.active : ''}`}
			href={href}
			onClick={handleClick}
			{...rest}
		/>
	);
}
