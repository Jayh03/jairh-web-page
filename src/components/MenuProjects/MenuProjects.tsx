'use client';
import { useState } from 'react';
import { ICarouselTypeThree } from '@/interfaces/components/MenuServices/MenuServices';
import ContentBlock from './ContentBlock/ContentBlock';

import styles from './menu-projects.module.scss';

export default function MenuProjects() {
	const [dataSelected] = useState(0);

	const services: Array<ICarouselTypeThree> = [
		{
			itemsList: [
				{
					title: 'Good Club',
					description:
						'Con Next.js y TypeScript, implementando desde la navegación dinámica hasta formularios personalizados y diseño responsive. Utilicé buenas prácticas de accesibilidad y optimización para mejorar la velocidad de carga.',
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Good-clup.webp',
					link: 'https://www.goodclub.com.co/',
					titlebotton: 'ver proyecto'
				},
				{
					title: 'Planet IP',
					description:
						'Con Next.js y TypeScript, implementando desde la navegación dinámica hasta formularios personalizados y diseño responsive. Utilicé buenas prácticas de accesibilidad y optimización para mejorar la velocidad de carga.',
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Planet-ip.webp',
					link: 'https://www.planet-ip.com/es',
					titlebotton: 'ver proyecto'
				},
				{
					title: 'Asdiplast',
					description:
						'Con Next.js y TypeScript, implementando desde la navegación dinámica hasta formularios personalizados y diseño responsive. Utilicé buenas prácticas de accesibilidad y optimización para mejorar la velocidad de carga.',
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Asdiplast.webp',
					link: 'https://www.asdiplast.com/',
					titlebotton: 'ver proyecto'
				},
				{
					title: 'Corcho Asociados',
					description:
						'Con Next.js y TypeScript, implementando desde la navegación dinámica hasta formularios personalizados y diseño responsive. Utilicé buenas prácticas de accesibilidad y optimización para mejorar la velocidad de carga.',
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Corcho-img-web.webp',
					link: 'https://www.corchoasociados.com/',
					titlebotton: 'ver proyecto'
				}
			]
		}
	];
	return (
		<div className={styles.container}>
			<div className={styles.container__pages}>
				{services.map((item: any, index: number) => (
					<ContentBlock
						key={index}
						info={services[index].itemsList}
						isSelected={dataSelected === index}
					/>
				))}
			</div>
		</div>
	);
}
