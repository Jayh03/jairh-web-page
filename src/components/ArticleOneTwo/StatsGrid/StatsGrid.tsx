'use client';
import React from 'react';

import styles from './StatsGrid.module.scss';
import { StatItem } from '../types';

export default function StatsGrid({ items }: { items: StatItem[] }) {
	const iconVariantClassName: Record<StatItem['variant'], string> = {
		blue: styles.statIconBlue,
		pink: styles.statIconPink,
		orange: styles.statIconOrange,
		yellow: styles.statIconYellow
	};

	return (
		<div className={styles.statsGrid}>
			{items.map(({ key, icon, variant, value, label }) => (
				<div key={key} className={styles.statCard}>
					<div
						className={`${styles.statIconWrap} ${
							iconVariantClassName[variant]
						}`}>
						{React.cloneElement(icon, {
							className: [styles.statIcon, icon.props.className]
								.filter(Boolean)
								.join(' ')
						})}
					</div>
					<p className={styles.statValue}>{value}</p>
					<p className={styles.statLabel}>{label}</p>
				</div>
			))}
		</div>
	);
}
