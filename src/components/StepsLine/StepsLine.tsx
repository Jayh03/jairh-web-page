'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './steps-line.module.scss';
import {
	IconBeaker,
	IconCode,
	IconLaunch,
	IconPenTool,
	IconPlan,
	IconWrench,
	StepCard
} from './components';

export default function StepsLine() {
	const t = useTranslations('StepsLine');

	const steps = [
		{ key: 'planning', icon: <IconPlan className={styles.stepIcon} /> },
		{ key: 'design', icon: <IconPenTool className={styles.stepIcon} /> },
		{ key: 'development', icon: <IconCode className={styles.stepIcon} /> },
		{ key: 'testing', icon: <IconBeaker className={styles.stepIcon} /> },
		{ key: 'production', icon: <IconLaunch className={styles.stepIcon} /> },
		{ key: 'maintenance', icon: <IconWrench className={styles.stepIcon} /> }
	] as const;

	return (
		<div className={styles.wrapper} aria-labelledby='process-title'>
			<h3 id='process-title' className={styles.heading}>
				{t.rich('heading', {
					highlight: (chunks) => (
						<span className={styles.headingHighlight}>{chunks}</span>
					)
				})}
			</h3>

			<div className={styles.grid}>
				{steps.map(({ key, icon }) => (
					<StepCard
						key={key}
						icon={icon}
						title={t(`steps.${key}.title`)}
						subtitle={t(`steps.${key}.subtitle`)}
					/>
				))}
			</div>
		</div>
	);
}
