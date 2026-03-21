import React from 'react';

export type ProfileBadge = {
	text: string;
	icon?: React.ReactElement;
};

export type ProfileCardProps = {
	initials: string;
	status: string;
	name: string;
	badges: ProfileBadge[];
	paragraphs: (accentClassName: string) => React.ReactNode[];
};

export type StatVariant = 'blue' | 'pink' | 'orange' | 'yellow';

export type StatItem = {
	key: string;
	icon: React.ReactElement;
	variant: StatVariant;
	value: string;
	label: string;
};

export type ValueItem = {
	key: string;
	icon: React.ReactElement;
	title: string;
	description: string;
};
