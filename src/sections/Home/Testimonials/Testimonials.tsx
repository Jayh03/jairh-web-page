'use client';
import { MarginContainer } from '@/components';
import Titles from '@/components/Titles/Titles';
import TestimonialsCarouselTwo from '@/components/TestimonialsCarouselTwo/TestimonialsCarouselTwo';

import styles from './testimonials.module.scss';

export default function Testimonials() {
	return (
		<MarginContainer>
			<div className={styles.container}>
				<div className={styles.mycomponnet} id='mycomponnet'></div>
				<Titles title={'Galeria De Componentes'} />
				<TestimonialsCarouselTwo />
			</div>
		</MarginContainer>
	);
}
