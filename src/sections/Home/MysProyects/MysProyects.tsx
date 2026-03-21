'use client';
import { MarginContainer, MenuProjects } from '@/components';
import { useTranslations } from 'next-intl';

import styles from './mys-proyects.module.scss';

export default function MyProjects() {
	const t = useTranslations('MyProjects');

	const heading = t.rich('heading', {
		highlight: (chunks) => (
			<span className={styles.headingHighlight}>{chunks}</span>
		)
	});

	return (
		<div className={styles.container}>
			<div className={styles.myprojects} id='myprojects'></div>
			<MarginContainer>
				<header className={styles.header}>
					<h2 className={styles.heading}>{heading}</h2>
					<p className={styles.subheading}>{t('description')}</p>
				</header>
				<MenuProjects />
			</MarginContainer>
		</div>
	);
}
