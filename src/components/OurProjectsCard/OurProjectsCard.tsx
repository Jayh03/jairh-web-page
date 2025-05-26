import Image from 'next/image';
import Button from '../Button/Button';
import { IOurServicesCard } from '@/interfaces/components/OurServicesCard/IOurServicesCard';

import styles from './our-projects-card.module.scss';

export default function OurProjectsCard({
	title,
	description,
	image,
	link,
	titlebotton
}: IOurServicesCard) {
	return (
		<div className={styles.container}>
			<div className={styles.container__image}>
				<Image
					width={392}
					height={240}
					src={image}
					alt={`proyactos jair: ${title}`}
				/>
			</div>

			<div className={styles.container__content}>
				<div className={styles.container__content__info}>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>

				<Button title={titlebotton} url={link} />
			</div>
		</div>
	);
}
