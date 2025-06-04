'use client';
import { BannerContac, MarginContainer, Titles } from '@/components';
import LogoCarousel from '@/components/LogoCarousel/LogoCarousel';
import { LOGO_CAROUSEL } from '@/constants/images';

import styles from './contac.module.scss';

export default function Contac() {
	return (
		<div className={styles.container}>
			<div className={styles.contact} id='contact'></div>
			<MarginContainer>
				<div className={styles.container__content}>
					<Titles title={'Contacto'} />
					<BannerContac />
				</div>
				<LogoCarousel itemsList={LOGO_CAROUSEL} />
			</MarginContainer>
		</div>
	);
}
