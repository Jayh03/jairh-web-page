import Image from 'next/image';
import { IVerticalCarousel } from '@/interfaces';

import styles from './vertical-carousel.module.scss';

export default function VerticalCarousel({
	itemsList,
	itemsListTwo
}: IVerticalCarousel) {
	return (
		<section className={styles.container}>
			<div className={styles.container__center}>
				<div className={styles.container__center__cards}>
					{itemsList &&
						itemsList.map((card: any, index: number) => (
							<div
								key={index}
								className={styles.container__center__cards__images}>
								<div className={styles.container__center__cards__images__one}>
									<Image
										className={styles.image}
										width={300}
										height={180}
										src={itemsList[index].image}
										alt={itemsList[index].altImage}
										quality={100}
									/>
								</div>
								<div className={styles.container__center__cards__images__two}>
									<Image
										className={styles.image}
										width={300}
										height={180}
										src={itemsListTwo[index].image}
										alt={itemsListTwo[index].altImage}
										quality={100}
									/>
								</div>
							</div>
						))}
				</div>
				<div className={styles.container__center__cards}>
					{itemsList &&
						itemsList.map((card: any, index: number) => (
							<div
								key={index}
								className={styles.container__center__cards__images}>
								<div className={styles.container__center__cards__images__one}>
									<Image
										className={styles.image}
										width={572}
										height={704}
										src={itemsList[index].image}
										alt={itemsList[index].altImage}
										quality={100}
									/>
								</div>
								<div className={styles.container__center__cards__images__two}>
									<Image
										className={styles.image}
										width={572}
										height={704}
										src={itemsListTwo[index].image}
										alt={itemsListTwo[index].altImage}
										quality={100}
									/>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
