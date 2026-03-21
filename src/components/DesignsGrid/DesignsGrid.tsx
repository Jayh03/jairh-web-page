'use client';
import Image from 'next/image';
import styles from './designs-grid.module.scss';

export interface IDesignItem {
	image: string;
	alt: string;
	label?: string;
	category?: string;
}

interface Props {
	items: IDesignItem[];
}

export default function DesignsGrid({ items }: Props) {
	return (
		<div className={styles.grid}>
			{items.map((item, index) => (
				<div key={index} className={styles.card}>
					<Image
						src={item.image}
						alt={item.alt}
						fill
						sizes='(max-width: 744px) 100vw, (max-width: 1280px) 60vw, 50vw'
						className={styles.image}
						quality={100}
						priority
					/>
					<div className={styles.overlay}>
						{item.category && (
							<span className={styles.category}>{item.category}</span>
						)}
						{item.label && <span className={styles.label}>{item.label}</span>}
					</div>
				</div>
			))}
		</div>
	);
}
