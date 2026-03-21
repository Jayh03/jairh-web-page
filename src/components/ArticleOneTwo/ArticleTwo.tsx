'use client';
import React from 'react';
import { StepsLine } from '..';
import MarginContainer from '../MarginContainer/MarginContainer';
import { useTranslations } from 'next-intl';

import styles from './Article-two.module.scss';
import {
	IconBulb,
	IconCodeTag,
	IconCalendar,
	IconCoffee,
	IconHeart,
	IconMail,
	IconPin,
	IconRocket,
	IconTarget,
	IconTrendUp,
	IconUsers
} from './aboutMeIcons';
import ProfileCard from './ProfileCard/ProfileCard';
import StatsGrid from './StatsGrid/StatsGrid';
import ValuesGrid from './ValuesGrid/ValuesGrid';

export default function ArticleTwo() {
	const t = useTranslations('AboutMe');

	const stats = [
		{
			key: 'experience',
			icon: <IconCalendar />,
			variant: 'blue',
			value: t('stats.experience.value'),
			label: t('stats.experience.label')
		},
		{
			key: 'projects',
			icon: <IconRocket />,
			variant: 'pink',
			value: t('stats.projects.value'),
			label: t('stats.projects.label')
		},
		{
			key: 'clients',
			icon: <IconUsers />,
			variant: 'orange',
			value: t('stats.clients.value'),
			label: t('stats.clients.label')
		},
		{
			key: 'coffee',
			icon: <IconCoffee />,
			variant: 'yellow',
			value: t('stats.coffee.value'),
			label: t('stats.coffee.label')
		}
	] as const;

	const principles = [
		{
			key: 'innovation',
			icon: <IconBulb />,
			title: t('values.innovation.title'),
			description: t('values.innovation.description')
		},
		{
			key: 'precision',
			icon: <IconTarget />,
			title: t('values.precision.title'),
			description: t('values.precision.description')
		},
		{
			key: 'passion',
			icon: <IconHeart />,
			title: t('values.passion.title'),
			description: t('values.passion.description')
		},
		{
			key: 'growth',
			icon: <IconTrendUp />,
			title: t('values.growth.title'),
			description: t('values.growth.description')
		}
	] as const;

	return (
		<MarginContainer>
			<section className={styles.section} aria-labelledby='about-me-title'>
				<div className={styles.backgroundCircle} aria-hidden='true' />

				<header className={styles.header}>
					<h2 id='about-me-title' className={styles.heading}>
						{t.rich('heading', {
							highlight: (chunks) => (
								<span className={styles.headingHighlight}>{chunks}</span>
							)
						})}
					</h2>
					<p className={styles.subheading}>{t('subheading')}</p>
				</header>

				<div className={styles.topGrid}>
					<ProfileCard
						initials={t('profile.initials')}
						status={t('profile.status')}
						name={t('profile.name')}
						badges={[
							{
								text: t('profile.role'),
								icon: <IconCodeTag />
							},
							{
								text: t('profile.remote'),
								icon: <IconPin />
							},
							{
								text: t('profile.available'),
								icon: <IconMail />
							}
						]}
						paragraphs={(accentClassName) => [
							t.rich('profile.paragraphOne', {
								accent: (chunks) => (
									<span className={accentClassName}>{chunks}</span>
								)
							}),
							t.rich('profile.paragraphTwo', {
								accent: (chunks) => (
									<span className={accentClassName}>{chunks}</span>
								)
							})
						]}
					/>

					<StatsGrid items={[...stats]} />
				</div>

				<ValuesGrid items={[...principles]} />

				<StepsLine />
			</section>
		</MarginContainer>
	);
}
