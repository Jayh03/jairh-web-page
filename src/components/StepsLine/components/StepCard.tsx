'use client';
import React from 'react';

import styles from '../steps-line.module.scss';

type Props = {
	icon: React.ReactNode;
	title: string;
	subtitle: string;
};

export default function StepCard({ icon, title, subtitle }: Props) {
	return (
		<div className={styles.stepCard}>
			<div className={styles.iconWrap}>{icon}</div>
			<p className={styles.stepTitle}>{title}</p>
			<p className={styles.stepSubtitle}>{subtitle}</p>
		</div>
	);
}
