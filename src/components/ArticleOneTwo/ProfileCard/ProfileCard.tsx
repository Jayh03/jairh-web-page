'use client';
import React from 'react';

import styles from './ProfileCard.module.scss';
import { ProfileCardProps } from '../types';

function mergeClassName(a?: string, b?: string) {
	return [a, b].filter(Boolean).join(' ');
}

export default function ProfileCard({
	initials,
	status,
	name,
	badges,
	paragraphs
}: ProfileCardProps) {
	return (
		<div className={styles.profileCard}>
			{/* corners internos */}
			<span className={styles.profileCorner} data-corner='tl' />
			<span className={styles.profileCorner} data-corner='tr' />
			<span className={styles.profileCorner} data-corner='br' />
			<span className={styles.profileCorner} data-corner='bl' />

			{/* ticks superiores (opcionales) */}
			<span className={styles.profileTick} data-tick='a' aria-hidden='true' />
			<span className={styles.profileTick} data-tick='b' aria-hidden='true' />

			<div className={styles.layout}>
				<div className={styles.avatarBlock}>
					<div className={styles.avatarFrame}>
						<div className={styles.avatar} aria-hidden='true'>
							{initials}
						</div>

						<div className={styles.statusPill}>
							<span className={styles.statusDot} aria-hidden='true' />
							<span>{status}</span>
						</div>
					</div>
				</div>

				<div className={styles.rightCol}>
					<h3 className={styles.profileName}>{name}</h3>

					<div className={styles.profileBadges}>
						{badges.map(({ text, icon }, index) => (
							<span key={`${text}-${index}`} className={styles.badge}>
								{icon ? (
									<span className={styles.badgeIcon} aria-hidden='true'>
										{React.cloneElement(icon, {
											className: mergeClassName(
												styles.badgeIconSvg,
												icon.props.className
											)
										})}
									</span>
								) : null}
								{text}
							</span>
						))}
					</div>

					<div className={styles.profileBody}>
						{paragraphs(styles.accent).map((paragraph, index) => (
							<p key={index} className={styles.profileParagraph}>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
