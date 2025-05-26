import Image from 'next/image';
import { StepsLine, Titles } from '..';
import MarginContainer from '../MarginContainer/MarginContainer';
import Conten from '../Conten/Conten';

import styles from './Article-two.module.scss';

export default function ArticleTwo() {
	return (
		<MarginContainer>
			<div className={styles.container}>
				<div className={styles.container__content}>
					<div className={styles.container__content__info}>
						<div className={styles.title}>
							<Titles title={'Sobre mí'} />
						</div>
						<Conten
							parafone={
								'Soy desarrollador frontend con experiencia creando interfaces web modernas y responsivas usando'
							}
							spanone={' React.js, Next.js, TypeScript, HTML y CSS.'}
							paraftwo={
								'Me especializo en escribir código limpio, optimizado y escalable, aplicando buenas prácticas con '
							}
							spantwo={'Git y GitHub '}
							parafthree={' para el control de versiones.'}
							paraffour={'Apasionado por el '}
							spanthree={'aprendizaje '}
							paraffive={'continuo y el desarrollo de '}
							spanfour={'soluciones '}
							parafsix={'que mejoren la experiencia del usuario'}
						/>
					</div>

					<StepsLine />
				</div>
				<div className={styles.container__image}>
					<Image
						src='https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/aboutmetwo.webp'
						alt='Descripción de la imagen'
						width={500}
						height={500}
						quality={100}
					/>
				</div>
			</div>
		</MarginContainer>
	);
}
