'use client';
import { MouseEvent, useCallback, useRef } from 'react';

import styles from '../my-skills.module.scss';

type Stat = {
	value: string;
	label: string;
};

type Props = {
	stats: Stat[];
};

export default function SkillsStats({ stats }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	const onMouseDown = useCallback((e: MouseEvent) => {
		isDragging.current = true;
		startX.current = e.pageX - (ref.current?.offsetLeft ?? 0);
		scrollLeft.current = ref.current?.scrollLeft ?? 0;
	}, []);

	const onMouseMove = useCallback((e: MouseEvent) => {
		if (!isDragging.current) return;
		e.preventDefault();
		const x = e.pageX - (ref.current?.offsetLeft ?? 0);
		if (ref.current)
			ref.current.scrollLeft = scrollLeft.current - (x - startX.current);
	}, []);

	const stopDrag = useCallback(() => {
		isDragging.current = false;
	}, []);

	return (
		<div
			ref={ref}
			className={styles.statsRow}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={stopDrag}
			onMouseLeave={stopDrag}>
			{stats.map(({ value, label }) => (
				<div key={label} className={styles.statItem}>
					<span className={styles.statValue}>{value}</span>
					<span className={styles.statLabel}>{label}</span>
				</div>
			))}
		</div>
	);
}
