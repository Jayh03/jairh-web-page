import Image from 'next/image';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

import styles from './Article-one.module.scss';

export default function ArticleOne() {
	const infoButtons: Array<{
		title: string;
		url: string;
		icon: string;
		color?: string;
		blank?: boolean;
	}> = [
		{
			title: 'Ver proyectos',
			url: '#myprojects',
			icon: '/image/Abajo.svg'
		},
		{
			title: 'Descarcar CV',
			url: 'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/documents/hoja_de_vida_Jair_Henriquez.pdf',
			icon: '/image/descargaIcon.svg',
			color: '#0A1117',
			blank: true
		}
	];

	return (
		<div className={styles.container}>
			<div className={styles.container__info}>
				<div className={styles.container__info__text}>
					<div className={styles.container__info__text__one}>
						<h1>
							{'Hola, soy'}
							<br />
							<span className={styles.typewriter}>{'Jair Henriquez...'}</span>
						</h1>
						<strong>{'Desarrollador Frontend'}</strong>
					</div>
					<p>
						{
							'Apasionado por crear y desarrollar sitios web atractivos y funcionales.'
						}
					</p>
				</div>
				<div className={styles.container__info__bottons}>
					{infoButtons &&
						infoButtons.map(({ title, url, icon, color, blank }, index) => (
							<ButtonCustom
								key={index}
								title={title}
								url={url}
								icon={icon}
								colorBackground={color}
								isBorder={true}
								onTarget={blank}
							/>
						))}
				</div>
			</div>

			<div className={styles.container__image}>
				<Image
					className={styles.imageMobile}
					src='https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/aboutme.webp'
					alt='Jair Henríquez'
					width={470}
					height={440}
					quality={75}
					priority={true}
					loading='eager'
				/>
			</div>
		</div>
	);
}
