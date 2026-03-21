'use client';
import { DesignsGrid, MarginContainer } from '@/components';
import type { IDesignItem } from '@/components/DesignsGrid/DesignsGrid';
import { useTranslations } from 'next-intl';
import styles from './my-designs.module.scss';

export default function MyDesigns() {
	const t = useTranslations('MyDesigns');

	const designs: IDesignItem[] = [
		{
			image:
				'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/VisionStore.webp',
			alt: t('items.design1.label'),
			category: t('items.design1.category'),
			label: t('items.design1.label')
		},
		{
			image:
				'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Primavera.webp',
			alt: t('items.design2.label'),
			category: t('items.design2.category'),
			label: t('items.design2.label')
		},
		{
			image:
				'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/AmalfiSpa.webp',
			alt: t('items.design3.label'),
			category: t('items.design3.category'),
			label: t('items.design3.label')
		},
		{
			image:
				'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/InventoryProTwo.webp',
			alt: t('items.design4.label'),
			category: t('items.design4.category'),
			label: t('items.design4.label')
		},
		{
			image:
				'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/Transportex.webp',
			alt: t('items.design5.label'),
			category: t('items.design5.category'),
			label: t('items.design5.label')
		}
	];

	const heading = t.rich('heading', {
		highlight: (chunks) => (
			<span className={styles.headingHighlight}>{chunks}</span>
		)
	});

	return (
		<div className={styles.container}>
			<div className={styles.mydesigns} id='mydesigns'></div>
			<MarginContainer>
				<header className={styles.header}>
					<h2 className={styles.heading}>{heading}</h2>
					<p className={styles.subheading}>{t('description')}</p>
				</header>
				<DesignsGrid items={designs} />
			</MarginContainer>
		</div>
	);
}
