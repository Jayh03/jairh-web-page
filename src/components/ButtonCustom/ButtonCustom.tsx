import Link from 'next/link';
import { IButtonCustom } from '@/interfaces';
import IconButton from './IconButton/IconButton';

import styles from './button-custom.module.scss';

export default function ButtonCustom({
	onTarget,
	title,
	url,
	icon,
	colorTitle,
	colorBackground,
	isBorder,
	variant = 'default'
}: IButtonCustom) {
	const isCv = variant === 'cv';
	const isTransparent = !isCv && colorBackground === 'transparent';
	const hasBorder = isCv || isBorder || isTransparent;

	const foregroundColor =
		colorTitle ?? (isCv || isTransparent || isBorder ? '#00FF00' : '#000000');

	const buttonStyle = {
		background: isTransparent
			? 'transparent'
			: (colorBackground ?? (isCv ? '#000000' : '#00FF00')),
		border: hasBorder ? `2px solid #00FF00` : 'none',
		['--btn-fg' as any]: foregroundColor
	};

	return (
		<Link
			href={url}
			target={onTarget ? '_blank' : undefined}
			rel={onTarget ? 'noopener noreferrer' : undefined}
			className={`${styles.button} ${isTransparent ? styles.transparent : ''} ${
				isCv ? styles.cv : ''
			}`}
			style={buttonStyle}>
			<IconButton icon={icon} />
			<span className={styles.title}>{title}</span>
		</Link>
	);
}
