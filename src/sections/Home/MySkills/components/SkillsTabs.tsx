import { ReactNode } from 'react';

import { TabKey } from '../data/skills';
import styles from '../my-skills.module.scss';

type Tab = {
	key: TabKey;
	icon: ReactNode;
	label: string;
};

type Props = {
	tabs: Tab[];
	activeTab: TabKey;
	onTabChange: (key: TabKey) => void;
};

export default function SkillsTabs({ tabs, activeTab, onTabChange }: Props) {
	return (
		<div className={styles.tabsRow}>
			{tabs.map(({ key, icon, label }) => (
				<button
					key={key}
					className={`${styles.tab} ${activeTab === key ? styles.tabActive : ''}`}
					onClick={() => onTabChange(key)}>
					{icon}
					{label}
				</button>
			))}
		</div>
	);
}
