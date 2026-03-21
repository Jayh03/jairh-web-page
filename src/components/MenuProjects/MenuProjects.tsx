'use client';
import { useState } from 'react';
import { ICarouselTypeThree } from '@/interfaces/components/MenuServices/MenuServices';
import ContentBlock from './ContentBlock/ContentBlock';
import { useTranslations } from 'next-intl';

import styles from './menu-projects.module.scss';

export default function MenuProjects() {
	const [dataSelected] = useState(0);
	const t = useTranslations('ProjectsCards');

	const services: Array<ICarouselTypeThree> = [
		{
			itemsList: [
				{
					title: t('goodClub.title'),
					description: t('goodClub.description'),
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Good-clup.webp',
					link: 'https://www.goodclub.com.co/',
					titlebotton: t('buttonText'),
					iconType: 'code',
					category: 'Health & Fitness',
					tags: ['Next.js', 'TypeScript', 'Sass'],
					thumbnails: [
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Good-clup.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Good-clup.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Good-clup.webp'
					]
				},
				{
					title: t('planetIp.title'),
					description: t('planetIp.description'),
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Planet-ip.webp',
					link: 'https://www.planet-ip.com/es',
					titlebotton: t('buttonText'),
					iconType: 'globe',
					category: 'Web App',
					tags: ['Next.js', 'TypeScript', 'CSS'],
					thumbnails: [
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Planet-ip.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Planet-ip.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Planet-ip.webp'
					]
				},
				{
					title: t('asdiplast.title'),
					description: t('asdiplast.description'),
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Asdiplast.webp',
					link: 'https://www.asdiplast.com/',
					titlebotton: t('buttonText'),
					iconType: 'box',
					category: 'E-Commerce',
					tags: ['React', 'Tailwind', 'SCSS'],
					thumbnails: [
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Asdiplast.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Asdiplast.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/agency-topty_images_Asdiplast.webp'
					]
				},
				{
					title: t('corchoAsociados.title'),
					description: t('corchoAsociados.description'),
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Corcho-img-web.webp',
					link: 'https://www.corchoasociados.com/',
					titlebotton: t('buttonText'),
					iconType: 'briefcase',
					category: 'Legal & Business',
					tags: ['Vue', 'SCSS', 'Node.js'],
					thumbnails: [
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Corcho-img-web.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Corcho-img-web.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Corcho-img-web.webp'
					]
				},
				{
					title: t('opticaNapoles.title'),
					description: t('opticaNapoles.description'),
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/OpticaNapoles.webp',
					link: 'https://opticanapoles.com/',
					titlebotton: t('buttonText'),
					iconType: 'glasses',
					category: 'E-Commerce',
					tags: ['WordPress', 'WooCommerce', 'PHP'],
					thumbnails: [
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/OpticaNapoles.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/OpticaNapoles.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/OpticaNapoles.webp'
					]
				},
				{
					title: t('primavera.title'),
					description: t('primavera.description'),
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Primavera.webp',
					link: 'https://primavera-web-page.vercel.app/',
					titlebotton: t('buttonText'),
					iconType: 'leaf',
					category: 'Fashion',
					tags: ['React', 'Tailwind', 'Framer Motion'],
					thumbnails: [
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Primavera.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Primavera.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Primavera.webp'
					]
				},
				{
					title: t('amalfiSpa.title'),
					description: t('amalfiSpa.description'),
					image:
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/AmalfiSpa.webp',
					link: 'https://amalfi-spa-web-page.vercel.app/es',
					titlebotton: t('buttonText'),
					iconType: 'drop',
					category: 'Spa & Beauty',
					tags: ['Next.js', 'Sass', 'Node.js'],
					thumbnails: [
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/AmalfiSpa.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/AmalfiSpa.webp',
						'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/AmalfiSpa.webp'
					]
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
