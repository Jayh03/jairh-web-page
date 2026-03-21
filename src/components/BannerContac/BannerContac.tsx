'use client';
import Link from 'next/link';
import EmailIcon from '../icons/EmailIcon';
import { useTranslations } from 'next-intl';

import styles from './banner-contac.module.scss';

export default function BannerContac() {
	const t = useTranslations('Contact');

	return (
		<div className={styles.banner}>
			<div className={styles.banner__info}>
				<div className={styles.banner__info__one}>
					<h3>{t('bannerTitle')}</h3>
					<p>{t('bannerDescription')}</p>
				</div>
				<div className={styles.banner__info__two}>
					<Link
						href={'mailto:jhenriquezpallares@gmail.com'}
						className={styles.button}>
						{t('buttonContact')}
						<EmailIcon />
					</Link>
				</div>
			</div>
		</div>
	);
}
