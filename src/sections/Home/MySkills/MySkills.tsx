import { MarginContainer, Titles } from '@/components';
import Conten from '@/components/Conten/Conten';
import LogoCarousel from '@/components/LogoCarousel/LogoCarousel';
import { LOGO_CAROUSEL } from '@/constants/images';

import styles from './my-skills.module.scss';

export default function MySkills() {
	return (
		<MarginContainer>
			<div className={styles.container}>
				<div className={styles.myskills} id='myskills'></div>
				<div className={styles.container__content}>
					<div className={styles.title}>
						<Titles title={'Mis Habilidades'} />
					</div>
					<div className={styles.container__content__description}>
						<Conten
							parafone={
								'Como desarrollador frontend, fusiono diseño y funcionalidad para crear experiencias web modernas, responsivas y centradas en el usuario.'
							}
							spanone={''}
							paraftwo={'Domino '}
							spantwo={'HTML5, CSS3 y JavaScript, '}
							parafthree={
								'los cimientos del desarrollo web, con los que construyo interfaces limpias, accesibles y dinámicas'
							}
							spanthree={''}
							paraffour={' Utilizo '}
							spanfour={'React y Next.js '}
							parafsix={
								'para llevar estas experiencias al siguiente nivel, incorporando renderizado eficiente, rutas optimizadas y una estructura escalable lista para producción.'
							}
							parafseven={
								'Además, gestiono versiones de forma profesional con Git y GitHub, lo que garantiza un flujo de trabajo limpio, colaborativo y rastreable en cada proyecto.'
							}
							parafeight={'Mi enfoque combina '}
							spanfive={'rendimiento, estética y funcionalidad. '}
							parafnine={
								'Cada línea de código busca no solo funcionar, sino destacar.'
							}
						/>
					</div>
				</div>
				<LogoCarousel itemsList={LOGO_CAROUSEL} />
			</div>
		</MarginContainer>
	);
}
