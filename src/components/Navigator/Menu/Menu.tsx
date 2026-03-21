'use client';
import { NavigationLink, LanguageSwitcher } from '@/components';
import { useTranslations } from 'next-intl';
import { NavigationProvider } from '../NavigationLink/NavigationContext';

import styles from './menu.module.scss';

export default function Menu() {
	const t = useTranslations('Navigation');

	return (
		<NavigationProvider>
			<ul role='list' className={styles.container}>
				<li className={styles.item} role='listitem'>
					<NavigationLink href={'#aboutme'}>{t('aboutMe')}</NavigationLink>
				</li>
				<li className={styles.item} role='listitem'>
					<NavigationLink href={'#myskills'}>{t('mySkills')}</NavigationLink>
				</li>
				<li className={styles.item} role='listitem'>
					<NavigationLink href={'#myprojects'}>
						{t('myProjects')}
					</NavigationLink>
				</li>
				{/*<li className={styles.item} role='listitem'>
				<NavigationLink href={'#mycomponnet'}>
					{'galeía de componentes'}
				</NavigationLink>
			</li>*/}
				<li className={styles.item} role='listitem'>
					<NavigationLink href={'#contact'}>{t('contact')}</NavigationLink>
				</li>
			</ul>
		</NavigationProvider>
	);
}
