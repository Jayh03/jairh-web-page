'use client';
import { BannerContac, MarginContainer, Titles } from '@/components';

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
			</MarginContainer>
		</div>
	);
}
