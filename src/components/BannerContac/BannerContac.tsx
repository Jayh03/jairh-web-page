import Link from 'next/link';
import EmailIcon from '../icons/EmailIcon';

import styles from './banner-contac.module.scss';

export default function BannerContac() {
	return (
		<div className={styles.banner}>
			<div className={styles.banner__info}>
				<div className={styles.banner__info__one}>
					<h3>{'Contáctame y llevemos tu idea al siguiente nivel'}</h3>
					<p>
						{
							'Estoy disponible para trabajos freelance, colaboraciones o posiciones full time.'
						}
					</p>
				</div>
				<div className={styles.banner__info__two}>
					<Link
						href={'mailto:jhenriquezpallares@gmail.com'}
						className={styles.button}>
						{'Contáctame'}
						<EmailIcon />
					</Link>
				</div>
			</div>
		</div>
	);
}
