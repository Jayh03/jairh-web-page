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
	const clamped = Math.max(0, Math.min(activeIndex, itemsList.length - 1));

	return (
		<div className={styles.container}>
			<div
				className={styles.scrollArea}
				ref={mainCarousel}
				onScroll={(e) => handleScroll(e)}>
				<div className={styles.cardRow}>
					{itemsList.map(
						(
							{
								title,
								image,
								description,
								link,
								titlebotton,
								tags,
								thumbnails,
								category,
								iconType
							},
							index: number
						) => (
							<OurProjectsCard
								key={index}
								title={title}
								image={image}
								description={description}
								link={link}
								titlebotton={titlebotton}
								tags={tags}
								thumbnails={thumbnails}
								category={category}
								iconType={iconType}
							/>
						)
					)}
				</div>
			</div>

			<div className={styles.pagination}>
				<RoundButton
					onClick={() => {
						onLeftClick(mainCarousel, activeIndex);
						setActiveIndex(activeIndex - 1);
					}}
					disabled={buttonLeft}
					icon='/image/arrow_forward_left.svg'
				/>

				<div className={styles.dots}>
					{itemsList.map((_, i) => (
						<span
							key={i}
							className={i === clamped ? styles.pageActive : styles.pageDot}
						/>
					))}
				</div>

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
	);
}
