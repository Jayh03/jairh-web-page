'use client';
import React from 'react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import ArrowRigth from '../icons/ArrowRigth';
import ArrowLeft from '../icons/ArrowLeft';

import styles from './testimonials-carousel-two.module.scss';

interface Testimonial {
	id: number;
	name: string;
	position: string;
	avatar: string;
	text: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Carlos Méndez',
		position: 'Gerente General',
		avatar: '/image/aboutmetwo.webp',
		text: 'El equipo de Corcho Asociados ha sido un aliado fundamental en nuestra gestión tributaria. Nos brindaron una asesoría clara, personalizada y con resultados reales. Su capacidad para anticiparse a los requerimientos de la DIAN y guiarnos paso a paso fue clave para lograr una devolución eficiente y sin contratiempos.'
	},
	{
		id: 2,
		name: 'Carlos Méndez',
		position: 'Gerente General',
		avatar: '/image/aboutmetwo.webp',
		text: 'El equipo de Corcho Asociados ha sido un aliado fundamental en nuestra gestión tributaria. Nos brindaron una asesoría clara, personalizada y con resultados reales. Su capacidad para anticiparse a los requerimientos de la DIAN y guiarnos paso a paso fue clave para lograr una devolución eficiente y sin contratiempos.'
	},
	{
		id: 3,
		name: 'Carlos Méndez',
		position: 'Gerente General',
		avatar: '/image/aboutmetwo.webp',
		text: 'El equipo de Corcho Asociados ha sido un aliado fundamental en nuestra gestión tributaria. Nos brindaron una asesoría clara, personalizada y con resultados reales. Su capacidad para anticiparse a los requerimientos de la DIAN y guiarnos paso a paso fue clave para lograr una devolución eficiente y sin contratiempos.'
	},
	{
		id: 4,
		name: 'Carlos Méndez',
		position: 'Gerente General',
		avatar: '/image/aboutmetwo.webp',
		text: 'El equipo de Corcho Asociados ha sido un aliado fundamental en nuestra gestión tributaria. Nos brindaron una asesoría clara, personalizada y con resultados reales. Su capacidad para anticiparse a los requerimientos de la DIAN y guiarnos paso a paso fue clave para lograr una devolución eficiente y sin contratiempos.'
	}
];

export default function TestimonialCarouselTwo() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const touchStartX = useRef<number | null>(null);
	const touchEndX = useRef<number | null>(null);

	const goTo = (index: number) => {
		const total = testimonials.length;
		setCurrentIndex((index + total) % total);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.changedTouches[0].clientX;
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		touchEndX.current = e.changedTouches[0].clientX;
		if (touchStartX.current !== null && touchEndX.current !== null) {
			const distance = touchEndX.current - touchStartX.current;

			if (distance > 50) {
				goTo(currentIndex - 1);
			} else if (distance < -50) {
				goTo(currentIndex + 1);
			}
		}
		touchStartX.current = null;
		touchEndX.current = null;
	};

	return (
		<div className={styles.carouselWrapper}>
			<div className={styles.carousel}>
				<button
					aria-label='Anterior'
					className={styles.arrowLeft}
					onClick={() => goTo(currentIndex - 1)}>
					<ArrowLeft />
				</button>

				<div
					className={styles.track}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}>
					{testimonials.map((testimonial, index) => {
						const total = testimonials.length;
						let offset = index - currentIndex;

						if (offset < -1) offset += total;
						if (offset > 1) offset -= total;

						const isActive = offset === 0;
						{
							/*const isSide = offset === -1 || offset === 1;*/
						}

						return (
							<div
								key={testimonial.id}
								className={`${styles.card} ${
									isActive
										? styles.active
										: offset === 1
											? styles.nex
											: offset === -1
												? styles.pre
												: styles.hidden
								}`}>
								<div className={styles.header}>
									<div className={styles.imgeCard}>
										<Image
											src={testimonial.avatar}
											alt={testimonial.name}
											width={300}
											height={200}
											className={styles.avatar}
										/>
									</div>
									<div className={styles.descriptionCard}>
										<p className={styles.name}>{testimonial.name}</p>
										<p className={styles.position}>{testimonial.position}</p>
										<Button title={'Ver componente'} url={'/'} />
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<button
					aria-label='siguiente'
					className={styles.arrowRight}
					onClick={() => goTo(currentIndex + 1)}>
					<ArrowRigth />
				</button>
			</div>

			<div className={styles.pagination}>
				{testimonials.map((_, idx) => (
					<span
						key={idx}
						onClick={() => goTo(idx)}
						className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
					/>
				))}
			</div>
		</div>
	);
}
