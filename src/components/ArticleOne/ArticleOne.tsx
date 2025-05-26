import Link from 'next/link';
import Image from 'next/image';

import styles from './Article-one.module.scss';

export default function ArticleOne() {
	return (
		<div className={styles.container}>
			<div className={styles.container__info}>
				<div className={styles.container__info__text}>
					<h1>
						{'Hola, soy'}
						<br />
						<span className={styles.typewriter}>{'Jair Henriquez...|'}</span>
					</h1>
					<strong>{'Desarrollador Frontend'}</strong>
					<p>
						{
							'Apasionado por crear y desarrollar sitios web atractivos y funcionales.'
						}
					</p>
				</div>

				<Link role='link' className={styles.link} href={'#myprojects'}>
					{'Ver proyectos'}
				</Link>
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
