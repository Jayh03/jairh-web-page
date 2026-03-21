'use client';
import React from 'react';

import styles from './ValuesGrid.module.scss';
import { ValueItem } from '../types';

export default function ValuesGrid({ items }: { items: ValueItem[] }) {
	return (
		<div className={styles.valuesGrid}>
			{items.map(({ key, icon, title, description }) => (
				<div key={key} className={styles.valueCard}>
					<div className={styles.valueHeader}>
						<div className={styles.valueIconWrap}>
							{React.cloneElement(icon, {
								className: [styles.valueIcon, icon.props.className]
									.filter(Boolean)
									.join(' ')
							})}
						</div>
						<p className={styles.valueTitle}>{title}</p>
					</div>
					<p className={styles.valueDescription}>{description}</p>
				</div>
			))}
		</div>
	);
}
