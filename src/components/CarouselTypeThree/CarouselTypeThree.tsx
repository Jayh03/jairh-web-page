'use client';
import { useState } from 'react';
import { ICarouselTypeThree } from '@/interfaces/components/MenuServices/MenuServices';
import RoundButton from '../RoundButton/RoundButton';
import useCarousel from '@/hooks/components/useCarousel';
import { onLeftClick, onRightClick } from '@/functions/carousel-function';

import styles from './carousel-type-three.module.scss';
import OurProjectsCard from '../OurProjectsCard/OurProjectsCard';

export default function CarouselTypeThree({ itemsList }: ICarouselTypeThree) {
	const [activeIndex, setActiveIndex] = useState<number | 0>(0);

	const { mainCarousel, buttonLeft, buttonRight, handleScroll } = useCarousel();

	return (
		<div className={styles.container}>
			<div className={styles.container__center}>
				<div className={styles.button}>
					<RoundButton
						onClick={() => {
							onLeftClick(mainCarousel, activeIndex);
							setActiveIndex(activeIndex - 1);
						}}
						disabled={buttonLeft}
						icon='/image/arrow_forward_left.svg'
					/>
				</div>
				<div
					className={styles.container__center__menu__body}
					ref={mainCarousel}
					onScroll={(e) => handleScroll(e)}>
					<div className={styles.container__center__menu__body__content}>
						{itemsList.map(
							(
								{ title, image, description, link, titlebotton },
								index: number
							) => (
								<OurProjectsCard
									key={index}
									title={title}
									image={image}
									description={description}
									link={link}
									titlebotton={titlebotton}
								/>
							)
						)}
					</div>
				</div>
				<div className={styles.buttonRight}>
					<RoundButton
						onClick={() => {
							onRightClick(mainCarousel, activeIndex);
							setActiveIndex(activeIndex + 1);
						}}
						disabled={buttonRight}
						icon='/image/arrow_forward.svg'
					/>
				</div>
			</div>
		</div>
	);
}
