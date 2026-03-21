'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MarginContainer } from '@/components';

import { SKILLS, TabKey } from './data/skills';
import { SkillCard, SkillsHeader, SkillsStats, SkillsTabs } from './components';
import { IconBolt, IconBox, IconCode } from './components';
import styles from './my-skills.module.scss';

export default function MySkills() {
	const t = useTranslations('MySkills');
	const [activeTab, setActiveTab] = useState<TabKey>('frontendCore');

	const tabs = [
		{
			key: 'frontendCore' as const,
			icon: <IconCode />,
			label: t('tabs.frontendCore')
		},
		{
			key: 'frameworks' as const,
			icon: <IconBolt />,
			label: t('tabs.frameworks')
		},
		{
			key: 'toolsAndOthers' as const,
			icon: <IconBox />,
			label: t('tabs.toolsAndOthers')
		}
	];

	const stats = [
		{ value: '5+', label: t('statsExperience') },
		{ value: '50+', label: t('statsProjects') },
		{ value: '12+', label: t('statsTechnologies') },
		{ value: '100%', label: t('statsCommitment') }
	];

	const heading = t.rich('heading', {
		highlight: (chunks) => (
			<span className={styles.headingHighlight}>{chunks}</span>
		)
	});

	return (
		<section className={styles.section}>
			<div id='myskills' className={styles.anchor} />
			<MarginContainer>
				<SkillsHeader
					badge={t('badge')}
					heading={heading}
					subheading={t('subheading')}
				/>

				<SkillsTabs
					tabs={tabs}
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>

				<div className={styles.grid}>
					{SKILLS[activeTab].map((skill) => (
						<SkillCard
							key={skill.name}
							skill={skill}
							yearsSuffix={t('yearsSuffix')}
						/>
					))}
				</div>

				<SkillsStats stats={stats} />
			</MarginContainer>
		</section>
	);
}
