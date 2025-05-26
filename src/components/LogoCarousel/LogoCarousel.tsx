import Logo from './logos/logos';
import styles from './logo-carousel.module.scss';

import ILogoCarousel from '@/interfaces/components/Logocarousel/LogoCarousel';

export default function LogoCarousel({ itemsList }: ILogoCarousel) {
	return (
		<div className={styles.container}>
			<div className={styles.container__logos}>
				<div className={styles.container__logos__slide}>
					{itemsList &&
						itemsList.map((card: any, index: number) => (
							<Logo {...card} key={index} />
						))}
				</div>

				<div className={styles.container__logos__slide}>
					{itemsList &&
						itemsList.map((card: any, index: number) => (
							<Logo {...card} key={index} />
						))}
				</div>
			</div>
		</div>
	);
}
