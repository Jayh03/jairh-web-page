'use client';
import { useEffect, useState } from 'react';

import { CIRCUMFERENCE, RADIUS, SkillItem } from '../data/skills';
import styles from '../my-skills.module.scss';

type Props = {
	skill: SkillItem;
	yearsSuffix: string;
};

const DURATION = 1200;

export default function SkillCard({ skill, yearsSuffix }: Props) {
	const [displayPercent, setDisplayPercent] = useState(0);

	useEffect(() => {
		setDisplayPercent(0);
		let start: number | null = null;
		let raf: number;

		const step = (timestamp: number) => {
			if (!start) start = timestamp;
			const progress = Math.min((timestamp - start) / DURATION, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setDisplayPercent(Math.round(eased * skill.percent));
			if (progress < 1) raf = requestAnimationFrame(step);
		};

		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [skill.percent]);

	const offset = CIRCUMFERENCE - (displayPercent / 100) * CIRCUMFERENCE;

	return (
		<div className={styles.skillCard}>
			<div className={styles.progressRing}>
				<svg width='140' height='140' viewBox='0 0 140 140' aria-hidden='true'>
					<circle
						cx='70'
						cy='70'
						r={RADIUS}
						fill='none'
						stroke='rgba(0,255,0,0.12)'
						strokeWidth='10'
					/>
					<circle
						cx='70'
						cy='70'
						r={RADIUS}
						fill='none'
						stroke='#00ff00'
						strokeWidth='10'
						strokeLinecap='round'
						strokeDasharray={CIRCUMFERENCE}
						strokeDashoffset={offset}
						transform='rotate(-90 70 70)'
						className={styles.progressArc}
					/>
				</svg>
				<span className={styles.progressText}>{displayPercent} %</span>
			</div>
			<p className={styles.skillName}>{skill.name}</p>
			<p className={styles.skillYears}>
				{skill.yearsNum} {yearsSuffix}
			</p>
			<div className={styles.skillDots}>
				{skill.dots.map((color, i) => (
					<span key={i} className={styles.dot} style={{ background: color }} />
				))}
			</div>
		</div>
	);
}
