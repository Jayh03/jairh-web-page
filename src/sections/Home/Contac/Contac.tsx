'use client';
import { BannerContac, MarginContainer, Titles } from '@/components';
import LogoCarousel from '@/components/LogoCarousel/LogoCarousel';
import { LOGO_CAROUSEL } from '@/constants/images';
import { useTranslations } from 'next-intl';

import styles from './contac.module.scss';

export default function Contac() {
	const t = useTranslations('Contact');

	return (
		<div className={styles.container}>
			<div className={styles.contact} id='contact'></div>
			<MarginContainer>
				<div className={styles.container__content}>
					<div className={styles.titleWrapper}>
						<Titles title={t('title')} />
					</div>
					<BannerContac />
				</div>
				<LogoCarousel itemsList={LOGO_CAROUSEL} />
			</MarginContainer>
		</div>
	);
}
