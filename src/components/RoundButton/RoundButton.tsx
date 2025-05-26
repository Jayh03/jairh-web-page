import React from 'react';
import Image from 'next/image';
import styles from './round-button.module.scss';
import { IRoundButtonTwo } from '@/interfaces/components/RoundButton/RoundButton';

export default function RoundButton({
	onClick,
	disabled = false,
	icon
}: IRoundButtonTwo) {
	return (
		<button
			className={styles['round-button']}
			disabled={disabled}
			onClick={onClick}>
			<Image src={icon} alt={icon} height={24} width={24} unoptimized />
		</button>
	);
}
