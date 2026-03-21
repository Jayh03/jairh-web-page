import Image from 'next/image';
import Link from 'next/link';
import { IOurServicesCard } from '@/interfaces/components/OurServicesCard/IOurServicesCard';
import styles from './our-projects-card.module.scss';

function CardIcon({ type }: { type?: string }) {
	if (type === 'bolt') {
		return (
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-hidden='true'>
				<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2' />
			</svg>
		);
	}
	if (type === 'globe') {
		return (
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-hidden='true'>
				<circle cx='12' cy='12' r='10' />
				<line x1='2' y1='12' x2='22' y2='12' />
				<path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
			</svg>
		);
	}
	if (type === 'box') {
		return (
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-hidden='true'>
				<path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
			</svg>
		);
	}
	if (type === 'briefcase') {
		return (
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-hidden='true'>
				<rect x='2' y='7' width='20' height='14' rx='2' ry='2' />
				<path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
			</svg>
		);
	}
	if (type === 'leaf') {
		return (
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-hidden='true'>
				<path d='M17 8C8 10 5.9 16.17 3.82 22c1.23-1 2.54-1.5 4.18-1.5 3.71 0 5.97-2.84 6-5.5.03-2.59-1.99-5-1-8z' />
				<path d='M22 4.28c-3.14.88-5.39 2.73-6.26 5.72' />
			</svg>
		);
	}
	if (type === 'drop') {
		return (
			<svg
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-hidden='true'>
				<path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' />
			</svg>
		);
	}
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			aria-hidden='true'>
			<polyline points='16 18 22 12 16 6' />
			<polyline points='8 6 2 12 8 18' />
		</svg>
	);
}

export default function OurProjectsCard({
	title,
	description,
	image,
	link,
	titlebotton,
	category,
	iconType,
	thumbnails = []
}: IOurServicesCard) {
	return (
		<div className={styles.card}>
			<div className={styles.imageWrap}>
				<Image
					width={392}
					height={220}
					src={image}
					alt={`proyecto jair: ${title}`}
					className={styles.mainImage}
				/>
				<div className={styles.iconBadge}>
					<CardIcon type={iconType} />
				</div>
				{category && <span className={styles.categoryBadge}>{category}</span>}
			</div>

			{thumbnails.length > 0 && (
				<div className={styles.thumbStrip}>
					{thumbnails.map((src, i) => (
						<div key={i} className={styles.thumb}>
							<Image
								width={120}
								height={68}
								src={src}
								alt=''
								className={styles.thumbImg}
							/>
						</div>
					))}
				</div>
			)}

			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				<div className={styles.footer}>
					<Link
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.verMas}>
						{titlebotton} <span aria-hidden='true'>&#x2192;</span>
					</Link>
					<span className={styles.menuDots} aria-hidden='true'>
						&#x2022;&#x2022;&#x2022;
					</span>
				</div>
			</div>
		</div>
	);
}
