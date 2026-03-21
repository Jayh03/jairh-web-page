import { ReactNode } from 'react';

import { IconSparkle } from './SkillsIcons';
import styles from '../my-skills.module.scss';

type Props = {
	badge: string;
	heading: ReactNode;
	subheading: string;
};

export default function SkillsHeader({ badge, heading, subheading }: Props) {
	return (
		<div className={styles.header}>
			<span className={styles.badge}>
				<IconSparkle />
				{badge}
			</span>
			<h2 className={styles.heading}>{heading}</h2>
			<p className={styles.subheading}>{subheading}</p>
		</div>
	);
}
